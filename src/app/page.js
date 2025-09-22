import Header from "@/components/Header";
import Image from "next/image";
import ShippingCalculator from "./Calculator/calculator";
import CalculatorCard from "./Calculator/calculator";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="min-h-screen">
        <CalculatorCard />
      </section>
    </div>
  );
}
