import { useState } from "react";
import { User, CreditCard, Shield, Settings } from "lucide-react";
import { SidebarNavigation } from "@/components/common/profile/sidebar-navigation";
import { OverviewTab } from "@/components/common/profile/tabs/overview-tab";
import { AccountTab } from "@/components/common/profile/tabs/account-tab";
import { SecurityTab } from "@/components/common/profile/tabs/security-tab";
import { SettingsTab } from "@/components/common/profile/tabs/settings-tab";
import type { ActivityProps, TabIProps, TabProps } from "@/types";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<TabProps>("overview");

  const userData: any = {
    name: "Julfiker Islam",
    email: "julfiker755.bd@gmail.com",
    phone: "01741705755",
    address: "Khansama, Dinajpur",
    role: "Customer",
    status: "Active",
    joinDate: "January 2023",
    bio: "Passionate developer and tech enthusiast. Love building innovative solutions and learning new technologies.",
    verified: true,
    totalOrders: 24,
    totalSpent: "$2,450",
    loyaltyPoints: 1250,
  };

  const recentActivity: ActivityProps[] = [
    { action: "Updated profile picture", date: "2 days ago", type: "profile" },
    { action: "Completed order #1234", date: "1 week ago", type: "order" },
    { action: "Changed password", date: "2 weeks ago", type: "security" },
    { action: "Added new address", date: "3 weeks ago", type: "profile" },
  ];

  const tabs: TabIProps[] = [
    { id: "overview", label: "Overview", icon: User },
    { id: "account", label: "Account", icon: CreditCard },
    { id: "security", label: "Security", icon: Shield },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <OverviewTab userData={userData} recentActivity={recentActivity} />
        );
      case "account":
        return <AccountTab userData={userData} />;
      case "security":
        return <SecurityTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return (
          <OverviewTab userData={userData} recentActivity={recentActivity} />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="flex">
        <SidebarNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex-1">
          <div className="p-8">
            <div className="max-w-4xl">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
