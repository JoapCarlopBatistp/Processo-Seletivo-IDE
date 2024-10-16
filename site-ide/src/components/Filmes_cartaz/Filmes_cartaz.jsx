import styles from "./Filmes_cartaz.module.css";
import "./Filmes_cartaz.module.css";
import React from "react";
const images = [
  "filme1.svg",
  "filme2.svg",
  "filme3.svg",
  "filme4.svg",
  "filme5.svg",
  "filme6.svg",
  "filme7.svg",
  "filme8.svg",
  "filme9.svg",
  "filme10.svg",
  "filme11.svg",
  "filme12.svg",
  "filme13.svg",
  "filme14.svg",
  "filme15.svg",
  "filme16.svg",
];
const Filmes_cartaz = () => {
  return (
    <section className={styles.filmes_container} id="Catalogo">
      <h3>Filmes em cartaz</h3>              /*Falta ajustar o titulo do componente*/ 
      <div className={styles.grid_container}>
        {images.map((image, index) => (
          <div key={index} className={styles.grid_item}>
            <img src={`/img/${image}`} alt={`Filme ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filmes_cartaz;
