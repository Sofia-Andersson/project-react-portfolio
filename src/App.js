import React from 'react'
import OtherProjects from 'components/OtherProjects'
import { Header } from './components/Header'
import { ForMore } from './components/ForMore'
import FeaturedProjectCard from './components/FeaturedProjectCard'
import { MyThoughts } from './components/MyThoughts'
import { Introduction } from './components/Introduction'

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <FeaturedProjectCard color="red" tagColor="pink"> </FeaturedProjectCard>
      <OtherProjects />
      <OtherProjects />
      <MyThoughts />
      <ForMore color="red"> </ForMore>
    </div>
  )
}