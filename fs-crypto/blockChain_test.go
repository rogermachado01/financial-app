package main

import (
	"fmt"
	"reflect"
	"testing"

	"github.com/rogermachado01/financialapp/fs-crypto/entity"
)

func TestBlockChain(t *testing.T) {
	fmt.Println(" ---- BlockChain Tests ----")
	blockChain := entity.BlockChain{}
	blockChain.Init()

	if len(blockChain.Blocks) < 0 {
		t.Errorf("Blockchain not created")
		t.FailNow()
	}
	fmt.Println(" -> BlockChain was initiated successfully!")

	genBlock := entity.Block{}
	genBlock.Genesis()
	if blockChain.Blocks[0].Hash != genBlock.Hash {
		t.Errorf("First block in blockchain was not created")
		t.FailNow()
	}

	fmt.Println(" -> First block in BlockChain was initiated successfully!")

}

func TestValidationOfBlockChain(t *testing.T) {
	fmt.Println(" ---- BlockChain validation Tests ----")
	b1 := entity.BlockChain{}
	b2 := entity.BlockChain{}

	b1.Init()
	b2.Init()

	b2.AddBlock([]byte("{teste:teste}"))

	if !b1.IsValid(b2) {
		t.Errorf("Blockchain is not valid")
		t.FailNow()
	}
	fmt.Println(" -> BlockChain is valid!")

	b2.Blocks[0].Data = []byte("Corrupted Data")

	if !b1.IsValid(b2) {
		t.Errorf("Blockchain corrupt data validation failed")
		t.FailNow()
	}

	fmt.Println(" -> BlockChain corrupted data validation success!")

}

func TestBlockchainReplace(t *testing.T) {
	fmt.Println(" ---- BlockChain Replace Tests ----")
	b1 := entity.BlockChain{}
	b2 := entity.BlockChain{}

	b1.Init()
	b2.Init()

	b2.AddBlock([]byte("new data"))

	b1.ReplaceChain(b2)

	if !reflect.DeepEqual(b1, b2) {
		t.Errorf("Blockchain replacement failed")
		t.FailNow()
	}
	fmt.Println(" -> BlockChain replecement test success!")

	b1.AddBlock([]byte("new data 1"))

	b1.ReplaceChain(b2)

	if reflect.DeepEqual(b1, b2) {
		t.Errorf("Blockchain test with parallel replacement failed")
		t.FailNow()
	}

	fmt.Println(" -> BlockChain test with parallel replacement success!")
}
