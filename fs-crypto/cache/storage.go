package cachestorage

import (
	"fmt"
	badger "github.com/dgraph-io/badger/v3"
	entity "github.com/rogermachado01/financialapp/fs-crypto/entity"
	"log"
)

type CacheStorage struct {
	blockchain *entity.BlockChain
	db         *badger.DB
}

func (c *CacheStorage) InitBlockChain(blockchain *entity.BlockChain) {
	// Open the Badger database located in the /tmp/badger directory.
	// It will be created if it doesn't exist.
	blockchain.Init()

	c.blockchain = blockchain

	db, err := badger.Open(badger.DefaultOptions("").WithInMemory(true))
	if err != nil {
		log.Fatal(err)
	}

	// defer db.Close()

	c.db = db

	c.db.Update(func(txn *badger.Txn) error {

		str, err := c.blockchain.StringfyBlocks()
		if err != nil {
			return err
		}
		txn.Set([]byte("block"), []byte(str))
		return nil
	})
}

func (c *CacheStorage) Init() {
	// Open the Badger database located in the /tmp/badger directory.
	// It will be created if it doesn't exist.
	db, err := badger.Open(badger.DefaultOptions("/tmp/badger"))

	if err != nil {
		log.Fatal(err)
	}

	c.db = db
	// defer db.Close()

}

func (c *CacheStorage) AddBlock(data []byte) error {
	fmt.Println("Add block")
	c.blockchain.AddBlock(data)

	err := c.db.Update(func(txn *badger.Txn) error {
		txn.Set([]byte("block"), []byte(data))
		return nil
	})

	return err
}

func (c *CacheStorage) GetBlock() error {
	// fmt.Println("Get block", c.blockchain.Blocks)

	err := c.db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte("block"))

		if err != nil {
			return err
		}

		err = item.Value(func(val []byte) error {
			// This func with val would only be called if item.Value encounters no error.

			// Accessing val here is valid.
			fmt.Printf("The answer is: %s\n", val)

			return nil
		})

		if err != nil {
			return err
		}

		fmt.Println("Item", item)
		return nil
	})

	return err
}
