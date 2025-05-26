import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, CheckCircle, Edit3 } from "lucide-react";

interface ProfileHeaderProps {
  userData: any;
  onEditProfile?: () => void;
}

export function ProfileHeader({ userData, onEditProfile }: ProfileHeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage
                className="object-cover"
                src="/placeholder.svg?height=96&width=96"
                alt={userData.name}
              />
              <AvatarFallback className="text-xl">
                {getInitials(userData.name)}
              </AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              className="absolute -bottom-1 -right-1 rounded-full w-8 h-8 p-0"
              variant="secondary"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              {userData.verified && (
                <CheckCircle className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <p className="text-muted-foreground mb-3">{userData.email}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="capitalize">
                {userData.role}
              </Badge>
              <Badge variant="default" className="bg-green-500">
                {userData.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              {userData.bio}
            </p>
          </div>

          <Button variant="outline" onClick={onEditProfile}>
            <Edit3 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
