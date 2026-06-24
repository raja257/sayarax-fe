"use client";
import {
  Plane,
  Building2,
  Filter,
  Truck,
  CarFront,
  Car,
  Crown,
  ChevronRight,
  Star,
  Building,
  Bell,
  PlaneTakeoff,
  Clock,
} from "lucide-react";
export const DealerShipCard = ({ dealership }) => {
    return (    <section className="mt-6 px-5">
  <div className="mb-3 flex items-baseline justify-between">
    {/* <h2 className="text-lg font-semibold text-slate-900">
      Featured dealerships
    </h2>
    <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
      View all
      <ChevronRight size={16} />
    </button> */}
  </div>

  <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 pb-1">
    {dealership.map((d, i) => (
      <div
        key={i}
        className="min-w-[220px] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <Building size={22} className="text-blue-600" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">
              {d.name}
            </p>
            <p className="flex items-center gap-1 text-xs text-slate-500">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {d.rating} &middot; {d.location}
            </p>
          </div>
        </div>

        <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2.5">
          <span className="text-[13px] text-slate-500">
            {d.cars} cars available
          </span>
          {d.verified && (
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
              Verified
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
</section> )
}