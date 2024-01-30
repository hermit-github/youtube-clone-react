import React from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import Header from '../components/youtube/Header'
import SideBar from '../components/youtube/SideBar'
import MainContent from '../components/youtube/Body'

const Home = () => {
  return (
    <MainLayout headerContent={<Header/>} sidebarContent={<SideBar/>} bodyContent={<MainContent/>}/>
  )
}

export default Home