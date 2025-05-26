import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatsCardProps {
  userData: any;
}

export function StatsCard({ userData }: StatsCardProps) {
  const stats = [
    {
      value: userData.totalOrders,
      label: "Total Orders",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      textColor: "text-blue-600",
      labelColor: "text-blue-700",
    },
    {
      value: userData.totalSpent,
      label: "Total Spent",
      gradient: "from-green-50 to-green-100",
      border: "border-green-200",
      textColor: "text-green-600",
      labelColor: "text-green-700",
    },
    {
      value: userData.loyaltyPoints,
      label: "Loyalty Points",
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      textColor: "text-purple-600",
      labelColor: "text-purple-700",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Statistics</CardTitle>
        <CardDescription>Your activity and engagement overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-gradient-to-br ${stat.gradient} rounded-xl border ${stat.border}`}
            >
              <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>
                {stat.value}
              </div>
              <p className={`text-sm ${stat.labelColor} font-medium`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
