"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Activity, Zap, Thermometer, Droplets, Wind, BarChart3, TrendingUp, AlertTriangle } from "lucide-react"
import { useState } from "react"

const correlationData = [
  {
    sensors: ["Fill Level", "Moisture"],
    correlation: 0.87,
    insight: "Higher moisture content correlates with faster fill rates",
    strength: "Strong Positive",
  },
  {
    sensors: ["Temperature", "Gas Levels"],
    correlation: 0.73,
    insight: "Temperature increases lead to higher gas emissions",
    strength: "Moderate Positive",
  },
  {
    sensors: ["Fill Level", "Collection Frequency"],
    correlation: -0.65,
    insight: "More frequent collections reduce overflow incidents",
    strength: "Moderate Negative",
  },
  {
    sensors: ["Moisture", "Penalty Rate"],
    correlation: 0.58,
    insight: "Higher moisture correlates with more segregation violations",
    strength: "Moderate Positive",
  },
]

const sensorHealth = [
  { id: "DB-001", ultrasonic: 98, moisture: 95, gas: 92, temperature: 97, overall: 96 },
  { id: "DB-002", ultrasonic: 87, moisture: 89, gas: 94, temperature: 91, overall: 90 },
  { id: "DB-003", ultrasonic: 92, moisture: 78, gas: 88, temperature: 85, overall: 86 },
  { id: "DB-004", ultrasonic: 95, moisture: 93, gas: 89, temperature: 94, overall: 93 },
]

const anomalyDetection = [
  {
    dustbin: "DB-023",
    anomaly: "Unusual fill pattern detected",
    sensors: ["Ultrasonic", "Moisture"],
    severity: "Medium",
    timestamp: "2 hours ago",
  },
  {
    dustbin: "DB-045",
    anomaly: "Temperature spike without corresponding gas increase",
    sensors: ["Temperature", "Gas"],
    severity: "Low",
    timestamp: "4 hours ago",
  },
  {
    dustbin: "DB-067",
    anomaly: "Moisture levels inconsistent with weather data",
    sensors: ["Moisture"],
    severity: "High",
    timestamp: "6 hours ago",
  },
]

export function SensorCorrelationPage() {
  const [timeRange, setTimeRange] = useState("24h")
  const [selectedSensor, setSelectedSensor] = useState("all")

  const getCorrelationColor = (correlation: number) => {
    const abs = Math.abs(correlation)
    if (abs >= 0.8) return "text-green-600"
    if (abs >= 0.6) return "text-yellow-600"
    return "text-red-600"
  }

  const getHealthColor = (health: number) => {
    if (health >= 95) return "text-green-600"
    if (health >= 85) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Sensor Correlation Analysis
          </h1>
          <p className="text-muted-foreground">Advanced sensor data relationships and patterns</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last Hour</SelectItem>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Correlation Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Strong Correlations</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">3</div>
            <p className="text-xs text-muted-foreground">|r| ≥ 0.8</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sensor Health</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">91%</div>
            <p className="text-xs text-muted-foreground">Average across all sensors</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalies Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">3</div>
            <p className="text-xs text-muted-foreground">In last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
            <Zap className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">97.8%</div>
            <p className="text-xs text-muted-foreground">Valid data points</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="correlations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="correlations">Correlations</TabsTrigger>
          <TabsTrigger value="health">Sensor Health</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
          <TabsTrigger value="patterns">Pattern Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="correlations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sensor Correlation Matrix</CardTitle>
              <CardDescription>Statistical relationships between different sensor types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {correlationData.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.sensors[0]}</Badge>
                        <span className="text-muted-foreground">↔</span>
                        <Badge variant="outline">{item.sensors[1]}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${getCorrelationColor(item.correlation)}`}>
                          r = {item.correlation}
                        </span>
                        <Badge variant="secondary">{item.strength}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.insight}</p>
                    <div className="mt-2">
                      <Progress value={Math.abs(item.correlation) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Individual Sensor Health Status</CardTitle>
              <CardDescription>Performance metrics for each sensor type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sensorHealth.map((dustbin, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{dustbin.id}</h4>
                      <Badge
                        variant={
                          dustbin.overall >= 95 ? "default" : dustbin.overall >= 85 ? "secondary" : "destructive"
                        }
                      >
                        {dustbin.overall}% Overall
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Ultrasonic</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className={getHealthColor(dustbin.ultrasonic)}>{dustbin.ultrasonic}%</span>
                        </div>
                        <Progress value={dustbin.ultrasonic} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Moisture</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className={getHealthColor(dustbin.moisture)}>{dustbin.moisture}%</span>
                        </div>
                        <Progress value={dustbin.moisture} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Wind className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Gas</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className={getHealthColor(dustbin.gas)}>{dustbin.gas}%</span>
                        </div>
                        <Progress value={dustbin.gas} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-red-600" />
                          <span className="text-sm">Temperature</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className={getHealthColor(dustbin.temperature)}>{dustbin.temperature}%</span>
                        </div>
                        <Progress value={dustbin.temperature} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection Results</CardTitle>
              <CardDescription>AI-powered detection of unusual sensor patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {anomalyDetection.map((anomaly, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{anomaly.dustbin}</span>
                          <Badge
                            variant={
                              anomaly.severity === "High"
                                ? "destructive"
                                : anomaly.severity === "Medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {anomaly.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{anomaly.anomaly}</p>
                        <div className="flex gap-1">
                          {anomaly.sensors.map((sensor, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {sensor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{anomaly.timestamp}</p>
                        <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                          Investigate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Patterns</CardTitle>
                <CardDescription>Sensor behavior throughout the day</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Morning Peak (6-9 AM)</span>
                      <span>High Activity</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Afternoon (12-2 PM)</span>
                      <span>Moderate Activity</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Evening Peak (6-8 PM)</span>
                      <span>Very High Activity</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Night (10 PM-5 AM)</span>
                      <span>Low Activity</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Correlations</CardTitle>
                <CardDescription>How external factors affect sensor readings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Weather Impact</span>
                    <Badge variant="secondary">Strong</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Traffic Patterns</span>
                    <Badge variant="outline">Moderate</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Local Events</span>
                    <Badge variant="secondary">Strong</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Seasonal Changes</span>
                    <Badge variant="default">Very Strong</Badge>
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
