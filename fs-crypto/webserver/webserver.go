package webserver

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	cachestorage "github.com/rogermachado01/financialapp/fs-crypto/cache"
)

type WebServer struct {
	storage *cachestorage.CacheStorage
}

func (w *WebServer) Server(storage *cachestorage.CacheStorage) {
	// Init web server
	e := echo.New()

	storage.Init()
	// Init blockchain
	w.storage = storage

	// Add api endpoints
	e.GET("/blocks", w.blocks)
	e.POST("/mine", w.mine)

	e.Logger.Fatal(e.Start(":8585"))
}

func (w *WebServer) blocks(c echo.Context) error {
	w.storage.GetBlock()
	return c.JSON(http.StatusOK, "")
}

type MineDTO struct {
	Data string `json:"data" form:"data" query:"data"`
}

func (w *WebServer) mine(c echo.Context) error {
	m := new(MineDTO)
	if err := c.Bind(m); err != nil {
		return errors.New("Empty body")
	}

	w.storage.AddBlock([]byte(m.Data))

	fmt.Println("")

	return c.JSON(http.StatusOK, m)
}
