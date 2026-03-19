export function Header() {
  return (
    <header className="header">
      <div className="header__title-wrap">
        <p className="header__eyebrow">Byte & Bite</p>
        <h1>Meus restaurantes avaliados</h1>
        <p className="header__subtitle">
          Veja minhas notas e reviews de cada Restaurante/Bar/Cafe que seu amigo Helio ja foi
          aqui em Brasilia (Por enquanto hahaha) e tenha a facilidade de ver no Google Maps e no
          Waze.
        </p>
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
