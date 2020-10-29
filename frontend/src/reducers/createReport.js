import { CREATE_REPORT } from "../types";

const initState = {
  title: "",
  description: "",
};
export const createReport = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_REPORT:
      return {
        createReport: state.createReport.concat(action.payload),
      };
    default:
      return state;
  }
};
