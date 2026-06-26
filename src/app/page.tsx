import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Coverage from "@/components/Coverage";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Benefits />
        <Partners />
        <Coverage />
        <Plans />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

