import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PersonalInfoCardProps {
  userData: any;
}

export function PersonalInfoCard({ userData }: PersonalInfoCardProps) {
  const infoFields = [
    { label: "Full Name", value: userData.name },
    { label: "Email Address", value: userData.email },
    { label: "Phone Number", value: userData.phone },
    { label: "Address", value: userData.address },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Your personal details and contact information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoFields.map((field, index) => (
            <div key={index} className="space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                {field.label}
              </label>
              <p className="text-lg font-medium">{field.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
