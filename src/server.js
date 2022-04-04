import fetch from "node-fetch";
import express from 'express';

var app = express();

// GET New Books -  Mendapatkan semua buku baru
// Endpoint: GET /new
// Status code 200
// body:
//    - error : "jumlah error"
//    - total : "jumlah total"
//    - books: books
app.get('/new', async (req, res) => {
    const url = `https://api.itbook.store/1.0/new`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "error",
                error: e,
            });
        });

        res.json(response);
});

// GET Search Books -  Mencari buku berdasar judul, penulis, ISBN, atau keyword
// Endpoint: GET /search/{{ query }}/{{ page }}
// Status code 200
// body:
//    - error : "jumlah error"
//    - total : "jumlah total"
//    - page  : "halaman ke"
//    - books: books
app.get('/search/:query/:page?', async (req, res) => {
    if (typeof req.params.page === 'undefined') {
        var url = `https://api.itbook.store/1.0/search/${req.params.query}/1`;
    }
    else {
        var url = `https://api.itbook.store/1.0/search/${req.params.query}/${req.params.page}`;
    }

    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "error",
                error: e,
            });
        });

        res.json(response);
});

// GET Books -  Mendapatkan detail buku dengan ISBN
// Endpoint: GET /books/{{ query ISBN - 13 digit }}
// Status code 200
// body:
//    - books: books
app.get('/books/:q', async (req, res) => {
    const url = `https://api.itbook.store/1.0/books/${req.params.q}`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "error",
                error: e,
            });
        });

        res.json(response);
});

app.listen(3000);
console.log("The server is now running on port 3000.");