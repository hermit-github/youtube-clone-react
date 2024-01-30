import React from "react";

const MainLayout = ({headerContent,sidebarContent,bodyContent}) => {
  return (
    <main className="h-screen w-screen">
      <header className="w-full h-[3.5rem] m-1 ">{headerContent}</header>
      <section className="h-[calc(100%-3.5rem)] flex">
        <section className="h-full w-[15%] bg-red-400 ">{sidebarContent}</section>
        <section className="">{bodyContent}</section>
      </section>
    </main>
  );
};

export default MainLayout;
