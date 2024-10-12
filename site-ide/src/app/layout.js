import React from 'react'
import './globals.css'
import Footer from '@/components/Footer/Footer.jsx'
import Navbar from '@/components/Navbar/Navbar.jsx'


export default function App(){
    return(
        <html lang="en">
            <body>
                <div className='container'>
                    <Navbar/>
                    <h1>conteúdo</h1>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}