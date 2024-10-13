import React from 'react'
import './globals.css'
import Banner from '@/components/Banner/Banner.jsx'
import Footer from '@/components/Footer/Footer.jsx'



export default function App(){
    return(
        <html lang="en">
            <body>
                <div className='container'>
                    <Banner/>
                    <h1>conteúdo</h1>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}