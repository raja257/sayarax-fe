"use client";

import { useRouter } from "next/navigation";

const carTypes = [
  {
    id: "sedan",
    title: "Sedan",
    desc: "Daily drive",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80",
    href: "/browse/sedan",
  },
  {
    id: "suv",
    title: "SUV",
    desc: "Family trips",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=400&q=80",
    href: "/browse/suv",
  },
  {
    id: "luxury",
    title: "Luxury",
    desc: "Premium cars",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
    href: "/browse/luxury",
  },
  {
    id: "pickup",
    title: "Pickup",
    desc: "Heavy hauling",
    image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=400&q=80",
    href: "/browse/pickup",
  },
  {
    id: "hatchback",
    title: "Hatchback",
    desc: "City cruiser",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80",
    href: "/browse/hatchback",
  },
  {
    id: "van",
    title: "Van",
    desc: "Group travel",
  image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&q=80",
    href: "/browse/van",
  },
];

export default function BrowseByType() {
  const router = useRouter();

  return (
    <section className="mt-10 md:mt-14">
      {/* Header */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
            Browse by type
          </h2>
          <p className="mt-1 text-sm text-slate-500 md:text-base">
            Choose the car that fits you
          </p>
        </div>
        <button
          onClick={() => router.push("/browse")}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          View all
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2.5 md:grid-cols-6 md:gap-4">
        {carTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => router.push(type.href)}
            className="group relative overflow-hidden rounded-2xl text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md active:scale-[0.98] h-28 md:h-36 bg-slate-300"
          >
            {/* Background image */}
            <img
              src={type.image}
              alt={type.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3">
              <p className="text-xs font-bold text-white md:text-sm leading-tight">
                {type.title}
              </p>
              <p className="text-[10px] text-white/65 mt-0.5 leading-3">
                {type.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}