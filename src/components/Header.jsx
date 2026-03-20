import { useState } from "react";

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
          <h1>Meus restaurantes avaliados</h1>
          <p className="header__subtitle">
            Veja minhas notas e reviews de cada Restaurante/Bar/Cafe que seu amigo Helio ja foi aqui em
            Brasilia (Por enquanto hahaha) e tenha a facilidade de ver no Google Maps e no Waze.
          </p>
        </div>

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
      </div>

      <a
        className="whatsapp-button"
        href="https://wa.me/5500000000000?text=Oi%20Helio%2C%20quero%20te%20indicar%20um%20restaurante!"
        target="_blank"
        rel="noreferrer"
      >
        Indicar restaurante no WhatsApp
      </a>
    </header>
  );
}
