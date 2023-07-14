import axios from "axios";
import { toast } from "react-hot-toast";
import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from ".";

export const authLogin = (payload, callBack) => async (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const response = await axios.post(payload);
    const { token, message, user } = response.data;
    dispatch({ type: LOG_IN_SUCCESS });

    toast.success(message);
    localStorage.setItem("AccessToken", token);
    localStorage.setItem("Admin", JSON.stringify(user));

    callBack();
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: LOG_IN_FAIL });
    toast.error(message);
  }
};
