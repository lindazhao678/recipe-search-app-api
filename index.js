const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    const q = req.query.q;

    const api = `${process.env.RECIPE_API_ROOTURL}/?type=public&q=${q}&app_id=e69c3227&app_key=${process.env.RECIPE_API_KEY}`;

    axios.get(api)
        .then((response) => {
            res.json(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () => console.log(`Server is running on ${port}`))