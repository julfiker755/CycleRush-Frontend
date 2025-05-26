import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Globe, Eye } from "lucide-react";

export function SettingsTab() {
  const settingsOptions = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure how you receive notifications",
      action: "Configure",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Globe,
      title: "Language & Region",
      description: "English (US) - Change language and region",
      action: "Change",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Eye,
      title: "Privacy Settings",
      description: "Control your privacy and data preferences",
      action: "Manage",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const themes = [
    { name: "Light", bg: "bg-white" },
    { name: "Dark", bg: "bg-gray-900" },
    { name: "System", bg: "bg-gradient-to-br from-white to-gray-900" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>
            Customize your account preferences and experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {settingsOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${option.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${option.iconColor}`} />
                  </div>
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

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the interface looks and feels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Theme</label>
              <p className="text-xs text-muted-foreground mb-3">
                Choose your preferred theme
              </p>
              <div className="grid grid-cols-3 gap-3">
                {themes.map((theme) => (
                  <div
                    key={theme.name}
                    className="border rounded-lg p-3 cursor-pointer hover:bg-accent transition-colors"
                  >
                    <div
                      className={`w-full h-16 ${theme.bg} border rounded mb-2`}
                    ></div>
                    <p className="text-sm text-center font-medium">
                      {theme.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
