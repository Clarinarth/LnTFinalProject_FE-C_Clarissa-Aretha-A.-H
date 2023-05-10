import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LP from './Components/LP/Lp'
import Event from './Components/Event/Event'
import Form from './Components/Form/Form'
import Contact from './Components/Contact/Contact'

const App = () => {
    return (
      <>
        <Navbar />
        <LP/>
        <Event/>
        <Form/>
        <Contact />
      </>
    )
  }
  
  export default App