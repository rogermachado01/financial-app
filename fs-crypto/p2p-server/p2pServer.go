package p2pserver

import (
	"context"
	"encoding/binary"
	"flag"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/libp2p/go-libp2p"
	"github.com/libp2p/go-libp2p-core/host"
	"github.com/libp2p/go-libp2p-core/network"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p/p2p/discovery"
	"github.com/multiformats/go-multiaddr"

	cachestorage "github.com/rogermachado01/financialapp/fs-crypto/cache"
)

/* Base code from https://dev.to/feliperosa/getting-started-with-libp2p-in-go-4hoa write by Felipe Rosa */

type Server struct {
	storage *cachestorage.CacheStorage
}

const protocolID = "/example/1.0.0"
const discoveryNamespace = "example"

func (sv *Server) Init(storage *cachestorage.CacheStorage) {
	// Add -peer-address flag
	peerAddr := flag.String("peer-address", "", "peer address")
	flag.Parse()

	// Create the libp2p host.
	//
	// Note that we are explicitly passing the listen address and restricting it to IPv4 over the
	// loopback interface (127.0.0.1).
	//
	// Setting the TCP port as 0 makes libp2p choose an available port for us.
	// You could, of course, specify one if you like.
	host, err := libp2p.New(context.Background(), libp2p.ListenAddrStrings("/ip4/127.0.0.1/tcp/0"))
	if err != nil {
		panic(err)
	}
	defer host.Close()

	// Print this node's addresses and ID
	fmt.Println("Addresses:", host.Addrs())
	fmt.Println("ID:", host.ID())

	// Setup a stream handler.
	//
	// This gets called every time a peer connects and opens a stream to this node.
	host.SetStreamHandler(protocolID, func(s network.Stream) {
		go sendChain(s)
		go readCounter(s)
	})

	// Setup peer discovery.
	discoveryService, err := discovery.NewMdnsService(
		context.Background(),
		host,
		time.Second,
		discoveryNamespace,
	)
	if err != nil {
		panic(err)
	}
	defer discoveryService.Close()

	discoveryService.RegisterNotifee(&discoveryNotifee{h: host})

	// If we received a peer address, we should connect to it.
	if *peerAddr != "" {
		// Parse the multiaddr string.
		peerMA, err := multiaddr.NewMultiaddr(*peerAddr)
		if err != nil {
			panic(err)
		}
		peerAddrInfo, err := peer.AddrInfoFromP2pAddr(peerMA)
		if err != nil {
			panic(err)
		}

		// Connect to the node at the given address.
		if err := host.Connect(context.Background(), *peerAddrInfo); err != nil {
			panic(err)
		}
		fmt.Println("Connected to", peerAddrInfo.String())

		// Open a stream with the given peer.
		s, err := host.NewStream(context.Background(), peerAddrInfo.ID, protocolID)
		if err != nil {
			panic(err)
		}

		// Start the write and read threads.
		go sendChain(s)
		go readCounter(s)
	}

	sigCh := make(chan os.Signal)
	signal.Notify(sigCh, syscall.SIGKILL, syscall.SIGINT)
	<-sigCh
}

func sendChain(s network.Stream) {
	// var counter uint64

	for {
		<-time.After(time.Second)
		/* counter++

		err := binary.Write(s, binary.BigEndian, counter)
		if err != nil {
			panic(err)
		} */
	}
}

func readCounter(s network.Stream) {
	for {
		var counter uint64

		err := binary.Read(s, binary.BigEndian, &counter)
		if err != nil {
			panic(err)
		}

		fmt.Printf("Received %d from %s\n", counter, s.ID())
	}
}

type discoveryNotifee struct {
	h host.Host
}

func (n *discoveryNotifee) HandlePeerFound(peerInfo peer.AddrInfo) {
	fmt.Println("found peer", peerInfo.String())
}
