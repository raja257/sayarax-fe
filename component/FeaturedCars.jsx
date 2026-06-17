"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, MessageCircle, X } from "lucide-react";

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
      exterior: ["/car.jpeg", "/car.jpeg"],
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
  }, {
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
  }, {
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
];

export default function CarPlatform() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeView, setActiveView] = useState("exterior");

  useEffect(() => {
    setCars(carsData);
  }, []);

  const openWhatsApp = (num) => {
    window.open(`https://wa.me/${num}`, "_blank");
  };

  const callNow = (num) => {
    window.location.href = `tel:${num}`;
  };

  const openCar = (car, view) => {
    setSelectedCar(car);
    setActiveView(view);
  };

  const images =
    activeView === "interior"
      ? selectedCar?.images?.interior || []
      : selectedCar?.images?.exterior || [];

  const currentImage = images[0] || "/car.jpeg";

  return (
    <section className="mt-8 p-1 bg-[#f9fafb] min-h-screen">

      {/* HEADER */}
      <h2 className="text-2xl font-light tracking-wide text-[#111827] mb-6">
        Popular cars near you
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition"
          >

            {/* IMAGE */}
            <img
              src={car.images.exterior[0]}
              className="w-full h-56 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5 space-y-3">

              {/* TITLE */}
              <h3 className="text-xl font-medium text-[#111827]">
                {car.name}
              </h3>

              {/* DEALER + LOCATION */}
              <p className="text-sm text-[#6b7280] flex items-center gap-2">
                <MapPin size={14} />
                {car.dealer} • {car.location}
              </p>

              {/* SPECS */}
              <div className="text-sm text-[#4b5563] flex gap-4 pt-1">
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.transmission}</span>
                <span>📅 {car.year}</span>
              </div>

              {/* 💰 PRICING */}
              <div className="text-xs text-[#374151] flex flex-wrap gap-2 pt-1">
                <span className="bg-[#f3f4f6] px-2 py-1 rounded">
                  Daily: {car.pricing.daily}
                </span>
                <span className="bg-[#f3f4f6] px-2 py-1 rounded">
                  Weekly: {car.pricing.weekly}
                </span>
                <span className="bg-[#f3f4f6] px-2 py-1 rounded">
                  Monthly: {car.pricing.monthly}
                </span>
              </div>

              {/* 🛡 SERVICES */}
              <div className="text-xs flex gap-2 pt-1">
                {car.services.insurance && (
                  <span className="px-2 py-1 bg-[#ecfdf5] text-[#047857] rounded">
                    Insurance
                  </span>
                )}
                {car.services.delivery && (
                  <span className="px-2 py-1 bg-[#eff6ff] text-[#1d4ed8] rounded">
                    Delivery
                  </span>
                )}
              </div>

              {/* VIEW OPTIONS */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => openCar(car, "exterior")}
                  className={`text-xs px-3 py-1 rounded-full border transition ${
                    activeView === "exterior"
                      ? "bg-black text-white"
                      : "text-[#4b5563]"
                  }`}
                >
                  Exterior
                </button>

                <button
                  onClick={() => openCar(car, "interior")}
                  className={`text-xs px-3 py-1 rounded-full border transition ${
                    activeView === "interior"
                      ? "bg-black text-white"
                      : "text-[#4b5563]"
                  }`}
                >
                  Interior
                </button>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 pt-3">
                <button
                  onClick={() => openWhatsApp(car.whatsapp)}
                  className="flex-1 bg-[#25D366] text-white py-2 rounded-lg text-sm"
                >
                  WhatsApp
                </button>

                <button
                  onClick={() => callNow(car.phone)}
                  className="flex-1 border border-[#d1d5db] text-[#111827] py-2 rounded-lg text-sm"
                >
                  Call
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

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

            {/* IMAGE */}
            <div className="w-full h-[420px] bg-[#f3f4f6]">
              <img
                src={currentImage}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="p-6 space-y-3">

              <h3 className="text-lg font-medium text-[#111827]">
                {selectedCar.name}
              </h3>

              <p className="text-sm text-[#6b7280] flex items-center gap-2">
                <MapPin size={14} />
                {selectedCar.dealer} • {selectedCar.location}
              </p>

              <div className="text-sm text-[#4b5563] flex gap-6 pt-2">
                <span>⛽ {selectedCar.fuel}</span>
                <span>⚙ {selectedCar.transmission}</span>
                <span>📅 {selectedCar.year}</span>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}