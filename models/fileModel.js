import mongoose from  'mongoose' ;

const fileSchema= new mongoose.Schema({
    path: {
        type: String , 
        required: true 
    },
    name: {
        type: String , 
        required: true 
    }, 
    downloadContent: {
        type: Number , 
        required: true, 
        default: 0 // because we are not passing it from frontend  
    }
})

const fileModel = mongoose.model('file' , fileSchema);//'file' is name of collection in mongodb

export default fileModel ;