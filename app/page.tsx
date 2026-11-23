import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Videos from "@/components/Videos";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Commission from "@/components/Commission";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider bg="bg-ivory" text="text-white" />
        <Collections />
        <WaveDivider bg="bg-white" text="text-charcoal" />
        <Videos />
        <WaveDivider bg="bg-charcoal" text="text-ivory" />
        <Process />
        <WaveDivider bg="bg-ivory" text="text-white" />
        <Gallery />
        <WaveDivider bg="bg-white" text="text-charcoal" />
        <Commission />
        <WaveDivider bg="bg-charcoal" text="text-ivory" />
        <About />
        <WaveDivider bg="bg-ivory" text="text-white" />
        <Faq />
        <WaveDivider bg="bg-white" text="text-charcoal" />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
