// Footer.js
import React, { useEffect, useState } from 'react';
const fetch = require('fetch')

function Footer() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://localhost:8000")
  }, [])


  return (
    <footer>
      <nav>
        <li>
          <a href='https://localhost:8000'>Contact</a>
        </li>
      </nav>
      <p>Copyright © 2024 BaraHousing. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
