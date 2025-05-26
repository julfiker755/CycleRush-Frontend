import { ProfileHeader } from "../profile-header";
import { PersonalInfoCard } from "../personal-info-card";
import { StatsCard } from "../stats-card";
import { ActivityCard } from "../activity-card";
import type { ActivityProps } from "@/types";

interface OverviewTabProps {
  userData: any;
  recentActivity: ActivityProps[];
}

export function OverviewTab({ userData, recentActivity }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      <ProfileHeader userData={userData} />
      <PersonalInfoCard userData={userData} />
      <StatsCard userData={userData} />
      <ActivityCard activities={recentActivity} />
    </div>
  );
}
