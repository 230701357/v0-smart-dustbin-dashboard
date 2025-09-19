"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Route, Truck, MapPin, Clock, Navigation, Play, Pause, RotateCcw, Settings, Send } from "lucide-react"
import { useState } from "react"

const routes = [
  {
    id: "RT-001",
    name: "Zone A Morning Route",
    vehicle: "Truck-01",
    driver: "Rajesh Kumar",
    status: "Active",
    dustbins: 12,
    distance: "8.5 km",
    estimatedTime: "2h 15m",
    actualTime: "2h 8m",
    fuelEfficiency: "12.5 L/100km",
    completionRate: 100,
    priority: "High",
  },
  {
    id: "RT-002",
    name: "Zone B Afternoon Route",
    vehicle: "Truck-02",
    driver: "Priya Singh",
    status: "In Progress",
    dustbins: 15,
    distance: "11.2 km",
    estimatedTime: "2h 45m",
    actualTime: "1h 30m",
    fuelEfficiency: "13.2 L/100km",
    completionRate: 67,
    priority: "Medium",
  },
  {
    id: "RT-003",
    name: "Zone C Evening Route",
    vehicle: "Truck-03",
    driver: "Mohammed Ali",
    status: "Scheduled",
    dustbins: 10,
    distance: "7.8 km",
    estimatedTime: "2h 0m",
    actualTime: "-",
    fuelEfficiency: "11.8 L/100km",
    completionRate: 0,
    priority: "Low",
  },
]

const optimizationMetrics = [
  { metric: "Total Distance", current: "127.5 km", optimized: "98.2 km", savings: "23%" },
  { metric: "Total Time", current: "18h 30m", optimized: "14h 45m", savings: "20%" },
  { metric: "Fuel Consumption", current: "156.8 L", optimized: "125.4 L", savings: "20%" },
  { metric: "CO2 Emissions", current: "412 kg", optimized: "329 kg", savings: "20%" },
]

const vehicles = [
  {
    id: "TRK-001",
    name: "Truck-01",
    type: "Compactor",
    capacity: "15 m³",
    status: "Active",
    location: "Zone A",
    fuelLevel: 85,
    maintenance: "Good",
    driver: "Rajesh Kumar",
  },
  {
    id: "TRK-002",
    name: "Truck-02",
    type: "Compactor",
    capacity: "15 m³",
    status: "Active",
    location: "Zone B",
    fuelLevel: 62,
    maintenance: "Good",
    driver: "Priya Singh",
  },
  {
    id: "TRK-003",
    name: "Truck-03",
    type: "Standard",
    capacity: "12 m³",
    status: "Maintenance",
    location: "Depot",
    fuelLevel: 45,
    maintenance: "Service Due",
    driver: "Mohammed Ali",
  },
]

