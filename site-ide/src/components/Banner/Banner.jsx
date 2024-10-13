import styles from './Banner.module.css'
import Navbar from '@/components/Navbar/Navbar.jsx'

const Banner = () => {
    return(
        <section className={styles.banner_container} id='Home'>
            <Navbar/>
 
            <h1 id='Home'>CineIDE</h1>
            <p>Clássicos do terror, onde o pavor nunca sai de cena</p>
            
        </section>
    )
}

export default Banner