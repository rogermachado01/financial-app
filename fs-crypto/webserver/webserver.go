package webserver

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/rogermachado01/financialapp/fs-crypto/entity"
)

type WebServer struct {
	blockchain entity.BlockChain
}

func (w *WebServer) Server() {
	// Init web server
	e := echo.New()

	// Init blockchain
	w.blockchain = entity.BlockChain{}
	w.blockchain.Init()

	// Add api endpoints
	e.GET("/blocks", w.blocks)
	e.POST("/mine", w.mine)

	e.Logger.Fatal(e.Start(":8585"))
}

func (w *WebServer) blocks(c echo.Context) error {
	return c.JSON(http.StatusOK, w.blockchain)
}

type MineDTO struct {
	Data string `json:"data" form:"data" query:"data"`
}

func (w *WebServer) mine(c echo.Context) error {
	m := new(MineDTO)
	if err := c.Bind(m); err != nil {
		return errors.New("Empty body")
	}

	w.blockchain.AddBlock([]byte(m.Data))

	fmt.Println(len(w.blockchain.Blocks))

	return c.JSON(http.StatusOK, m)
}
