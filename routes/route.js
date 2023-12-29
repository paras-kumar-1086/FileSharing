import  express  from "express";
import {UploadImage , downloadImage} from "../controllers/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router() ;

router.post('/upload', upload.single('file') ,  UploadImage)
router.get('/file/:fileId', downloadImage);

export default router ; 