import './App.css'
import { useState, useEffect } from "react";
import CatCard from "./components/CatCard";
import Summary from "./components/Summary";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [cats, setCats] = useState<string[]>([]);
  const [likedCats, setLikedCats] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCats() {
      const promises = Array.from({ length: 10 }, async () => {
        const res = await fetch("https://cataas.com/cat?json=true");
        const data = await res.json();
        console.log(data)
        return data.url;
      });
      const images = await Promise.all(promises);
      setCats(images);
      setLoading(false);
    }
    fetchCats();
  }, []);

  const handleSwipe = (dir: string) => {
    const currentCat = cats[currentIndex];
    if (dir === "Right") {
      setLikedCats((prev) => [...prev, currentCat]);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      {loading && <LoadingScreen />}
      {currentIndex >= cats.length && <Summary likedCats={likedCats} />}
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <h1 className="text-3xl font-bold mb-8">Cat... 🐾</h1>

        <div className="relative w-80 h-96 mb-6">
          {cats.slice(currentIndex, currentIndex + 3).map((cat, i) => (
            <div
              key={currentIndex + i}
              className="absolute inset-0"
              style={{
                zIndex: 10 - i,
                transform: `scale(${1 - i * 0.05}) translateY(${i * -8}px)`,
                pointerEvents: i === 0 ? 'auto' : 'none',
                opacity: 1 - i * 0.2,
              }}
            >
              <CatCard
                cat={cat}
                onSwipe={i === 0 ? handleSwipe : () => { }}
              />
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-600 font-medium">
          {cats.length - currentIndex} cats left
        </p>
      </div>
    </>

  );
}

export default App;