"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import { Recycle, AlertTriangle, Brain, Leaf, Zap, Target } from "lucide-react"
import { useState } from "react"

// Waste classification data
const wasteClassificationData = [
  { name: "Biodegradable", value: 65, color: "hsl(var(--chart-2))", trend: "+5%" },
  { name: "Non-Biodegradable", value: 28, color: "hsl(var(--chart-3))", trend: "-3%" },
  { name: "Mixed/Contaminated", value: 7, color: "hsl(var(--chart-4))", trend: "-2%" },
]

// ML accuracy data
const mlAccuracyData = [
  { category: "Biodegradable", accuracy: 94, confidence: 96 },
  { category: "Non-Biodegradable", accuracy: 91, confidence: 93 },
  { category: "Mixed/Contaminated", accuracy: 87, confidence: 89 },
]

// Hourly classification data
const hourlyData = [
  { hour: "00:00", biodegradable: 45, nonBiodegradable: 25, mixed: 5 },
  { hour: "04:00", biodegradable: 35, nonBiodegradable: 20, mixed: 3 },
  { hour: "08:00", biodegradable: 85, nonBiodegradable: 45, mixed: 12 },
  { hour: "12:00", biodegradable: 120, nonBiodegradable: 65, mixed: 18 },
  { hour: "16:00", biodegradable: 95, nonBiodegradable: 55, mixed: 15 },
  { hour: "20:00", biodegradable: 75, nonBiodegradable: 40, mixed: 8 },
  { hour: "24:00", biodegradable: 55, nonBiodegradable: 30, mixed: 6 },
]

// Zone-wise data
const zoneData = [
  { zone: "Zone A", biodegradable: 68, nonBiodegradable: 25, mixed: 7, total: 1250 },
  { zone: "Zone B", biodegradable: 62, nonBiodegradable: 31, mixed: 7, total: 980 },
  { zone: "Zone C", biodegradable: 71, nonBiodegradable: 22, mixed: 7, total: 1100 },
  { zone: "Zone D", biodegradable: 59, nonBiodegradable: 35, mixed: 6, total: 850 },
]

// Sensor correlation data
const sensorCorrelationData = [
  { time: "00:00", moisture: 15, gas: 120, classification: "Bio" },
  { time: "04:00", moisture: 22, gas: 145, classification: "Bio" },
  { time: "08:00", moisture: 45, gas: 180, classification: "Mixed" },
  { time: "12:00", moisture: 67, gas: 220, classification: "Bio" },
  { time: "16:00", moisture: 72, gas: 195, classification: "Bio" },
  { time: "20:00", moisture: 58, gas: 165, classification: "Non-Bio" },
  { time: "24:00", moisture: 35, gas: 140, classification: "Bio" },
]

export function WasteAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("today")

  const handleRetrainModel = () => {
    alert("Starting ML model retraining process...")
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Waste Classification Analytics</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            AI-powered waste segregation analysis and insights
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleRetrainModel} className="w-full sm:w-auto bg-transparent">
            <Brain className="h-4 w-4 mr-2" />
            <span className="sm:inline">Retrain Model</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Classification Accuracy</CardTitle>
            <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-primary">91.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Proper Segregation</CardTitle>
            <Recycle className="h-3 w-3 sm:h-4 sm:w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-chart-2">87.5%</div>
            <p className="text-xs text-muted-foreground">Citizens following guidelines</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Contamination Rate</CardTitle>
            <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-destructive">7.2%</div>
            <p className="text-xs text-muted-foreground">-1.8% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">ML Confidence</CardTitle>
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-chart-3">93.8%</div>
            <p className="text-xs text-muted-foreground">Model reliability score</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-5 min-w-[500px] sm:min-w-0">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="ml-performance" className="text-xs sm:text-sm">
              ML Performance
            </TabsTrigger>
            <TabsTrigger value="trends" className="text-xs sm:text-sm">
              Trends
            </TabsTrigger>
            <TabsTrigger value="zones" className="text-xs sm:text-sm">
              Zone Analysis
            </TabsTrigger>
            <TabsTrigger value="sensors" className="text-xs sm:text-sm">
              Sensor Correlation
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Main Classification Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">Current Waste Distribution</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Real-time classification breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[250px] sm:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={wasteClassificationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {wasteClassificationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="rounded-lg border bg-background p-3 shadow-sm">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col">
                                      <span className="text-[0.70rem] uppercase text-muted-foreground">Category</span>
                                      <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-[0.70rem] uppercase text-muted-foreground">Percentage</span>
                                      <span className="font-bold" style={{ color: payload[0].payload.color }}>
                                        {payload[0].value}%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                            return null
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {wasteClassificationData.map((item, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm font-medium">{item.value}%</span>
                          <Badge variant="outline" className="text-xs">
                            {item.trend}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hourly Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">24-Hour Classification Trends</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Waste patterns throughout the day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] sm:h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="biodegradable"
                        stackId="1"
                        stroke="hsl(var(--chart-2))"
                        fill="hsl(var(--chart-2))"
                      />
                      <Area
                        type="monotone"
                        dataKey="nonBiodegradable"
                        stackId="1"
                        stroke="hsl(var(--chart-3))"
                        fill="hsl(var(--chart-3))"
                      />
                      <Area
                        type="monotone"
                        dataKey="mixed"
                        stackId="1"
                        stroke="hsl(var(--chart-4))"
                        fill="hsl(var(--chart-4))"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ml-performance" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">ML Model Performance</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Classification accuracy by category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mlAccuracyData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.category}</span>
                      <span className="font-medium">{item.accuracy}%</span>
                    </div>
                    <Progress value={item.accuracy} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Accuracy</span>
                      <span>Confidence: {item.confidence}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">Model Training History</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Accuracy improvements over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[180px] sm:h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { version: "v1.0", accuracy: 78 },
                        { version: "v1.1", accuracy: 82 },
                        { version: "v1.2", accuracy: 87 },
                        { version: "v1.3", accuracy: 91 },
                        { version: "v1.4", accuracy: 91.2 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="version" fontSize={12} />
                      <YAxis domain={[70, 100]} fontSize={12} />
                      <Tooltip />
                      <Line type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Classification Insights</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                AI-generated insights and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="h-4 w-4 text-chart-2" />
                    <span className="font-medium text-sm sm:text-base">Biodegradable Detection</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    High moisture levels {String.fromCharCode(62)}60% combined with specific gas signatures indicate
                    biodegradable waste with 94% accuracy.
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-chart-3" />
                    <span className="font-medium text-sm sm:text-base">Contamination Patterns</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Mixed waste typically occurs during peak hours (12-16:00) when disposal volume is highest.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="zones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Zone-wise Classification Analysis</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Waste segregation performance by area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={zoneData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="zone" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="biodegradable" fill="hsl(var(--chart-2))" />
                    <Bar dataKey="nonBiodegradable" fill="hsl(var(--chart-3))" />
                    <Bar dataKey="mixed" fill="hsl(var(--chart-4))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sensors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Sensor Data Correlation</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                How moisture and gas sensors contribute to classification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sensorCorrelationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" fontSize={12} />
                    <YAxis yAxisId="left" fontSize={12} />
                    <YAxis yAxisId="right" orientation="right" fontSize={12} />
                    <Tooltip />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="moisture"
                      stroke="hsl(var(--chart-2))"
                      name="Moisture %"
                    />
                    <Line yAxisId="right" type="monotone" dataKey="gas" stroke="hsl(var(--chart-3))" name="Gas (ppm)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
