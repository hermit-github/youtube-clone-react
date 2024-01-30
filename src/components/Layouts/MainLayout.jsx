import React from "react";
import { useSelector } from "react-redux";

const MainLayout = ({headerContent,sidebarContent,bodyContent}) => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  return (
    <main className="h-screen w-screen">
      <header className="w-full h-[3.5rem] sticky">{headerContent}</header>
      <section className="h-[calc(100%-3.5rem)] flex">
        {isMenuOpen && <section className="h-full w-48 sticky">{sidebarContent}</section>}
        <section className="">{bodyContent}</section>
      </section>
    </main>
  );
};

export default MainLayout;
