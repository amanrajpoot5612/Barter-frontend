import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
// import { footerInfo } from '../importer/Footer'
import { backend_url } from '../config/config'

const FooterRenderer = () => {

  const [footerInfo, setFooterInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooter = async () =>{
      try {
        const response = await fetch(`${backend_url}/get-footer`)
        // console.log(`response = ${response}`);
        // console.log(response);
        
        const data = await response.json();
        // console.log(`response.data = ${response.data}`);
        // console.log(data);
        // console.log(data.success);
        
        if(data?._id){
          setFooterInfo(data);
        }else {
          console.error("Failed to fetch footer:", data.message);
        }
      } catch (error) {
        console.error("Error fetching footer:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFooter();
  }, [])

  if (loading) {
    return <div>Loading footer...</div>;
  }

  if (!footerInfo) {
    return <div>No footer data available</div>;
  }

  return (
    <div className='w-full h-4/6'>
        <Footer footerInfo={footerInfo}></Footer>
    </div>
  )
}

export default FooterRenderer