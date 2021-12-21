
import {UserSchema} from "../model/user.js";


//create student

const createUser= async(req,res)=>{
    try {
        const newUser= await UserSchema.create({...req.body})
        return res.status(201).json({
            staus: true,
            message: 'user has been created',
            data: newUser
        })

    }catch (error){
        console.log('failed to crate user', error)
}
}
//get Users

const getAllUsers= async(req, res)=>{

try{
    const users=await UserSchema.find({})
        return res.status(200).json({
            staus: true,
            message: 'users fetch successfully',
            body: users
        })
        
    } catch(error){
        console.log('failed to fetch users', error)
    }
    }
    export {
        getAllUsers,
        createUser,
    }