export function RouteOptimizationPage() {
  const [zoneFilter, setZoneFilter] = useState("all")
  const [optimizationPriority, setOptimizationPriority] = useState("balanced")
  const [algorithm, setAlgorithm] = useState("genetic")

  const handleRouteDispatch = (routeId: string) => {
    alert(`Dispatching collection team for route ${routeId}`)
  }

  const handleCreateRoute = () => {
    alert("Route planning wizard would open here")
  }

  const handleBulkDispatch = () => {
    alert("Dispatching all scheduled routes for today")
  }

  const handleEmergencyDispatch = () => {
    alert("Emergency dispatch activated - sending nearest available team")
  }

  const handleOptimizationSettings = () => {
    alert("Optimization settings panel would open here")
  }

  const handleOptimizeRoutes = () => {
    alert("Running route optimization algorithm...")
  }

  const handleStartAllRoutes = () => {
    alert("Starting all scheduled routes")
  }

  const handlePauseRoutes = () => {
    alert("Pausing active routes")
  }

  const handleEmergencyReroute = () => {
    alert("Emergency rerouting activated")
  }

  const handleViewRoute = (routeId: string) => {
    alert(`Viewing route details for ${routeId}`)
  }

  const handleNavigateRoute = (routeId: string) => {
    alert(`Opening navigation for ${routeId}`)
  }

  const handleRunOptimization = () => {
    alert(`Running ${algorithm} optimization with ${optimizationPriority} priority`)
  }

  const handleTrackVehicle = (vehicleId: string) => {
    alert(`Tracking vehicle ${vehicleId}`)
  }

  const handleManageVehicle = (vehicleId: string) => {
    alert(`Managing vehicle ${vehicleId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Route Planning & Dispatch</h1>
          <p className="text-muted-foreground">Optimize collection routes and dispatch teams</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCreateRoute}>
            <Route className="h-4 w-4 mr-2" />
            Plan New Route
          </Button>
          <Button onClick={handleBulkDispatch}>
            <Send className="h-4 w-4 mr-2" />
            Dispatch All
          </Button>
        </div>
      </div>

      {/* Enhanced Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Routes</CardTitle>
            <Route className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 in progress, 6 scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fleet Utilization</CardTitle>
            <Truck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">87%</div>
            <p className="text-xs text-muted-foreground">12 of 14 vehicles active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Service Time</CardTitle>
            <Clock className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">3.2</div>
            <p className="text-xs text-muted-foreground">minutes per dustbin</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Savings</CardTitle>
            <Clock className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">23%</div>
            <p className="text-xs text-muted-foreground">vs manual routing</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="dispatch" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dispatch">Dispatch Center</TabsTrigger>
          <TabsTrigger value="routes">Active Routes</TabsTrigger>
          <TabsTrigger value="optimization">Route Optimization</TabsTrigger>
          <TabsTrigger value="fleet">Fleet Management</TabsTrigger>
        </TabsList>

        <TabsContent value="dispatch" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Collection Dispatch Center</CardTitle>
              <CardDescription>Real-time dispatch and coordination</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Quick Dispatch</h4>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Select defaultValue="zone-a">
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zone-a">Zone A</SelectItem>
                          <SelectItem value="zone-b">Zone B</SelectItem>
                          <SelectItem value="zone-c">Zone C</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button onClick={() => handleRouteDispatch("ZONE-A")}>
                        <Send className="h-4 w-4 mr-2" />
                        Dispatch
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Enter dustbin ID (e.g., DB-023)" />
                      <Button variant="outline" onClick={handleEmergencyDispatch}>
                        Emergency
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Scheduled Collections</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <span className="font-medium">Morning Route A</span>
                        <p className="text-sm text-muted-foreground">8:00 AM - 12 dustbins</p>
                      </div>
                      <Button size="sm" onClick={() => handleRouteDispatch("RT-001")}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <span className="font-medium">Afternoon Route B</span>
                        <p className="text-sm text-muted-foreground">2:00 PM - 15 dustbins</p>
                      </div>
                      <Button size="sm" onClick={() => handleRouteDispatch("RT-002")}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          {/* Route Control Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Route Control Panel</CardTitle>
              <CardDescription>Monitor and control active collection routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center">
                <Button onClick={handleStartAllRoutes}>
                  <Play className="h-4 w-4 mr-2" />
                  Start All Routes
                </Button>
                <Button variant="outline" onClick={handlePauseRoutes}>
                  <Pause className="h-4 w-4 mr-2" />
                  Pause Routes
                </Button>
                <Button variant="outline" onClick={handleEmergencyReroute}>
                  <Navigation className="h-4 w-4 mr-2" />
                  Emergency Reroute
                </Button>
                <div className="ml-auto flex gap-2">
                  <Select value={zoneFilter} onValueChange={setZoneFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Zones</SelectItem>
                      <SelectItem value="a">Zone A</SelectItem>
                      <SelectItem value="b">Zone B</SelectItem>
                      <SelectItem value="c">Zone C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Routes Table */}
          <Card>
            <CardHeader>
              <CardTitle>Current Routes</CardTitle>
              <CardDescription>Real-time status of collection routes</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Route</TableHead>
                    <TableHead>Vehicle & Driver</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Efficiency</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routes.map((route) => (
                    <TableRow key={route.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{route.name}</div>
                          <div className="text-sm text-muted-foreground">{route.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{route.vehicle}</div>
                          <div className="text-sm text-muted-foreground">{route.driver}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            route.status === "Active"
                              ? "default"
                              : route.status === "In Progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {route.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{route.completionRate}%</span>
                            <span>{route.dustbins} bins</span>
                          </div>
                          <Progress value={route.completionRate} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>{route.distance}</TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{route.estimatedTime}</div>
                          <div className="text-xs text-muted-foreground">Actual: {route.actualTime}</div>
                        </div>
                      </TableCell>
                      <TableCell>{route.fuelEfficiency}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewRoute(route.id)}>
                            <MapPin className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleNavigateRoute(route.id)}>
                            <Navigation className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Optimization Results */}
            <Card>
              <CardHeader>
                <CardTitle>Optimization Results</CardTitle>
                <CardDescription>Potential savings from route optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {optimizationMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{metric.metric}</span>
                      <Badge variant="outline" className="text-chart-2">
                        -{metric.savings}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Current: </span>
                        <span>{metric.current}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Optimized: </span>
                        <span className="font-medium text-chart-2">{metric.optimized}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Optimization Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Optimization Parameters</CardTitle>
                <CardDescription>Configure route optimization preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">Optimization Priority</Label>
                  <Select value={optimizationPriority} onValueChange={setOptimizationPriority}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time">Minimize Time</SelectItem>
                      <SelectItem value="distance">Minimize Distance</SelectItem>
                      <SelectItem value="fuel">Minimize Fuel</SelectItem>
                      <SelectItem value="balanced">Balanced Approach</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="algorithm">Algorithm</Label>
                  <Select value={algorithm} onValueChange={setAlgorithm}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genetic">Genetic Algorithm</SelectItem>
                      <SelectItem value="ant">Ant Colony</SelectItem>
                      <SelectItem value="simulated">Simulated Annealing</SelectItem>
                      <SelectItem value="nearest">Nearest Neighbor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="constraints">Constraints</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="traffic" defaultChecked />
                      <Label htmlFor="traffic" className="text-sm">
                        Consider traffic patterns
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="capacity" defaultChecked />
                      <Label htmlFor="capacity" className="text-sm">
                        Vehicle capacity limits
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="time-windows" defaultChecked />
                      <Label htmlFor="time-windows" className="text-sm">
                        Collection time windows
                      </Label>
                    </div>
                  </div>
                </div>
                <Button className="w-full" onClick={handleRunOptimization}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Run Optimization
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Route Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Route Comparison</CardTitle>
              <CardDescription>Compare current vs optimized routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Current Routes</h4>
                  <div className="space-y-2">
                    {routes.map((route, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{route.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {route.distance} • {route.estimatedTime}
                          </div>
                        </div>
                        <Badge variant="outline">{route.dustbins} bins</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Optimized Routes</h4>
                  <div className="space-y-2">
                    {routes.map((route, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg bg-muted/50">
                        <div>
                          <div className="font-medium">{route.name}</div>
                          <div className="text-sm text-chart-2">
                            {(Number.parseFloat(route.distance) * 0.8).toFixed(1)} km •{" "}
                            {Math.floor(Number.parseInt(route.estimatedTime) * 0.8)}h{" "}
                            {Math.floor(Number.parseInt(route.estimatedTime.split("h ")[1]) * 0.8)}m
                          </div>
                        </div>
                        <Badge variant="secondary">{route.dustbins} bins</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fleet" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Overview</CardTitle>
              <CardDescription>Monitor vehicle status and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {vehicles.map((vehicle) => (
                  <Card key={vehicle.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                        <Badge variant={vehicle.status === "Active" ? "default" : "secondary"}>{vehicle.status}</Badge>
                      </div>
                      <CardDescription>
                        {vehicle.type} • {vehicle.capacity}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Fuel Level</span>
                          <span>{vehicle.fuelLevel}%</span>
                        </div>
                        <Progress value={vehicle.fuelLevel} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Location:</span>
                          <span>{vehicle.location}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Driver:</span>
                          <span>{vehicle.driver}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Maintenance:</span>
                          <Badge
                            variant={vehicle.maintenance === "Good" ? "outline" : "destructive"}
                            className="text-xs"
                          >
                            {vehicle.maintenance}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => handleTrackVehicle(vehicle.id)}
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          Track
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => handleManageVehicle(vehicle.id)}
                        >
                          <Settings className="h-4 w-4 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Route Efficiency Trends</CardTitle>
                <CardDescription>Performance metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-chart-2">23%</div>
                      <div className="text-sm text-muted-foreground">Time Reduction</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-chart-3">18%</div>
                      <div className="text-sm text-muted-foreground">Fuel Savings</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Route Completion</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>On-Time Performance</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis</CardTitle>
                <CardDescription>Financial impact of optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">₹45,200</div>
                      <div className="text-sm text-muted-foreground">Monthly Savings</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-chart-2">₹5,42,400</div>
                      <div className="text-sm text-muted-foreground">Annual Projection</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Fuel Cost Reduction</span>
                      <span className="text-sm font-medium">₹18,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Maintenance Savings</span>
                      <span className="text-sm font-medium">₹12,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Labor Efficiency</span>
                      <span className="text-sm font-medium">₹14,400</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
