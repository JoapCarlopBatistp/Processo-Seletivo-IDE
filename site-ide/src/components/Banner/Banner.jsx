import styles from './Banner.module.css'
import Navbar from '@/components/Navbar/Navbar.jsx'

const Banner = () => {
    return(
        <div className={styles.banner_container}>
            <Navbar/>
 
            <h1>CineIDE</h1>
            <p>Clássicos do terror, onde o pavor nunca sai de cena</p>
            
        </div>
    )
}

export default Banner