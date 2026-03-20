function StarRating({ rating }) {
  const full = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return (
    <span className="star-rating" aria-label={`${rating} de 5 estrelas`}>
      <span className="star-rating__full">{full}</span>
      <span className="star-rating__empty">{empty}</span>
    </span>
  );
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
      <div className="list-toolbar">
        <h2 className="section-title list-toolbar__title">Lista de reviews</h2>
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

      <div className="restaurant-table-wrap">
        <table className="restaurant-table">
          <thead>
            <tr>
              <th scope="col">Local</th>
              <th scope="col">Bairro</th>
              <th scope="col">Tipo</th>
              <th scope="col" className="restaurant-table__th-narrow">
                Nota
              </th>
            </tr>
          </thead>
          <tbody>
            {restaurants.length === 0 ? (
              <tr className="restaurant-table__row restaurant-table__row--empty">
                <td colSpan={4}>Nenhum local nessa categoria — troque o filtro acima.</td>
              </tr>
            ) : (
              restaurants.map((restaurant) => {
                const selected = selectedRestaurant?.id === restaurant.id;
                return (
                  <tr
                    key={restaurant.id}
                    className={selected ? "restaurant-table__row restaurant-table__row--selected" : "restaurant-table__row"}
                    onClick={() => onSelectRestaurant(restaurant.id)}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelectRestaurant(restaurant.id);
                      }
                    }}
                    aria-selected={selected}
                  >
                    <td className="restaurant-table__cell-name">{restaurant.name}</td>
                    <td>{restaurant.neighborhood}</td>
                    <td>
                      <span className="restaurant-table__tag">{restaurant.category}</span>
                    </td>
                    <td className="restaurant-table__cell-rating">
                      <span className="restaurant-table__score">{restaurant.rating}/5</span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {selectedRestaurant && restaurants.length > 0 ? (
        <article className="review-panel" aria-labelledby="review-panel-heading">
          <div className="review-panel__top">
            <img
              className="review-panel__image"
              src={selectedRestaurant.imageUrl}
              alt={`Foto do ${selectedRestaurant.name}`}
            />
            <div className="review-panel__intro">
              <p className="review-panel__eyebrow">Review selecionado</p>
              <h3 id="review-panel-heading" className="review-panel__title">
                {selectedRestaurant.name}
              </h3>
              <dl className="review-panel__meta-grid">
                <div>
                  <dt>Bairro</dt>
                  <dd>{selectedRestaurant.neighborhood}</dd>
                </div>
                <div>
                  <dt>Tipo</dt>
                  <dd>{selectedRestaurant.category}</dd>
                </div>
                <div>
                  <dt>Nota</dt>
                  <dd>
                    <StarRating rating={selectedRestaurant.rating} />{" "}
                    <span className="review-panel__meta-score">({selectedRestaurant.rating}/5)</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="review-panel__body">
            <section className="review-panel__section">
              <h4 className="review-panel__section-title">Descrição</h4>
              <p>{selectedRestaurant.description}</p>
            </section>
            <section className="review-panel__section review-panel__section--accent">
              <h4 className="review-panel__section-title">Review</h4>
              <p>{selectedRestaurant.review}</p>
            </section>
          </div>

          <div className="review-panel__actions">
            <a href={selectedRestaurant.googleMapsUrl} target="_blank" rel="noreferrer" className="review-panel__btn">
              Google Maps
            </a>
            <a href={selectedRestaurant.wazeUrl} target="_blank" rel="noreferrer" className="review-panel__btn review-panel__btn--outline">
              Waze
            </a>
          </div>
        </article>
      ) : null}
    </div>
  );
}
