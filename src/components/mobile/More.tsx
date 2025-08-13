import { 
  User, 
  MessageSquare, 
  Settings, 
  Bell, 
  Calendar,
  Github,
  MessageCircle,
  LogOut,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const More = () => {
  const menuItems = [
    {
      icon: User,
      label: "Profile",
      description: "Manage your personal information",
      action: () => {},
    },
    {
      icon: MessageSquare,
      label: "Food Complaints",
      description: "Submit cafeteria feedback",
      badge: "New",
      action: () => {},
    },
    {
      icon: Bell,
      label: "Notifications",
      description: "Configure alert preferences",
      action: () => {},
    },
    {
      icon: Calendar,
      label: "Google Calendar",
      description: "Sync with your calendar",
      status: "Connected",
      action: () => {},
    },
    {
      icon: Github,
      label: "GitHub Integration",
      description: "View PR notifications",
      status: "Connected",
      action: () => {},
    },
    {
      icon: MessageCircle,
      label: "Slack Integration",
      description: "Team communication",
      status: "Disconnected",
      action: () => {},
    },
    {
      icon: Settings,
      label: "Settings",
      description: "App preferences and security",
      action: () => {},
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-xl font-semibold">John Doe</h1>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
        <p className="text-sm text-muted-foreground">john.doe@company.com</p>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardContent className="pt-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-green-600">96%</p>
              <p className="text-xs text-muted-foreground">Attendance</p>
            </div>
            <div>
              <p className="text-lg font-bold text-blue-600">18</p>
              <p className="text-xs text-muted-foreground">Leaves Left</p>
            </div>
            <div>
              <p className="text-lg font-bold text-purple-600">5</p>
              <p className="text-xs text-muted-foreground">Open PRs</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="cursor-pointer hover:bg-accent/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{item.label}</p>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      {item.status && (
                        <div className="flex items-center mt-1">
                          <div 
                            className={`w-2 h-2 rounded-full mr-2 ${
                              item.status === "Connected" 
                                ? "bg-green-500" 
                                : "bg-red-500"
                            }`}
                          />
                          <span className={`text-xs ${
                            item.status === "Connected" 
                              ? "text-green-600" 
                              : "text-red-600"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Logout */}
      <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>

      {/* App Version */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Company Hub v1.0.0
        </p>
      </div>
    </div>
  );
};

export default More;