"use client";

export default function MonthlyRentalBanner() {
  return (
    <section className="mt-6">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Need a car for a month?
          </h3>
          <p className="text-sm text-gray-300">
            Starting from 180 OMR/month
          </p>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
          View
        </button>
      </div>
    </section>
  );
}