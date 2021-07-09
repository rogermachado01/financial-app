package entity

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"strconv"
	"strings"
	"time"
)

type Block struct {
	Timestamp int64
	Hash      [32]byte
	LastHash  [32]byte
	Data      []byte
}

func (b *Block) ToString() {

	fmt.Printf("{\n timestamp: %t \n hash: %h \n data: %d \n lastHash: %l \n } \n",
		strconv.FormatInt(b.Timestamp, 10),
		hex.EncodeToString(b.Hash[:]),
		b.Data,
		hex.EncodeToString(b.LastHash[:]))
}

func (b *Block) Get() Block {
	block := Block{}

	block.Timestamp = b.Timestamp
	block.Data = b.Data
	block.Hash = b.Hash
	block.LastHash = b.LastHash
	return block
}

func (b *Block) Genesis() {
	b.Data = []byte("HELLO SF COIN")
	b.Timestamp = time.Now().UnixNano()
	b.Hash = sha256.Sum256([]byte("sdasdas-123as-23asd"))
	b.LastHash = sha256.Sum256([]byte("asdcasd-adc2"))
}

func (b *Block) MineBlock(lastBlock Block, data []byte) {
	timestamp := time.Now().UnixNano()
	lastHash := lastBlock.Hash
	hash := createHash(timestamp, data, lastHash)

	b.LastHash = lastHash
	b.Hash = hash
	b.Timestamp = timestamp
	b.Data = data

}

func createHash(timestamp int64, data []byte, lastHash [32]byte) [32]byte {

	lastHashString := hex.EncodeToString(lastHash[:])
	dataToString := string(data[:])
	s := []string{strconv.FormatInt(timestamp, 10), lastHashString, dataToString}

	hash := sha256.Sum256([]byte(strings.Join(s, "-")))
	return hash

}

func BlockHash(block Block) [32]byte {
	hash := createHash(block.Timestamp, block.Data, block.LastHash)
	return hash
}
