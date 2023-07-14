import React, { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllDevices } from "../redux/actions/deviceAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  // useEffect
  useEffect(() => {
    dispatch(getAllDevices());
  }, [dispatch]);

  return (
    <div className="bg-white sticky top-0 left-0 shadow-sm flex items-center p-4">
      <div className=" flex gap-1.5 text-xs sm:text-sm sm:gap-3 items-center">
        <span className="font-medium">Device</span>
        <select
          name=""
          id=""
          className="text-xs appearance-none bg-primary outline-none text-white p-1 px-2.5 rounded-full"
        >
          <option value="">Cisco-192.168.11.2</option>
          <option value="12">Cisco-192.168.11.2</option>
          <option value="3">Cisco-192.168.11.2</option>
          <option value="4">Cisco-192.168.11.2</option>
        </select>
      </div>
      {/* Left Portion */}
      <div className="ml-auto sm:relative flex items-center gap-2 sm:gap-5">
        <div className="flex relative justify-center gap-1 sm:gap-2 items-center text-xs">
          <img
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="font-medium sm:flex hidden">John Doe</div>
          <button
            onClick={handleToggle}
            className="cursor-pointer"
            type="button"
          >
            {show ? (
              <BsChevronUp className="text-primary font-bold" />
            ) : (
              <BsChevronDown />
            )}
          </button>

          {/* Popup */}
          {show && (
            <div className="rounded p-3  gap-1.5 w-36 z-30 absolute top-14 right-3 bg-white text-xs  grid text-left shadow">
              <span className="cursor-pointer">My Profile</span>

              <span className="cursor-pointer">Update Profile</span>
              <span
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                className="cursor-pointer"
              >
                Sign Out
              </span>
            </div>
          )}
        </div>
        <IoMdNotificationsOutline className="text-xl font-medium" />
      </div>
    </div>
  );
};

export default Navbar;
