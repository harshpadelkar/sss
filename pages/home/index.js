import { Fragment } from "react";
import { useSelector } from "react-redux";
import NoMatches from "../../components/Matches/NoMatches";
import PendingMatches from "../../components/Matches/PendingMatches";

const EditMatches = (props) => {
  const matches = useSelector((state) => state.matches.matches);

  return (
    <Fragment>
      {matches.length === 0 ? (
        <NoMatches
          message="No Matches"
          description="Start a match and play the tournment."
          button="Start Match"
        />
      ) : (
        <PendingMatches />
      )}
    </Fragment>
  );
};

export default EditMatches;
