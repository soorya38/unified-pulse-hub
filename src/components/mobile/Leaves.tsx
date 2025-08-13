import { Calendar, Plus, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Leaves = () => {
  const leaveRequests = [
    { id: 1, type: "Vacation", dates: "Dec 20-22, 2024", status: "pending", days: 3 },
    { id: 2, type: "Sick Leave", dates: "Dec 5, 2024", status: "approved", days: 1 },
    { id: 3, type: "Personal", dates: "Nov 28, 2024", status: "approved", days: 1 },
    { id: 4, type: "Medical", dates: "Nov 15, 2024", status: "rejected", days: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Leaves</h1>
          <p className="text-muted-foreground">Manage your time off</p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Apply
        </Button>
      </div>

      {/* Leave Balance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Leave Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">18</p>
              <p className="text-xs text-muted-foreground">Available</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-600">2</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">10</p>
              <p className="text-xs text-muted-foreground">Used</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="requests" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="requests">My Requests</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="mt-4 space-y-3">
          {leaveRequests.map((leave) => (
            <Card key={leave.id}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium">{leave.type}</h3>
                    <p className="text-sm text-muted-foreground">{leave.dates}</p>
                  </div>
                  <Badge className={getStatusColor(leave.status)}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(leave.status)}
                      <span className="capitalize">{leave.status}</span>
                    </div>
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {leave.days} day{leave.days > 1 ? "s" : ""}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="calendar" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">Calendar Integration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  View your leaves and office events in calendar format
                </p>
                <Button variant="outline">
                  Connect Google Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Apply */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Apply</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-3 flex flex-col space-y-1">
              <span className="text-sm font-medium">Sick Leave</span>
              <span className="text-xs text-muted-foreground">Today</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col space-y-1">
              <span className="text-sm font-medium">Half Day</span>
              <span className="text-xs text-muted-foreground">Today</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaves;