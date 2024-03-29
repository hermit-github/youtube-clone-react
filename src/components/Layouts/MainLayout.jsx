import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";

const MainLayout = ({headerContent,sidebarContent,bodyContent}) => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  return (
    <main className="h-screen w-screen overflow-hidden">
      <header className="w-full h-[3.5rem]">{headerContent}</header>
      <section className="h-[calc(100%-3.5rem)] flex">
        {isMenuOpen && <section className="h-full w-[15%]">{sidebarContent}</section>}
        <section className={clsx("overflow-auto",{"w-[85%]":isMenuOpen})}>{bodyContent}</section>
      </section>
    </main>
  );
};

export default MainLayout;
