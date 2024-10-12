import styles from'./Navbar.module.css'

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <a href="#home">HOME</a>
            <a href="#news">CATÁLOGO</a>
            <a href="#contact">ASSASSINOS</a>
            <a href="#contact">INGRESSOS</a>
        </div>
    )
}

export default Navbar