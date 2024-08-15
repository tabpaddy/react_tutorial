import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hellos from './Hellos'
import Hello from './components/Hello'
import Fruits from './components/Fruits'
import ConditionalComponents from './components/ConditiionalComponents'
import Message from './components/Message'
import Counter from './components/Counter'
import Form from './components/Form'


function App() {
  const person = {
    name : 'Praise',
    message : 'Heyyy',
    seatNumbers : 147,
  }

  //return (<div><Hello person={person}/></div>)

  // return (
  // <div><Hellos name={'Praise'} message={'How are you'}/></div>
  // )

  // return (
  //   <div><Fruits/></div>
  // )

  // return (
  //   <div><ConditionalComponents/></div>
  //   )

  // onClick
  // return (
  //   <div><Message/></div>
  // )

  //state
  // return (
  //   <div><Counter/></div>
  // )

  // handling form input
  return (
    <div><Form/></div>
  )

  
}

export default App
