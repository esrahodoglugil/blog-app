import React from 'react'
import Header from './components/Header'
import Stories from './stories/page'
import About from './about/page'
const Page = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Stories></Stories>
    </div>
  )
}

export default Page