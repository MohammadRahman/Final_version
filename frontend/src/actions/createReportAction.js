import { CREATE_REPORT } from "../types";
// import { v4 as uuidv4 } from "uuid";
// uuidv4();
import uuid from "react-uuid";

export const createReport = ({ title, description }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: CREATE_REPORT,
      payload: {
        id: uuid(),
        title,
        description,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
