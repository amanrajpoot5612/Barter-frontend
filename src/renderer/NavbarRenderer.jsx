import React from 'react'
import { NavItems } from '../importer/navbar'
import Navbar from '../components/Navbar'

const NavbarRenderer = () => {
  return (
        <Navbar NavItems={NavItems}></Navbar>
  )
}

export default NavbarRenderer