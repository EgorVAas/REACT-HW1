import React from 'react'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'

const App = () => {
  const users = [
    {
      name: "Ронни",
      lastName: "Коулмэн",
      age: 58,
      id: 1,
    },
    {
      name: "Крис",
      lastName: "Бамстед",
      age: 28,
      id: 2,
    },
    {
      name: "Zyzz",
      lastName: "R.I.P",
      age: 22,
      id: 3,
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  )
}

export default App