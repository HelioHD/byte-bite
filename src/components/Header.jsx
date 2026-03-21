import { useState } from "react";

const AVATAR_SRC = `${process.env.PUBLIC_URL}/helio-avatar.png`;
const CHARACTER_SRC = `${process.env.PUBLIC_URL}/characters.png`;
const LOGO_SRC = `${process.env.PUBLIC_URL}/byte-bite-logo.png`;

export function Header() {
  const [characterArtLoaded, setCharacterArtLoaded] = useState(true);
  const [logoOk, setLogoOk] = useState(true);

  return (
    <header className="header">
      <div className="header__row">
        <div className="header__title-wrap">
          <div className="header__logo-wrap">
            {logoOk ? (
              <img
                src={LOGO_SRC}
                alt="Byte & Bite"
                className="header__logo-img"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <span className="header__logo-fallback" role="img" aria-label="Byte & Bite">
                Byte & Bite
              </span>
            )}
          </div>
          <div className="header__heading-row">
            <div className="header__avatar-wrap">
              <img
                src={AVATAR_SRC}
                alt="Helio"
                className="header__avatar"
                width={88}
                height={88}
              />
            </div>
            <h1>Meus restaurantes avaliados</h1>
          </div>
          <p className="header__subtitle">
            Veja minhas notas e avaliações de cada restaurante, bar e café que seu amigo Hélio já visitou aqui em Brasília (por enquanto hahaha). 
          </p>
        </div>

        <div className="header__aside">
          {characterArtLoaded && (
            <aside className="header__art" aria-label="Arte dos personagens do projeto">
              <img
                src={CHARACTER_SRC}
                alt="Personagens Byte & Bite"
                className="header__art-img"
                onError={() => setCharacterArtLoaded(false)}
              />
            </aside>
          )}
          <div className="header__side-note" role="note">
            Mapa interativo + lista com filtros: encontre o lugar, abra no Maps ou no Waze e leia a avaliação completa.
          </div>
        </div>
      </div>

      <a
        className="whatsapp-button"
        href="https://wa.me/5561999827436?text=Oi%20Hélio%2C%20quero%20te%20indicar%20um%20restaurante!"
        target="_blank"
        rel="noreferrer"
      >
        Indicar restaurante no WhatsApp
      </a>
    </header>
  );
}
