import React from 'react'
import Footer from '../components/Footer'
import { footerInfo } from '../importer/Footer'

const FooterRenderer = () => {
  return (
    <div className='w-full h-4/6'>
        <Footer footerInfo={footerInfo}></Footer>
    </div>
  )
}

export default FooterRenderer