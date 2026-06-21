"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PlaneLanding,
  Car,
  UserRound,
  CalendarDays,
  ArrowRight,
  MapPin,
} from "lucide-react";
import SearchWrapper from "./SearchWrapper";
import BookingSearchHero from "./HomeSearchActions";
const options = [
  { title: "Airport Pickup", desc: "Car delivered at airport", icon: PlaneLanding, href: "/booking/airport" },
  { title: "Normal Booking", desc: "Pickup from dealership", icon: Car, href: "/booking/normal" },
  { title: "With Driver", desc: "Car with trusted driver", icon: UserRound, href: "/booking/driver" },
  { title: "Monthly Rental", desc: "Long-term rental deals", icon: CalendarDays, href: "/booking/monthly" },
];

const todayISO = new Date().toISOString().split("T")[0];

const formatDate = (date:any) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

export default function BookingOptions() {
  const router = useRouter();
  const [pickupDate, setPickupDate] = useState(todayISO);
  const [returnDate, setReturnDate] = useState(todayISO);

  const goToBooking = (href:any) => {
    router.push(`options`);
  };

  return (
    <>
    {/* <BookingSearchHero /> */}
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
                className="group rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md active:scale-[0.98] md:min-h-[190px] md:p-5"
              >
                <div className="mb-4 flex items-center justify-between md:mb-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600 md:h-14 md:w-14">
                    <Icon className="h-6 w-6 text-blue-600 transition group-hover:text-white md:h-7 md:w-7" />
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 md:text-lg">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-4 text-slate-500 md:mt-2 md:text-sm md:leading-5">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}