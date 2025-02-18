const mongoose = require('mongoose');

//mongoose hame help karra hai javascript ko monogo db ke database ke sath connnect
 //karne ke liye and here /test is our databasse
 
//mongoose.connect('mongodb://127.0.0.1:27017/test'); -> ye asyn data hai isliye isko asynchronous function me daldenge

main()
.then(() => {  //agar koi error na ho to ham then function se result ko print karwa sakte hai 
console.log("connection succesfull");
})
.catch(err => console.log(err)); //agar error aajae to 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// this is the Schema validations it is a actual way to write schemas 
const bookSchema = new mongoose.Schema({
    title : {
        type : String , 
        require : true ,//maatlab title ko to rakhna hi hai isme nahi to validation faiiled ho jaega 
    },
    author : {
        type : String,
        
    },
    price : {
        type : Number ,
    },

});

const Book = mongoose.model("Book",bookSchema);
let book1 = new Book ({
    title : "RD SHARMA",//agar manlo ham yaha pe title dalna bhuljae to validation failed naam ka error aa jaega 
    author : "shree ram",
    price : 200,
});
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});