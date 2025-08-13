import { BarChart3, TrendingUp, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

const Statistics = () => {
  const attendanceData = [
    { month: "Nov", percentage: 95 },
    { month: "Oct", percentage: 98 },
    { month: "Sep", percentage: 92 },
    { month: "Aug", percentage: 96 },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Statistics</h1>
        <p className="text-muted-foreground">Your work insights</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold">96%</p>
            <p className="text-xs text-muted-foreground">Attendance Rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">8</p>
            <p className="text-xs text-muted-foreground">Days Used</p>
          </CardContent>
        </Card>
      </div>

      {/* Leave Statistics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Leave Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Vacation (12 days used)</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Sick Leave (3 days used)</span>
              <span>30%</span>
            </div>
            <Progress value={30} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Personal (2 days used)</span>
              <span>20%</span>
            </div>
            <Progress value={20} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Monthly Attendance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Monthly Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {attendanceData.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{month.month}</span>
                <div className="flex items-center space-x-3 flex-1 ml-4">
                  <Progress value={month.percentage} className="h-2 flex-1" />
                  <span className="text-sm text-muted-foreground w-10">
                    {month.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Polls Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Team Polls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 border rounded-lg">
              <h4 className="font-medium text-sm mb-2">
                Preferred lunch timing for team meetings?
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>12:00 PM - 1:00 PM</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-1" />
                <div className="flex justify-between text-sm">
                  <span>1:00 PM - 2:00 PM</span>
                  <span>55%</span>
                </div>
                <Progress value={55} className="h-1" />
              </div>
            </div>
            
            <Button variant="outline" className="w-full" size="sm">
              View All Polls
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Rollover Leaves */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Rollover Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-semibold">5 Days</p>
            <p className="text-sm text-muted-foreground">
              Available to carry forward to next year
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;