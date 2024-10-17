/*import Link from 'next/link'*/
import styles from'./Navbar.module.css'
import React, { useEffect } from 'react';
import { Link} from 'react-scroll';
import Hamburguer from './Hamburguer/Hamburguer.jsx'

/*Detalhe (caso alguém mexa nisso depois de mim): 
    Pra adicionar um novo checkpoint pro scroll só é necessário criar uma <section id='blablabla'> e um <Link> correspondente
*/
const Navbar = () => {

    return(
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link activeClass="active" smooth spy to="Home" className={styles.link_navbar}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="Catalogo" className={styles.link_navbar}>
                        CATÁLOGO
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="Assassinos" className={styles.link_navbar}>
                        ASSASSINOS
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="Ingressos" className={styles.link_navbar}>
                        INGRESSOS
                    </Link>
                </li>

                <Hamburguer/>
                
            </ul>
        </nav>
    )
}

export default Navbar