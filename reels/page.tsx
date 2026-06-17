"use client";

import Image from "next/image";
import { Heart, Share2, Play, Filter, Truck, Car } from "lucide-react";
import React, { useState, useRef } from "react";

// Sample reels data with multiple images
const reelsData = [
  {
    id: 1,
    name: "BMW 5 Series",
    price: "18 OMR/day",
    rating: 4.5,
    availability: "Available",
    dealer: "Auto King Motors",
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      ],
      interior: [
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        "https://images.unsplash.com/photo-1610878180933-2e18218ab1b1",
      ],
    },
  },
  {
    id: 2,
    name: "Audi Q7",
    price: "22 OMR/day",
    rating: 4.7,
    availability: "Available",
    dealer: "Muscat Cars",
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1549924231-f129b911e442",
      ],
      interior: [
        "https://images.unsplash.com/photo-1610878180933-2e18218ab1b1",
      ],
    },
  },
  {
    id: 1,
    name: "BMW 5 Series",
    price: "18 OMR/day",
    rating: 4.5,
    availability: "Available",
    dealer: "Auto King Motors",
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      ],
      interior: [
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        "https://images.unsplash.com/photo-1610878180933-2e18218ab1b1",
      ],
    },
  },
  {
    id: 2,
    name: "Audi Q7",
    price: "22 OMR/day",
    rating: 4.7,
    availability: "Available",
    dealer: "Muscat Cars",
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1549924231-f129b911e442",
      ],
      interior: [
        "https://images.unsplash.com/photo-1610878180933-2e18218ab1b1",
      ],
    },
  },{
    id: 1,
    name: "BMW 5 Series",
    price: "18 OMR/day",
    rating: 4.5,
    availability: "Available",
    dealer: "Auto King Motors",
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      ],
      interior: [
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        "https://images.unsplash.com/photo-1610878180933-2e18218ab1b1",
      ],
    },
  },
  {
    id: 2,
    name: "Audi Q7",
    price: "22 OMR/day",
    rating: 4.7,
    availability: "Available",
    dealer: "Muscat Cars",
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1549924231-f129b911e442",
      ],
      interior: [
        "https://images.unsplash.com/photo-1610878180933-2e18218ab1b1",
      ],
    },
  },
];

const filters = [
  { label: "Daily", icon: Truck },
  { label: "Weekly", icon: Truck },
  { label: "Monthly", icon: Truck },
  { label: "Available", icon: Car },
  { label: "Dealer", icon: Filter },
];

export default function ReelsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("");

  const filteredReels = activeFilter
    ? reelsData.filter((r) =>
        r.availability.toLowerCase() === activeFilter.toLowerCase() ||
        r.price.toLowerCase().includes(activeFilter.toLowerCase()) ||
        r.dealer.toLowerCase().includes(activeFilter.toLowerCase())
      )
    : reelsData;

  return (
    <div className="w-screen relative">
      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-50 bg-[#010617] backdrop-blur flex gap-3 p-3 overflow-x-auto scrollbar-hide">
        {filters.map((f) => {
          const Icon = f.icon;
          const isActive = activeFilter === f.label;
          return (
            <button
              key={f.label}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg ${
                isActive ? "bg-blue-600 text-white" : "bg-white/20 text-white"
              }`}
              onClick={() =>
                setActiveFilter(activeFilter === f.label ? "" : f.label)
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* Horizontal Slider */}
      <div
        ref={containerRef}
        className=" gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth  scrollbar-hide"
      >
        {filteredReels.map((reel,index) => (
          <CarCard key={index} reel={reel} />
        ))}

        {filteredReels.length === 0 && (
          <div className="flex items-center justify-center text-white text-lg md:text-2xl">
            No cars match this filter
          </div>
        )}
      </div>
    </div>
  );
}

// Single Car Card with multi-images & interior/exterior toggle
function CarCard({ reel }: { reel: typeof reelsData[0] }) {
  const [viewType, setViewType] = useState<"exterior" | "interior">("exterior");
  const [currentImage, setCurrentImage] = useState(0);

  const images = reel.images[viewType];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative min-w-[300px] md:min-w-[400px] h-[500px] md:h-[600px] snap-start flex-shrink-0 overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative w-full h-full">
        <Image src={images[currentImage]} alt={reel.name} fill className="object-cover" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Left/Right arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
            >
              ›
            </button>
          </>
        )}

        {/* Mid-right action buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
          <ActionButton icon={<Heart className="w-6 h-6 text-white" />} />
          <ActionButton icon={<Share2 className="w-6 h-6 text-white" />} />
          <ActionButton icon={<Play className="w-6 h-6 text-white" />} />
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition text-sm md:text-base">
            Book Now
          </button>
        </div>

        {/* Car info */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg md:text-2xl font-bold">{reel.name}</h2>
          <p className="text-base md:text-lg">{reel.price}</p>
          <p className="text-sm text-yellow-400 mt-1">⭐ {reel.rating}</p>
          <p className="text-sm mt-1 flex items-center gap-1">
            <Car className="w-4 h-4" /> {reel.availability} | Dealer: {reel.dealer}
          </p>

          {/* Interior / Exterior toggle */}
          <div className="mt-2 flex gap-2">
            <button
              className={`px-2 py-1 rounded-md text-sm ${
                viewType === "exterior"
                  ? "bg-blue-600 text-white"
                  : "bg-white/20 text-white"
              }`}
              onClick={() => {
                setViewType("exterior");
                setCurrentImage(0);
              }}
            >
              Exterior
            </button>
            <button
              className={`px-2 py-1 rounded-md text-sm ${
                viewType === "interior"
                  ? "bg-blue-600 text-white"
                  : "bg-white/20 text-white"
              }`}
              onClick={() => {
                setViewType("interior");
                setCurrentImage(0);
              }}
            >
              Interior
            </button>
          </div>
        </div>

        {/* Image count */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded-full">
            {currentImage + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 md:p-3 bg-black/50 rounded-xl hover:bg-black/70 transition">
      {icon}
    </button>
  );
}
