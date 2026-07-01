// "use client";

// import { useState } from "react";
// import {
//   Plane,
//   Building2,
//   Filter,
//   Truck,
//   CarFront,
//   Car,
//   Crown,
//   ChevronRight,
//   Star,
//   Building,
//   Bell,
//   PlaneTakeoff,
//   Clock,
// } from "lucide-react";
// import FeaturedCars from "../component/FeaturedCars";
// import { DealerShipCard } from "../component/DealerShip";

// export default function AirportPickupPage() {
//   const [selectedBody, setSelectedBody] = useState(null);
//   const [activeTab, setActiveTab] = useState("brands");
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [selectedModels, setSelectedModels] = useState([]);

//   const dealerships = [
//     { name: "Auto King", cars: 120 ,verified: true, rating: 4.5, location: "Muscat" },
//     { name: "Muscat Motors", cars: 85,verified: true, rating: 4.2, location: "Muscat" },
//     { name: "Elite Rentals", cars: 60,verified: false, rating: 4.0, location: "Muscat" },
//   ];

//   const bodyTypes = [
//     { name: "SUV", icon: Truck },
//     { name: "Sedan", icon: CarFront },
//     { name: "Coupe", icon: Car },
//     { name: "Hatchback", icon: Car },
//     { name: "Pickup", icon: Truck },
//     { name: "Luxury", icon: Crown },
//   ];

//   const brands = [
//     { name: "Toyota" },
//     { name: "BMW" },
//     { name: "Mercedes" },
//     { name: "Nissan" },
//   ];

//   const modelsByBrand = {
//     Toyota: ["Corolla", "Camry", "Prado"],
//     BMW: ["X1", "X5", "M3"],
//     Mercedes: ["C200", "E300", "G63"],
//     Nissan: ["Sunny", "Patrol", "Altima"],
//   };
// const carTypes = [
//   {
//     id: "sedan",
//     title: "Sedan",
//     desc: "Daily drive",
//     image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80",
//     href: "/browse/sedan",
//   },
//   {
//     id: "suv",
//     title: "SUV",
//     desc: "Family trips",
//     image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?w=400",
//     href: "/browse/suv",
//   },
//   {
//     id: "luxury",
//     title: "Luxury",
//     desc: "Premium cars",
//     image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
//     href: "/browse/luxury",
//   },
//   {
//     id: "sports",
//     title: "Sports",
//     desc: "High-performance vehicles",
//     image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=400&q=80",
//     href: "/browse/pickup",
//   },
//   {
//     id: "hatchback",
//     title: "Hatchback",
//     desc: "City cruiser",
//     image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?w=400",
//     href: "/browse/hatchback",
//   },
//   {
//     id: "van",
//     title: "Van",
//     desc: "Group travel",
//   image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&q=80",
//     href: "/browse/van",
//   },
// ];
//   return (
//     <div className="min-h-screen overflow-x-hidden bg-slate-50 pb-24">
// {/* AIRPORT PICKUP HEADER — light, card-based */}
// <section className="bg-white px-4 py-4 shadow-sm sm:px-6 sm:py-5 lg:px-8 border border-slate-100">
//   <div className="mx-auto flex max-w-6xl flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
//     {/* Identity row: solid icon block + title + bell */}
//     <div className="flex items-center justify-between gap-3 lg:justify-start lg:gap-3.5">
//       <div className="flex min-w-0 items-center gap-3 lg:gap-3.5">
//         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-blue-600 sm:h-12 sm:w-12">
//           <PlaneTakeoff size={20} className="text-white" />
//         </div>
//         <div className="min-w-0">
//           <h1 className="truncate text-[17px] font-semibold tracking-tight text-slate-900 sm:text-lg lg:text-[19px]">
//             Airport pickup
//           </h1>
//           <p className="truncate text-xs text-slate-500 lg:text-[13px]">
//             <span className="lg:hidden">Premium rides, trusted dealers</span>
//             <span className="hidden lg:inline">
//               Premium rides with trusted dealerships
//             </span>
//           </p>
//         </div>
//       </div>

