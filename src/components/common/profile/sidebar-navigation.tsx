"use client";
import type { TabProps } from "@/types";

interface SidebarNavigationProps {
  tabs: any;
  activeTab: TabProps;
  onTabChange: (tabId: TabProps) => void;
}

export function SidebarNavigation({
  tabs,
  activeTab,
  onTabChange,
}: SidebarNavigationProps) {
  return (
    <div className="w-10 lg:w-72 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-1 lg:p-6">
        <div className="hidden lg:block mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your account and preferences
          </p>
        </div>

        <nav className="space-y-2">
          {tabs.map((tab: any) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id as TabProps)}
                className={`w-fit lg:w-full flex items-center cursor-pointer gap-3  rounded-xl p-1 lg:px-4 lg:py-3 text-left transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-700 border border-transparent hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span className="hidden lg:inline font-medium">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
