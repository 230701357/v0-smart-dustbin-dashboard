"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, Download, Search, Filter, Plus, DollarSign, AlertTriangle, Users, Camera, FileText } from "lucide-react"
import { useState } from "react"

const penalties = [
  {
    id: "P-2024-001",
    location: "DB-023, Sector 15",
    violationType: "Wrong Segregation",
    amount: "₹2,500",
    status: "Paid",
    date: "2024-01-15",
    time: "14:30",
    citizen: "House No. 45, Block A",
    evidence: "Photo, Video",
    officer: "Officer Kumar",
  },
  {
    id: "P-2024-002",
    location: "DB-045, Sector 22",
    violationType: "Plastic in Bio-waste",
    amount: "₹1,500",
    status: "Pending",
    date: "2024-01-15",
    time: "16:45",
    citizen: "Shop No. 12, Market",
    evidence: "Photo, Sensor Data",
    officer: "Officer Singh",
  },
  {
    id: "P-2024-003",
    location: "DB-012, Sector 8",
    violationType: "Hazardous Material",
    amount: "₹5,000",
    status: "Under Review",
    date: "2024-01-14",
    time: "11:20",
    citizen: "Apartment 3B, Tower 2",
    evidence: "Photo, Gas Sensor Alert",
    officer: "Officer Patel",
  },
  {
    id: "P-2024-004",
    location: "DB-067, Sector 31",
    violationType: "Overfilling",
    amount: "₹1,000",
    status: "Paid",
    date: "2024-01-14",
    time: "09:15",
    citizen: "House No. 78, Lane 3",
    evidence: "Ultrasonic Data",
    officer: "Officer Sharma",
  },
]

