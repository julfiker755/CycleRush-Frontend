import CustomService from "@/components/common/custom-service";
import RentalService from "@/components/common/rental-service";
import RepairService from "@/components/common/repair-service";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Cycle Rust Services
        </h1>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          Expert maintenance, repairs, and customization services for all types
          of bicycles. Our certified technicians keep your ride in peak
          condition.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h4>Repairs & Maintenance</h4>
          <RepairService />
        </div>

        <div className="space-y-4">
          <h4>Custom Builds</h4>
          <CustomService />
        </div>

        <div className="space-y-4">
          <h4>Rental Services</h4>
          <RentalService />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Visit Our Service Center</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our professional technicians are ready to help with all your cycling
          needs. Drop in or schedule an appointment for priority service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={"/contact"}>
            {" "}
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
