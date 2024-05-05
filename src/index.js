import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server running at port: ${process.env.PORT}`);
    })
    app.on("error", (err) => {
        console.log(`Error: ${err}`);
        throw err;
    })
})
.catch((err) => {
    console.log("Mongo Db connection failed !!!", err);
});