//       <button
//         aria-label="Notifications"
//         className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-slate-200 bg-slate-50 lg:hidden"
//       >
//         <Bell size={16} className="text-slate-500" />
//       </button>
//     </div>

//     {/* Pill stats row */}
//     <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
//       <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 sm:text-xs">
//         <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//         24/7 available
//       </span>
//       <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 sm:text-xs">
//         <Star size={10} className="fill-amber-500 text-amber-500" />
//         4.9 rating
//       </span>
//       <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:text-xs">
//         <Clock size={10} />
//         12 min wait
//       </span>

//       <button
//         aria-label="Notifications"
//         className="ml-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 lg:flex"
//       >
//         <Bell size={17} className="text-slate-500" />
//       </button>
//     </div>
//   </div>
// </section>

//     {/* DEALERSHIPS */}
//     <DealerShipCard dealership={dealerships} />
// {/* DEALERSHIPS */}

//       {/* BODY TYPES */}
//       <section className="mt-8 px-5">
//         <h2 className="mb-3 text-lg font-semibold text-slate-900">
//           Choose body type
//         </h2>

//         <div
//           className="flex gap-3 overflow-x-auto no-scrollbar scroll-px-5 snap-x snap-mandatory -mx-5 px-5 pb-1"
//           role="radiogroup"
//           aria-label="Body type"
//         >
//           {bodyTypes.map((type) => {
//             const Icon = type.icon;
//             const isSelected = selectedBody === type.name;

//             return (
//               <button
//                 key={type.name}
//                 role="radio"
//                 aria-checked={isSelected}
//                 onClick={() => {
//                   setSelectedBody(type.name);
//                   setSelectedBrand(null);
//                   setSelectedModels([]);
//                   setActiveTab("brands");
//                 }}
//                 className={`min-w-[92px] sm:min-w-[108px] shrink-0 snap-start rounded-2xl border-[1.5px] p-3 sm:p-4 transition-all duration-150 active:scale-95 ${
//                   isSelected
//                     ? "border-blue-600 bg-blue-50"
//                     : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
//                 }`}
//               >
//                 <div className="flex flex-col items-center gap-2">
//                   <div
//                     className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
//                       isSelected ? "bg-white" : "bg-slate-50"
//                     }`}
//                   >
//                     <Icon
//                       size={20}
//                       className={
//                         isSelected ? "text-blue-600" : "text-slate-500"
//                       }
//                     />
//                   </div>

//                   <p
//                     className={`text-xs sm:text-sm font-medium text-center leading-tight ${
//                       isSelected ? "text-blue-700" : "text-slate-700"
//                     }`}
//                   >
//                     {type.name}
//                   </p>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </section>

      
//       {/* FILTERS */}
//       {selectedBody && (
//         <section className="mt-8 px-5">
//           {/* SELECTED FILTERS */}
//           <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => {
//                   setSelectedBody(null);
//                   setSelectedBrand(null);
//                   setSelectedModels([]);
//                 }}
//                 className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
//               >
//                 {selectedBody} ✕
//               </button>

//               {selectedBrand && (
//                 <button
//                   onClick={() => {
//                     setSelectedBrand(null);
//                     setSelectedModels([]);
//                   }}
//                   className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
//                 >
//                   {selectedBrand} ✕
//                 </button>
//               )}

//               {selectedModels.map((model) => (
//                 <button
//                   key={model}
//                   onClick={() =>
//                     setSelectedModels((prev) =>
//                       prev.filter((item) => item !== model),
//                     )
//                   }
//                   className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700"
//                 >
//                   {model} ✕
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* TABS */}
//           <div className="flex gap-2 rounded-2xl bg-white p-1 shadow-sm">
//             <button
//               onClick={() => setActiveTab("brands")}
//               className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
//                 activeTab === "brands"
//                   ? "bg-blue-600 text-white"
//                   : "text-slate-600"
//               }`}
//             >
//               Brands
//             </button>

