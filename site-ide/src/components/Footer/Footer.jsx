import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footer_container}>
            <img src='/img/redes_sociais.svg' className={styles.img_redes}></img>
            <p className={styles.p1}>CineIDE © Todos os direitos reservados.</p>
            <p className={styles.p2}>Termos de Uso | Politica de Privacidade | Política de Cookies</p>
            <img src='/img/Assinatura-ide.svg' className={styles.img_ide}></img>
        </div>
    )
}

export default Footer