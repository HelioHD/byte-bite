import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
              <img
                className="map-popup__image"
                src={restaurant.imageUrl}
                alt={`Foto do ${restaurant.name}`}
                loading="lazy"
              />
              <strong>{restaurant.name}</strong>
              <br />
              {restaurant.neighborhood}
              <br />
              Nota: {restaurant.rating} estrelas
              <div className="map-popup__actions">
                <button className="map-popup__button" onClick={() => onSelectRestaurant(restaurant.id)}>
                  Ver detalhes
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
