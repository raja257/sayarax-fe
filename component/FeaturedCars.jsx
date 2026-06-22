"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Filter,
  Fuel,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  Settings2,
  X,
} from "lucide-react";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla GL",
    dealer: "Auto King Motors",
    location: "Muscat, Oman",
    phone: "+96890000000",
    whatsapp: "96890000000",
    transmission: "Automatic",
    fuel: "14 km/l",
    year: 2021,
    pricing: {
      daily: "12 OMR",
      weekly: "70 OMR",
      monthly: "250 OMR",
    },
    services: {
      insurance: true,
      delivery: true,
    },
    images: {
      exterior: ["/car.jpeg"],
      interior: ["/car.jpeg"],
    },
  },
  {
    id: 2,
    name: "BMW X5",
    dealer: "Muscat Cars",
    location: "Seeb, Oman",
    phone: "+96891111111",
    whatsapp: "96891111111",
    transmission: "Automatic",
    fuel: "10 km/l",
    year: 2022,
    pricing: {
      daily: "45 OMR",
      weekly: "250 OMR",
      monthly: "900 OMR",
    },
    services: {
      insurance: false,
      delivery: true,
    },
    images: {
      exterior: ["/car.jpeg"],
      interior: ["/car.jpeg"],
    },
  },
  {
    id: 3,
    name: "Nissan Patrol",
    dealer: "Elite Motors",
    location: "Seeb, Oman",
    phone: "+96892222222",
    whatsapp: "96892222222",
    transmission: "Automatic",
    fuel: "9 km/l",
    year: 2023,
    pricing: {
      daily: "50 OMR",
      weekly: "300 OMR",
      monthly: "1100 OMR",
    },
    services: {
      insurance: true,
      delivery: true,
    },
    images: {
      exterior: ["/car.jpeg"],
      interior: ["/car.jpeg"],
    },
  },
];

export default function CarPlatform() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    setCars(carsData);
  }, []);

  const openWhatsApp = (num) => {
    window.open(`https://wa.me/${num}`, "_blank");
  };

  const callNow = (num) => {
    window.location.href = `tel:${num}`;
  };

  return (
    <section className="mt-4 p-0 bg-[#f9fafb] min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
          <Filter size={15} />
          Filters
        </button>

        {/* TOGGLE */}
        <div className="flex border rounded-xl bg-white p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 text-sm rounded-lg ${
              viewMode === "grid" ? "bg-black text-white" : "text-gray-600"
            }`}
          >
            Grid
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 text-sm rounded-lg ${
              viewMode === "list" ? "bg-black text-white" : "text-gray-600"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {viewMode === "grid" ? (
        /* ── GRID VIEW: 2 cols on mobile, 3 on desktop ── */
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative">
                <img
                  src={car.images.exterior[0]}
                  alt={car.name}
                  className="w-full h-36 sm:h-48 md:h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm text-[10px] sm:text-xs font-medium text-gray-700 px-2 py-0.5 rounded-md shadow-sm">
                  {car.year}
                </span>
              </div>

              <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 truncate">
                  {car.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 truncate">
                  <MapPin size={12} className="shrink-0" />
                  <span className="truncate">{car.dealer}</span>
                </p>

                <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-600 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Fuel size={12} />
                    {car.fuel}
                  </span>
                  <span className="hidden sm:flex items-center gap-1">
                    <Settings size={12} />
                    {car.transmission}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {car.year}
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1.5 sm:pt-2 border-t border-gray-100">
                  <div>
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                      {car.pricing.daily}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      {" "}
                      / day
                    </span>
                  </div>
                </div>

                <div className="flex gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
                  <button
                    onClick={() => openWhatsApp(car.whatsapp)}
                    aria-label="Contact via WhatsApp"
                    className="flex-1 flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#1ebd58] text-white text-xs font-medium px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors"
                  >
                    <MessageCircle size={13} />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                  <button
                    onClick={() => callNow(car.phone)}
                    aria-label="Call dealer"
                    className="flex-1 flex items-center justify-center gap-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors"
                  >
                    <Phone size={13} />
                    <span className="hidden sm:inline">Call</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ── LIST VIEW: 2 cols on mobile (stacked card), 1 col row on desktop ── */
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col lg:flex-row overflow-hidden lg:h-36"
            >
              {/* IMAGE */}
              <div className="relative w-full h-28 sm:h-32 lg:w-40 lg:h-full shrink-0">
                <img
                  src={car.images.exterior[0]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-medium text-gray-700 px-1.5 py-0.5 rounded-md shadow-sm">
                  {car.year}
                </span>
              </div>

              {/* CONTENT */}
              <div className="px-3 py-2.5 flex-1 flex flex-col justify-between min-w-0">
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 truncate">
                    {car.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 truncate flex items-center gap-1 mt-0.5">
                    <MapPin size={11} className="shrink-0" />
                    <span className="truncate">{car.dealer}</span>
                  </p>

                  <div className="flex gap-2 text-[10px] sm:text-xs text-gray-600 mt-1.5">
                    <span className="flex items-center gap-0.5">
                      <Fuel size={11} />
                      {car.fuel}
                    </span>
                    <span className="hidden sm:flex items-center gap-0.5">
                      <Settings2 size={11} />
                      {car.transmission}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1.5 pt-1.5">
                  <div className="flex items-baseline gap-0.5 shrink-0">
                    <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                      {car.pricing.daily}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-gray-500">
                      /day
                    </span>
                  </div>

                  <div className="flex gap-1 shrink-0">
                    <button
                      onClick={() => openWhatsApp(car.whatsapp)}
                      aria-label="Contact via WhatsApp"
                      className="flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#1ebd58] text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 lg:px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <MessageCircle size={11} />
                      <span className="hidden lg:inline">WhatsApp</span>
                    </button>
                    <button
                      onClick={() => callNow(car.phone)}
                      aria-label="Call dealer"
                      className="flex items-center justify-center gap-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 lg:px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Phone size={11} />
                      <span className="hidden lg:inline">Call</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden relative">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-3 right-3 bg-black text-white p-2 rounded-full"
            >
              <X size={18} />
            </button>

            <img
              src={selectedCar.images.exterior[0]}
              className="w-full h-[420px] object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-lg font-medium">{selectedCar.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin size={14} />
                {selectedCar.dealer} • {selectedCar.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}