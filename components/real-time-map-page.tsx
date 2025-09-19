"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Navigation, Truck } from "lucide-react"

const dustbins = [
  {
    id: "DB-001",
    zone: "A",
    fillLevel: 25,
    status: "normal",
    lat: 28.6139,
    lng: 77.209,
    lastCollection: "2 days ago",
    nextPredicted: "3 days",
  },
  {
    id: "DB-002",
    zone: "A",
    fillLevel: 78,
    status: "warning",
    lat: 28.6129,
    lng: 77.208,
    lastCollection: "1 day ago",
    nextPredicted: "1 day",
  },
  {
    id: "DB-003",
    zone: "B",
    fillLevel: 95,
    status: "critical",
    lat: 28.6149,
    lng: 77.21,
    lastCollection: "3 days ago",
    nextPredicted: "Immediate",
  },
  {
    id: "DB-004",
    zone: "B",
    fillLevel: 45,
    status: "normal",
    lat: 28.6159,
    lng: 77.211,
    lastCollection: "1 day ago",
    nextPredicted: "2 days",
  },
  {
    id: "DB-005",
    zone: "C",
    fillLevel: 88,
    status: "warning",
    lat: 28.6169,
    lng: 77.212,
    lastCollection: "2 days ago",
    nextPredicted: "1 day",
  },
  {
    id: "DB-006",
    zone: "C",
    fillLevel: 15,
    status: "normal",
    lat: 28.6179,
    lng: 77.213,
    lastCollection: "4 hours ago",
    nextPredicted: "4 days",
  },
]

export function RealTimeMapPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Real-time Map</h1>
          <p className="text-muted-foreground">Live dustbin locations and status monitoring</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Navigation className="h-4 w-4 mr-2" />
            Route Planning
          </Button>
          <Button>
            <Truck className="h-4 w-4 mr-2" />
            Dispatch Collection
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Map View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Interactive Map</CardTitle>
                  <CardDescription>Real-time dustbin locations and status</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
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
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-[500px] bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

                {/* Map markers */}
                {dustbins.map((dustbin, index) => (
                  <div
                    key={dustbin.id}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${15 + index * 12}%`,
                      top: `${20 + (index % 4) * 15}%`,
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full border-2 border-background shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor:
                          dustbin.status === "critical"
                            ? "hsl(var(--destructive))"
                            : dustbin.status === "warning"
                              ? "hsl(var(--chart-2))"
                              : "hsl(var(--primary))",
                      }}
                    >
                      <span className="text-xs font-bold text-white">{dustbin.fillLevel}</span>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-popover border rounded-lg p-3 shadow-lg min-w-48">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{dustbin.id}</span>
                            <Badge
                              variant={
                                dustbin.status === "critical"
                                  ? "destructive"
                                  : dustbin.status === "warning"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {dustbin.status}
                            </Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <div>Zone: {dustbin.zone}</div>
                            <div>Fill Level: {dustbin.fillLevel}%</div>
                            <div>Last Collection: {dustbin.lastCollection}</div>
                            <div>Next Predicted: {dustbin.nextPredicted}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
                  <h4 className="font-medium text-sm">Status Legend</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span>Normal (0-70%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--chart-2))" }}></div>
                      <span>Warning (71-90%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <span>Critical (91-100%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dustbin List */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search dustbin ID..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dustbin Status</CardTitle>
              <CardDescription>Live status of all dustbins</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {dustbins.map((dustbin) => (
                  <div key={dustbin.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor:
                            dustbin.status === "critical"
                              ? "hsl(var(--destructive))"
                              : dustbin.status === "warning"
                                ? "hsl(var(--chart-2))"
                                : "hsl(var(--primary))",
                        }}
                      />
                      <div>
                        <p className="text-sm font-medium">{dustbin.id}</p>
                        <p className="text-xs text-muted-foreground">Zone {dustbin.zone}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{dustbin.fillLevel}%</div>
                      <div className="text-xs text-muted-foreground">{dustbin.nextPredicted}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
