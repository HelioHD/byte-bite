import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { StarRating } from "./RestaurantList";

function buildMarkerIcon(restaurant, isSelected) {
  const safeName = restaurant.name.replace(/"/g, "&quot;");
  const logo = restaurant.mapLogoUrl || restaurant.imageUrl;

  return L.divIcon({
    className: "restaurant-logo-marker__container",
    html: `
      <div class="restaurant-logo-marker ${isSelected ? "restaurant-logo-marker--selected" : ""}">
        <img src="${logo}" alt="Logo ${safeName}" />
      </div>
    `,
    iconSize: [54, 54],
    iconAnchor: [27, 27],
    popupAnchor: [0, -20],
  });
}

export function RestaurantMap({ restaurants, selectedRestaurantId, onSelectRestaurant }) {
  const center = [-15.793889, -47.882778];

  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={12} scrollWheelZoom className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={[restaurant.coordinates.lat, restaurant.coordinates.lng]}
            icon={buildMarkerIcon(restaurant, selectedRestaurantId === restaurant.id)}
            eventHandlers={{
              click: () => onSelectRestaurant(restaurant.id),
            }}
          >
            <Popup>
              <div className="map-popup">
                <div className="map-popup__thumb">
                  <img
                    className="map-popup__image"
                    src={restaurant.imageUrl}
                    alt={`Foto do ${restaurant.name}`}
                    loading="lazy"
                  />
                </div>
                <p className="map-popup__name">{restaurant.name}</p>
                <div className="map-popup__row">
                  <span className="map-popup__label">Local</span>
                  <span className="map-popup__value">{restaurant.neighborhood}</span>
                </div>
                <div className="map-popup__row map-popup__row--rating">
                  <span className="map-popup__label">Nota</span>
                  <span className="map-popup__stars">
                    <StarRating rating={restaurant.rating} />
                    <span className="map-popup__score">{restaurant.rating}/5</span>
                  </span>
                </div>
                <div className="map-popup__actions">
                  <button
                    type="button"
                    className="map-popup__button"
                    onClick={() => onSelectRestaurant(restaurant.id, { scrollToList: true })}
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
