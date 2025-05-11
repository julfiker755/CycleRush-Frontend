import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { ReactNode } from "react";

type PropTypes = {
  title: string;
  description: string;
  price: number;
  features: string[];
  icon?: ReactNode;
  timeEstimate?: string;
  highlighted?: boolean;
  duration?: string;
};

// ServiceCard
export function ServiceCard({
  title,
  description,
  price,
  features,
  icon,
  timeEstimate,
  highlighted = false,
  duration,
}: PropTypes) {
  return (
    <Card className={`${highlighted ? "ring-2 ring-blue-500 shadow-lg" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            {icon}
            <CardTitle className="ml-2">{title}</CardTitle>
          </div>
          <Badge variant={highlighted ? "default" : "outline"}>{price}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {duration && (
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        )}
      </CardContent>

      {timeEstimate && (
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeEstimate}</span>
          </div>
          <Button>Book Now</Button>
        </CardFooter>
      )}
    </Card>
  );
}

// AdditionalService
export function AdditionalService({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  return (
    <div className="flex justify-between items-center p-3 bg-accent rounded-md">
      <div className="flex items-center">
        <Check className="h-4 w-4 text-green-500 mr-2" />
        <span>{name}</span>
      </div>
      <Badge variant="outline">{price}</Badge>
    </div>
  );
}

type PropTypes1 = {
  category: string;
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
};
export function RentalOption({
  category,
  hourlyRate,
  dailyRate,
  weeklyRate,
}: PropTypes1) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
      <div className="font-medium">{category}</div>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <div className="text-sm">
          <span className="text-gray-500">Hourly:</span> {hourlyRate}
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Daily:</span> {dailyRate}
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Weekly:</span> {weeklyRate}
        </div>
      </div>
    </div>
  );
}
