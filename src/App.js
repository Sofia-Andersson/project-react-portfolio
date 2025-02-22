import React from 'react'
import OtherProjects from 'components/OtherProjects'
import { Header } from './components/Header'
import { Tech } from './components/Tech'
import { Introduction } from './components/Introduction'
import FeaturedProjectCard from './components/FeaturedProjectCard'
import { Skills } from './components/Skills'
import { ForMore } from './components/ForMore'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Tech color="#262626" />
      <FeaturedProjectCard color="#262626" tagColor="FFF9F3"> </FeaturedProjectCard>
      <OtherProjects color="262626" tagcolor="FFF9F3"> </OtherProjects>
      <Skills />
      <ForMore color="#262626"> </ForMore>
      <Footer />
    </div>
  )
}