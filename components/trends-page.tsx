"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, BarChart3, Calendar, Download, ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

const trendData = {
  weekly: {
    collections: { current: 324, previous: 298, change: 8.7 },
    penalties: { current: 45, previous: 52, change: -13.5 },
    efficiency: { current: 89.2, previous: 85.1, change: 4.8 },
    costs: { current: 125000, previous: 132000, change: -5.3 },
  },
  monthly: {
    collections: { current: 1456, previous: 1298, change: 12.2 },
    penalties: { current: 189, previous: 234, change: -19.2 },
    efficiency: { current: 87.8, previous: 83.4, change: 5.3 },
    costs: { current: 545000, previous: 578000, change: -5.7 },
  },
}

const seasonalTrends = [
  { period: "Winter", collections: 85, penalties: 12, efficiency: 92 },
  { period: "Spring", collections: 95, penalties: 18, efficiency: 88 },
  { period: "Summer", collections: 110, penalties: 25, efficiency: 85 },
  { period: "Monsoon", collections: 120, penalties: 15, efficiency: 82 },
]

const predictiveInsights = [
  {
    metric: "Collection Volume",
    prediction: "Expected 15% increase next month",
    confidence: 87,
    trend: "up",
  },
  {
    metric: "Penalty Rate",
    prediction: "Likely 8% decrease with new awareness campaign",
    confidence: 73,
    trend: "down",
  },
  {
    metric: "Operational Efficiency",
    prediction: "Projected 5% improvement with route optimization",
    confidence: 91,
    trend: "up",
  },
]

export function TrendsPage() {
  const [timeframe, setTimeframe] = useState("monthly")
  const [category, setCategory] = useState("all")

  const currentData = trendData[timeframe as keyof typeof trendData]

  const TrendCard = ({ title, current, previous, change, unit = "", icon }: any) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {unit}
          {typeof current === "number" ? current.toLocaleString() : current}
        </div>
        <div className="flex items-center gap-1 text-xs">
          {change > 0 ? <ArrowUp className="h-3 w-3 text-green-600" /> : <ArrowDown className="h-3 w-3 text-red-600" />}
          <span className={change > 0 ? "text-green-600" : "text-red-600"}>{Math.abs(change)}%</span>
          <span className="text-muted-foreground">vs last {timeframe.slice(0, -2)}</span>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Trends & Analytics
          </h1>
          <p className="text-muted-foreground">Historical data analysis and predictions</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Trend Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <TrendCard
          title="Total Collections"
          current={currentData.collections.current}
          previous={currentData.collections.previous}
          change={currentData.collections.change}
          icon={<BarChart3 className="h-4 w-4 text-primary" />}
        />
        <TrendCard
          title="Penalties Issued"
          current={currentData.penalties.current}
          previous={currentData.penalties.previous}
          change={currentData.penalties.change}
          icon={<TrendingDown className="h-4 w-4 text-destructive" />}
        />
        <TrendCard
          title="Efficiency Rate"
          current={currentData.efficiency.current}
          previous={currentData.efficiency.previous}
          change={currentData.efficiency.change}
          unit="%"
          icon={<TrendingUp className="h-4 w-4 text-chart-2" />}
        />
        <TrendCard
          title="Operational Costs"
          current={currentData.costs.current}
          previous={currentData.costs.previous}
          change={currentData.costs.change}
          unit="₹"
          icon={<Calendar className="h-4 w-4 text-chart-3" />}
        />
      </div>

      <Tabs defaultValue="seasonal" className="space-y-4">
        <TabsList>
          <TabsTrigger value="seasonal">Seasonal Trends</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
          <TabsTrigger value="comparative">Comparative Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="seasonal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Performance Patterns</CardTitle>
              <CardDescription>How operations vary throughout the year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {seasonalTrends.map((season, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{season.period}</h4>
                      <Badge variant="outline">{season.period === "Summer" ? "Peak Season" : "Normal"}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Collections</span>
                          <span>{season.collections}%</span>
                        </div>
                        <Progress value={season.collections} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Penalties</span>
                          <span>{season.penalties}%</span>
                        </div>
                        <Progress value={season.penalties} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Efficiency</span>
                          <span>{season.efficiency}%</span>
                        </div>
                        <Progress value={season.efficiency} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Predictions</CardTitle>
              <CardDescription>Machine learning insights for future planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictiveInsights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{insight.metric}</h4>
                        <p className="text-sm text-muted-foreground">{insight.prediction}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {insight.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <Badge variant="secondary">{insight.confidence}% confidence</Badge>
                      </div>
                    </div>
                    <Progress value={insight.confidence} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparative" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Zone Comparison</CardTitle>
                <CardDescription>Performance across different zones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Zone A", "Zone B", "Zone C", "Zone D"].map((zone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{zone}</span>
                      <span>{85 + index * 3}% efficiency</span>
                    </div>
                    <Progress value={85 + index * 3} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Year-over-Year Growth</CardTitle>
                <CardDescription>Annual performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+18%</div>
                    <div className="text-sm text-muted-foreground">Collection Efficiency</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-red-600">-25%</div>
                    <div className="text-sm text-muted-foreground">Penalty Rate</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+12%</div>
                    <div className="text-sm text-muted-foreground">Cost Savings</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+8%</div>
                    <div className="text-sm text-muted-foreground">Citizen Satisfaction</div>
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
