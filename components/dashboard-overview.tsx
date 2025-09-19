"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trash2, AlertTriangle, MapPin, Droplets, Wind, Activity, DollarSign, Users } from "lucide-react"
import { SensorChart } from "@/components/sensor-chart"
import { WasteClassificationChart } from "@/components/waste-classification-chart"
import { PenaltyTable } from "@/components/penalty-table"
import { DustbinMap } from "@/components/dustbin-map"

export function DashboardOverview() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Total Dustbins</CardTitle>
            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Needs Collection</CardTitle>
            <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-destructive">23</div>
            <p className="text-xs text-muted-foreground">Urgent: 8 bins over 90%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Penalties Today</CardTitle>
            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">₹12,500 in fines</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">System Health</CardTitle>
            <Activity className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-primary">94%</div>
            <p className="text-xs text-muted-foreground">All sensors operational</p>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Sensor Data */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-chart-1" />
              Fill Levels (Ultrasonic)
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Real-time dustbin capacity monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <SensorChart type="ultrasonic" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
              <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-chart-2" />
              Moisture Levels
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Biodegradable waste detection</CardDescription>
          </CardHeader>
          <CardContent>
            <SensorChart type="moisture" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
              <Wind className="h-4 w-4 sm:h-5 sm:w-5 text-chart-3" />
              Gas Sensors
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Waste decomposition monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <SensorChart type="gas" />
          </CardContent>
        </Card>
      </div>

      {/* Waste Classification and Map */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm sm:text-base">Waste Classification Analytics</CardTitle>
            <CardDescription className="text-xs sm:text-sm">ML-powered waste segregation analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <WasteClassificationChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              Dustbin Locations
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Real-time status and locations</CardDescription>
          </CardHeader>
          <CardContent>
            <DustbinMap />
          </CardContent>
        </Card>
      </div>

      {/* ML Predictions and Alerts */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>ML Health Predictions</CardTitle>
            <CardDescription>Equipment maintenance forecasting</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Dustbin DB-001</span>
                <Badge variant="outline">7 days</Badge>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-muted-foreground">Ultrasonic sensor maintenance due</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Dustbin DB-045</span>
                <Badge variant="destructive">2 days</Badge>
              </div>
              <Progress value={95} className="h-2" />
              <p className="text-xs text-muted-foreground">Gas sensor replacement needed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Collection Predictions</CardTitle>
            <CardDescription>Optimized pickup scheduling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Zone A</p>
                <p className="text-xs text-muted-foreground">12 dustbins</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">2:30 PM</p>
                <Badge variant="secondary">Predicted</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Zone B</p>
                <p className="text-xs text-muted-foreground">8 dustbins</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">4:15 PM</p>
                <Badge variant="secondary">Predicted</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>System notifications and warnings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Bin Overflow Alert</p>
                <p className="text-xs text-muted-foreground">DB-023 at 98% capacity</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-chart-2 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Penalty Issued</p>
                <p className="text-xs text-muted-foreground">Wrong waste segregation detected</p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Penalties Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm sm:text-base">Recent Penalty Records</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Latest violations and fines issued</CardDescription>
        </CardHeader>
        <CardContent>
          <PenaltyTable />
        </CardContent>
      </Card>
    </div>
  )
}
