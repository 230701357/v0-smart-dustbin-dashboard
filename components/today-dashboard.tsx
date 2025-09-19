"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Truck, AlertTriangle, Clock, MapPin, TrendingUp, Activity, Users, DollarSign } from "lucide-react"

const todayStats = {
  collections: { completed: 45, scheduled: 52, efficiency: 87 },
  penalties: { issued: 8, amount: 18500 },
  alerts: { critical: 3, warnings: 12, resolved: 28 },
  routes: { active: 6, completed: 2, delayed: 1 },
}

const recentActivities = [
  {
    id: 1,
    type: "collection",
    message: "Dustbin DB-045 collected successfully",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    type: "alert",
    message: "High fill level detected at DB-023",
    time: "5 minutes ago",
    status: "warning",
  },
  {
    id: 3,
    type: "penalty",
    message: "Penalty issued for wrong segregation",
    time: "12 minutes ago",
    status: "info",
  },
  {
    id: 4,
    type: "route",
    message: "Route RT-003 completed ahead of schedule",
    time: "18 minutes ago",
    status: "success",
  },
]

const criticalAlerts = [
  {
    id: "DB-023",
    location: "Sector 15, Block A",
    issue: "Fill level 95% - Urgent collection needed",
    time: "3 minutes ago",
    priority: "critical",
  },
  {
    id: "DB-067",
    location: "Sector 31, Market Area",
    issue: "Sensor malfunction detected",
    time: "8 minutes ago",
    priority: "high",
  },
  {
    id: "DB-012",
    location: "Sector 8, Residential",
    issue: "Unusual gas levels detected",
    time: "15 minutes ago",
    priority: "critical",
  },
]

export function TodayDashboard() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Today's Operations
          </h1>
          <p className="text-muted-foreground">{currentDate}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Activity className="h-4 w-4 mr-2" />
            Live View
          </Button>
          <Button>
            <TrendingUp className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Today's Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collections Today</CardTitle>
            <Truck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {todayStats.collections.completed}/{todayStats.collections.scheduled}
            </div>
            <div className="mt-2">
              <Progress value={todayStats.collections.efficiency} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">{todayStats.collections.efficiency}% efficiency</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Penalties Issued</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{todayStats.penalties.issued}</div>
            <p className="text-xs text-muted-foreground">
              ₹{todayStats.penalties.amount.toLocaleString()} total amount
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Activity className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">
              {todayStats.alerts.critical + todayStats.alerts.warnings}
            </div>
            <p className="text-xs text-muted-foreground">
              {todayStats.alerts.critical} critical, {todayStats.alerts.warnings} warnings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Route Status</CardTitle>
            <MapPin className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">{todayStats.routes.active}</div>
            <p className="text-xs text-muted-foreground">
              {todayStats.routes.completed} completed, {todayStats.routes.delayed} delayed
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activities" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          <TabsTrigger value="alerts">Critical Alerts</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Activity Feed</CardTitle>
              <CardDescription>Live updates from the field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div
                      className={`p-2 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "warning"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {activity.type === "collection" && <Truck className="h-4 w-4" />}
                      {activity.type === "alert" && <AlertTriangle className="h-4 w-4" />}
                      {activity.type === "penalty" && <DollarSign className="h-4 w-4" />}
                      {activity.type === "route" && <MapPin className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </p>
                    </div>
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "warning"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Critical Alerts Requiring Attention</CardTitle>
              <CardDescription>Immediate action required</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {criticalAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-4 border rounded-lg bg-red-50 border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{alert.id}</span>
                        <Badge variant="destructive" className="text-xs">
                          {alert.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{alert.location}</p>
                      <p className="text-sm font-medium text-red-800">{alert.issue}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">Dispatch Team</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Today vs Yesterday</CardTitle>
                <CardDescription>Performance comparison</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Collections Completed</span>
                    <span className="text-green-600">+12%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <span className="text-green-600">-8%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fuel Efficiency</span>
                    <span className="text-green-600">+5%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>Individual team metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Team Alpha</span>
                  </div>
                  <Badge variant="default">Excellent</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Team Beta</span>
                  </div>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Team Gamma</span>
                  </div>
                  <Badge variant="outline">Average</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
