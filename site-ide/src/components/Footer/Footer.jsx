import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footer_container}>
            <img src='/img/redes_sociais.svg' className={styles.img_redes}></img>
        </div>
    )
}

export default Footer