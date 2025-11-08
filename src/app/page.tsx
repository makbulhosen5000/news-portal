"use client";
import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";

export default function Home() {
  return (
   <div className="py-12">
    <Banner/>
    <NewsCard/>
   </div>
  );
}
