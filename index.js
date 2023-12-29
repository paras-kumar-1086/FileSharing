import  express  from "express";
import dotenv from  "dotenv";
import router from "./routes/route.js";
import DBconnection from "./database/db.js";
import cors from "cors";

dotenv.config();


const PORT = process.env.PORT || 3000;

const app = express() ;

app.use(cors());
app.use('/', router);

DBconnection() ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) 