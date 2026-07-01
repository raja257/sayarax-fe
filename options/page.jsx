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
import { useSearchParams } from "next/navigation";

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

const BODY_TYPES = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Pickup",
  "Coupe",
  "Van",
  "Convertible",
];

const MAKES = [
  "Toyota",
  "Nissan",
  "Hyundai",
  "Kia",
  "Chevrolet",
  "Mitsubishi",
  "Ford",
];

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
  {
    id: "l1",
    title: "Toyota Land Cruiser GXR",
    make: "Toyota",
    model: "Land Cruiser",
    bodyType: "SUV",
    year: 2021,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 42,
    governorate: "Muscat",
    state: "Seeb",
  },
  {
    id: "l2",
    title: "Nissan Altima SV",
    make: "Nissan",
    model: "Altima",
    bodyType: "Sedan",
    year: 2019,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 14,
    governorate: "Muscat",
    state: "Bawshar",
  },
  {
    id: "l3",
    title: "Hyundai Tucson Limited",
    make: "Hyundai",
    model: "Tucson",
    bodyType: "SUV",
    year: 2020,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 21,
    governorate: "Al Batinah North",
    state: "Sohar",
  },
  {
    id: "l4",
    title: "Toyota Hilux Double Cabin",
    make: "Toyota",
    model: "Hilux",
    bodyType: "Pickup",
    year: 2018,
    seats: 5,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: 19,
    governorate: "Dhofar",
    state: "Salalah",
  },
  {
    id: "l5",
    title: "Kia Sportage EX",
    make: "Kia",
    model: "Sportage",
    bodyType: "SUV",
    year: 2022,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 24,
    governorate: "Al Dakhiliyah",
    state: "Nizwa",
  },
  {
    id: "l6",
    title: "Chevrolet Malibu LT",
    make: "Chevrolet",
    model: "Malibu",
    bodyType: "Sedan",
    year: 2017,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 11,
    governorate: "Muscat",
    state: "Muttrah",
  },
  {
    id: "l7",
    title: "Mitsubishi Pajero GLS",
    make: "Mitsubishi",
    model: "Pajero",
    bodyType: "SUV",
    year: 2020,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 27,
    governorate: "Al Buraimi",
    state: "Al Buraimi",
  },
  {
    id: "l8",
    title: "Ford EcoSport Titanium",
    make: "Ford",
    model: "EcoSport",
    bodyType: "Hatchback",
    year: 2019,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 13,
    governorate: "Musandam",
    state: "Khasab",
  },
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
        className={["transition-transform", isActive ? "rotate-180" : ""].join(
          " ",
        )}
      />
    </button>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function Page() {
  const [activeKey, setActiveKey] = useState("bodyType");
  const [selections, setSelections] = useState({});
  const searchParams = useSearchParams();

  const [days, setDays] = useState(3);
  let lang = "en"; // or "ar" for Arabic
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
      if (selections.bodyType && l.bodyType !== selections.bodyType)
        return false;
      if (selections.make && l.make !== selections.make) return false;
      if (selections.model && l.model !== selections.model) return false;
      if (selections.governorate && l.governorate !== selections.governorate)
        return false;
      if (selections.state && l.state !== selections.state) return false;
      if (
        selections.budget &&
        (l.pricePerDay < selections.budget.min ||
          l.pricePerDay > selections.budget.max)
      )
        return false;
      return true;
    });
  }, [selections]);

  const type = searchParams.get("type") ?? "default";
  let heading = {
    air_port: {
      heading: {
        en: "Airport Car Rental",
        ar: "تأجير السيارات من المطار",
      },
      sub_heading: {
        en: "Reserve your car in advance and pick it up directly from the airport upon arrival.",
        ar: "احجز سيارتك مسبقًا واستلمها مباشرةً من المطار عند وصولك.",
      },
    },
    regular_book: {
      heading: {
        en: "Regular Car Rental",
        ar: "تأجير السيارات",
      },
      sub_heading: {
        en: "Choose your preferred pickup location, rental period, and drive with ease.",
        ar: "اختر موقع الاستلام المفضل لديك، وحدد مدة الإيجار، وانطلق بكل سهولة.",
      },
    },
    default: {
      heading: {
        en: "Regular Car Rental",
        ar: "تأجير السيارات",
      },
      sub_heading: {
        en: "Choose your preferred pickup location, rental period, and drive with ease.",
        ar: "اختر موقع الاستلام المفضل لديك، وحدد مدة الإيجار، وانطلق بكل سهولة.",
      },
    },
  };

  console.log("type", type);
  return (
    <main className="min-h-screen bg-[#F5F0E4] font-sans">
      {/* hero strip */}
      <div className="border-b border-[#E4D9BF] bg-[#EFE6D2]">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#1B1B18] sm:text-3xl">
            {lang == "en"
              ? (heading[type]?.heading?.en ??
                heading["default"]["heading"]?.en)
              : (heading[type]?.heading?.ar ??
                heading["default"]["heading"]?.ar)}
          </h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[#6B6455]">
            {lang == "en"
              ? (heading[type]?.sub_heading?.en ??
                heading["default"]["sub_heading"]?.en)
              : (heading[type]?.sub_heading?.ar ??
                heading["default"]["sub_heading"]?.ar)}
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
                      handleChange(
                        "bodyType",
                        selections.bodyType === type ? undefined : type,
                      )
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
                        selections.model &&
                        !MODELS_BY_MAKE[make]?.includes(selections.model);
                      handleChange(
                        "make",
                        selections.make === make ? undefined : make,
                      );
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
                        handleChange(
                          "model",
                          selections.model === model ? undefined : model,
                        )
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
                          active
                            ? undefined
                            : { min: preset.min, max: preset.max },
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
                        selections.governorate === gov ? undefined : gov,
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
                        handleChange(
                          "state",
                          selections.state === w ? undefined : w,
                        )
                      }
                    />
                  ))}
                </div>
              ) : (
                <p className="flex items-center gap-2 text-sm text-[#8A8272]">
                  <Map size={14} /> Choose a governorate first to see its
                  wilayats.
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
              No cars match these filters yet. Clear one to see more of the
              fleet.
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