//             <button
//               onClick={() => setActiveTab("models")}
//               disabled={!selectedBrand}
//               className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
//                 activeTab === "models"
//                   ? "bg-blue-600 text-white"
//                   : "text-slate-600"
//               } ${!selectedBrand && "opacity-50"}`}
//             >
//               Models
//             </button>
//           </div>

//           {/* BRANDS */}
//           {activeTab === "brands" && (
//             <div className="mt-5 grid grid-cols-2 gap-3">
//               {brands.map((brand) => (
//                 <button
//                   key={brand.name}
//                   onClick={() => {
//                     setSelectedBrand(brand.name);
//                     setSelectedModels([]);
//                     setActiveTab("models");
//                   }}
//                   className={`rounded-3xl border p-4 text-sm font-medium transition-all ${
//                     selectedBrand === brand.name
//                       ? "border-blue-600 bg-blue-50 text-blue-700"
//                       : "border-slate-200 bg-white"
//                   }`}
//                 >
//                   {brand.name}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* MODELS */}
//           {activeTab === "models" && selectedBrand && (
//             <div className="mt-5 grid grid-cols-2 gap-3">
//               {modelsByBrand[selectedBrand]?.map((model) => (
//                 <button
//                   key={model}
//                   onClick={() => {
//                     setSelectedModels((prev) =>
//                       prev.includes(model)
//                         ? prev.filter((item) => item !== model)
//                         : [...prev, model],
//                     );
//                   }}
//                   className={`rounded-3xl border p-4 text-sm font-medium transition-all ${
//                     selectedModels.includes(model)
//                       ? "border-amber-500 bg-amber-50 text-amber-700"
//                       : "border-slate-200 bg-white"
//                   }`}
//                 >
//                   {model}
//                 </button>
//               ))}
//             </div>
//           )}
//         </section>
//       )}

//       {/* AVAILABLE CARS */}
//       <section className="mt-8 px-5">
//         {/* <div className="mb-3 flex items-center justify-between">
          

//           <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
//             <Filter size={15} />
//             Filters
//           </button>
//         </div> */}

//         <FeaturedCars
//           selectedBody={selectedBody}
//           selectedBrand={selectedBrand}
//           selectedModels={selectedModels}
//         />
//       </section>
//     </div>
//   );
// }


// app/page.jsx
// Single-file version: header, filter tabs, dynamic filter content, and listings.
// Requires Tailwind CSS (default with create-next-app). Drop this in as app/page.jsx.

"use client";

