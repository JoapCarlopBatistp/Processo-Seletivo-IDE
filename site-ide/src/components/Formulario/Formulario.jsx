import styles from './Formulario.module.css'

const Formulario = () => {
    return(
        <div className={styles.form_container}>
            <h2>COMPRAR INGRESSO</h2>
            <div className={styles.campos_form}>
                <form>
                    <input required name='Nome'></input>
                    <input required name='Email'></input>
                    <input required name='Filme Preferido'></input>
                    <input required name='Nível de Coragem'></input>
                    <button>Enviar</button>
                </form>
            </div>
            <div className={styles.imagem_gato}>
                <img src="/img/gato_morto.svg" alt="Gato morto" width="521" height="511"/>
            </div>
        </div>
    )
}

export default Formulario