import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 10;

export function StarRating({ rating }) {
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
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(restaurants.length / PAGE_SIZE));

  // Volta pra primeira página quando troca o filtro de categoria.
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  // Mantém a página válida caso a lista encolha.
  useEffect(() => {
    setPage((current) => Math.min(current, pageCount));
  }, [pageCount]);

  // Pula pra página do lugar selecionado (ex.: clique no mapa).
  useEffect(() => {
    if (!selectedRestaurant) return;
    const index = restaurants.findIndex((restaurant) => restaurant.id === selectedRestaurant.id);
    if (index >= 0) {
      setPage(Math.floor(index / PAGE_SIZE) + 1);
    }
  }, [selectedRestaurant, restaurants]);

  const pageItems = useMemo(
    () => restaurants.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [restaurants, page]
  );

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
              pageItems.map((restaurant) => {
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

      {pageCount > 1 ? (
        <nav className="pagination" aria-label="Paginação da lista">
          <button
            type="button"
            className="pagination__btn"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            aria-label="Página anterior"
          >
            ‹
          </button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              type="button"
              className={`pagination__btn ${page === number ? "pagination__btn--active" : ""}`}
              onClick={() => setPage(number)}
              aria-current={page === number ? "page" : undefined}
            >
              {number}
            </button>
          ))}
          <button
            type="button"
            className="pagination__btn"
            onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
            disabled={page === pageCount}
            aria-label="Próxima página"
          >
            ›
          </button>
        </nav>
      ) : null}

      {selectedRestaurant && restaurants.length > 0 ? (
        <article className="review-panel" aria-labelledby="review-panel-heading">
          <div className="review-panel__top">
            <img
              className="review-panel__image"
              src={selectedRestaurant.imageUrl}
              alt={`Foto do ${selectedRestaurant.name}`}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/images/placeholder-restaurant.svg";
              }}
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
