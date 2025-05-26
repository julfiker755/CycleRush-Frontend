import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Activity } from "lucide-react"

export function SecurityTab() {
  const securityOptions = [
    {
      icon: Lock,
      title: "Password",
      description: "Last changed 2 weeks ago",
      action: "Change Password",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Shield,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      action: "Enable 2FA",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Activity,
      title: "Login Activity",
      description: "View recent login attempts and sessions",
      action: "View Activity",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Keep your account secure with these settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {securityOptions.map((option) => {
            const Icon = option.icon
            return (
              <div
                key={option.title}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${option.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${option.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-medium">{option.title}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {option.action}
                </Button>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
