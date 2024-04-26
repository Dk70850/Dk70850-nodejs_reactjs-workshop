const express = require('express')
const app = express()
const port = 3002

const { connection } = require("./db/db_config")

app.get('/', (req, res) => {
    let n1 = parseFloat(req.query.n1)
    let n2 = parseFloat(req.query.n2)
    let n3 = (n1+n2)
    res.send(`${n1} + ${n2} = <strong><i>${n3}</i>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
