import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SettingsIcon from "../../public/SettingsIcon";
import players from "../../Redux/reducers/players";
import CreateNewPlayerForm from "../PlayersData/CreateNewPlayerForm";
import Team from "../TeamsData/Team";
import StickyButton from "../UI/StickyButton";
import styles from "./EditTeamDetails.module.css";
import PlayersList from "./PlayersList";

const EditTeamDetails = (props) => {
  const playersObject = useSelector((state) => state.players);
  const teamPlayers = playersObject.players.filter(
    (player) => player.teamId === props.team.id
  );

  const [isShowForm, setIsShowForm] = useState(false);

  const showPlayerFormHandler = () => {
    setIsShowForm(!isShowForm);
  };

  return (
    <Fragment>
      {isShowForm && (
        <CreateNewPlayerForm
          showPlayerFormHandler={showPlayerFormHandler}
          team={props.team}
        />
      )}

      <div className={styles.container}>
        <div className={styles.players}>
          <div className={styles.header}>
            <div>
              <Team name={props.team.name} />
            </div>

            <div className={styles.status}>
              <SettingsIcon />
              <p>
                Matches Played: <span>0</span>
              </p>
              <p>
                Matches Won: <span>0</span>
              </p>
            </div>
          </div>

          {teamPlayers.length > 0 && (
            <ul className={styles.playerList}>
              {teamPlayers.map((player) => (
                <PlayersList
                  key={player.id}
                  id={player.id}
                  playerName={player.playerName}
                />
              ))}
            </ul>
          )}
        </div>

        <StickyButton onClick={showPlayerFormHandler}>Add Player</StickyButton>
      </div>
    </Fragment>
  );
};

export default EditTeamDetails;
