import Navbar from "@components/navbar";
import Carousel from "@components/carousel";
import Products from "@components/products";
import ContactForm from "@components/contactForm";
import Footer from "@components/footer";
import IndustriesSection from "@components/industries";
import ClientsSection from "./frontend/components/clients";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <div className="flex-grow">
        <Carousel />
      </div>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <Products />
      </section>
    <div>
      <IndustriesSection/>
      </div>
      <ClientsSection/>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
