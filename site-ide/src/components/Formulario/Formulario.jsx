import styles from './Formulario.module.css'

const Formulario = () => {
    return(
        <section id='Ingressos' className={styles.form_container}>
            <h2>COMPRAR INGRESSO</h2>
            <div className={styles.campos_form}>
                <form>
                    <input type='text' placeholder='NOME'></input>
                    <input type='text' placeholder='EMAIL'></input>
                    <input type='text' placeholder='FILME PREFERIO'></input>
                    <input type='text' placeholder='NÍVEL DE CORAGEM'></input>
                    <button type='Submit'>Enviar</button>
                </form>
            </div>
            <div className={styles.imagem_gato}>
                <img src="/img/gato_morto.svg" alt="Gato morto" width="521" height="511"/>
            </div>
        </section>
    )
}

export default Formulario