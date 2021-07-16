package main

import (
	"fmt"
	"net/http"
)

func main() {

	server := []string{":8080", ":8081"}
	ch := make(chan string)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello world"))
		ch <- r.Host
	})

	for i, s := range server {
		fmt.Println(s, i)
		go testServer(s, ch)
	}

	for s := range ch {
		fmt.Println(s)
	}

}

func testServer(p string, c chan string) {
	fmt.Println("linsten on ", p)
	http.ListenAndServe(p, nil)
	c <- "linsten on "
}
