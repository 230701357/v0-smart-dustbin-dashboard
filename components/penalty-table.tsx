"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Download } from "lucide-react"

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
  },
]

export function PenaltyTable() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Penalty ID</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Violation</TableHead>
            <TableHead>Citizen/Entity</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {penalties.map((penalty) => (
            <TableRow key={penalty.id}>
              <TableCell className="font-medium">{penalty.id}</TableCell>
              <TableCell>{penalty.location}</TableCell>
              <TableCell>{penalty.violationType}</TableCell>
              <TableCell className="text-sm">{penalty.citizen}</TableCell>
              <TableCell className="font-medium">{penalty.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    penalty.status === "Paid" ? "default" : penalty.status === "Pending" ? "destructive" : "secondary"
                  }
                >
                  {penalty.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{penalty.date}</div>
                  <div className="text-muted-foreground">{penalty.time}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
