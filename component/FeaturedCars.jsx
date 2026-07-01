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
import { useLanguage } from "../context/LanguageContext";

const carsData = [
  {
    id: 1,
    name: {
      en: "Toyota Corolla GL",
      ar: "تويوتا كورولا GL",
    },
    dealer: {
      en: "Auto King Motors",
      ar: "أوتو كينج موتورز",
    },
    location: {
      en: "Muscat, Oman",
      ar: "مسقط، عمان",
    },
    phone: "+96890000000",
    whatsapp: "96890000000",

    transmission: {
      en: "Automatic",
      ar: "أوتوماتيك",
    },

    fuel: {
      en: "14 km/l",
      ar: "14 كم/لتر",
    },

    year: 2021,

    pricing: {
  daily: {
    en: "12 OMR / day",
    ar: "12 ريال عماني / يوم",
  },
  weekly: {
    en: "70 OMR / week",
    ar: "70 ريال عماني / أسبوع",
  },
  monthly: {
    en: "250 OMR / month",
    ar: "250 ريال عماني / شهر",
  },
},

    services: {
      insurance: true,
      delivery: true,
    },

    images: {
      exterior: ["/car.jpeg"],
      interior: ["/car.jpeg"],
    },

    dailyNum: 12,
  },

  {
    id: 2,
    name: {
      en: "BMW X5",
      ar: "بي إم دبليو X5",
    },
    dealer: {
      en: "Muscat Cars",
      ar: "سيارات مسقط",
    },
    location: {
      en: "Seeb, Oman",
      ar: "السيب، عمان",
    },
    phone: "+96891111111",
    whatsapp: "96891111111",

    transmission: {
      en: "Automatic",
      ar: "أوتوماتيك",
    },

    fuel: {
      en: "10 km/l",
      ar: "10 كم/لتر",
    },

    year: 2022,
pricing: {
  daily: {
    en: "12 OMR / day",
    ar: "12 ريال عماني / يوم",
  },
  weekly: {
    en: "70 OMR / week",
    ar: "70 ريال عماني / أسبوع",
  },
  monthly: {
    en: "250 OMR / month",
    ar: "250 ريال عماني / شهر",
  },
},

    services: {
      insurance: false,
      delivery: true,
    },

    images: {
      exterior: ["/car.jpeg"],
      interior: ["/car.jpeg"],
    },

    dailyNum: 45,
  },

  {
    id: 3,
    name: {
      en: "Nissan Patrol",
      ar: "نيسان باترول",
    },
    dealer: {
      en: "Elite Motors",
      ar: "إليت موتورز",
    },
    location: {
      en: "Seeb, Oman",
      ar: "السيب، عمان",
    },
    phone: "+96892222222",
    whatsapp: "96892222222",

    transmission: {
      en: "Automatic",
      ar: "أوتوماتيك",
    },

    fuel: {
      en: "9 km/l",
      ar: "9 كم/لتر",
    },

    year: 2023,

  pricing: {
  daily: {
    en: "12 OMR / day",
    ar: "12 ريال عماني / يوم",
  },
  weekly: {
    en: "70 OMR / week",
    ar: "70 ريال عماني / أسبوع",
  },
  monthly: {
    en: "250 OMR / month",
    ar: "250 ريال عماني / شهر",
  },
},

    services: {
      insurance: true,
      delivery: true,
    },

    images: {
      exterior: ["/car.jpeg", "/car.jpeg"],
      interior: ["/car.jpeg", "/car.jpeg"],
    },

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
  const { lang, t } = useLanguage();

  const isRTL = lang === "ar";

  const [selectedCar, setSelectedCar] = useState(null);
  const [activeImageType, setActiveImageType] = useState("exterior");
  const [currentImage, setCurrentImage] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
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
    <section className="mt-4 px-1" dir={isRTL ? "rtl" : "ltr"}>
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
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 "
            >
              <div className="relative">
                <img
                  src={car.images.exterior[0]}
                  alt={car.name}
                  className="w-full h-36 sm:h-48 md:h-56 object-cover"
                />

                {/* moved year badge to right */}
                <span className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-[10px] sm:text-xs font-medium text-gray-700 px-2 py-0.5 rounded-md shadow-sm">
                  {car.year}
                </span>
              </div>

              <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 truncate ">
                  {t(car.name)}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 truncate ">
                  <span className="truncate">{t(car.dealer)}</span>
                  <MapPin size={12} className="shrink-0" />
                </p>

                <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-600 pt-0.5 ">
                  <span className="flex items-center gap-1">
                    {t(car.fuel)}
                    <Fuel size={12} />
                  </span>

                  <span className="hidden sm:flex items-center gap-1">
                    {t(car.transmission)}
                    <Settings size={12} />
                  </span>

                  <span className="flex items-center gap-1">
                    {t(car.year)}
                    <Calendar size={12} />
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1.5 sm:pt-2 border-t border-gray-100">
                  <div className=" w-full">
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                      {t(car.pricing.daily)}
                    </span>

                    <span className="text-[10px] sm:text-xs text-gray-500">
                     
                    </span>
                  </div>
                </div>

                <div className="flex gap-1.5 sm:gap-2 pt-0.5 sm:pt-1 flex-row-reverse">
                  <button
                    onClick={() => openWhatsApp(car.whatsapp)}
                    className="flex-1 flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#1ebd58] text-white text-xs font-medium px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg"
                  >
                    <MessageCircle size={13} />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>

                  <button
                    onClick={() => callNow(car.phone)}
                    className="flex-1 flex items-center justify-center gap-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg"
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
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-3">
          {sortedCars.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col lg:flex-row overflow-hidden lg:h-36 text-right"
            >
              {/* IMAGE */}
              <div className="relative w-full h-28 sm:h-32 lg:w-40 lg:h-full shrink-0">
                <img
                  src={car.images.exterior[0]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-1.5 right-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-medium text-gray-700 px-1.5 py-0.5 rounded-md shadow-sm">
                  {car.year}
                </span>
              </div>

              {/* CONTENT */}
              <div className="px-3 py-2.5 flex-1 flex flex-col justify-between min-w-0">
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 truncate text-right">
                    {car.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-gray-500 truncate flex items-center gap-1 mt-0.5 justify-end">
                    <span className="truncate">{car.dealer}</span>
                    <MapPin size={11} className="shrink-0" />
                  </p>

                  <div className="flex gap-2 text-[10px] sm:text-xs text-gray-600 mt-1.5 justify-end">
                    <span className="flex items-center gap-0.5">
                      {car.fuel}
                      <Fuel size={11} />
                    </span>

                    <span className="hidden sm:flex items-center gap-0.5">
                      {car.transmission}
                      <Settings2 size={11} />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1.5 pt-1.5 flex-row-reverse">
                  <div className="flex items-baseline gap-0.5 shrink-0">
                    <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                      {car.pricing.daily}
                    </span>
                    {/* <span className="text-[9px] sm:text-[10px] text-gray-500">
                      
                    </span> */}
                  </div>

                  <div className="flex gap-1 shrink-0 flex-row-reverse">
                    <button
                      onClick={() => openWhatsApp(car.whatsapp)}
                      className="flex items-center justify-center gap-1 bg-[#25D366] text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 lg:px-3 py-1.5 rounded-lg"
                    >
                      <MessageCircle size={11} />
                      <span className="hidden lg:inline">WhatsApp</span>
                    </button>

                    <button
                      onClick={() => callNow(car.phone)}
                      className="flex items-center justify-center gap-1 border border-gray-300 text-gray-700 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 lg:px-3 py-1.5 rounded-lg"
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
    </section>
  );
}
