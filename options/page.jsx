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
{/* DEALERSHIPS */}
<section className="mt-6 px-5">
  <div className="mb-3 flex items-baseline justify-between">
    <h2 className="text-lg font-semibold text-slate-900">
      Featured dealerships
    </h2>
    <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
      View all
      <ChevronRight size={16} />
    </button>
  </div>

  <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 pb-1">
    {dealerships.map((d, i) => (
      <div
        key={i}
        className="min-w-[220px] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <Building size={22} className="text-blue-600" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">
              {d.name}
            </p>
            <p className="flex items-center gap-1 text-xs text-slate-500">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {d.rating} &middot; {d.location}
            </p>
          </div>
        </div>

        <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2.5">
          <span className="text-[13px] text-slate-500">
            {d.cars} cars available
          </span>
          {d.verified && (
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
              Verified
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
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
