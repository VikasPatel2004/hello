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
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : "String",
    age : Number,
    email : "String",

});

const User = mongoose.model("User",userSchema);

const User1 = new User ({
    name : "vikas",
    age : 17,
    email : "vp00552850@gmail.com",
});

//User1.save(); ye ek async function hai to ham iske sath promoises bhi daal saktee hai 

User1
.save()
.then((res)=> {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

//find function bhi ham ham thenable form me use karte hai kyoki 
//model.find hamesha hame ek query deta hai 
// User.find({age:{$gt :16}}).then((res)=>{
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//now i have to update an user so we can do this by model.UpdateOne()
//But now we will seee how to find and update an user 

User.findOneAndUpdate({name:"vikas"},{age:18},{new:true})//by doing new to true we can get new updated value in terminal
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
