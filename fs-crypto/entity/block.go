package entity

import (
	"bytes"
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
	Data      bytes.Buffer
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
	fmt.Println(block)
	return block
}

func (b *Block) Genesis() {
	var byt bytes.Buffer // A Buffer needs no initialization.
	byt.Write([]byte("HELLO SF COIN"))

	b.Data = byt
	b.Timestamp = time.Now().UnixNano()
	b.Hash = sha256.Sum256([]byte("sdasdas-123as-23asd"))
	b.LastHash = sha256.Sum256([]byte("asdcasd-adc2"))
}

func (b *Block) MineBlock(lastBlock Block, data bytes.Buffer) {
	timestamp := time.Now().UnixNano()
	lastHash := lastBlock.Hash
	hash := createHash(timestamp, data, lastHash)

	b.LastHash = lastHash
	b.Hash = hash
	b.Timestamp = timestamp
	b.Data = data

}

func createHash(timestamp int64, data bytes.Buffer, lastHash [32]byte) [32]byte {

	lastHashString := hex.EncodeToString(lastHash[:])

	s := []string{strconv.FormatInt(timestamp, 10), lastHashString, data.String()}

	hash := sha256.Sum256([]byte(strings.Join(s, "-")))
	return hash

}
