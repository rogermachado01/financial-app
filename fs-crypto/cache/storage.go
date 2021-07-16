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
	nodeId     string
}

func (c *CacheStorage) InitBlockChain(blockchain *entity.BlockChain) {

	db, err := badger.Open(badger.DefaultOptions("").WithInMemory(true))
	if err != nil {
		log.Fatal(err)
	}

	// defer db.Close()

	c.db = db

	err = c.GetBlock()

	if err.Error() == "Key not found" {
		fmt.Println("Key not found")
		blockchain.Init()
		c.blockchain = blockchain
	}

	fmt.Println(c.blockchain)

	err = c.db.Update(func(txn *badger.Txn) error {

		str, err := c.blockchain.StringfyBlocks()
		if err != nil {
			return err
		}

		txn.Set([]byte("block"), []byte(str))

		fmt.Println("updated", str)
		return nil
	})

	if err != nil {
		log.Fatal(err)
	}
}

func (c *CacheStorage) Init() {
	// Open the Badger database located in the /tmp/badger directory.
	// It will be created if it doesn't exist.
	db, err := badger.Open(badger.DefaultOptions("").WithInMemory(true))

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

	err := c.db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte("block"))

		if err != nil {
			return err
		}

		err = item.Value(func(val []byte) error {
			// Accessing val here is valid.
			fmt.Println(val)
			/* c.blockchain.Blocks = json.Unmarshal(val, &c.blockchain.Blocks); err != nil {
				log.Fatal(err)
			} */
			return nil
		})

		if err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		return err
	}

	return nil
}
