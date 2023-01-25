import { createStore } from "redux";

const DUMMY_TEAMS = [
  {
    id: "t1",
    name: "Aslfa XI",
    players: ["Raju", "Kanju", "Praju"],
    logo: null,
  },
  {
    id: "t2",
    name: "Royal Chembur",
    players: ["Sakshi", "Rajesh", "Deodhar"],
    logo: null,
  },
  {
    id: "t3",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t4",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t5",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t6",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t7",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t8",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t9",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
  {
    id: "t10",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
];

const teamsReducer = (
  state = {
    teams: DUMMY_TEAMS,
  },
  action
) => {
  if (action.type === "ADD") {
    const updatedTeams = state.teams.concat(action.team);
    return { teams: updatedTeams };
  }

  if (action.type === "REMOVE") {
    const updatedTeams = state.teams.filter((team) => team.id !== action.id);
    return { teams: updatedTeams };
  }

  return state;
};

const store = createStore(teamsReducer);

export default store;
