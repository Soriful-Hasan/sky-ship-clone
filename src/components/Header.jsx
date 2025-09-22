// app/components/HeroSection.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("air");

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: "url('/ship-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Fastest & Reliable Shipment at Your Door.
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          SkyShip offers seamless door-to-door shipping services, ensuring
          efficient and reliable cargo transport from China to Bangladesh.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center space-x-4">
          <Button
            variant={activeTab === "air" ? "default" : "secondary"}
            className={cn(
              "px-6",
              activeTab === "air" && "bg-blue-600 text-white"
            )}
            onClick={() => setActiveTab("air")}
          >
            Air
          </Button>
          <Button
            variant={activeTab === "sea" ? "default" : "secondary"}
            className={cn(
              "px-6",
              activeTab === "sea" && "bg-blue-600 text-white"
            )}
            onClick={() => setActiveTab("sea")}
          >
            Sea
          </Button>
        </div>

        {/* Booking Card */}
        <Card className="mt-8 p-4 flex items-center space-x-3 bg-black/70 backdrop-blur text-white">
          {/* From */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
            <span className="mr-2">🇨🇳</span>
            <select className="bg-transparent outline-none">
              <option>China</option>
              <option>USA</option>
              <option>India</option>
            </select>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>

          <span className="font-semibold">to</span>

          {/* To */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
            <span className="mr-2">🇧🇩</span>
            <select className="bg-transparent outline-none">
              <option>Bangladesh</option>
              <option>Malaysia</option>
              <option>Singapore</option>
            </select>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>

          {/* Button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            Create Booking
          </Button>
        </Card>
      </div>
      {/* zoom animation */}
      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
