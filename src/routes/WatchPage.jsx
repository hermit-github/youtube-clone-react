import React, { useEffect } from "react";
import WatchLayout from "../components/Layouts/WatchLayout";
import Header from "../components/youtube/Header";
import SideBar from "../components/youtube/SideBar";
import WatchVideo from "../components/youtube/WatchVideo";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <WatchLayout
      headerContent={<Header />}
      sidebarContent={<SideBar />}
      bodyContent={<WatchVideo />}
    />
  );
};

export default WatchPage;
