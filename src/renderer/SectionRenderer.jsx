import Home from '../sections/Home'
import Section from '../sections/Section'
import BarterSection from '../sections/BarterSection'
import React, { useEffect, useState } from 'react';
import { backend_page_url } from '../config/config.js'

const SectionRenderer = () => {

  const [pageInfo, setPageInfo] = useState([])

  const sections = [Home];
  useEffect(() => {
    const fetchPage = async () => {
      const pageData = await fetch(`${backend_page_url}/get-pages`);
      console.log("pageData", pageData);
      const data = await pageData?.json()
      console.log("data", data);
      
      setPageInfo(data?.page);
    }
    fetchPage();
  }, [])
  console.log("pageInfo", pageInfo);
  
  return (
    <div className='flex flex-col items-center justify-center w-full'>
  {pageInfo
  .slice()
  .sort((a, b) => a.serialNumber - b.serialNumber)
  .map((page, idx) => {
    const Component =( page.key === "home" ? sections[0] : Section);
    return (
      <div id={page.key} key={page._id}>
        {Component && <Component SectionInfo={page} />}
      </div>
    );
  })}
</div>

    // <>
    // <div className='  '>
    //     <Home/>
    //   <div id="about">
    //     <Section SectionInfo = {AboutInfo}></Section>
    //   </div>
    //   <div id="whatwedo">
    //     <Section SectionInfo = {WhatWeDoInfo}></Section>
    //   </div>
    //   <div id="foundersmessage">
    //     <Section SectionInfo = {FounderMessageInfo} ></Section>
    //   </div>
      // <BarterSection></BarterSection> 
    // </div>
  )
}

export default SectionRenderer