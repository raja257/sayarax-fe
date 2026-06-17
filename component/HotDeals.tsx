"use client";

import { MapPin, ArrowRight, Clock } from "lucide-react";

export default function TourismPackages() {
  const packages = [
    {
      title: "Muscat City Ride",
      desc: "Perfect for city visits",
      price: "From 18 OMR",
      duration: "1 day",
      area: "Muscat",
    },
    {
      title: "Airport + Hotel",
      desc: "Pickup and drop service",
      price: "From 12 OMR",
      duration: "Same day",
      area: "Airport",
    },
    {
      title: "Salalah Trip",
      desc: "SUV for long drive",
      price: "From 35 OMR",
      duration: "Daily",
      area: "Salalah",
    },
    {
      title: "Family Weekend",
      desc: "SUV / 7 seater cars",
      price: "From 25 OMR",
      duration: "2 days",
      area: "Oman",
    },
  ];

  return (
    <section className="mt-7">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Travel packages
          </h2>
          <p className="text-sm text-slate-500">
            Explore Oman with ready car plans
          </p>
        </div>

        <button className="text-sm font-semibold text-slate-500">
          View all
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
        {packages.map((item) => (
          <button
            key={item.title}
            className="min-w-[235px] rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm transition active:scale-[0.98]"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {item.duration}
              </span>

              <ArrowRight className="h-4 w-4 text-slate-400" />
            </div>

            <h3 className="text-base font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {item.price}
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <MapPin className="h-3 w-3" />
                  {item.area}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}