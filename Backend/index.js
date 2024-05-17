// our dependencies 
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// let us run the server.so its running,
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});

//let us create our database(mysql)
const db =mysql.createConnection({
    host:'localhost',
    post:3306,//specify the port here
    user:'root',
    password:'pass@1234',
    database:'project',
})

//let us now create a route to the server that will register a user.

app.post('/register', (req, res)=>{
    //we need to get variables sent from the form
    const sentEmail =req.body.Email
    const sentUserName =req.body.UserName
    const sentPassword =req.body.Password

    //lets create sql statement to insert the user to the database table user
    const SQL = 'INSERT INTO user(email, username, password) VALUES(?,?,?)'//we are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]

    //query to execute the  sql statement stated above
    db.query(SQL, Values,(err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message:'user added'})
            //let try and see
            //user has not been submitted, we need to use Express and cors
            //successful
        }
    })
})

//Now we need to login with these credentiels from a regitered user
//lets create another route 
app.post('/login',(req, res)=>{
    //we nee to get variables sent from the form
    const sendloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword

    //lets create sql statement to insert the user to the database table user
    const SQL = 'SELECT*FROM user WHERE username =? && password =?'
    //we are going to enter these values through a variable
    const Values = [sendloginUserName, sentloginPassword]

    //query to execute the sql statement started above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: `Credentials Don't match!`})
            //this should be good, lets try to login.
        }
    })
})