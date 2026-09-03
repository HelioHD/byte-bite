import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { StarRating } from "./RestaurantList";

// Standard light basemap (OpenFreeMap's "Positron" style), used as-is with no
// color overrides — plain white/light-gray map with black text and roads.
const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";
const STYLE_ATTRIBUTION =
  '&copy; <a href="https://openfreemap.org">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function VectorBasemap() {
  const map = useMap();

  useEffect(() => {
    const glLayer = L.maplibreGL({
      style: STYLE_URL,
      attribution: STYLE_ATTRIBUTION,
    }).addTo(map);

    return () => {
      glLayer.remove();
    };
  }, [map]);

  return null;
}

function createClusterIcon(cluster) {
  const count = cluster.getChildCount();
  const size = count < 10 ? 40 : count < 30 ? 48 : 56;

  return L.divIcon({
    className: "restaurant-cluster-marker__container",
    html: `<div class="restaurant-cluster-marker">${count}</div>`,
    iconSize: [size, size],
  });
}

function buildMarkerIcon(restaurant, isSelected) {
  const safeName = restaurant.name.replace(/"/g, "&quot;");
  const logo = restaurant.mapLogoUrl || restaurant.imageUrl;

  return L.divIcon({
    className: "restaurant-logo-marker__container",
    html: `
      <div class="restaurant-logo-marker ${isSelected ? "restaurant-logo-marker--selected" : ""}">
        <img src="${logo}" alt="Logo ${safeName}" onerror="this.onerror=null;this.src='/images/placeholder-restaurant.svg';" />
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
      <MapContainer center={center} zoom={12} maxZoom={19} scrollWheelZoom className="map">
        <VectorBasemap />

        <MarkerClusterGroup
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={60}
          spiderfyOnMaxZoom
          showCoverageOnHover={false}
        >
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
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = "/images/placeholder-restaurant.svg";
                      }}
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
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
