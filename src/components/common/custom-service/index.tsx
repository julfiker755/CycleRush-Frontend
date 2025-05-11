import {
  productCategories,
  productFrameMaterial,
} from "@/constant/product.const";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/reusable/service-card";

const fittingServices = [
  {
    title: "Basic Fit",
    price: 75,
    description: "Essential measurements and adjustments",
    features: ["Saddle height", "Reach adjustment", "Cleats positioning"],
    duration: "45 minutes",
  },
  {
    title: "Performance Fit",
    price: 150,
    description: "Comprehensive fit for sport riders",
    features: [
      "All Basic Fit services",
      "Detailed body measurements",
      "Pedaling analysis",
      "Handlebar width optimization",
    ],
    duration: "1.5 hours",
  },
  {
    title: "Pro Fit",
    price: 250,
    description: "Elite level fitting with video analysis",
    features: [
      "All Performance Fit services",
      "Video motion analysis",
      "Advanced pedaling efficiency",
      "Follow-up adjustment",
    ],
    duration: "2.5 hours",
  },
];
const customBuildProcess = [
  "Initial consultation to determine your needs and preferences",
  "Component selection and fit measurement",
  "Build quote and timeline",
  "Assembly by our master builders",
  "Final adjustments and test ride",
];

export default function CustomService() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Custom Bike Builds</CardTitle>
          <CardDescription>
            Create your dream bicycle with our expert builders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frame Materials</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {productFrameMaterial.map((material: any) => (
                  <Badge
                    key={material}
                    variant="outline"
                    className="text-sm py-1"
                  >
                    {material}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Bike Categories</h3>
              <div className="flex flex-wrap gap-2">
                {productCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="text-sm py-1"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Custom Build Process
              </h3>
              <ol className="space-y-3">
                {customBuildProcess.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-foreground h-6 w-6 text-sm font-medium mr-3 rounded-full">
                      <span className="h-6 w-6 bg-primary/10 rounded-full flex justify-center item-center text-primary">
                        {index + 1}
                      </span>
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full md:w-auto">Schedule Consultation</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bike Fitting Services</CardTitle>
          <CardDescription>
            Professional fitting services to optimize comfort and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fittingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
