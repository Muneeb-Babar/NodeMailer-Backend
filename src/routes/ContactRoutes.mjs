import sendProposal from "../controllers/ContactController.mjs"

const contactRoute=async(app)=>{
    console.log("hit");
    
    app.post('/sendProposal',sendProposal)
}

export default contactRoute