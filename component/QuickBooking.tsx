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
import { useLanguage } from "../context/LanguageContext";

const options = [
  {
    title: {
      en: "Airport Pickup",
      ar: "استلام من المطار",
    },
    desc: {
      en: "Car delivered at airport",
      ar: "توصيل السيارة إلى المطار",
    },
    icon: PlaneLanding,
    href: "/options?type=air_port",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    title: {
      en: "Regular Booking",
      ar: "حجز عادي",
    },
    desc: {
      en: "Pickup from dealership",
      ar: "استلام من المعرض",
    },
    icon: Car,
    href: "/options?type=regular_book",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    title: {
      en: "Khareef Packages",
      ar: "باقات الخريف",
    },
    desc: {
      en: "Car with trusted driver",
      ar: "سيارة مع سائق موثوق",
    },
    icon: UserRound,
    href: "/booking/driver",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
  {
    title: {
      en: "Monthly Rental",
      ar: "تأجير شهري",
    },
    desc: {
      en: "Long-term rental deals",
      ar: "عروض تأجير طويلة المدى",
    },
    icon: CalendarDays,
    href: "/options?type=monthly",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
  },
];

const todayISO = new Date().toISOString().split("T")[0];

export default function BookingOptions({}) {
  const router = useRouter();
  const { lang, t } = useLanguage();

  const goToBooking = (href: string) => {
    router.push(href);
  };

  return (
    <section className="mt-8 md:mt-10" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div className={lang === "ar" ? "text-right" : "text-left"}>
          <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
            {lang === "ar" ? "اختر طريقة الحجز" : "Choose your booking"}
          </h2>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            {lang === "ar"
              ? "اختر الطريقة التي تريد استئجار السيارة بها"
              : "Select how you want to rent your car"}
          </p>
        </div>

        <button
          onClick={() => router.push("/search/advanced")}
          className="hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 md:block"
        >
          {lang === "ar" ? "بحث متقدم" : "Advanced Search"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {options.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.href}
              onClick={() => goToBooking(item.href)}
              className="group relative h-36 overflow-hidden rounded-3xl text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] md:h-48"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={t(item.title)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

              {/* Top icons */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <ArrowRight
                    className={`h-3.5 w-3.5 text-white transition ${
                      lang === "ar"
                        ? "rotate-180"
                        : "group-hover:translate-x-0.5"
                    }`}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-sm font-bold text-white md:text-base leading-tight">
                  {t(item.title)}
                </h3>

                <p className="mt-0.5 text-xs text-white/70 leading-4">
                  {t(item.desc)}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
