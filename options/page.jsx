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
} from "lucide-react";
import FeaturedCars from "../component/FeaturedCars";

export default function AirportPickupPage() {
  const [selectedBody, setSelectedBody] = useState(null);
  const [activeTab, setActiveTab] = useState("brands");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModels, setSelectedModels] = useState([]);

  const dealerships = [
    { name: "Auto King", cars: 120 },
    { name: "Muscat Motors", cars: 85 },
    { name: "Elite Rentals", cars: 60 },
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
      {/* HERO */}
  {/* HERO */}
<section className="relative overflow-hidden rounded-b-[32px] bg-slate-900 px-5 pt-7 pb-8 text-white shadow-lg">
  {/* Background Accent */}
  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
  <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-blue-400/10 blur-2xl" />

  <div className="relative flex items-center justify-between">
    <div>
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
        <Plane size={12} />
        Airport Service
      </div>

      <h1 className="text-2xl font-bold tracking-tight">
        Airport Pickup
      </h1>

      <p className="mt-1 text-sm text-slate-300">
        Premium rides with trusted dealerships
      </p>
    </div>

    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
      <Plane size={28} className="text-blue-400" />
    </div>
  </div>
</section>

      {/* DEALERSHIPS */}
      <section className="mt-6 px-5">
        <h2 className="mb-3 text-lg font-bold text-slate-900">
          Featured Dealerships
        </h2>

        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {dealerships.map((d, i) => (
            <div
              key={i}
              className="min-w-[240px] shrink-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Building2 className="text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">{d.name}</p>
                  <p className="text-sm text-slate-500">
                    {d.cars} Cars Available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BODY TYPES */}
      <section className="mt-8 px-5">
        <h2 className="mb-3 text-lg font-bold text-slate-900">
          Choose Body Type
        </h2>

        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {bodyTypes.map((type) => {
            const Icon = type.icon;

            return (
              <button
                key={type.name}
                onClick={() => {
                  setSelectedBody(type.name);
                  setSelectedBrand(null);
                  setSelectedModels([]);
                  setActiveTab("brands");
                }}
                className={`min-w-[120px] shrink-0 rounded-3xl border p-4 transition-all ${
                  selectedBody === type.name
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                    <Icon size={22} className="text-blue-600" />
                  </div>

                  <p className="mt-2 text-sm font-medium text-slate-900">
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
                      prev.filter((item) => item !== model)
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
                        : [...prev, model]
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