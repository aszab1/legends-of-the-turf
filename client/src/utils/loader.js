import { axiosFPL, axiosChelsea } from "./helpers/common"
import axios from "axios"
//fetch userteam from database

export async function getMyTeam(teamId){
  const res = await axios.get(`/api/myteam/${teamId}`)
  return res.data
}

export async function  getSinglePlayer(id){
  const res = await fetch(`/api/players/${id}`)
  return res.json()
}

export async function getAllSeedDataPlayers(){
  const res = await fetch('/api/players')
  return res.json()
}

export async function getAllThirdPartyFootballers() {
  const playersFromThirdParty = await axiosFPL.get('/rest/bootstrap-static/')
  return playersFromThirdParty
}

export async function FixturesAndLeagueTable(){
  const [ fixturesRes, teamsRes, leagueRes ] = await Promise.all([
    axiosFPL.get('/rest/fixtures/?future=1'),
    axiosFPL.get('/rest/bootstrap-static/'), 
    axiosChelsea.get('/plt/fixtures/league-table?entryId=30EGwHPO9uwBCc75RQY6kg')
  ])
  return {
    fixtures: fixturesRes.data,
    teams: teamsRes.data.teams,
    leagueTable: leagueRes.data,
  }
}
