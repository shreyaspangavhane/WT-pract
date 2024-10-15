import { useState } from 'react'
import './App.css'
import Header from "./Compoents/Header.jsx"
import Sidebar from './Compoents/Sidebar.jsx'
import MainSection from './Compoents/MainSection.jsx'
import Footer from './Compoents/Footer.jsx'


function App() {
  const [page,setPage]=useState("Home")
    function loadPage(event){
      // console.log(event.target.id);
      setPage(event.target.id)
    }
  
    return (
      <>
      <Header/> 
      <div className='AppDiv'>
        <div className='one' id='side1'>
            <Sidebar loadPage={loadPage}/>
        </div>
        <div className='one' id='main1'>
            <MainSection page={page} />
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  


export default App
