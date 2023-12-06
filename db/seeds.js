import footballerData from './data/footballers.js'
import userData from './data/user.js'
import teamData from './data/team.js'

import mongoose from 'mongoose'
import 'dotenv/config'
import Footballer from '../models/footballer.js'
import User from '../models/user.js'
import Team from '../models/team.js'

// This function will:
// 1. Establish a connection to the database
// 2. We will clear out existing data in preparation to add our initial/dummy data
// 3. Add our footballerData into the the footballer collection
// 4. Close the connection to the database
async function seed() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('✅ Database connection established')

    const { deletedCount: footballerCount } = await Footballer.deleteMany()
    console.log(`❌ Deleted ${ footballerCount } footballers from the database`)
    const { deletedCount: userCount } = await User.deleteMany()
    console.log(`❌ Deleted ${userCount} users from the database`)
    const { deletedCount: teamCount } = await Team.deleteMany()
    console.log(`❌ Deleted ${teamCount} teams from the database`)


    const usersCreated = await User.create(userData)
    console.log(`🌱 Seeded ${usersCreated.length} users to the database`)

    const owenedTeams = teamData.map(team => {
      const randomUserIndex = Math.floor(Math.random() * usersCreated.length)
      return { ...team, owner: usersCreated[randomUserIndex]._id }
    })

    const teamsCreated = await Team.create(owenedTeams)
    console.log(`🌱 Seeded ${teamsCreated.length} teams to the database`)
    
    const footballersCreated = await Footballer.create(footballerData)
    console.log(`🌱 Seeded ${footballersCreated.length} footballers to the database`)

    await mongoose.connection.close()
    console.log('👋 Closed the connection to the database')

  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
    console.log('👋 Closed the connection to the database')
  }

}
seed()