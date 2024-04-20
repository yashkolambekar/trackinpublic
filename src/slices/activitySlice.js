import { createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Dummy name",
    color: "#00ff00",
    isActve: false,
    datapoints: [
      {
        start: 2839238,
        end: 3920329,
      },
      {
        start: 839238,
        end: 920329,
      },
      {
        start: 839238,
      },
    ],
  },
];

const FUNaddNewTask = (state, action) => {
    const newTask = {
        name: action.payload.name,
        color: action.payload.color,
        datapoints : []
    }
    state.push(newTask);
}


export const activitySlice = createSlice({
    name: "activiy",
    initialState,
    reducers : {
        addNewTask : FUNaddNewTask
    }
})

export const {addNewTask} = activitySlice.actions;
export default activitySlice.reducer;