package main

import (
	"testing"

	"github.com/rogermachado01/financialapp/fs-crypto/entity"
)

func TestBlockGenesis(t *testing.T) {
	block := entity.Block{}
	block.Genesis()
	cb := block.Get()
	if cb.Timestamp < 0 {
		t.Errorf("Block not created")
	}

}
