import Header from "@/components/Header";
import Image from "next/image";
import ShippingCalculator from "./Calculator/calculator";
import CalculatorCard from "./Calculator/calculator";
import Brand from "./Brand/Brand";

export default function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section className="">
        <CalculatorCard />
      </section>
      <section className="min-h-[60vh] flex justify-center items-center border">
        <Brand />
      </section>
    </div>
  );
}
