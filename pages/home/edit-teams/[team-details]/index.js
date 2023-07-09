import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditTeamDetails from "../../../../components/EditTeamDetails/EditTeamDetails";

const TeamDetails = (props) => {
  const [teamData, setTeamData] = useState({ name: "" });
  const router = useRouter();
  const teams = useSelector((state) => state.teams);

  const teamId = router.query["team-details"];

  useEffect(() => {
    if (teamId) {
      const teamObj = teams.teams.find((team) => team.id === teamId);
      setTeamData(teamObj);
      console.log("Updated");
    }
  }, [teamId, teams]);

  return <EditTeamDetails team={teamData} />;
};

export default TeamDetails;
