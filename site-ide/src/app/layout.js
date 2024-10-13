import React from 'react'
import './globals.css'
import Banner from '@/components/Banner/Banner.jsx'
import Filmes from '@/components/Filmes_cartaz/Filmes_cartaz.jsx'
import Formulario from '@/components/Formulario/Formulario.jsx'
import Footer from '@/components/Footer/Footer.jsx'



export default function App(){
    return(
        <html lang="en">
            <body>
                <div className='container'>
                    <Banner/>
                    <Filmes/>
                    <h1>Falta colocar os assassinos aqui</h1>
                    <Formulario/>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}