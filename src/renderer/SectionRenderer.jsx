import React from 'react'
import Home from '../sections/Home'
import Section from '../sections/Section'
import {AboutInfo} from '../importer/importer'
import {WhatWeDoInfo} from '../importer/importer'
import {FounderMessageInfo} from '../importer/importer'
import BarterSection from '../sections/BarterSection'

const SectionRenderer = () => {
  
  return (
    // <>
    <div className='flex flex-col items-center justify-center w-full gap-5'>
      {/* <div id="home"> */}
        <Home/>
      {/* </div> */}
      <div id="about">
        <Section SectionInfo = {AboutInfo}></Section>
      </div>
      <div id="whatwedo">
        <Section SectionInfo = {WhatWeDoInfo}></Section>
      </div>
      <div id="foundersmessage">
        <Section SectionInfo = {FounderMessageInfo} ></Section>
      </div>
      {/* <BarterSection></BarterSection> */}
    </div>
  )
}

export default SectionRenderer