export function PenaltyManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [showAddPenalty, setShowAddPenalty] = useState(false)
  const [penaltyForm, setPenaltyForm] = useState({
    location: "",
    violationType: "",
    amount: "",
    citizen: "",
    description: "",
    evidence: "",
    officer: "",
  })

  const handleAddManualPenalty = () => {
    if (penaltyForm.location && penaltyForm.violationType && penaltyForm.amount) {
      alert(
        `Manual penalty added successfully!\nLocation: ${penaltyForm.location}\nViolation: ${penaltyForm.violationType}\nAmount: ₹${penaltyForm.amount}`,
      )
      setShowAddPenalty(false)
      setPenaltyForm({
        location: "",
        violationType: "",
        amount: "",
        citizen: "",
        description: "",
        evidence: "",
        officer: "",
      })
    } else {
      alert("Please fill in all required fields")
    }
  }

  const handleMoreFilters = () => {
    alert("Advanced filters panel would open here")
  }

  const handleViewPenalty = (penaltyId: string) => {
    alert(`Viewing penalty details for ${penaltyId}`)
  }

  const handleDownloadPenalty = (penaltyId: string) => {
    alert(`Downloading penalty report for ${penaltyId}`)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Penalty Management</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Track violations and manage fines</p>
        </div>
        <Dialog open={showAddPenalty} onOpenChange={setShowAddPenalty}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add Manual Penalty
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-base sm:text-lg">Add Manual Penalty</DialogTitle>
              <DialogDescription className="text-sm">
                Create a penalty record for violations detected manually
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm">
                    Dustbin Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g., DB-023, Sector 15"
                    value={penaltyForm.location}
                    onChange={(e) => setPenaltyForm({ ...penaltyForm, location: e.target.value })}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="violation-type" className="text-sm">
                    Violation Type *
                  </Label>
                  <Select
                    value={penaltyForm.violationType}
                    onValueChange={(value) => setPenaltyForm({ ...penaltyForm, violationType: value })}
                  >
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Select violation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wrong-segregation">Wrong Segregation</SelectItem>
                      <SelectItem value="plastic-bio">Plastic in Bio-waste</SelectItem>
                      <SelectItem value="hazardous">Hazardous Material</SelectItem>
                      <SelectItem value="overfilling">Overfilling</SelectItem>
                      <SelectItem value="littering">Littering Around Dustbin</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm">
                    Penalty Amount (₹) *
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="e.g., 2500"
                    value={penaltyForm.amount}
                    onChange={(e) => setPenaltyForm({ ...penaltyForm, amount: e.target.value })}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="officer" className="text-sm">
                    Issuing Officer
                  </Label>
                  <Input
                    id="officer"
                    placeholder="Officer name"
                    value={penaltyForm.officer}
                    onChange={(e) => setPenaltyForm({ ...penaltyForm, officer: e.target.value })}
                    className="text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="citizen" className="text-sm">
                  Citizen/Entity Details
                </Label>
                <Input
                  id="citizen"
                  placeholder="House No./Shop details"
                  value={penaltyForm.citizen}
                  onChange={(e) => setPenaltyForm({ ...penaltyForm, citizen: e.target.value })}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Additional details about the violation..."
                  value={penaltyForm.description}
                  onChange={(e) => setPenaltyForm({ ...penaltyForm, description: e.target.value })}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="evidence" className="text-sm">
                  Evidence
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="evidence"
                    placeholder="Photo, Video, Sensor Data"
                    value={penaltyForm.evidence}
                    onChange={(e) => setPenaltyForm({ ...penaltyForm, evidence: e.target.value })}
                    className="text-sm"
                  />
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={() => setShowAddPenalty(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button onClick={handleAddManualPenalty} className="w-full sm:w-auto">
                <FileText className="h-4 w-4 mr-2" />
                Create Penalty
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Total Penalties</CardTitle>
            <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Pending Amount</CardTitle>
            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-destructive">₹45,500</div>
            <p className="text-xs text-muted-foreground">23 pending payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Collected Today</CardTitle>
            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-primary">₹12,500</div>
            <p className="text-xs text-muted-foreground">8 payments received</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Repeat Offenders</CardTitle>
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">3+ violations</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm sm:text-base">Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by penalty ID, location, or citizen..."
                className="pl-10 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Violation Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="wrong-segregation">Wrong Segregation</SelectItem>
                  <SelectItem value="plastic-bio">Plastic in Bio-waste</SelectItem>
                  <SelectItem value="hazardous">Hazardous Material</SelectItem>
                  <SelectItem value="overfilling">Overfilling</SelectItem>
                  <SelectItem value="littering">Littering Around Dustbin</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleMoreFilters} className="w-full sm:w-auto bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Penalties Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm sm:text-base">Penalty Records</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Complete list of violations and fines with response times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[120px]">Penalty ID</TableHead>
                  <TableHead className="min-w-[150px]">Location</TableHead>
                  <TableHead className="min-w-[140px]">Violation Type</TableHead>
                  <TableHead className="min-w-[160px]">Citizen/Entity</TableHead>
                  <TableHead className="min-w-[100px]">Amount</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[120px]">Response Time</TableHead>
                  <TableHead className="min-w-[120px]">Evidence</TableHead>
                  <TableHead className="min-w-[120px]">Officer</TableHead>
                  <TableHead className="min-w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {penalties.map((penalty) => (
                  <TableRow key={penalty.id}>
                    <TableCell className="font-medium text-sm">{penalty.id}</TableCell>
                    <TableCell className="text-sm">{penalty.location}</TableCell>
                    <TableCell className="text-sm">{penalty.violationType}</TableCell>
                    <TableCell className="text-sm">{penalty.citizen}</TableCell>
                    <TableCell className="font-medium text-sm">{penalty.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          penalty.status === "Paid"
                            ? "default"
                            : penalty.status === "Pending"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {penalty.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="text-green-600">2.5 min</div>
                        <div className="text-xs text-muted-foreground">Detection to issue</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{penalty.evidence}</TableCell>
                    <TableCell className="text-sm">{penalty.officer}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleViewPenalty(penalty.id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDownloadPenalty(penalty.id)}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
