"use client";

import { useState } from "react";
import {
  Plane,
  Building2,
  Filter,
  Truck,
  CarFront,
  Car,
  Crown,
  ChevronRight,
  Star,
  Building,
  Bell,
  PlaneTakeoff,
  Clock,
} from "lucide-react";
import FeaturedCars from "../component/FeaturedCars";
import { DealerShipCard } from "../component/DealerShip";

export default function AirportPickupPage() {
  const [selectedBody, setSelectedBody] = useState(null);
  const [activeTab, setActiveTab] = useState("brands");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModels, setSelectedModels] = useState([]);

  const dealerships = [
    { name: "Auto King", cars: 120 ,verified: true, rating: 4.5, location: "Muscat" },
    { name: "Muscat Motors", cars: 85,verified: true, rating: 4.2, location: "Muscat" },
    { name: "Elite Rentals", cars: 60,verified: false, rating: 4.0, location: "Muscat" },
  ];

  const bodyTypes = [
    { name: "SUV", icon: Truck },
    { name: "Sedan", icon: CarFront },
    { name: "Coupe", icon: Car },
    { name: "Hatchback", icon: Car },
    { name: "Pickup", icon: Truck },
    { name: "Luxury", icon: Crown },
  ];

  const brands = [
    { name: "Toyota" },
    { name: "BMW" },
    { name: "Mercedes" },
    { name: "Nissan" },
  ];

  const modelsByBrand = {
    Toyota: ["Corolla", "Camry", "Prado"],
    BMW: ["X1", "X5", "M3"],
    Mercedes: ["C200", "E300", "G63"],
    Nissan: ["Sunny", "Patrol", "Altima"],
  };
const carTypes = [
  {
    id: "sedan",
    title: "Sedan",
    desc: "Daily drive",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80",
    href: "/browse/sedan",
  },
  {
    id: "suv",
    title: "SUV",
    desc: "Family trips",
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?w=400",
    href: "/browse/suv",
  },
  {
    id: "luxury",
    title: "Luxury",
    desc: "Premium cars",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
    href: "/browse/luxury",
  },
  {
    id: "sports",
    title: "Sports",
    desc: "High-performance vehicles",
    image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=400&q=80",
    href: "/browse/pickup",
  },
  {
    id: "hatchback",
    title: "Hatchback",
    desc: "City cruiser",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?w=400",
    href: "/browse/hatchback",
  },
  {
    id: "van",
    title: "Van",
    desc: "Group travel",
  image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&q=80",
    href: "/browse/van",
  },
];
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 pb-24">
{/* AIRPORT PICKUP HEADER — light, card-based */}
<section className="bg-white px-4 py-4 shadow-sm sm:px-6 sm:py-5 lg:px-8 border border-slate-100">
  <div className="mx-auto flex max-w-6xl flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
    {/* Identity row: solid icon block + title + bell */}
    <div className="flex items-center justify-between gap-3 lg:justify-start lg:gap-3.5">
      <div className="flex min-w-0 items-center gap-3 lg:gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-blue-600 sm:h-12 sm:w-12">
          <PlaneTakeoff size={20} className="text-white" />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-[17px] font-semibold tracking-tight text-slate-900 sm:text-lg lg:text-[19px]">
            Airport pickup
          </h1>
          <p className="truncate text-xs text-slate-500 lg:text-[13px]">
            <span className="lg:hidden">Premium rides, trusted dealers</span>
            <span className="hidden lg:inline">
              Premium rides with trusted dealerships
            </span>
          </p>
        </div>
      </div>

      <button
        aria-label="Notifications"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-slate-200 bg-slate-50 lg:hidden"
      >
        <Bell size={16} className="text-slate-500" />
      </button>
    </div>

    {/* Pill stats row */}
    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 sm:text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        24/7 available
      </span>
      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 sm:text-xs">
        <Star size={10} className="fill-amber-500 text-amber-500" />
        4.9 rating
      </span>
      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:text-xs">
        <Clock size={10} />
        12 min wait
      </span>

      <button
        aria-label="Notifications"
        className="ml-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 lg:flex"
      >
        <Bell size={17} className="text-slate-500" />
      </button>
    </div>
  </div>
