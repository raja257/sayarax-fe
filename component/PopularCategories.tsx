"use client";

import { useRouter } from "next/navigation";

type Lang = "en" | "ar";

export default function BrowseByType({ lang = "ar" }: { lang?: Lang }) {
  const router = useRouter();

  const t = (field: { en: string; ar: string }) =>
    lang === "ar" ? field.ar : field.en;

  const carTypes = [
    {
      id: "sedan",
      title: { en: "Sedan", ar: "سيدان" },
      desc: { en: "Daily drive", ar: "قيادة يومية" },
      image:
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80",
      href: "/browse/sedan",
    },
    {
      id: "suv",
      title: { en: "SUV", ar: "دفع رباعي" },
      desc: { en: "Family trips", ar: "رحلات عائلية" },
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?w=400",
      href: "/browse/suv",
    },
    {
      id: "luxury",
      title: { en: "Luxury", ar: "فخمة" },
      desc: { en: "Premium cars", ar: "سيارات فاخرة" },
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
      href: "/browse/luxury",
    },
    {
      id: "sports",
      title: { en: "Sports", ar: "رياضية" },
      desc: {
        en: "High-performance vehicles",
        ar: "سيارات عالية الأداء",
      },
      image:
        "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=400&q=80",
      href: "/browse/pickup",
    },
    {
      id: "hatchback",
      title: { en: "Hatchback", ar: "هاتشباك" },
      desc: { en: "City cruiser", ar: "للتنقل داخل المدينة" },
      image:
        "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?w=400",
      href: "/browse/hatchback",
    },
    {
      id: "van",
      title: { en: "Van", ar: "فان" },
      desc: { en: "Group travel", ar: "سفر جماعي" },
      image:
        "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&q=80",
      href: "/browse/van",
    },
  ];

  return (
    <section
      className="mt-10 md:mt-14"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className="mb-4 flex items-end justify-between">
        <div className={lang === "ar" ? "text-right" : "text-left"}>
          <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
            {lang === "ar" ? "تصفح حسب النوع" : "Browse by type"}
          </h2>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            {lang === "ar"
              ? "اختر السيارة المناسبة لك"
              : "Choose the car that fits you"}
          </p>
        </div>

        <button
          onClick={() => router.push("/browse")}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          {lang === "ar" ? "عرض الكل" : "View all"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2.5 md:grid-cols-6 md:gap-4">
        {carTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => router.push(type.href)}
            className="group relative h-28 overflow-hidden rounded-2xl text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md active:scale-[0.98] md:h-36 bg-slate-300"
          >
            {/* Image */}
            <img
              src={type.image}
              alt={t(type.title)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display =
                  "none";
              }}
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-2.5 md:p-3 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <p className="text-xs font-bold text-white md:text-sm leading-tight">
                {t(type.title)}
              </p>

              <p className="mt-0.5 text-[10px] text-white/65 leading-3">
                {t(type.desc)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}