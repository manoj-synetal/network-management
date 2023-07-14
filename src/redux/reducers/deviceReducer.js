import { GET_DEVICE_SUCCESS, LIST_DEVICES_SUCCESS } from "../actions";

const initialState = {
  loading: false,
  list_devices: [],
  get_device: [],
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get All Device List
    case LIST_DEVICES_SUCCESS:
      return { ...state, list_devices: action.payload };

    // Get Device
    case GET_DEVICE_SUCCESS:
      return { ...state, get_device: action.payload };

    default:
      return state;
  }
};

export default deviceReducer;
