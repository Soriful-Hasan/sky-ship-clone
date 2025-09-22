// app/components/HeroSection.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  const [activeTab, setActiveTab] = useState("air");

  return (
    <section
      className="relative h-[80vh] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: "url('/ship-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative flex flex-col lg:ml-20 justify-start z-10 text-left w-full max-w-4xl px-4">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Fastest & Reliable Shipment at Your Door.
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            SkyShip offers seamless door-to-door shipping services, ensuring
            efficient and reliable cargo transport from China to Bangladesh.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex justify-start space-x-4">
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
        <Card className="mt-8 p-4 md:w-2xl flex-col flex md:flex-row items-center space-x-3 bg-black/60 backdrop-blur text-white">
          {/* From */}
          <span className="font-semibold">From</span>
          <div className="w-40">
            <Select>
              <SelectTrigger className="w-full bg-gray-800 border-none text-white">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="china">China</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* To */}
          <span className="font-semibold">To</span>
          <div className="w-40">
            <Select>
              <SelectTrigger className="w-full bg-gray-800 border-none text-white">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="bangladesh">Bangladesh</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            Create Booking
          </Button>
        </Card>
      </div>
    </section>
  );
}
