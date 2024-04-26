const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3002

const { connection } = require("./db/db_config")

app.get('/', (req, res) => {
    connection.query(`SELECT * FROM movie_data ORDER by release_year DESC LIMIT 1`, (err, results) => {
        if (err) {
            console.log(`Error in query!`)
            res.send("Error in DB query!")
        }
        else {
            console.log(results)
            res.send(results)
        }
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
