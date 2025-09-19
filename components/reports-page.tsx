"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts"
import { FileText, Download, CalendarIcon, BarChart3, FileSpreadsheet, Mail } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

// Sample data for reports
const monthlyCollectionData = [
  { month: "Jan", collected: 1250, biodegradable: 812, nonBiodegradable: 350, mixed: 88 },
  { month: "Feb", collected: 1180, biodegradable: 767, nonBiodegradable: 331, mixed: 82 },
  { month: "Mar", collected: 1320, biodegradable: 858, nonBiodegradable: 370, mixed: 92 },
  { month: "Apr", collected: 1280, biodegradable: 832, nonBiodegradable: 358, mixed: 90 },
  { month: "May", collected: 1450, biodegradable: 943, nonBiodegradable: 406, mixed: 101 },
  { month: "Jun", collected: 1380, biodegradable: 897, nonBiodegradable: 386, mixed: 97 },
]

const penaltyTrendsData = [
  { month: "Jan", penalties: 45, amount: 112500 },
  { month: "Feb", penalties: 38, amount: 95000 },
  { month: "Mar", penalties: 52, amount: 130000 },
  { month: "Apr", penalties: 41, amount: 102500 },
  { month: "May", penalties: 35, amount: 87500 },
  { month: "Jun", penalties: 29, amount: 72500 },
]

const zonePerformanceData = [
  { zone: "Zone A", efficiency: 92, violations: 12, collection: 98 },
  { zone: "Zone B", efficiency: 88, violations: 18, collection: 95 },
  { zone: "Zone C", efficiency: 94, violations: 8, collection: 99 },
  { zone: "Zone D", efficiency: 85, violations: 22, collection: 92 },
]

const reportTemplates = [
  {
    id: "monthly-summary",
    name: "Monthly Summary Report",
    description: "Comprehensive monthly waste management overview",
    category: "Summary",
    frequency: "Monthly",
    lastGenerated: "2024-01-01",
  },
  {
    id: "penalty-analysis",
    name: "Penalty Analysis Report",
    description: "Detailed analysis of violations and fines",
    category: "Penalties",
    frequency: "Weekly",
    lastGenerated: "2024-01-08",
  },
  {
    id: "collection-efficiency",
    name: "Collection Efficiency Report",
    description: "Route optimization and collection performance",
    category: "Operations",
    frequency: "Daily",
    lastGenerated: "2024-01-15",
  },
  {
    id: "waste-classification",
    name: "Waste Classification Report",
    description: "ML model performance and waste segregation analysis",
    category: "Analytics",
    frequency: "Weekly",
    lastGenerated: "2024-01-08",
  },
  {
    id: "environmental-impact",
    name: "Environmental Impact Report",
    description: "Sustainability metrics and environmental benefits",
    category: "Environment",
    frequency: "Quarterly",
    lastGenerated: "2024-01-01",
  },
]

