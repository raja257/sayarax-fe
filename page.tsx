"use client";

import QuickBookingCard from "./component/QuickBooking";
import PopularCategories from "./component/PopularCategories";
import FeaturedCars from "./component/FeaturedCars";
// import MonthlyRentalBanner from "./component/MonthlyRentalBanner";
// import NearbyDealerships from "./component/NearbyDealerships";
// import HotDeals from "./component/HotDeals";

export default function HomePage() {
  return (
    <main className="px-4 pb-20">
      <QuickBookingCard />

      <div className="mt-8">
        <PopularCategories />
      </div>

      <FeaturedCars />
      {/* <MonthlyRentalBanner /> */}
      {/* <NearbyDealerships /> */}
      {/* <HotDeals /> */}
    </main>
  );
}