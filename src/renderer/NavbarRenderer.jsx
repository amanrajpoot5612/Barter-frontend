import React, { useEffect, useState } from 'react'
import { NavItems } from '../importer/navbar'
import Navbar from '../components/Navbar'
import { backend_url } from '../config/config';

const NavbarRenderer = () => {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch(`${backend_url}/navbar`);
        console.log(`url  = ${backend_url}/navbar`);
        
        if(!response.ok) throw new Error('Failed to fetch navbar items');
        const data = await response.json();
        setNavItems(data);
        console.log(data);
      } catch (error) {
                console.error('Error fetching navbar items:', error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchNavItems();
  }, []);
  return (
        <Navbar NavItems={NavItems}></Navbar>
  )
}

export default NavbarRenderer