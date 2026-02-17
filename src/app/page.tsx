import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import HomeSection from "@/components/sections/Home/Home";
import AboutSection from "@/components/sections/About/About";
import PortfolioSection from "@/components/sections/Portfolio/Portfolio";
import BlogSection from "@/components/sections/Blog/Blog";
import ContactSection from "@/components/sections/Contact/Contact";



export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
