"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  Wallet,
  ChevronDown,
  Plus,
} from "lucide-react";

const todayISO = new Date().toISOString().split("T")[0];

const savedLocations = [
  { id: 1, label: "Home", address: "Al Khuwair, Muscat" },
  { id: 2, label: "Office", address: "Ghubrah, Muscat" },
  { id: 3, label: "Airport", address: "Muscat International Airport" },
];

const tomorrowISO = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

export default function BookingSearchHero() {
  const router = useRouter();

  const [pickupDate, setPickupDate] = useState(todayISO);
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState(tomorrowISO());
  const [returnTime, setReturnTime] = useState("10:00");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState(savedLocations[0].address);
  const [openLocation, setOpenLocation] = useState(false);

  const handlePickupDate = (value) => {
    setPickupDate(value);

    if (returnDate < value) {
      setReturnDate(value);
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      location,
      budget,
    });

    router.push(`/search/advanced?${params.toString()}`);
  };

  return (
    <section className="mt-8 ">
      <div className="rounded-[10px] md:mt-10 lg:mt-10 md:p-10 bg-[#0B1220] p-4 shadow-lg">
        <div>
          <p className="text-xs font-medium text-blue-300">Ready to rent?</p>
          <h2 className="text-xl font-bold text-white">
            Find your car in Muscat
          </h2>
        </div>

        {/* Location */}
        <div className="relative mt-4">
          <button
            type="button"
            onClick={() => setOpenLocation(!openLocation)}
            className="flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left"
          >
            <MapPin className="h-5 w-5 text-blue-600" />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-slate-500">Pickup Location</p>
              <p className="truncate text-sm font-bold text-slate-900">
                {location}
              </p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          {openLocation && (
            <div className="absolute left-0 right-0 top-[105%] z-50 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              {savedLocations.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setLocation(item.address);
                    setOpenLocation(false);
                  }}
                  className="w-full rounded-xl px-3 py-2 text-left hover:bg-slate-50"
                >
                  <p className="text-sm font-bold text-slate-900">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500">{item.address}</p>
                </button>
              ))}

              <button
                type="button"
                onClick={() => router.push("/locations/add")}
                className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-blue-600 hover:bg-blue-50"
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm font-semibold">Add new location</span>
              </button>
            </div>
          )}
        </div>

        {/* Date + Time */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <label className="rounded-2xl bg-white/10 px-3 py-2.5">
            <div className="mb-1 flex items-center gap-1 text-[11px] text-slate-400">
              <CalendarDays className="h-4 w-4 text-blue-300" />
              Pickup Date
            </div>
            <input
              type="date"
              min={todayISO}
              value={pickupDate}
              onChange={(e) => handlePickupDate(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"
            />
          </label>

          <label className="rounded-2xl bg-white/10 px-3 py-2.5">
            <div className="mb-1 flex items-center gap-1 text-[11px] text-slate-400">
              <Clock3 className="h-4 w-4 text-blue-300" />
              Pickup Time
            </div>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"
            />
          </label>

          <label className="rounded-2xl bg-white/10 px-3 py-2.5">
            <div className="mb-1 flex items-center gap-1 text-[11px] text-slate-400">
              <CalendarDays className="h-4 w-4 text-blue-300" />
              Return Date
            </div>
            <input
              type="date"
              min={pickupDate}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"
            />
          </label>

          <label className="rounded-2xl bg-white/10 px-3 py-2.5">
            <div className="mb-1 flex items-center gap-1 text-[11px] text-slate-400">
              <Clock3 className="h-4 w-4 text-blue-300" />
              Return Time
            </div>
            <input
              type="time"
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"
            />
          </label>
        </div>

        {/* Budget + Search */}
        <div className="mt-3 flex gap-2">
          <label className="flex flex-1 items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
            <Wallet className="h-5 w-5 text-blue-300" />
            <input
              type="number"
              min="1"
              placeholder="Budget / day"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-white placeholder:text-slate-400 outline-none"
            />
          </label>

          <button
            type="button"
            onClick={handleSearch}
            className="flex h-[48px] w-[56px] items-center justify-center rounded-2xl bg-blue-600 active:scale-[0.98]"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}