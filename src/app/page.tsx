import Hero from "@/components/home/hero";
import AboutPreview from "@/components/home/about-preview";
import ServicesGrid from "@/components/home/approach";
import SelectedWork from "@/components/home/selected-work";
import Pipeline from "@/components/home/experiments";
import ContactCta from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <SelectedWork />
      <Pipeline />
      <ContactCta />
    </div>
  );
}
