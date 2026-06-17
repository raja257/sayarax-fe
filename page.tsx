"use client";

import Image from "next/image";
import { Home, Car, Heart, User, MapPin, Star } from "lucide-react";
import SearchTrigger from "@/app/component/SearchTrigger";
import BottomTab from "@/app/component/BottomTab";
import Stories from "@/app/component/Stories";

import React from "react";
import NearbyDealerships from "./component/NearbyDealerships";
import FeaturedCars from "./component/FeaturedCars";

import QuickBooking from "./component/QuickBooking";
import HotDeals from "./component/HotDeals";
import PopularCategories from "./component/PopularCategories";
import MonthlyRentalBanner from "./component/MonthlyRentalBanner";
import QuickBookingCard from "./component/QuickBooking";

export default function HomePage() {
  return (
    <div className="px-4 pb-24">
      <QuickBookingCard />
      <PopularCategories />
      <FeaturedCars />
      {/* <MonthlyRentalBanner />  */}
      {/* <NearbyDealerships /> */}

      {/* <HotDeals /> */}
    </div>
  );
}
