"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpDown,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Fuel,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  Settings2,
  ShieldCheck,
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
    images: { exterior: ["/car.jpeg","/car.jpeg"], interior: ["/car.jpeg","/car.jpeg"] },
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
const [activeImageType, setActiveImageType] = useState("exterior");
const [currentImage, setCurrentImage] = useState(0);  const [viewMode, setViewMode] = useState("grid");
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
const [activeTab, setActiveTab] = useState("exterior");
const [currentExterior, setCurrentExterior] = useState(0);
const [currentInterior, setCurrentInterior] = useState(0);
  return (
    <section className="mt-4 px-1 ">
    

      {/* ── CONTENT ── */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {sortedCars.map((car) => (
            <div
              key={car.id}
              onClick={() => {
                setSelectedCar(car);
                setActiveImageType("exterior");
                setCurrentImage(0);
              }}
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

 {selectedCar && (() => {
  const images = activeTab === "exterior"
    ? selectedCar.images.exterior
    : selectedCar.images.interior;
  const currentIndex = activeTab === "exterior" ? currentExterior : currentInterior;
  const setIndex = activeTab === "exterior" ? setCurrentExterior : setCurrentInterior;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-3 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden my-4">

        {/* Hero Slider */}
        <div className="relative h-56 md:h-72 bg-slate-100 overflow-hidden group">

          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-full object-cover flex-shrink-0"
                style={{ minWidth: "100%" }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={16} className="text-slate-700" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={16} className="text-slate-700" />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all ${
                    i === currentIndex
                      ? "w-4 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Close */}
          <button
            onClick={() => setSelectedCar(null)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
          >
            <X size={15} className="text-slate-700" />
          </button>

          {/* Verified badge */}
          <span className="absolute top-3 left-3 bg-emerald-500/90 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <ShieldCheck size={12} /> Verified
          </span>

          {/* Counter */}
          <span className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Photo Tabs */}
        <div className="flex gap-2 px-4 pt-4">
          <button
            onClick={() => setActiveTab("exterior")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "exterior"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            Exterior
          </button>
          <button
            onClick={() => setActiveTab("interior")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "interior"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            Interior
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setIndex(index)}
              className={`w-16 h-12 rounded-xl object-cover cursor-pointer flex-shrink-0 transition-all border-2 ${
                index === currentIndex ? "border-blue-600" : "border-transparent opacity-60"
              }`}
            />
          ))}
        </div>

        {/* Title */}
        <div className="px-4 pb-4">
          <h1 className="text-xl font-semibold text-slate-900">{selectedCar.name}</h1>
          <p className="text-sm text-slate-400 mt-1 flex items-center gap-1">
            <MapPin size={13} /> {selectedCar.dealer} · {selectedCar.location}
          </p>
        </div>

        <div className="h-px bg-slate-100 mx-4" />

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 px-4 py-4">
          {[
            { icon: <Calendar size={18} />, label: "Year", value: selectedCar.year },
            { icon: <Fuel size={18} />, label: "Fuel", value: selectedCar.fuel },
            { icon: <Settings size={18} />, label: "Trans.", value: selectedCar.transmission },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-slate-50 rounded-xl p-3 text-center">
              <div className="text-blue-600 flex justify-center mb-1">{icon}</div>
              <p className="text-slate-400 text-xs">{label}</p>
              <p className="text-slate-800 text-sm font-medium mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        <div className="h-px bg-slate-100 mx-4" />

        {/* Pricing */}
        <div className="px-4 py-4">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
            Rental pricing
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Daily", value: selectedCar.pricing.daily },
              { label: "Weekly", value: selectedCar.pricing.weekly },
              { label: "Monthly", value: selectedCar.pricing.monthly },
            ].map(({ label, value }) => (
              <div key={label} className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
                <p className="text-blue-500 text-xs">{label}</p>
                <p className="text-blue-900 font-semibold text-base mt-0.5">
                  {value.replace(" OMR", "")}
                  <span className="text-xs font-normal ml-0.5">OMR</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="px-4 pb-6 flex flex-col gap-3">
          <button
            onClick={() => openWhatsApp(selectedCar.whatsapp)}
            className="w-full h-14 bg-[#25D366] text-white rounded-2xl font-medium text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            <MessageCircle size={18} /> WhatsApp
          </button>
          <button
            onClick={() => callNow(selectedCar.phone)}
            className="w-full h-14 bg-blue-600 text-white rounded-2xl font-medium text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            <Phone size={18} /> Call now
          </button>
        </div>

      </div>
    </div>
  );
})()}
    </section>
  );
}
