import genToken from "../config/token.js"
import User from "../models/user.model.js"


const getCookieOptions = () => {
    const isProduction = process.env.NODE_ENV === "production"
    return {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}

export const googleAuth = async (req,res) => {
    try {
        const {name , email} = req.body
        if (!email || !name) {
            return res.status(400).json({message:"name and email are required"})
        }
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name , 
                email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token" , token , getCookieOptions())

        return res.status(200).json(user)



    } catch (error) {
        return res.status(500).json({message:`Google auth error ${error}`})
    }
    
}

export const guestAuth = async (req,res) => {
    try {
        const guestEmail = `guest_${Date.now()}@interviewiq.local`
        const user = await User.create({
            name: "Guest User",
            email: guestEmail
        })

        const token = await genToken(user._id)
        res.cookie("token", token, getCookieOptions())

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`Guest auth error ${error}`})
    }
}

export const logOut = async (req,res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
         return res.status(500).json({message:`Logout error ${error}`})
    }
    
}