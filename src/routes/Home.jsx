import React, { useEffect } from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import Header from '../components/youtube/Header'
import SideBar from '../components/youtube/SideBar'
import MainContent from '../components/youtube/Body'
import { useDispatch } from 'react-redux'
import { openMenu } from '../store/appSlice'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  },[dispatch])

  return (
    <MainLayout headerContent={<Header/>} sidebarContent={<SideBar/>} bodyContent={<MainContent/>}/>
  )
}

export default Home