const WHATSAPP_NUMBER = "5561999827436";

function buildInviteUrl(restaurant) {
  const local = restaurant.neighborhood ? ` (${restaurant.neighborhood})` : "";
  const text = `Oi Hélio! 👀 Bora nesse ${restaurant.name}${local}? Tá na sua lista de "quero ir"!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function Wishlist({
  restaurants,
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="wishlist">
      <div className="list-toolbar">
        <h2 className="section-title list-toolbar__title">Quero ir ({restaurants.length})</h2>
        <p className="wishlist__hint">
          Lugares que ainda não visitei. Curtiu algum? Me chama no WhatsApp e bora juntos! 🍻
        </p>
        <div className="category-filter" role="group" aria-label="Filtrar por tipo">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-chip ${selectedCategory === category ? "category-chip--active" : ""}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {restaurants.length === 0 ? (
        <p className="wishlist__empty">Nenhum lugar nessa categoria — troque o filtro acima.</p>
      ) : (
        <ul className="wish-grid">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="wish-card">
              <div className="wish-card__thumb">
                <img
                  src={restaurant.imageUrl}
                  alt={`Foto do ${restaurant.name}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/images/placeholder-restaurant.svg";
                  }}
                />
                <span className="wish-card__tag">{restaurant.category}</span>
              </div>
              <div className="wish-card__body">
                <h3 className="wish-card__name">{restaurant.name}</h3>
                <p className="wish-card__hood">📍 {restaurant.neighborhood}</p>
                <a
                  className="wish-card__wpp"
                  href={buildInviteUrl(restaurant)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bora? Me chama no WhatsApp
                </a>
                <div className="wish-card__links">
                  <a href={restaurant.googleMapsUrl} target="_blank" rel="noreferrer" className="wish-card__link">
                    Maps
                  </a>
                  <a href={restaurant.wazeUrl} target="_blank" rel="noreferrer" className="wish-card__link wish-card__link--outline">
                    Waze
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
