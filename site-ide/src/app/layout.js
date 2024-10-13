"use client"
import React, {useEffect} from 'react'
import './globals.css'
import Banner from '@/components/Banner/Banner.jsx'
import Filmes from '@/components/Filmes_cartaz/Filmes_cartaz.jsx'
import Assassinos from '@/components/Assassinos/Assassinos.jsx'
import Formulario from '@/components/Formulario/Formulario.jsx'
import Footer from '@/components/Footer/Footer.jsx'


function App(){
    return(
        <html lang="en">
            <body>
                <div className='container'>
                    <Banner/>
                    <Filmes/>
                    <Assassinos/>
                    <Formulario/>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}

App.getInitialProps = async (ctx) => {
    return {}
}

export default App