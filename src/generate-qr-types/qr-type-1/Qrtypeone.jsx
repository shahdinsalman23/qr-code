import React from 'react'
import Firsttypesec from '../qr-type-1/typeone-components/firsttypesec'
import Secondtypesec from './typeone-components/secondtypesec'
import Threetypesec from './typeone-components/threetypesec'
import Header from "../../header/header"
import Fourtypesec from './typeone-components/fourtypesec'
import Footer from '../../Footer/Footer'


const Qrtypeone = () => {
  return (
    <>
        
     <Header/>   
    <Firsttypesec/> 
    <Secondtypesec/>
    <Threetypesec/>
    <Fourtypesec/>  
    <Footer/>

    </>
  )
}

export default Qrtypeone