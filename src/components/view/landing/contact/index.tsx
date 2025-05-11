import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import ContactInfo from "@/components/common/contact/contact-info";
import ContactForm from "@/components/common/contact/contact-from";
import HoursCard from "@/components/common/contact/contact-hours";
import SocialCard from "@/components/common/contact/contact-social";

// Main Contact Component
export default function Contact() {
  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Contact Rust Craze
        </h1>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          We're here to help with all your cycling needs. Reach out to our team
          for assistance and inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <div className="space-y-6">
          <ContactInfo />
          <HoursCard />
          <SocialCard />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="mb-4">Need Immediate Assistance?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Our customer service team is available during business hours to help
          with any urgent inquiries.
        </p>
        <Button size="lg">
          <Phone className="h-4 w-4 mr-2" />
          Call Us Now
        </Button>
      </div>
    </section>
  );
}
