import { MapPin, Star, Truck, Car } from "lucide-react";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Sample data
const dealershipsData = [
  {
    id: 1,
    name: "Auto King Motors",
    location: "Al Khuwair",
    rating: 4.5,
    totalCars: 120,
    availableCars: 85,
    pricing: {
      daily: "15 OMR",
      weekly: "90 OMR",
      monthly: "350 OMR",
      yearly: "4000 OMR",
      discount: "10%",
    },
    logo: "/dealers/auto-king.png",
    brands: ["/bmw-logo-1997.webp", "/toyota-logo.png", "/bmw-logo-1997.webp"],
  },
  {
    id: 2,
    name: "Muscat Cars",
    location: "Ghubrah",
    rating: 4.0,
    totalCars: 80,
    availableCars: 50,
    pricing: {
      daily: "12 OMR",
      weekly: "70 OMR",
      monthly: "300 OMR",
      yearly: "3500 OMR",
      discount: "5%",
    },
    logo: "/dealers/muscat-cars.png",
    brands: ["/bmw-logo-1997.webp", "/toyota-logo.png", "/bmw-logo-1997.webp"],
  },
  {
    id: 3,
    name: "Auto King Motors",
    location: "Al Khuwair",
    rating: 4.5,
    totalCars: 120,
    availableCars: 85,
    pricing: {
      daily: "15 OMR",
      weekly: "90 OMR",
      monthly: "350 OMR",
      yearly: "4000 OMR",
      discount: "10%",
    },
    logo: "/dealers/auto-king.png",
    brands: ["/bmw-logo-1997.webp", "/toyota-logo.png", "/bmw-logo-1997.webp"],
  },
  {
    id: 4,
    name: "Muscat Cars",
    location: "Ghubrah",
    rating: 4.0,
    totalCars: 80,
    availableCars: 50,
    pricing: {
      daily: "12 OMR",
      weekly: "70 OMR",
      monthly: "300 OMR",
      yearly: "3500 OMR",
      discount: "5%",
    },
    logo: "/dealers/muscat-cars.png",
    brands: ["/bmw-logo-1997.webp", "/toyota-logo.png", "/bmw-logo-1997.webp"],
  },
];

// Default dummy image
const dummyImage = "/logo.jpeg";

// Stars component
const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
      {halfStar && <Star className="w-5 h-5 fill-yellow-300" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i + 10} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};

export default function NearbyDealerships() {
  const [loading, setLoading] = useState(true);
  const [dealerships, setDealerships] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDealerships(dealershipsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="p-0 mt-5 md:p-6">
      {/* Header */}

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3 md:mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
            Nearby Dealerships
          </h2>
          <p className="mt-1 text-sm text-slate-500 md:text-base">
            Trusted dealers around you{" "}
          </p>
        </div>

        {/* Only show on medium screens and above */}
        <button className="hidden md:flex items-center gap-2 text-white bg-gray-800 px-5 py-2 rounded-lg font-medium text-sm md:text-base hover:bg-gray-900 transition">
          View all <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {loading
          ? [...Array(2)].map((_, i) => (
              <div
                key={i}
                className="snap-start min-w-[250px] h-72 rounded-2xl bg-gray-100 animate-pulse"
              />
            ))
          : dealerships.map((dealer) => (
              <div
                key={dealer.id}
                className="snap-start min-w-[250px] bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm"
              >
                {/* Logo + Name + Location + Rating */}
                <div className="flex items-center gap-3">
                  <img
                    src={dealer.logo}
                    alt={dealer.name}
                    onError={(e) => (e.currentTarget.src = dummyImage)}
                    className="w-14 h-14 rounded-full border border-gray-200 object-contain bg-white"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">
                      {dealer.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" /> {dealer.location}
                    </p>
                    <Stars rating={dealer.rating} />
                  </div>
                </div>

                {/* Cars info */}
                <div className="mt-3 flex gap-4">
                  <div className="flex items-center gap-1 text-sm md:text-base text-gray-700">
                    <Car className="w-5 h-5 text-primary" />
                    <span>{dealer.availableCars} Available</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm md:text-base text-gray-700">
                    <Truck className="w-5 h-5 text-primary" />
                    <span>{dealer.totalCars} Total</span>
                  </div>
                </div>

                {/* Brands */}
                <div className="mt-3 flex gap-2">
                  {dealer.brands.slice(0, 3).map((b, idx) => (
                    <img
                      key={idx}
                      src={b}
                      alt="brand"
                      onError={(e) => (e.currentTarget.src = dummyImage)}
                      className="w-12 h-12 rounded-full object-contain border border-gray-200 p-1 bg-white"
                    />
                  ))}
                </div>
              </div>
            ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {loading
          ? [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-2xl bg-gray-100 animate-pulse"
              />
            ))
          : dealerships.map((dealer) => (
              <div
                key={dealer.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={dealer.logo}
                    alt={dealer.name}
                    onError={(e) => (e.currentTarget.src = dummyImage)}
                    className="w-16 h-16 rounded-full border border-gray-200 object-contain bg-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-gray-900">
                      {dealer.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" /> {dealer.location}
                    </p>
                    <Stars rating={dealer.rating} />
                  </div>
                </div>

                {/* Cars info */}
                <div className="mt-4 flex gap-6">
                  <div className="flex items-center gap-2 text-base text-gray-700">
                    <Car className="w-5 h-5 text-primary" />
                    <span>{dealer.availableCars} Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-base text-gray-700">
                    <Truck className="w-5 h-5 text-primary" />
                    <span>{dealer.totalCars} Total</span>
                  </div>
                </div>

                {/* Brands */}
                <div className="mt-4 flex gap-3">
                  {dealer.brands.slice(0, 3).map((b, idx) => (
                    <img
                      key={idx}
                      src={b}
                      alt="brand"
                      onError={(e) => (e.currentTarget.src = dummyImage)}
                      className="w-14 h-14 rounded-full object-contain border border-gray-200 p-1 bg-white"
                    />
                  ))}
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