</section>

    {/* DEALERSHIPS */}
    <DealerShipCard dealership={dealerships} />
{/* DEALERSHIPS */}

      {/* BODY TYPES */}
      <section className="mt-8 px-5">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Choose body type
        </h2>

        <div
          className="flex gap-3 overflow-x-auto no-scrollbar scroll-px-5 snap-x snap-mandatory -mx-5 px-5 pb-1"
          role="radiogroup"
          aria-label="Body type"
        >
          {bodyTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedBody === type.name;

            return (
              <button
                key={type.name}
                role="radio"
                aria-checked={isSelected}
                onClick={() => {
                  setSelectedBody(type.name);
                  setSelectedBrand(null);
                  setSelectedModels([]);
                  setActiveTab("brands");
                }}
                className={`min-w-[92px] sm:min-w-[108px] shrink-0 snap-start rounded-2xl border-[1.5px] p-3 sm:p-4 transition-all duration-150 active:scale-95 ${
                  isSelected
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      isSelected ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        isSelected ? "text-blue-600" : "text-slate-500"
                      }
                    />
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-medium text-center leading-tight ${
                      isSelected ? "text-blue-700" : "text-slate-700"
                    }`}
                  >
                    {type.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      
      {/* FILTERS */}
      {selectedBody && (
        <section className="mt-8 px-5">
          {/* SELECTED FILTERS */}
          <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedBody(null);
                  setSelectedBrand(null);
                  setSelectedModels([]);
                }}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {selectedBody} ✕
              </button>

              {selectedBrand && (
                <button
                  onClick={() => {
                    setSelectedBrand(null);
                    setSelectedModels([]);
                  }}
                  className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
                >
                  {selectedBrand} ✕
                </button>
              )}

              {selectedModels.map((model) => (
                <button
                  key={model}
                  onClick={() =>
                    setSelectedModels((prev) =>
                      prev.filter((item) => item !== model),
                    )
                  }
                  className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700"
                >
                  {model} ✕
                </button>
              ))}
            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-2 rounded-2xl bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("brands")}
              className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
                activeTab === "brands"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600"
              }`}
            >
              Brands
            </button>

            <button
              onClick={() => setActiveTab("models")}
              disabled={!selectedBrand}
              className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
                activeTab === "models"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600"
              } ${!selectedBrand && "opacity-50"}`}
            >
              Models
            </button>
          </div>

          {/* BRANDS */}
          {activeTab === "brands" && (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {brands.map((brand) => (
                <button
                  key={brand.name}
                  onClick={() => {
                    setSelectedBrand(brand.name);
                    setSelectedModels([]);
                    setActiveTab("models");
                  }}
                  className={`rounded-3xl border p-4 text-sm font-medium transition-all ${
                    selectedBrand === brand.name
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          )}

          {/* MODELS */}
          {activeTab === "models" && selectedBrand && (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {modelsByBrand[selectedBrand]?.map((model) => (
                <button
                  key={model}
                  onClick={() => {
                    setSelectedModels((prev) =>
                      prev.includes(model)
                        ? prev.filter((item) => item !== model)
                        : [...prev, model],
                    );
                  }}
                  className={`rounded-3xl border p-4 text-sm font-medium transition-all ${
                    selectedModels.includes(model)
                      ? "border-amber-500 bg-amber-50 text-amber-700"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* AVAILABLE CARS */}
      <section className="mt-8 px-5">
        {/* <div className="mb-3 flex items-center justify-between">
          

          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
            <Filter size={15} />
            Filters
          </button>
        </div> */}

        <FeaturedCars
          selectedBody={selectedBody}
          selectedBrand={selectedBrand}
          selectedModels={selectedModels}
        />
      </section>
    </div>
  );
}
