import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { RestaurantMap } from "./components/RestaurantMap";
import { RestaurantList } from "./components/RestaurantList";
import { restaurantsMock } from "./data/restaurants";
import { applyThemeToDocument } from "./theme/theme";

const LIST_SCROLL_BREAKPOINT = "(max-width: 960px)";

function App() {
  useLayoutEffect(() => {
    applyThemeToDocument();
  }, []);
  const listPanelRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurantsMock[0].id);

  const handleSelectRestaurant = useCallback((id, options) => {
    setSelectedRestaurantId(id);
    if (!options?.scrollToList || typeof window === "undefined") {
      return;
    }
    const stackedLayout = window.matchMedia(LIST_SCROLL_BREAKPOINT).matches;
    if (!stackedLayout) {
      return;
    }
    requestAnimationFrame(() => {
      listPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const categories = useMemo(
    () => ["Todos", ...new Set(restaurantsMock.map((restaurant) => restaurant.category))],
    []
  );

  const filteredRestaurants = useMemo(() => {
    if (selectedCategory === "Todos") {
      return restaurantsMock;
    }

    return restaurantsMock.filter((restaurant) => restaurant.category === selectedCategory);
  }, [selectedCategory]);

  const safeSelectedRestaurantId = useMemo(() => {
    const exists = filteredRestaurants.some((restaurant) => restaurant.id === selectedRestaurantId);
    return exists ? selectedRestaurantId : filteredRestaurants[0]?.id;
  }, [filteredRestaurants, selectedRestaurantId]);

  const selectedRestaurant = useMemo(
    () => filteredRestaurants.find((restaurant) => restaurant.id === safeSelectedRestaurantId),
    [filteredRestaurants, safeSelectedRestaurantId]
  );

  return (
    <main className="app">
      <Header />

      <section className="app__content">
        <div className="app__panel app__panel--map">
          <h2 className="section-title">Mapa dos restaurantes avaliados</h2>
          <RestaurantMap
            restaurants={filteredRestaurants}
            selectedRestaurantId={safeSelectedRestaurantId}
            onSelectRestaurant={handleSelectRestaurant}
          />
        </div>

        <div ref={listPanelRef} className="app__panel app__panel--list">
          <RestaurantList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            restaurants={filteredRestaurants}
            selectedRestaurant={selectedRestaurant}
            onSelectRestaurant={handleSelectRestaurant}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
