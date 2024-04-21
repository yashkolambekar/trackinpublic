import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "DSA",
    identifier: nanoid(),
    color: "bg-[#00ff00]",
    isActive: false,
    datapoints: [
    ],
  },
  {
    name: "0-100",
    identifier: nanoid(),
    color: "bg-[#00ffff]",
    isActive: false,
    datapoints: [
    ],
  },
  {
    name: "Python",
    identifier: nanoid(),
    color: "bg-[#ff00ff]",
    isActive: false,
    datapoints: [
    ],
  },
  {
    name: "PMO",
    identifier: nanoid(),
    color: "bg-[#892ff0]",
    isActive: false,
    datapoints: [
    ],

  },


  {
    name: "DSA",
    identifier: nanoid(),
    color: "bg-[#00ff00]",
    isActive: false,
    datapoints: [
    ],
  },
  {
    name: "0-100",
    identifier: nanoid(),
    color: "bg-[#00ffff]",
    isActive: false,
    datapoints: [
    ],
  },
  {
    name: "Python",
    identifier: nanoid(),
    color: "bg-[#ff00ff]",
    isActive: false,
    datapoints: [
    ],
  },
  {
    name: "PMO",
    identifier: nanoid(),
    color: "bg-[#892ff0]",
    isActive: false,
    datapoints: [
    ],

  },




];

// const initialState = [
//   {
//     name: "DSA",
//     identifier: nanoid(),
//     color: "bg-[#00ff00]",
//     isActive: false,
//     datapoints: [
//       { start: 38942, end: 51526 },
//       { start: 57303, end: 70430 },
//       { start: 79457, end: 86107 },
//       { start: 86131, end: 86339 },
//       { start: 86344, end: 86379 },
//     ],
//   },
//   {
//     name: "0-100",
//     identifier: nanoid(),
//     color: "bg-[#00ffff]",
//     isActive: true,
//     datapoints: [
//       { start: 21961, end: 81162 },
//       { start: 85495, end: 86173 },
//       { start: 86309, end: 86327 },
//       { start: 86348, end: 86351 },
//       { start: 86399, end: 86400 },
//     ],
//   },
//   {
//     name: "Python",
//     identifier: nanoid(),
//     color: "bg-[#ff00ff]",
//     isActive: false,
//     datapoints: [
//       {start: 21961, end: 81162 },
//       { start: 85495, end: 86173 },
//     ],
//   },
//   {
//     name: "PMO",
//     identifier: nanoid(),
//     color: "bg-[#892ff0]",
//     isActive: true,
//     datapoints: [
//       { start: 21961, end: 81162 },
//       { start: 85495, end: 86173 },
//       { start: 86309, end: 86327 },
//       { start: 86348, end: 86351 },
//       { start: 86399, end: 86400 },
//     ],

//   }
// ];

const FUNaddNewTask = (state, action) => {
  const newTask = {
    name: action.payload.name,
    color: action.payload.color,
    datapoints: [],
  };
  state.activity.push(newTask);
};

const FUNtoggleActive = (state, action) => {
  const indexOfObject = state.findIndex(
    (x) => x.identifier === action.payload.identifier
  );
  if (indexOfObject >= 0) {
    state[indexOfObject].isActive = state[indexOfObject].isActive
      ? false
      : true;
    const dt = new Date();
    const secs = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
    if (state[indexOfObject].isActive) {
      const newDatapoint = {
        start: secs,
      };
      state[indexOfObject].datapoints.push(newDatapoint);
    } else {
      state[indexOfObject].datapoints[
        state[indexOfObject].datapoints.length - 1
      ]["end"] = secs;
    }
  }
};

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    addNewTask: FUNaddNewTask,
    toggleActive: FUNtoggleActive,
  },
});

export const { addNewTask, toggleActive } = activitySlice.actions;
export default activitySlice.reducer;
