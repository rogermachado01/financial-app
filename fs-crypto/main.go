package main

import (
	"fmt"
	cachestorage "github.com/rogermachado01/financialapp/fs-crypto/cache"
	entity "github.com/rogermachado01/financialapp/fs-crypto/entity"
	p2pserver "github.com/rogermachado01/financialapp/fs-crypto/p2p-server"
	webserver "github.com/rogermachado01/financialapp/fs-crypto/webserver"
	"os"
)

func main() {
	if os.Getenv("SV") == "NET" {
		fmt.Println("Initializing blockchain and p2p network...")
		blockchain := entity.BlockChain{}
		blockchain.Init()

		storage := cachestorage.CacheStorage{}
		storage.InitBlockChain(&blockchain)

		p2p := p2pserver.Server{}
		p2p.Init(&storage)
	}

	if os.Getenv("SV") == "API" {
		fmt.Println("Initializing API...")
		storage := cachestorage.CacheStorage{}
		s := webserver.WebServer{}
		s.Server(&storage)
	}

}
