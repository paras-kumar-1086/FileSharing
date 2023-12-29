import mongoose from "mongoose";


const DBconnection = async () =>  {

    const DB_URL = process.env.DB_URL ;
    try{
        await mongoose.connect(DB_URL);
        console.log("Db connected succesfully");
    }
    catch(error)
    {
        console.log("Error while connecting to db ", error);
    }
}

export default DBconnection ;  