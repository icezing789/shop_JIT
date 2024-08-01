const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000
 
//database() configulation
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "123456789",
      database: "shopdee"      
    }
)
db.connect()
// //Middleware (body parser)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api/login", function(req,res){
  const {username, password} = req.body
  const sql = 'SELECT * FROM customer WHERE username = ? AND password = ?'
  db.query(sql, [username, password], function(err, result){
    if(err) throw err
 
    if(result.length > 0){
      let customer = result[0]
      customer['message'] = "เข้าสู่ระบบสำเร็จ"
      customer['status'] = true
      res.send(customer)
 
    }else{
      res.send({"message":"กรุณาระบุรหัสผ่านใหม่อีกครั้ง", "status":false})
    }
 
  })
})


app.get("/", function(req,res){
  res.send("hello world")
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})