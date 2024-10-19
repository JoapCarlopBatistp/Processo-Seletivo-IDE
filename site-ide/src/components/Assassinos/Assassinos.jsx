import styles from "./Assassinos.module.css";
import React, { useState } from "react";

const assassinosInfos = [
  {
    nome: "Michael Myers",
    descricao:
      'Michael Myers é o vilão da franquia "Halloween", criado por John Carpenter. Um assassino silencioso e implacável, ele usa uma máscara branca e é conhecido por perseguir e matar suas vítimas, especialmente na noite de Halloween. Representa o mal puro, agindo sem motivo claro, tornando-se um ícone do terror.',
    imagem: "/img/michaelmyers.svg",
  },
  {
    nome: "Jason Vorhees",
    descricao:
      'Jason Voorhees, da série "Friday the 13th", é um assassino icônico criado por Victor Miller. Após se afogar no Lago Crystal, busca vingança usando uma máscara de hóquei e um facão para matar campistas. Sua figura se tornou um símbolo do gênero slasher e um ícone da cultura pop.',
    imagem: "/img/jason.svg",
  },
  {
    nome: "Pennnywise",
    descricao:
      "Pennywise é uma entidade cósmica que se alimenta do medo e surge a cada 27 anos em Derry. Ele assume a forma de um palhaço para atrair vítimas, especialmente crianças, e usa ilusões para explorar seus piores medos. Sádico e manipulador, sua verdadeira forma é uma força maligna além da compreensão humana.",
    imagem: "/img/pennywise.svg",
  },
  {
    nome: "Freddy Krueger",
    descricao:
      'Freddy Krueger, criado por Wes Craven para "A Nightmare on Elm Street", é um icônico assassino em série que ataca em pesadelos. Ele usa uma luva com lâminas afiadas e tem uma aparência marcante: chapéu fedora, suéter listrado e rosto queimado. Misturando terror psicológico e sobrenatural, Freddy se tornou memorável.',
    imagem: "/img/freddy.svg",
  },
  {
    nome: "Jason",
    descricao:
      'Jason Voorhees, da série "Friday the 13th", é um assassino icônico criado por Victor Miller. Após se afogar no Lago Crystal, busca vingança usando uma máscara de hóquei e um facão para matar campistas. Sua figura se tornou um símbolo do gênero slasher e um ícone da cultura pop.',
    imagem: "/img/jason.svg",
  },
  {
    nome: "Leatherface",
    descricao:
      "Leatherface é um homem corpulento que usa uma máscara de pele humana e carrega uma serra elétrica, tornando-o uma figura aterrorizante. Ele vive em uma fazenda isolada com sua família canibal, os Sawyer, que sequestram e matam viajantes. Mentalmente instável, age de forma primitiva e violenta, sendo frequentemente manipulado por outros membros da família.",
    imagem: "/img/leatherface.svg",
  },
  {
    nome: "Neko Robin",
    descricao:
      "Neko Robin é uma entidade sobrenatural, sombria e enigmática, que se alimenta do medo e da ansiedade dos candidatos que buscam uma vaga. Durante o processo seletivo, ele espreita nas sombras, observando silenciosamente cada movimento, enquanto coleciona as almas dos que ousam tentar.",
    imagem: "/img/neko.svg",
  },
];

const Assassinos = () => {
  const [assassinoAtual, setAssassino] = useState(assassinosInfos[0]);

  const handleClique = (index) => {
    setAssassino(assassinosInfos[index]);
  };

  return (
    <section className={styles.assassinos_container} id="Assassinos">
      <h1 className={styles.titulo}>OS ÍCONES DO TERROR</h1>

      {/* Listagem dos Assassinos */}
      <div className={styles.listaNomes}>
        {assassinosInfos.map((assassino, index) => (
          <div
            key={index}
            onClick={() => handleClique(index)}
            className={styles.nomeAssassino}
          >
            {assassino.nome}
          </div>
        ))}
      </div>

      {/* Detalhes do Assassino Selecionado */}
      {assassinoAtual && (
        <div className={styles.detalhes}>
          <div className={styles.descricao}>
            <h4>{assassinoAtual.nome}</h4>
            <p>{assassinoAtual.descricao}</p>
          </div>
          <div className={styles.imagemContainer}>
            <img
              src={assassinoAtual.imagem}
              alt={assassinoAtual.nome}
              className={styles.imagemAssassino}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Assassinos;
