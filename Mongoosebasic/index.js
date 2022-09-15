const mongoose=require("mongoose");

const database=async()=>{
    const link= await mongoose.connect("mongodb://127.0.0.1:27017/Data")
    console.log("connect");

    var obj=new StudentModel({
        studentid:"fw16_331",
        phone:9876545678
    })

    const result= await obj.save()
    console.log(result)

}

database();

// Schecma 

const StudentData= mongoose.Schema({
    studentid:String,
    phone:Number

})


//Model

const StudentModel=mongoose.model("student",StudentData)