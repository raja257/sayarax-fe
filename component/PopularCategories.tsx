"use client";

import { Car, Truck, Star, Users, Wallet } from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Sedan", desc: "Daily drive", icon: Car },
    { name: "SUV", desc: "Family trips", icon: Truck },
    { name: "Luxury", desc: "Premium cars", icon: Star },
    { name: "Family", desc: "More seats", icon: Users },
    { name: "Budget", desc: "Best price", icon: Wallet },
  ];

  return (
    <section className="mt-7">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Browse by type</h2>
          <p className="text-sm text-slate-500">Choose the car that fits you</p>
        </div>

        <button className="text-sm font-semibold text-slate-500">View all</button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <button
              key={cat.name}
              className="min-w-[135px] rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition active:scale-[0.98]"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                <Icon className="h-6 w-6 text-slate-700" />
              </div>

              <h3 className="text-sm font-bold text-slate-900">{cat.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{cat.desc}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}