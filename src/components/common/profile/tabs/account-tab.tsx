import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, CreditCard, Bell } from "lucide-react";

interface AccountTabProps {
  userData: any;
}

export function AccountTab({ userData }: AccountTabProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: userData.email,
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: userData.phone,
      color: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Address",
      value: userData.address,
      color: "text-red-500",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: userData.joinDate,
      color: "text-purple-500",
    },
  ];

  const managementOptions = [
    {
      icon: CreditCard,
      title: "Billing Information",
      description: "Manage payment methods and billing",
      action: "Manage",
    },
    {
      icon: Bell,
      title: "Email Preferences",
      description: "Configure email notifications",
      action: "Configure",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>
            Manage your account details and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-center gap-3 p-4 border rounded-lg"
                >
                  <Icon className={`w-5 h-5 ${info.color}`} />
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Management</CardTitle>
          <CardDescription>
            Manage your account settings and billing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {managementOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{option.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {option.action}
                </Button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
