"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Mic, Star, RefreshCcw } from "lucide-react";

type Car = {
  name: string;
  type: string;
  price: string;
  rating: number;
  review?: string;
  image: string;
};

type Props = {
  onClose: () => void;
};

export default function SmartVoiceAI({ onClose }: Props) {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Car[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Master dataset (100 cars)
  const allCars: Car[] = Array.from({ length: 100 }).map((_, i) => {
    const makes = ["BMW", "Audi", "Toyota", "Mercedes", "Honda", "Ford", "Lexus", "Kia", "Hyundai", "Nissan"];
    const models = ["5 Series", "Q7", "Land Cruiser", "C-Class", "RAV4", "Accord", "Explorer", "RX 350", "Sportage", "Altima"];
    const trims = ["SE", "EX", "LX", "GL", "Premium", "Sport"];
    const colors = ["Red", "Blue", "Black", "White", "Silver"];
    const types = ["Luxury • Automatic", "SUV • Automatic", "Sedan • Automatic", "Hatchback • Automatic", "Compact • Manual"];
    const reviews = [
      "Perfect for city & highway drives.",
      "Spacious and comfortable for family trips.",
      "Reliable off-road performance.",
      "Elegant design with smooth drive.",
      "Compact SUV, great for city drives.",
      "Fuel efficient and smooth handling.",
      "Advanced safety features included.",
      "Modern design and comfortable seating.",
      "Strong engine and sporty feel.",
      "Excellent value for money."
    ];
    const images = [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1597001344847-16c63c4ee0f8",
      "https://images.unsplash.com/photo-1563720223435-0c9d26cce08a",
      "https://images.unsplash.com/photo-1620082074410-f3f1e1a60c39"
    ];

    return {
      name: `${makes[i % makes.length]} ${models[i % models.length]} ${trims[i % trims.length]}`,
      type: `${types[i % types.length]} • ${colors[i % colors.length]}`,
      price: `${16 + (i % 10)} OMR`,
      rating: 4 + ((i % 5) * 0.1),
      review: reviews[i % reviews.length],
      image: images[i % images.length]
    };
  });

  // Smart fuzzy search across all fields
  const smartSearch = (query: string) => {
    if (!query) return [];
    const qTokens = query.toLowerCase().split(" ").filter(Boolean);

    // score each car by number of matching tokens across all fields
    const scored = allCars
      .map((car) => {
        const carText = `${car.name} ${car.type} ${car.price} ${car.review}`.toLowerCase();
        const matches = qTokens.filter((t) => carText.includes(t)).length;
        return { car, score: matches };
      })
      .filter((c) => c.score > 0)
      .sort((a, b) => b.score - a.score) // highest match first
      .map((c) => c.car);

    return scored;
  };

  const resetAI = () => {
    setTranscript("");
    setResults([]);
    setLoading(false);
    startListening();
  };

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice search not supported");
      return;
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setRecording(true);
    setTranscript("Listening... 🎤");

    recognition.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      setRecording(false);
      setLoading(true);

      setTimeout(() => {
        const results = smartSearch(text);
        setResults(results);
        setLoading(false);
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    };

    recognition.onerror = () => {
      setTranscript("Error: Could not recognize voice");
      setRecording(false);
    };
  };

  useEffect(() => {
    startListening();
  }, []);

  const modalContent = (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-white/10">
        <h2 className="text-white font-bold text-xl">Smart Car AI</h2>
        <div className="flex gap-3">
          <button
            onClick={resetAI}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm"
          >
            <RefreshCcw className="w-4 h-4" /> Reset
          </button>
          <button onClick={onClose} className="text-white text-2xl">
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        <input
          value={transcript}
          onChange={(e) => {
            setTranscript(e.target.value);
            setResults(smartSearch(e.target.value));
          }}
          placeholder="Search cars, brands, price, color, reviews..."
          className="bg-white/10 text-white rounded-full px-4 py-2 w-full outline-none"
        />

        {recording && (
          <div className="self-center flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full animate-pulse text-white">
            <Mic className="w-5 h-5" /> Listening...
          </div>
        )}

        {loading && (
          <div className="self-start flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 animate-pulse text-white">
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce animation-delay-200"></div>
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce animation-delay-400"></div>
            <span>Searching...</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.length > 0 ? (
            results.map((car, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 overflow-hidden hover:scale-105 transform transition shadow-lg"
              >
                <div className="relative h-36 w-full">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {car.price}
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-lg">{car.name}</h4>
                  <p className="text-slate-300 text-sm">{car.type}</p>
                  <div className="flex items-center gap-1 mt-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx + 1 <= Math.round(car.rating)
                            ? "fill-yellow-400"
                            : "text-yellow-400"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-slate-300 ml-1">{car.rating}</span>
                  </div>
                  {car.review && (
                    <p className="text-slate-200 text-xs mt-1">{car.review}</p>
                  )}
                  <button className="mt-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm self-start">
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-slate-400 col-span-full text-center mt-4">
                No cars found.
              </p>
            )
          )}
        </div>
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
