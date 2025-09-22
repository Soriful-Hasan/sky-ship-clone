"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CalculatorCard() {
  const [activeTab, setActiveTab] = useState("charge");

  // category data (from API / public JSON)
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [weight, setWeight] = useState(0);
  const [priceRange, setPriceRange] = useState(null);

  // CBM states
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // calculate price dynamically
  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find((c) => c.name === selectedCategory);
      if (category) {
        const [min, max] = category.price
          .replace(" Tk", "")
          .split("-")
          .map((p) => parseInt(p.trim()));

        if (weight > 0) {
          setPriceRange([min * weight, max * weight]);
        } else {
          setPriceRange([min, max]);
        }
      }
    }
  }, [selectedCategory, weight, categories]);

  // CBM calculation
  const cbm = ((length * width * height) / 1000000).toFixed(4);

  return (
    <div className="flex justify-around items-center bg-gradient-to-b from-blue-950 to-blue-800">
      <div className="space-y-8">
        <h1 className="text-4xl text-white">
          Calculate CBM & Shipping Charge.
        </h1>
        <p className="text-white">
          You can easily calculate your CBM and expected shipping charge before
          placing a booking.
        </p>
      </div>
      <div>
        <Card className="w-[500px] rounded-xl shadow-xl mt-10 mb-10 overflow-hidden">
          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="charge">
                Shipping Charge Calculator
              </TabsTrigger>
              <TabsTrigger value="cbm">CBM Calculator</TabsTrigger>
            </TabsList>

            <CardContent className="p-6 space-y-4">
              {/* Charge Calculator */}
              <TabsContent value="charge" className="space-y-4">
                {/* Method & Route */}
                <div className="flex gap-4">
                  {/* Method */}
                  <div className="w-full">
                    <Label className="text-sm font-medium">Method *</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="* Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air">Air</SelectItem>
                        <SelectItem value="sea">Sea</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Route */}
                  <div className="w-full">
                    <Label className="text-sm font-medium">Route *</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="* Route" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guangzhou">Guangzhou</SelectItem>
                        <SelectItem value="hongkong">HongKong</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Category */}
                <div className="w-full">
                  <Label className="text-sm font-medium">Category *</Label>
                  <Select onValueChange={(val) => setSelectedCategory(val)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="* Category" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name} - {cat.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Weight */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Weight *</Label>
                  <Input
                    type="number"
                    placeholder="* Weight"
                    onChange={(e) => setWeight(Number(e.target.value))}
                  />
                </div>

                {/* Result */}
                {priceRange ? (
                  <p className="text-lg font-semibold text-center">
                    Estimated Price: {priceRange[0]} - {priceRange[1]} Tk
                  </p>
                ) : (
                  <div className="w-full bg-blue-100 text-blue-700 text-center rounded-md py-2 font-medium">
                    Please Insert Category &amp; Total Weight.
                  </div>
                )}
              </TabsContent>

              {/* CBM Calculator */}
              <TabsContent value="cbm" className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Length *</Label>
                  <Input
                    type="number"
                    placeholder="Length (cm)"
                    onChange={(e) => setLength(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">Width *</Label>
                  <Input
                    type="number"
                    placeholder="Width (cm)"
                    onChange={(e) => setWidth(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">Height *</Label>
                  <Input
                    type="number"
                    placeholder="Height (cm)"
                    onChange={(e) => setHeight(Number(e.target.value))}
                  />
                </div>

                <p className="text-lg font-semibold text-center">
                  Your CBM is: {cbm} Cubic Meter
                </p>
                <p className="text-sm">
                  Note: Price is applicable when 1 cbm greater than or equal to
                  167 kg
                </p>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
