import { toast } from "react-hot-toast";
import {
  ADD_DEVICE,
  ADD_DEVICE_FAIL,
  ADD_DEVICE_SUCCESS,
  DELETE_DEVICE,
  DELETE_DEVICE_FAIL,
  DELETE_DEVICE_SUCCESS,
  GET_DEVICE,
  GET_DEVICE_FAIL,
  GET_DEVICE_SUCCESS,
  LIST_DEVICES,
  LIST_DEVICES_FAIL,
  LIST_DEVICES_SUCCESS,
} from ".";
import { API } from "../../utils/interceptors";
import { devices_endpoint } from "../../utils/endpoints";

// get all devices
export const getAllDevices = () => async (dispatch) => {
  dispatch({ type: LIST_DEVICES });
  try {
    const response = await API.get(devices_endpoint);
    const { devices } = response.data;
    dispatch({ type: LIST_DEVICES_SUCCESS, payload: devices });
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: LIST_DEVICES_FAIL });
    toast.error(message);
  }
};

// add device
export const addDevice = (payload) => async (dispatch) => {
  dispatch({ type: ADD_DEVICE });
  try {
    const response = await API.post(devices_endpoint, payload);
    const { message } = response.data;
    dispatch({ type: ADD_DEVICE_SUCCESS });
    toast.success(message);
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: ADD_DEVICE_FAIL });
    toast.error(message);
  }
};

// get device
export const getDevice = (hostname) => async (dispatch) => {
  dispatch({ type: GET_DEVICE });
  try {
    const response = await API.get(`${devices_endpoint}/${hostname}`);
    const { devices } = response.data;
    dispatch({ type: GET_DEVICE_SUCCESS, payload: devices });
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: GET_DEVICE_FAIL });
    toast.error(message);
  }
};

// delete device
export const deleteDevice = (hostname) => async (dispatch) => {
  dispatch({ type: DELETE_DEVICE });
  try {
    const response = await API.delete(`${devices_endpoint}/${hostname}`);
    const { message } = response.data;
    dispatch({ type: DELETE_DEVICE_SUCCESS });
    toast.success(message);
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: DELETE_DEVICE_FAIL });
    toast.error(message);
  }
};
