const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3000

const { connection } = require("./db/db_config")


app.get('/', (req, res) => {
    let user_Input = req.query.term
    connection.query(`SELECT * FROM movie_data WHERE title like ?`,[`${user_Input}%`], (err, results) => {
    //connection.query(`SELECT * FROM movie_data WHERE language  = '${user_Input}'`,(err,results)=>{
    //connection.query(`DELETE FROM movie_data where language LIKE = ?`,[user_Input],(err,results)=>{    
        if(err){
            console.log(`Error in query!`)
            res.send("Error in DB query!")
        }
        else{
            console.log(results)
            res.send(results)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})