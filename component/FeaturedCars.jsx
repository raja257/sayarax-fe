"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpDown,
  Calendar,
  Check,
  ChevronDown,
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
    pricing: { daily: "12 OMR", weekly: "70 OMR", monthly: "250 OMR" },
    services: { insurance: true, delivery: true },
    images: { exterior: ["/car.jpeg"], interior: ["/car.jpeg"] },
    dailyNum: 12,
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
    pricing: { daily: "45 OMR", weekly: "250 OMR", monthly: "900 OMR" },
    services: { insurance: false, delivery: true },
    images: { exterior: ["/car.jpeg"], interior: ["/car.jpeg"] },
    dailyNum: 45,
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
    pricing: { daily: "50 OMR", weekly: "300 OMR", monthly: "1100 OMR" },
    services: { insurance: true, delivery: true },
    images: { exterior: ["/car.jpeg"], interior: ["/car.jpeg"] },
    dailyNum: 50,
  },
];

const SORT_OPTIONS = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "year_desc" },
  { label: "Oldest First", value: "year_asc" },
];

export default function CarPlatform() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [sortBy, setSortBy] = useState("price_asc");
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    setCars(carsData);
  }, []);

  const sortedCars = [...cars].sort((a, b) => {
    if (sortBy === "price_asc") return a.dailyNum - b.dailyNum;
    if (sortBy === "price_desc") return b.dailyNum - a.dailyNum;
    if (sortBy === "year_desc") return b.year - a.year;
    if (sortBy === "year_asc") return a.year - b.year;
    return 0;
  });

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label;

  const openWhatsApp = (num) => window.open(`https://wa.me/${num}`, "_blank");
  const callNow = (num) => (window.location.href = `tel:${num}`);

  return (
    <section className="mt-4 px-1 bg-[#f9fafb] ">
      {/* ── TOOLBAR ── */}
      <div className="flex items-left justify-end mb-6 gap-3">
        {/* LEFT: Filter icon button */}
        <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
          <Filter size={15} />
          Filters
        </button>

        {/* RIGHT: Sort dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortOpen((v) => !v)}
            className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            <ArrowUpDown size={15} className="text-slate-500" />
            <span className="hidden sm:inline">{activeSortLabel}</span>
            <span className="sm:hidden">Sort</span>
            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform duration-200 ${
                sortOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {sortOpen && (
            <>
              {/* backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setSortOpen(false)}
              />
              {/* dropdown */}
              <div className="absolute right-0 top-full mt-2 z-20 w-52 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors hover:bg-slate-50 ${
                      sortBy === opt.value
                        ? "text-blue-600 font-medium"
                        : "text-slate-700"
                    }`}
                  >
                    {opt.label}
                    {sortBy === opt.value && (
                      <Check size={14} className="text-blue-600 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── CONTENT ── */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {sortedCars.map((car) => (
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
                      {" "}/ day
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
        <div className="grid grid-cols-2 gap-3 lg:grid-cols- lg:gap-3">
          {sortedCars.map((car) => (
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
