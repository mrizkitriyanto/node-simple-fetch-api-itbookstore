import fetch from "node-fetch";
import express from 'express';

var app = express();


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


app.get('/search/:q', async (req, res) => {
    const url = `https://api.itbook.store/1.0/search/${req.params.q}`;
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