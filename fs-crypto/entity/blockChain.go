package entity

import (
	json "encoding/json"
	"fmt"
)

type BlockChain struct {
	Blocks []Block
}

func (b *BlockChain) Init() {
	genBlock := Block{}
	genBlock.Genesis()
	b.Blocks = append(b.Blocks, genBlock)
}

func (b *BlockChain) AddBlock(data []byte) {
	newBlock := Block{}
	newBlock.MineBlock(b.Blocks[len(b.Blocks)-1], data)
	b.Blocks = append(b.Blocks, newBlock)
}

func (b *BlockChain) StringfyBlocks() (string, error) {

	str, err := json.Marshal(b.Blocks)

	return string(str), err
}

func (b *BlockChain) IsValid(blockChain BlockChain) bool {

	if b.Blocks[0].Hash != blockChain.Blocks[0].Hash {
		return false
	}

	for i, block := range blockChain.Blocks {
		if i == 0 {
			continue
		}

		lastBlock := b.Blocks[i-1]
		if lastBlock.Hash != block.LastHash ||
			block.Hash != BlockHash(block) {
			return false
		}
	}

	return true
}

func (b *BlockChain) ReplaceChain(newChain BlockChain) {

	if len(newChain.Blocks) <= len(b.Blocks) {
		fmt.Println("Received chain is no longer than current chain")
		return
	} else if !b.IsValid(newChain) {
		fmt.Println("Received chain is not a valid chain")
		return
	}

	b.Blocks = newChain.Blocks
}
