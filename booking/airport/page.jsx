"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  PlaneLanding,
  MapPin,
  CalendarDays,
  Clock3,
  Car,
  UserRound,
  Search,
  Hash,
  Wallet,
  X,
  CheckCircle2,
} from "lucide-react";

const todayISO = new Date().toISOString().split("T")[0];

const carTypes = ["Any", "Sedan", "SUV", "Luxury", "7 Seater"];

const places = [
  "Ghubrah, Muscat, Oman",
  "Al Khuwair, Muscat, Oman",
  "Seeb, Muscat, Oman",
  "Muttrah, Muscat, Oman",
];

export default function AirportBookingPage() {
  const router = useRouter();

  const [pickupAirport, setPickupAirport] = useState(
    "Muscat International Airport"
  );
  const [dropLocation, setDropLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [arrivalDate, setArrivalDate] = useState(todayISO);
  const [arrivalTime, setArrivalTime] = useState("10:00");
  const [flightNumber, setFlightNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [driverOption, setDriverOption] = useState("with_driver");
  const [carType, setCarType] = useState("SUV");

  const handleSearch = () => {
    const params = new URLSearchParams({
      pickupAirport,
      dropLocation,
      arrivalDate,
      arrivalTime,
      flightNumber,
      budget,
      driverOption,
      carType,
      bookingType: "airport",
    });

    router.push(`/search/advanced?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-white pb-28">
      {/* content */}
      <section className="px-4 pt-5">
        <button
          onClick={() => router.back()}
          className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* title */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
            <PlaneLanding className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-blue-600">
              Airport Pickup
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-slate-950">
              Arrive & drive
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              We’ll have your car ready when you land.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
          {/* pickup airport */}
          <label className="mb-3 block rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <MapPin className="h-4 w-4" />
              Pickup airport
            </div>

            <div className="flex items-center gap-2">
              <input
                value={pickupAirport}
                onChange={(e) => setPickupAirport(e.target.value)}
                className="w-full bg-transparent text-base font-bold text-slate-950 outline-none"
              />

              <button
                type="button"
                onClick={() => setPickupAirport("")}
                className="text-slate-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </label>

          {/* drop location */}
          <div className="relative mb-3">
            <label className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-blue-300">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
                <MapPin className="h-4 w-4" />
                Drop location
              </div>

              <div className="flex items-center gap-2">
                <input
                  value={dropLocation}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => {
                    setDropLocation(e.target.value);
                    setShowSuggestions(true);
                  }}
                  placeholder="Search drop location"
                  className="w-full bg-transparent text-base font-bold text-slate-950 placeholder:text-slate-400 outline-none"
                />

                {dropLocation && (
                  <button
                    type="button"
                    onClick={() => setDropLocation("")}
                    className="text-slate-400"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </label>

            {showSuggestions && (
              <div className="absolute left-0 right-0 top-[104%] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                {places.map((place) => (
                  <button
                    key={place}
                    type="button"
                    onClick={() => {
                      setDropLocation(place);
                      setShowSuggestions(false);
                    }}
                    className="flex w-full gap-3 px-4 py-3 text-left hover:bg-slate-50"
                  >
                    <MapPin className="mt-1 h-4 w-4 text-slate-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {place}
                      </p>
                      <p className="text-xs text-slate-400">Muscat</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* date/time */}
          <div className="grid grid-cols-2 gap-3">
            <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <CalendarDays className="h-4 w-4" />
                Arrival date
              </div>
              <input
                type="date"
                min={todayISO}
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full bg-transparent text-base font-bold text-slate-950 outline-none"
              />
            </label>

            <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Clock3 className="h-4 w-4" />
                Arrival time
              </div>
              <input
                type="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="w-full bg-transparent text-base font-bold text-slate-950 outline-none"
              />
            </label>
          </div>

          {/* flight */}
          <label className="mt-3 block rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Hash className="h-4 w-4" />
              Flight number{" "}
              <span className="text-xs font-normal text-slate-400">
                Optional
              </span>
            </div>
            <input
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="Example: WY101"
              className="w-full bg-transparent text-base font-bold text-slate-950 placeholder:text-slate-400 outline-none"
            />
          </label>

          {/* budget */}
          <label className="mt-3 block rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Wallet className="h-4 w-4" />
              Budget / day{" "}
              <span className="text-xs font-normal text-slate-400">
                Optional
              </span>
            </div>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Example: 15 OMR"
              className="w-full bg-transparent text-base font-bold text-slate-950 placeholder:text-slate-400 outline-none"
            />
          </label>

          {/* driver */}
          <div className="mt-5">
            <p className="mb-2 text-sm font-bold text-slate-900">
              Driver option
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDriverOption("without_driver")}
                className={`relative rounded-2xl border p-4 text-left ${
                  driverOption === "without_driver"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                {driverOption === "without_driver" && (
                  <CheckCircle2 className="absolute right-3 top-3 h-5 w-5" />
                )}
                <Car className="mb-3 h-5 w-5" />
                <p className="text-sm font-bold">Without Driver</p>
                <p className="mt-1 text-xs opacity-70">Self drive</p>
              </button>

              <button
                type="button"
                onClick={() => setDriverOption("with_driver")}
                className={`relative rounded-2xl border p-4 text-left ${
                  driverOption === "with_driver"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                {driverOption === "with_driver" && (
                  <CheckCircle2 className="absolute right-3 top-3 h-5 w-5" />
                )}
                <UserRound className="mb-3 h-5 w-5" />
                <p className="text-sm font-bold">With Driver</p>
                <p className="mt-1 text-xs opacity-70">Driver included</p>
              </button>
            </div>
          </div>

          {/* car type */}
          <div className="mt-5">
            <p className="mb-2 text-sm font-bold text-slate-900">Car type</p>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {carTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCarType(type)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${
                    carType === type
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-4 text-base font-bold text-white active:scale-[0.98]"
          >
            <Search className="h-5 w-5" />
            Show Available Cars
          </button>
        </div>
      </section>
    </main>
  );
}