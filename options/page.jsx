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
  const [selectedModel, setSelectedModel] = useState(null);

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
    <div className="min-h-screen bg-slate-50 pb-24 overflow-x-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-b-[30px] shadow-xl px-5 py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70">Airport Service ✈️</p>
            <h1 className="mt-1 text-xl font-bold">Airport Pickup</h1>
          </div>

          <Plane size={24} />
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
              className="min-w-[240px] shrink-0 rounded-2xl border bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-600" />

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
                  setSelectedModel(null);
                }}
                className={`min-w-[120px] shrink-0 rounded-2xl border p-4 ${
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

     {selectedBody && (
  <section className="mt-6 px-5">

    {/* FILTER WRAPPER CARD */}
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* SELECTED FILTERS */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
          {selectedBody}
        </span>

        {selectedBrand && (
          <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs text-white">
            {selectedBrand}
          </span>
        )}

        {selectedModel && (
          <span className="rounded-full bg-amber-500 px-3 py-1 text-xs text-white">
            {selectedModel}
          </span>
        )}
      </div>

      {/* TABS */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setActiveTab("brands")}
          className={`rounded-xl py-2 text-sm font-medium transition ${
            activeTab === "brands"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Brands
        </button>

        <button
          onClick={() => setActiveTab("models")}
          className={`rounded-xl py-2 text-sm font-medium transition ${
            activeTab === "models"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Models
        </button>
      </div>

      {/* BRANDS */}
      {activeTab === "brands" && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {brands.map((b) => (
            <button
              key={b.name}
              onClick={() => {
                setSelectedBrand(b.name);
                setSelectedModel(null);
                setActiveTab("models");
              }}
              className={`rounded-2xl border p-3 text-sm transition ${
                selectedBrand === b.name
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      )}

      {/* MODELS */}
      {activeTab === "models" && selectedBrand && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {modelsByBrand[selectedBrand]?.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModel(m)}
              className={`rounded-2xl border p-3 text-sm transition ${
                selectedModel === m
                  ? "border-amber-500 bg-amber-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}

    </div>
  </section>
)}

      {/* CAR SECTION */}
      <section className="mt-8 px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Available Cars
          </h2>

          <button className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm">
            <Filter size={14} />
            Filters
          </button>
        </div>

        <FeaturedCars />
      </section>
    </div>
  );
}