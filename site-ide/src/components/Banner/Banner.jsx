import styles from'./Banner.module.css'

const Banner = () => {
    return(
        <div className={styles.banner_container}>
            <h1>CineIDE</h1>
            <p>Clássicos do terror, onde o pavor nunca sai de cena</p>
        </div>
    )
}

export default Banner