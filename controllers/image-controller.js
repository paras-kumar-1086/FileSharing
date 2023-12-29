import fileModel from "../models/fileModel.js";

export const UploadImage = async  (req, res) => {

    const fileObj = {
        path: req.file.path ,
        name: req.file.originalname 
    }
    try{    
        const file = await fileModel.create(fileObj);
        res.status(200).json({ path: `http://localhost:8000/file/${file._id}`})
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).json({ error: error.message })
    }

}

 


export const downloadImage = async (req, res) => {
    try{
        const file = await fileModel.findById(req.params.fileId);

        file.downloadContent++ ;

        await file.save() ;

        res.download(file.path, file.name);
    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({error : error.message})
    }
}

 