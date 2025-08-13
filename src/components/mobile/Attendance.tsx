import { MapPin, Wifi, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Attendance = () => {
  const attendanceHistory = [
    { date: "Today", checkIn: "9:15 AM", checkOut: "-", method: "location", status: "active" },
    { date: "Yesterday", checkIn: "9:00 AM", checkOut: "6:30 PM", method: "wifi", status: "complete" },
    { date: "Dec 10", checkIn: "9:30 AM", checkOut: "6:00 PM", method: "location", status: "complete" },
    { date: "Dec 9", checkIn: "9:10 AM", checkOut: "5:45 PM", method: "wifi", status: "complete" },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Attendance</h1>
        <p className="text-muted-foreground">Track your work hours</p>
      </div>

      {/* Status Card */}
      <Card className="text-center">
        <CardContent className="pt-6 pb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Checked In</h2>
          <p className="text-muted-foreground mb-4">Since 9:15 AM</p>
          <Button variant="outline" className="w-full">
            Check Out
          </Button>
        </CardContent>
      </Card>

      {/* Check-in Methods */}
      <Tabs defaultValue="location" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="wifi">WiFi</TabsTrigger>
        </TabsList>
        
        <TabsContent value="location" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <MapPin className="w-8 h-8 mx-auto text-primary" />
                <div>
                  <h3 className="font-medium">Location-Based Check-in</h3>
                  <p className="text-sm text-muted-foreground">Verify your location to check in</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Within Office Premises
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="wifi" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Wifi className="w-8 h-8 mx-auto text-blue-600" />
                <div>
                  <h3 className="font-medium">WiFi-Based Check-in</h3>
                  <p className="text-sm text-muted-foreground">Connected to office WiFi</p>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  OfficeWiFi-Main
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Attendance History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {attendanceHistory.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {record.method === "location" ? (
                    <MapPin className="w-4 h-4 text-primary" />
                  ) : (
                    <Wifi className="w-4 h-4 text-blue-600" />
                  )}
                  <div>
                    <p className="font-medium text-sm">{record.date}</p>
                    <p className="text-xs text-muted-foreground">
                      {record.checkIn} - {record.checkOut}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {record.status === "active" ? (
                    <Badge variant="default" className="text-xs">Active</Badge>
                  ) : (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;