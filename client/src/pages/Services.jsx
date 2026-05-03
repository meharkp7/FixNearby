import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [workers, setWorkers] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Expanded categories
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

  // Category icons
  const categoryIcons = {
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

  // Simulated API call
  useEffect(() => {
    setTimeout(() => {
      try {
        const data = [
          { id: 1, name: "John Doe", profession: "Electrician", rating: 4.8, price: "$40/hr" },
          { id: 2, name: "Jane Smith", profession: "Plumber", rating: 4.9, price: "$50/hr" },
          { id: 3, name: "Mike Johnson", profession: "Carpenter", rating: 4.5, price: "$35/hr" },
          { id: 4, name: "Ravi Kumar", profession: "Painter", rating: 4.6, price: "$30/hr" },
          { id: 5, name: "Amit Sharma", profession: "AC Technician", rating: 4.7, price: "$45/hr" },
          { id: 6, name: "Suresh Patel", profession: "Cleaner", rating: 4.3, price: "$25/hr" },
          { id: 7, name: "David Lee", profession: "Mechanic", rating: 4.8, price: "$55/hr" },
          { id: 8, name: "Priya Singh", profession: "Gardener", rating: 4.4, price: "$20/hr" },
          { id: 9, name: "Imran Khan", profession: "Appliance Repair", rating: 4.6, price: "$35/hr" },
          { id: 10, name: "Neha Gupta", profession: "Pest Control", rating: 4.5, price: "$40/hr" },
        ];
        setWorkers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load workers");
        setLoading(false);
      }
    }, 1000);
  }, []);

  // Filtering logic
  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.profession.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || worker.profession === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Find Skilled Workers Nearby
      </h1>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm transition ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat !== "All" ? `${categoryIcons[cat] || ""} ${cat}` : cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      {!loading && !error && (
        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredWorkers.length} results
        </p>
      )}

      {/* States */}
      {loading && <p className="text-gray-500">Loading workers...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Worker Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker) => (
              <div
                key={worker.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {worker.name}
                </h3>

                <span className="inline-block mt-1 text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full w-fit">
                  {worker.profession}
                </span>

                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span> {worker.rating}</span>
                  <span className="font-medium text-gray-700">
                    {worker.price}
                  </span>
                </div>

                <Link
                  to={`/worker/${worker.id}`}
                  className="mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                >
                  View Profile
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No workers found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;