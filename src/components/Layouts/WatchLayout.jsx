import React from "react";
import { useSelector } from "react-redux";

const WatchLayout = ({headerContent,sidebarContent,bodyContent}) => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  return (
    <main className="h-screen w-screen overflow-hidden">
      <header className="w-full h-[3.5rem]">{headerContent}</header>
      <section className="h-[calc(100%-3.5rem)] flex">
        {isMenuOpen && <section className="h-full w-[15%] z-50 fixed bg-white">{sidebarContent}</section>}
        <section className="w-[100%]">{bodyContent}</section>
      </section>
    </main>
  );
};

export default WatchLayout;
