"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PlaneLanding,
  Car,
  UserRound,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import SearchWrapper from "./SearchWrapper";
import BookingSearchHero from "./HomeSearchActions";

const options = [
  {
    title: "Airport Pickup",
    desc: "Car delivered at airport",
    icon: PlaneLanding,
    href: "/booking/airport",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    title: "Regular Booking",
    desc: "Pickup from dealership",
    icon: Car,
    href: "/booking/normal",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    title: "Khareef Packages",
    desc: "Car with trusted driver",
    icon: UserRound,
    href: "/booking/driver",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
  {
    title: "Monthly Rental",
    desc: "Long-term rental deals",
    icon: CalendarDays,
    href: "/booking/monthly",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
  },
];

const todayISO = new Date().toISOString().split("T")[0];

export default function BookingOptions() {
  const router = useRouter();

  const goToBooking = (href: string) => {
    router.push(`options`);
  };

  return (
    <>
      <section className="mt-8 md:mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
              Choose your booking
            </h2>
            <p className="mt-1 text-sm text-slate-500 md:text-base">
              Select how you want to rent your car
            </p>
          </div>

          <button
            onClick={() => router.push("/search/advanced")}
            className="hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 md:block"
          >
            Advanced Search
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {options.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={() => goToBooking(item.href)}
                className="group relative overflow-hidden rounded-3xl text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] h-36 md:h-48"
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                {/* Icon + arrow row */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-white/40">
                    <ArrowRight className="h-3.5 w-3.5 text-white transition group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-sm font-bold text-white md:text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/70 leading-4">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}