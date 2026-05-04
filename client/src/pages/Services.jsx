import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Services = () => {
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [workers, setWorkers] = useState([]);
  const [error, setError] = useState(null);

  // 🌍 LOCATION STATES
  const [locationStatus, setLocationStatus] = useState("idle"); 
  const [location, setLocation] = useState(null);
  const [manualLocation, setManualLocation] = useState("");

  const categories = [
    "All",
    "Electrician",
    "Plumber",
    "Carpenter",
    "Painter",
    "AC Technician",
    "Cleaner",
    "Mechanic",
    "Gardener",
    "Appliance Repair",
    "Pest Control",
  ];

  const iconMap = {
    Electrician: "⚡",
    Plumber: "🚰",
    Carpenter: "🪵",
    Painter: "🎨",
    "AC Technician": "❄️",
    Cleaner: "🧹",
    Mechanic: "🔧",
    Gardener: "🌱",
    "Appliance Repair": "🔌",
    "Pest Control": "🐜",
  };

  // 🌍 LOCATION HANDLER
  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("unsupported");
      return;
    }

    setLocationStatus("loading");

    const timer = setTimeout(() => {
      setLocationStatus("timeout");
    }, 8000);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        clearTimeout(timer);
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocationStatus("success");
      },
      (err) => {
        clearTimeout(timer);

        if (err.code === 1) {
          setLocationStatus("denied");
        } else {
          setLocationStatus("error");
        }
      }
    );
  };

  // Simulated API call
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const data = [
          { id: 1, name: "John Doe", profession: "Electrician", rating: 4.8, price: "$40/hr", verified: true },
          { id: 2, name: "Jane Smith", profession: "Plumber", rating: 4.9, price: "$50/hr", verified: true },
          { id: 3, name: "Mike Johnson", profession: "Carpenter", rating: 4.5, price: "$35/hr", verified: true },
          { id: 4, name: "Ravi Kumar", profession: "Painter", rating: 4.6, price: "$30/hr", verified: true },
          { id: 5, name: "Amit Sharma", profession: "AC Technician", rating: 4.7, price: "$45/hr", verified: true },
          { id: 6, name: "Suresh Patel", profession: "Cleaner", rating: 4.3, price: "$25/hr", verified: true },
          { id: 7, name: "David Lee", profession: "Mechanic", rating: 4.8, price: "$55/hr", verified: true },
          { id: 8, name: "Priya Singh", profession: "Gardener", rating: 4.4, price: "$20/hr", verified: true },
          { id: 9, name: "Imran Khan", profession: "Appliance Repair", rating: 4.6, price: "$35/hr", verified: true },
          { id: 10, name: "Neha Gupta", profession: "Pest Control", rating: 4.5, price: "$40/hr", verified: true },
        ];
        setWorkers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load workers");
        setLoading(false);
      }
    }, 800);
  }, []);

  // Filtering logic
  const filteredWorkers = workers.filter((worker) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      worker.name.toLowerCase().includes(query) ||
      worker.profession.toLowerCase().includes(query);

    const matchesCategory =
      categoryFilter === "All" || worker.profession === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // 🌍 LOCATION BANNER
  const renderLocationBanner = () => {
    switch (locationStatus) {
      case "loading":
        return <p className="text-blue-600">📍 Detecting your location...</p>;

      case "success":
        return <p className="text-green-600">📍 Location detected successfully</p>;

      case "denied":
        return (
          <div className="text-red-500">
            📍 Location denied
            <div className="mt-2">
              <input
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                placeholder="Enter your city"
                className="border px-3 py-2 rounded-md mr-2"
              />
              <button
                onClick={requestLocation}
                className="text-blue-600 underline"
              >
                Retry
              </button>
            </div>
          </div>
        );

      case "timeout":
        return (
          <p className="text-yellow-600">
            📍 Request timed out{" "}
            <button onClick={requestLocation} className="underline text-blue-600">
              Retry
            </button>
          </p>
        );

      case "unsupported":
        return <p className="text-red-500">Geolocation not supported</p>;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold">Find Reliable Services Near You</h1>
        <p className="text-gray-500 mt-2">
          Discover top-rated professionals in your neighborhood
        </p>

        {/* 🌍 LOCATION UI */}
        <div className="mt-4 text-sm">
          {renderLocationBanner()}
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-8">
        <input
          className="border p-3 rounded w-full"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 bg-gray-200 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              categoryFilter === cat ? "bg-blue-600 text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredWorkers.map((worker) => (
            <div key={worker.id} className="border p-5 rounded-lg shadow-sm">

              <div className="text-3xl mb-2">
                {iconMap[worker.profession]}
              </div>

              <h2 className="font-bold text-lg">{worker.name}</h2>
              <p className="text-blue-600">{worker.profession}</p>

              <p className="text-sm mt-2">⭐ {worker.rating}</p>
              <p className="text-sm">{worker.price}</p>

              <Link
                to={`/worker/${worker.id}`}
                className="block mt-4 text-center bg-blue-600 text-white py-2 rounded"
              >
                View & Book
              </Link>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;