import React from 'react'
//console.log("Current directory:", __dirname);
import './globals.css';
export const metadata = {
    title: ' PropertyPulse: | Find The Perfect Rental Bitch',
    description: 'Find your dream rental bitch', keywords: 'rental, find rentals'
}

const MainLayout = ({children}) => {
  return ( 
    <html lang="em">
        <body>
            <div>{children}</div>
        </body>
    </html>
   
  )
}

export default MainLayout