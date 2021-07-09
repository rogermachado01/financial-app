package main

import (
	"fmt"
	"testing"

	"github.com/rogermachado01/financialapp/fs-crypto/entity"
)

func TestBlock(t *testing.T) {
	block := entity.Block{}
	block.Genesis()
	cb := block.Get()

	if cb.Timestamp < 0 {
		t.Errorf("Block Genesis not created")
		t.FailNow()
	}

	fmt.Println(" -> Block was generated successfully!")
	block.ToString()

	block.MineBlock(block, []byte("{as:as}"))

	if block.LastHash != cb.Hash {
		t.Errorf("Block not mined")
		t.FailNow()
	}

	fmt.Println(" -> Block was mined successfully!")
	block.ToString()

}
