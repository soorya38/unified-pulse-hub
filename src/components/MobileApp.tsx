import { useState } from "react";
import { Home, Clock, Calendar, BarChart3, Menu, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Dashboard from "./mobile/Dashboard";
import Attendance from "./mobile/Attendance";
import Leaves from "./mobile/Leaves";
import Statistics from "./mobile/Statistics";
import More from "./mobile/More";
import { Button } from "./ui/button";

type TabType = "home" | "attendance" | "leaves" | "statistics" | "more";

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  const tabs = [
    { id: "home" as TabType, label: "Home", icon: Home },
    { id: "attendance" as TabType, label: "Attendance", icon: Clock },
    { id: "leaves" as TabType, label: "Leaves", icon: Calendar },
    { id: "statistics" as TabType, label: "Stats", icon: BarChart3 },
    { id: "more" as TabType, label: "More", icon: Menu },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard />;
      case "attendance":
        return <Attendance />;
      case "leaves":
        return <Leaves />;
      case "statistics":
        return <Statistics />;
      case "more":
        return <More />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto border-x border-border">
      {/* Status Bar */}
      <div className="h-6 bg-primary"></div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </div>

      {/* Floating Action Button */}
      <Button
        className="fixed bottom-20 right-6 w-14 h-14 rounded-full shadow-lg z-10"
        size="icon"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border">
        <div className="flex justify-around py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center p-2 min-w-0 flex-1",
                  "transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;