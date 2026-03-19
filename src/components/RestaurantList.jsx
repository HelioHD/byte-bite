function StarRating({ rating }) {
  return <span>{Array.from({ length: rating }, () => "⭐").join("")}</span>;
}

export function RestaurantList({
  categories,
  selectedCategory,
  onSelectCategory,
  restaurants,
  selectedRestaurant,
  onSelectRestaurant,
}) {
  return (
    <div className="list-layout">
      <h2 className="section-title">Lista de reviews</h2>
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-chip ${selectedCategory === category ? "category-chip--active" : ""}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <button
              className={`restaurant-item ${
                selectedRestaurant?.id === restaurant.id ? "restaurant-item--selected" : ""
              }`}
              onClick={() => onSelectRestaurant(restaurant.id)}
            >
              <span>{restaurant.name}</span>
              <small>
                {restaurant.neighborhood} . {restaurant.category}
              </small>
            </button>
          </li>
        ))}
      </ul>

      {restaurants.length === 0 ? (
        <article className="review-card">
          <p>Nenhum local encontrado nessa categoria.</p>
        </article>
      ) : null}

      {selectedRestaurant && restaurants.length > 0 ? (
        <article className="review-card">
          <img
            className="review-card__image"
            src={selectedRestaurant.imageUrl}
            alt={`Foto do ${selectedRestaurant.name}`}
          />
          <h3>{selectedRestaurant.name}</h3>
          <p className="review-card__meta">
            {selectedRestaurant.neighborhood} . {selectedRestaurant.category}
          </p>
          <p>
            <strong>Nota:</strong> <StarRating rating={selectedRestaurant.rating} /> (
            {selectedRestaurant.rating}/5)
          </p>
          <p>
            <strong>Descricao:</strong> {selectedRestaurant.description}
          </p>
          <p>
            <strong>Review:</strong> {selectedRestaurant.review}
          </p>

          <div className="review-card__links">
            <a href={selectedRestaurant.googleMapsUrl} target="_blank" rel="noreferrer">
              Abrir no Google Maps
            </a>
            <a href={selectedRestaurant.wazeUrl} target="_blank" rel="noreferrer">
              Abrir no Waze
            </a>
          </div>
        </article>
      ) : null}
    </div>
  );
}
