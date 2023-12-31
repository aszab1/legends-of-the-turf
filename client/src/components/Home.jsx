import Fixtures from "./Fixtures";
import LeagueTable from "./LeagueTable";
import { useLoaderData } from "react-router-dom";

export default function Home() {

  const data = useLoaderData()
  console.log(data)
  const leagueTable = data.leagueTable.items[0].standings.tables[0].rows
  
  return (
    <>
      <div className="container-wrapper">
        <Fixtures />
        <LeagueTable leagueTable={leagueTable} />
      </div>
    </>
  )
}

