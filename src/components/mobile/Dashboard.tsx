import { Bell, MapPin, Wifi, User, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Good morning!</h1>
            <p className="text-sm text-muted-foreground">John Doe</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-auto py-4 flex flex-col space-y-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Location Check-in</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col space-y-2">
              <Wifi className="w-5 h-5" />
              <span className="text-sm">WiFi Check-in</span>
            </Button>
          </div>
          <Button variant="secondary" className="w-full">
            Apply for Leave
          </Button>
        </CardContent>
      </Card>

      {/* Status Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-medium">Checked Out</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last check-in</p>
              <p className="text-sm font-medium">Yesterday 6:30 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between">
            Alerts
            <Badge variant="destructive" className="text-xs">2</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-destructive/10 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Production Alert</p>
              <p className="text-xs text-muted-foreground">Server response time increased</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600 mt-1" />
            <div className="flex-1">
              <p className="text-sm font-medium">Break Reminder</p>
              <p className="text-xs text-muted-foreground">Time for a wellness break!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Calendar */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2 border-l-4 border-primary bg-primary/5">
              <div className="text-sm">
                <p className="font-medium">Team Standup</p>
                <p className="text-muted-foreground">9:00 AM - 9:30 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
              <div className="text-sm">
                <p className="font-medium">Client Review</p>
                <p className="text-muted-foreground">2:00 PM - 3:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;