import { useMemo, useState } from "react";
import {
  Car,
  Tag,
  Layers,
  Wallet,
  Map,
  MapPin,
  Users,
  Cog,
  Fuel,
  Minus,
  Plus,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import FeaturedCars from "../component/FeaturedCars";

/* ---------------------------------- data ---------------------------------- */

const FILTER_TABS = [
  { key: "bodyType", label: "Body type", icon: Car },
  { key: "make", label: "Make", icon: Tag },
  { key: "model", label: "Model", icon: Layers },
  { key: "budget", label: "Daily rate", icon: Wallet },
  { key: "governorate", label: "Governorate", icon: Map },
  { key: "state", label: "Wilayat", icon: MapPin },
];

const LABELS = {
  bodyType: "Body type",
  make: "Make",
  model: "Model",
  budget: "Daily rate",
  governorate: "Governorate",
  state: "Wilayat",
};

const BODY_TYPES = ["Sedan", "SUV", "Hatchback", "Pickup", "Coupe", "Van", "Convertible"];

const MAKES = ["Toyota", "Nissan", "Hyundai", "Kia", "Chevrolet", "Mitsubishi", "Ford"];

const MODELS_BY_MAKE = {
  Toyota: ["Land Cruiser", "Camry", "Corolla", "Hilux", "Fortuner", "Yaris"],
  Nissan: ["Patrol", "Altima", "Sunny", "X-Trail", "Navara"],
  Hyundai: ["Elantra", "Tucson", "Santa Fe", "Accent", "Creta"],
  Kia: ["Sportage", "Sorento", "Cerato", "Seltos", "Picanto"],
  Chevrolet: ["Tahoe", "Malibu", "Captiva", "Silverado"],
  Mitsubishi: ["Pajero", "Outlander", "L200", "Attrage"],
  Ford: ["Explorer", "F-150", "Edge", "EcoSport"],
};

const GOVERNORATE_WILAYATS = {
  Muscat: ["Muscat", "Muttrah", "Bawshar", "Seeb", "Al Amerat", "Qurayyat"],
  Dhofar: ["Salalah", "Taqah", "Mirbat", "Rakhyut", "Thumrait"],
  "Al Batinah North": ["Sohar", "Shinas", "Liwa", "Saham"],
  "Al Batinah South": ["Rustaq", "Nakhal", "Barka", "Al Musannah"],
  "Al Dakhiliyah": ["Nizwa", "Manah", "Bahla", "Adam"],
  "Al Sharqiyah North": ["Ibra", "Al Mudhaibi", "Wadi Bani Khalid"],
  "Al Sharqiyah South": ["Sur", "Al Kamil Wal Wafi", "Jalan Bani Bu Ali"],
  "Al Dhahirah": ["Ibri", "Yanqul", "Dhank"],
  "Al Buraimi": ["Al Buraimi", "Mahdah", "As Sunaynah"],
  Musandam: ["Khasab", "Bukha", "Daba"],
};

const BUDGET_PRESETS = [
  { label: "Under 10 OMR/day", min: 0, max: 10 },
  { label: "10 – 20 OMR/day", min: 10, max: 20 },
  { label: "20 – 30 OMR/day", min: 20, max: 30 },
  { label: "30 – 45 OMR/day", min: 30, max: 45 },
  { label: "45+ OMR/day", min: 45, max: Infinity },
];

const FLEET = [
  { id: "l1", title: "Toyota Land Cruiser GXR", make: "Toyota", model: "Land Cruiser", bodyType: "SUV", year: 2021, seats: 7, transmission: "Automatic", fuel: "Petrol", pricePerDay: 42, governorate: "Muscat", state: "Seeb" },
  { id: "l2", title: "Nissan Altima SV", make: "Nissan", model: "Altima", bodyType: "Sedan", year: 2019, seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 14, governorate: "Muscat", state: "Bawshar" },
  { id: "l3", title: "Hyundai Tucson Limited", make: "Hyundai", model: "Tucson", bodyType: "SUV", year: 2020, seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 21, governorate: "Al Batinah North", state: "Sohar" },
  { id: "l4", title: "Toyota Hilux Double Cabin", make: "Toyota", model: "Hilux", bodyType: "Pickup", year: 2018, seats: 5, transmission: "Manual", fuel: "Diesel", pricePerDay: 19, governorate: "Dhofar", state: "Salalah" },
  { id: "l5", title: "Kia Sportage EX", make: "Kia", model: "Sportage", bodyType: "SUV", year: 2022, seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 24, governorate: "Al Dakhiliyah", state: "Nizwa" },
  { id: "l6", title: "Chevrolet Malibu LT", make: "Chevrolet", model: "Malibu", bodyType: "Sedan", year: 2017, seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 11, governorate: "Muscat", state: "Muttrah" },
  { id: "l7", title: "Mitsubishi Pajero GLS", make: "Mitsubishi", model: "Pajero", bodyType: "SUV", year: 2020, seats: 7, transmission: "Automatic", fuel: "Diesel", pricePerDay: 27, governorate: "Al Buraimi", state: "Al Buraimi" },
  { id: "l8", title: "Ford EcoSport Titanium", make: "Ford", model: "EcoSport", bodyType: "Hatchback", year: 2019, seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 13, governorate: "Musandam", state: "Khasab" },
];

/* --------------------------------- pieces --------------------------------- */

function Chip({ label, active, onClick, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={[
        "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
        active
          ? "border-[#C1502E] bg-[#C1502E] text-white shadow-[0_2px_0_0_#8f3a1f]"
          : "border-[#DDD3BE] bg-white text-[#4A4438] hover:border-[#C1502E]/50 hover:text-[#C1502E]",
      ].join(" ")}
    >
      {Icon && <Icon size={15} strokeWidth={2} />}
      {label}
    </button>
  );
}

function FilterTab({ tab, isActive, isFilled, onClick }) {
  const Icon = tab.icon;
  return (
    <button
      onClick={onClick}
      className={[
        "flex shrink-0 items-center gap-2 border-b-2 px-4 py-3.5 text-sm font-semibold transition-colors",
        isActive
          ? "border-[#C1502E] text-[#1B1B18]"
          : "border-transparent text-[#8A8272] hover:text-[#1B1B18]",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-7 w-7 items-center justify-center rounded-full transition-colors",
          isActive ? "bg-[#C1502E] text-white" : "bg-[#F0EAD9] text-[#8A8272]",
        ].join(" ")}
      >
        <Icon size={14} strokeWidth={2.25} />
      </span>
      {tab.label}
      {isFilled && <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]" />}
      <ChevronDown
        size={14}
        className={["transition-transform", isActive ? "rotate-180" : ""].join(" ")}
      />
    </button>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function Page() {
  const [activeKey, setActiveKey] = useState("bodyType");
  const [selections, setSelections] = useState({});
  const [days, setDays] = useState(3);

  const filledKeys = useMemo(() => {
    const s = new Set();
    Object.keys(selections).forEach((k) => {
      if (selections[k] !== undefined) s.add(k);
    });
    return s;
  }, [selections]);

  function handleChange(key, value) {
    setSelections((prev) => ({ ...prev, [key]: value }));
  }

  function clearFilter(key) {
    setSelections((prev) => ({ ...prev, [key]: undefined }));
  }

  function selectTab(key) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  const filtered = useMemo(() => {
    return FLEET.filter((l) => {
      if (selections.bodyType && l.bodyType !== selections.bodyType) return false;
      if (selections.make && l.make !== selections.make) return false;
      if (selections.model && l.model !== selections.model) return false;
      if (selections.governorate && l.governorate !== selections.governorate) return false;
      if (selections.state && l.state !== selections.state) return false;
      if (
        selections.budget &&
        (l.pricePerDay < selections.budget.min || l.pricePerDay > selections.budget.max)
      )
        return false;
      return true;
    });
  }, [selections]);

  return (
    <main className="min-h-screen bg-[#F5F0E4] font-sans">
      {/* hero strip */}
      <div className="border-b border-[#E4D9BF] bg-[#EFE6D2]">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#1B1B18] sm:text-3xl">
            Pick a car, pick your days, drive.
          </h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[#6B6455]">
            <Search size={14} />
            Filter the fleet below — every price updates for your {days}-day trip.
          </p>
        </div>
      </div>

      {/* filter type tabs */}
      <div className="border-b border-[#E4D9BF] bg-[#FAF6EC]">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
          {FILTER_TABS.map((tab) => (
            <FilterTab
              key={tab.key}
              tab={tab}
              isActive={activeKey === tab.key}
              isFilled={filledKeys.has(tab.key)}
              onClick={() => selectTab(tab.key)}
            />
          ))}
        </div>
      </div>

      {/* content of the active filter */}
      {activeKey && (
        <div className="border-b border-[#E4D9BF] bg-white">
          <div className="mx-auto max-w-6xl px-4 py-5">
            {activeKey === "bodyType" && (
              <div className="flex flex-wrap gap-2">
                {BODY_TYPES.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    icon={Car}
                    active={selections.bodyType === type}
                    onClick={() =>
                      handleChange("bodyType", selections.bodyType === type ? undefined : type)
                    }
                  />
                ))}
              </div>
            )}

            {activeKey === "make" && (
              <div className="flex flex-wrap gap-2">
                {MAKES.map((make) => (
                  <Chip
                    key={make}
                    label={make}
                    icon={Tag}
                    active={selections.make === make}
                    onClick={() => {
                      const clearModel =
                        selections.model && !MODELS_BY_MAKE[make]?.includes(selections.model);
                      handleChange("make", selections.make === make ? undefined : make);
                      if (clearModel) handleChange("model", undefined);
                    }}
                  />
                ))}
              </div>
            )}

            {activeKey === "model" &&
              (selections.make ? (
                <div className="flex flex-wrap gap-2">
                  {MODELS_BY_MAKE[selections.make].map((model) => (
                    <Chip
                      key={model}
                      label={model}
                      icon={Layers}
                      active={selections.model === model}
                      onClick={() =>
                        handleChange("model", selections.model === model ? undefined : model)
                      }
                    />
                  ))}
                </div>
              ) : (
                <p className="flex items-center gap-2 text-sm text-[#8A8272]">
                  <Tag size={14} /> Choose a make first to see its models.
                </p>
              ))}

            {activeKey === "budget" && (
              <div className="flex flex-wrap gap-2">
                {BUDGET_PRESETS.map((preset) => {
                  const active =
                    selections.budget?.min === preset.min &&
                    selections.budget?.max === preset.max;
                  return (
                    <Chip
                      key={preset.label}
                      label={preset.label}
                      icon={Wallet}
                      active={active}
                      onClick={() =>
                        handleChange(
                          "budget",
                          active ? undefined : { min: preset.min, max: preset.max }
                        )
                      }
                    />
                  );
                })}
              </div>
            )}

            {activeKey === "governorate" && (
              <div className="flex flex-wrap gap-2">
                {Object.keys(GOVERNORATE_WILAYATS).map((gov) => (
                  <Chip
                    key={gov}
                    label={gov}
                    icon={Map}
                    active={selections.governorate === gov}
                    onClick={() => {
                      const clearState =
                        selections.state &&
                        !GOVERNORATE_WILAYATS[gov]?.includes(selections.state);
                      handleChange(
                        "governorate",
                        selections.governorate === gov ? undefined : gov
                      );
                      if (clearState) handleChange("state", undefined);
                    }}
                  />
                ))}
              </div>
            )}

            {activeKey === "state" &&
              (selections.governorate ? (
                <div className="flex flex-wrap gap-2">
                  {GOVERNORATE_WILAYATS[selections.governorate].map((w) => (
                    <Chip
                      key={w}
                      label={w}
                      icon={MapPin}
                      active={selections.state === w}
                      onClick={() =>
                        handleChange("state", selections.state === w ? undefined : w)
                      }
                    />
                  ))}
                </div>
              ) : (
                <p className="flex items-center gap-2 text-sm text-[#8A8272]">
                  <Map size={14} /> Choose a governorate first to see its wilayats.
                </p>
              ))}
          </div>
        </div>
      )}

      {/* applied filter chips */}
      {filledKeys.size > 0 && (
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pt-3">
          {Array.from(filledKeys).map((key) => {
            const value = selections[key];
            const text =
              key === "budget" && value
                ? `${value.min}–${value.max === Infinity ? "+" : value.max} OMR/day`
                : String(value);
            return (
              <span
                key={key}
                className="flex items-center gap-2 rounded-full bg-[#1B1B18] px-3 py-1 text-xs font-medium text-white"
              >
                {LABELS[key]}: {text}
                <button
                  onClick={() => clearFilter(key)}
                  aria-label={`Clear ${LABELS[key]} filter`}
                  className="text-white/50 hover:text-white"
                >
                  <X size={12} />
                </button>
              </span>
            );
          })}
        </div>
      )}

      {/* listings */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-base font-bold text-[#1B1B18]">
            {filtered.length} {filtered.length === 1 ? "car" : "cars"} available
          </h2>
          <p className="text-xs text-[#8A8272]">
            Prices shown for a {days}-day rental
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-[#DDD3BE] bg-white p-10 text-center">
            <Car size={22} className="text-[#C1502E]" />
            <p className="text-sm text-[#6B6455]">
              No cars match these filters yet. Clear one to see more of the fleet.
            </p>
          </div>
        ) : (
         
              <>
            <FeaturedCars />
            </>
         
        )}
      </div>
    </main>
  );
}