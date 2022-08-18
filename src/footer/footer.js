import "./footer.css";
import React, { useState, useEffect } from 'react'

const Footer = () => {
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          console.log(searchTerm)
          // Send Axios request here
        }, 3000)
    
        // Cleanup fn
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])
    
    
  return (
    <div className="footer-main" onChange={(e) => setSearchTerm(e.target.value)}>
      <div className="dot-left">
        <span class="loader__dot">.</span>
        <span class="loader__dot">.</span>
        <span class="loader__dot">.</span>
        <span class="loader__dot">.</span>
      </div>
    </div>
  );
};

export default Footer;
