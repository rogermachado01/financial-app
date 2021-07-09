package main

import (
	"github.com/rogermachado01/financialapp/fs-crypto/entity"
)

func main() {
	block := entity.Block{}
	block.Genesis()
	block.ToString()
}
