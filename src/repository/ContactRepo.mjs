import ContactModel from '../model/ContactModel.mjs'

const SaveContact=async(data)=>{
    try{
        const result=await ContactModel.create(data)
        return result
    }
    catch(err){
        console.log(err)
    }
}

export default SaveContact