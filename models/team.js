import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  players: [],
  owner: { type: mongoose.ObjectId, ref: 'User', required: true },
})

export default mongoose.model('Team', teamSchema)