export function ReportsPage() {
  const [date, setDate] = useState<Date>()
  const [dateRange, setDateRange] = useState("30")
  const [zoneFilter, setZoneFilter] = useState("all")
  const [reportType, setReportType] = useState("")
  const [reportName, setReportName] = useState("")

  const handleScheduleReport = () => {
    alert("Report scheduling dialog would open here")
  }

  const handleExportData = () => {
    alert("Data export started - you'll receive a download link shortly")
  }

  const handleExportChart = () => {
    alert("Chart exported as PNG image")
  }

  const handleGenerateTemplate = (templateId: string) => {
    alert(`Generating report from template: ${templateId}`)
  }

  const handleDownloadTemplate = (templateId: string) => {
    alert(`Downloading template: ${templateId}`)
  }

  const handleNewSchedule = () => {
    alert("New schedule dialog would open here")
  }

  const handleEditSchedule = (scheduleName: string) => {
    alert(`Editing schedule: ${scheduleName}`)
  }

  const handleGenerateCustomReport = () => {
    if (!reportName.trim()) {
      alert("Please enter a report name")
      return
    }
    alert(`Generating custom report: ${reportName}`)
  }

  const handleScheduleCustomReport = () => {
    if (!reportName.trim()) {
      alert("Please enter a report name")
      return
    }
    alert(`Scheduling custom report: ${reportName}`)
  }

  const handleSaveTemplate = () => {
    if (!reportName.trim()) {
      alert("Please enter a report name")
      return
    }
    alert(`Saving report template: ${reportName}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate comprehensive reports and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleScheduleReport}>
            <Mail className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button onClick={handleExportData}>
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
            <CalendarIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">Active schedules</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Points</CardTitle>
            <BarChart3 className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">Collected this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Export Downloads</CardTitle>
            <Download className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Analytics Dashboard</TabsTrigger>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Interactive data visualization and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center">
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">Last 7 days</SelectItem>
                      <SelectItem value="30">Last 30 days</SelectItem>
                      <SelectItem value="90">Last 3 months</SelectItem>
                      <SelectItem value="365">Last year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Zone Filter</Label>
                  <Select value={zoneFilter} onValueChange={setZoneFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Zones</SelectItem>
                      <SelectItem value="a">Zone A</SelectItem>
                      <SelectItem value="b">Zone B</SelectItem>
                      <SelectItem value="c">Zone C</SelectItem>
                      <SelectItem value="d">Zone D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" onClick={handleExportChart}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Chart
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Collection Trends</CardTitle>
                <CardDescription>Waste collection volume over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyCollectionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
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

            <Card>
              <CardHeader>
                <CardTitle>Penalty Trends</CardTitle>
                <CardDescription>Violations and fine amounts over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={penaltyTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="penalties" fill="hsl(var(--chart-1))" />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="amount"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Zone Performance Comparison</CardTitle>
              <CardDescription>Efficiency metrics across different zones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={zonePerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="zone" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="efficiency" fill="hsl(var(--chart-1))" name="Efficiency %" />
                    <Bar dataKey="collection" fill="hsl(var(--chart-2))" name="Collection Rate %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
              <CardDescription>Pre-configured report templates for common use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {reportTemplates.map((template) => (
                  <Card key={template.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Frequency:</span>
                          <span>{template.frequency}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Last Generated:</span>
                          <span>{template.lastGenerated}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1" onClick={() => handleGenerateTemplate(template.id)}>
                            <FileText className="h-4 w-4 mr-2" />
                            Generate
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDownloadTemplate(template.id)}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Scheduled Reports</CardTitle>
                  <CardDescription>Automated report generation schedules</CardDescription>
                </div>
                <Button onClick={handleNewSchedule}>
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  New Schedule
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Daily Collection Summary",
                    frequency: "Daily at 6:00 AM",
                    recipients: "operations@municipality.gov",
                    status: "Active",
                  },
                  {
                    name: "Weekly Penalty Report",
                    frequency: "Every Monday at 9:00 AM",
                    recipients: "admin@municipality.gov",
                    status: "Active",
                  },
                  {
                    name: "Monthly Analytics",
                    frequency: "1st of every month",
                    recipients: "management@municipality.gov",
                    status: "Active",
                  },
                  {
                    name: "Quarterly Environmental Impact",
                    frequency: "Every 3 months",
                    recipients: "environment@municipality.gov",
                    status: "Paused",
                  },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{schedule.name}</div>
                      <div className="text-sm text-muted-foreground">{schedule.frequency}</div>
                      <div className="text-sm text-muted-foreground">To: {schedule.recipients}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={schedule.status === "Active" ? "default" : "secondary"}>{schedule.status}</Badge>
                      <Button variant="outline" size="sm" onClick={() => handleEditSchedule(schedule.name)}>
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Custom Report Builder</CardTitle>
              <CardDescription>Create custom reports with specific parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="report-name">Report Name</Label>
                  <Input
                    id="report-name"
                    placeholder="Enter report name"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Summary Report</SelectItem>
                      <SelectItem value="detailed">Detailed Analysis</SelectItem>
                      <SelectItem value="comparison">Comparison Report</SelectItem>
                      <SelectItem value="trend">Trend Analysis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zones">Zones</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select zones" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Zones</SelectItem>
                      <SelectItem value="a">Zone A</SelectItem>
                      <SelectItem value="b">Zone B</SelectItem>
                      <SelectItem value="c">Zone C</SelectItem>
                      <SelectItem value="d">Zone D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Data Sources</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Sensor Data",
                    "Collection Records",
                    "Penalty Data",
                    "ML Classifications",
                    "Route Data",
                    "User Activity",
                    "System Logs",
                    "Environmental Data",
                  ].map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <input type="checkbox" id={source} className="rounded" />
                      <Label htmlFor={source} className="text-sm">
                        {source}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="format">Export Format</Label>
                <Select defaultValue="pdf">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Report</SelectItem>
                    <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                    <SelectItem value="csv">CSV Data</SelectItem>
                    <SelectItem value="json">JSON Data</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleGenerateCustomReport}>
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" onClick={handleScheduleCustomReport}>
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Schedule Report
                </Button>
                <Button variant="outline" onClick={handleSaveTemplate}>
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  Save Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
