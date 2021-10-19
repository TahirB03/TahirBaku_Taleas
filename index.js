const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded())
app.use(express.json())

const uri = "mongodb+srv://tao3:1234@cluster0.48kz0.mongodb.net/TaleasTask1?retryWrites=true&w=majority"
mongoose.connect(uri,{
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
  ()=>console.log("Connection to database established")
).catch(error=>{
  console.log("Connection didn't succeded");
})

let allStudents= [{
  name: "Renaldo",
  age: 22
}]

app.post('/students', (req, res, next) => {
  console.log(req.body)
  const newStudent = req.body
  allStudents.push(newStudent)
  res.status(200).json(newStudent)
})

app.get('/students', (req, res, next) => {
  res.status(200).json(allStudents)
})


const port = 5000

app.use(express.json())
app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
})
