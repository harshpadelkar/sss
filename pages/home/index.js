import { Fragment } from "react";
import NoMatches from "../../components/Matches/NoMatches";

const EditMatches = (props) => {
  return (
    <Fragment>
      <NoMatches
        message="No Matches"
        description="Start a match and play the tournment."
        button="Start Match"
      />
    </Fragment>
  );
};

export default EditMatches;
