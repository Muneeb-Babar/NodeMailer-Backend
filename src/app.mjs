import express from 'express'
import cros from 'cors'
import { PORT } from './config/envoirment.mjs'
import contactRoute from './routes/ContactRoutes.mjs';
import db from './config/db.mjs'


const app=express();
app.use(cros());
app.use(express.json());
contactRoute(app)


const startServer=()=>{

    app.get('/',(req,res)=>{
        res.send('Server is connected')
    })
    db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })

  
    
}

export default startServer