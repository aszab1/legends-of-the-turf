import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// register
// Method: POST
// Path: '/register'
export const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome ${newUser.username}` })
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// login
// Method: POST
// Path: '/login'
export const login = async (req, res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    console.log(userToLogin)
    
    if (!userToLogin || !bcrypt.compareSync(req.body.password, userToLogin.password)) {
      throw new Error(!userToLogin ? 'Email not found' : 'Passwords don\'t match')

    }
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '7d' })
    // const teamsOfUser = userToLogin
    return res.status(202).json({ message: `logged in ${userToLogin.username}`, token: token})
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}


export const getProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.currentUser._id).populate('teamsCreated')
    return res.json(profile)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}