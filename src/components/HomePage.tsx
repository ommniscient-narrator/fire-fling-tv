
import { Play, Clock } from "lucide-react";

export const HomePage = () => {
  const featuredContent = {
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
  };

  const trendingShows = [
    { id: 1, title: "The Witcher", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", duration: "45 min" },
    { id: 2, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", duration: "47 min" },
    { id: 3, title: "The Office", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", duration: "22 min" },
    { id: 4, title: "Game of Thrones", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", duration: "60 min" },
    { id: 5, title: "Friends", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", duration: "25 min" },
  ];

  const movies = [
    { id: 1, title: "Avengers: Endgame", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", year: "2019" },
    { id: 2, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", year: "2008" },
    { id: 3, title: "Inception", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", year: "2010" },
    { id: 4, title: "Pulp Fiction", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", year: "1994" },
    { id: 5, title: "The Matrix", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", year: "1999" },
  ];

  return (
    <div className="h-screen overflow-y-auto">
      {/* Featured Content Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-end"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${featuredContent.image})` 
        }}
      >
        <div className="p-12">
          <h1 className="text-5xl font-bold mb-4">{featuredContent.title}</h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl">{featuredContent.description}</p>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5" />
              <span>Play</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              <Clock className="w-5 h-5" />
              <span>Watch Later</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trending Shows Section */}
      <div className="p-12">
        <h2 className="text-3xl font-bold mb-8">Trending Shows</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {trendingShows.map((show) => (
            <div key={show.id} className="flex-shrink-0 group cursor-pointer">
              <div className="relative w-64 h-36 rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-200">
                <img 
                  src={show.image} 
                  alt={show.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-semibold truncate">{show.title}</h3>
                  <p className="text-gray-300 text-sm">{show.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Movies Section */}
      <div className="p-12">
        <h2 className="text-3xl font-bold mb-8">Popular Movies</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 group cursor-pointer">
              <div className="relative w-48 h-72 rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-200">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
                  <p className="text-gray-300 text-xs">{movie.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
