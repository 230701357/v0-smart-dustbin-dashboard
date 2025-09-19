"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
      <div className="overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs sm:text-sm">Penalty ID</TableHead>
              <TableHead className="text-xs sm:text-sm">Location</TableHead>
              <TableHead className="text-xs sm:text-sm">Violation</TableHead>
              <TableHead className="text-xs sm:text-sm hidden md:table-cell">Citizen/Entity</TableHead>
              <TableHead className="text-xs sm:text-sm">Amount</TableHead>
              <TableHead className="text-xs sm:text-sm">Status</TableHead>
              <TableHead className="text-xs sm:text-sm hidden sm:table-cell">Date & Time</TableHead>
              <TableHead className="text-xs sm:text-sm">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {penalties.map((penalty) => (
              <TableRow key={penalty.id}>
                <TableCell className="font-medium text-xs sm:text-sm">{penalty.id}</TableCell>
                <TableCell className="text-xs sm:text-sm">{penalty.location}</TableCell>
                <TableCell className="text-xs sm:text-sm">{penalty.violationType}</TableCell>
                <TableCell className="text-xs sm:text-sm hidden md:table-cell">{penalty.citizen}</TableCell>
                <TableCell className="font-medium text-xs sm:text-sm">{penalty.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      penalty.status === "Paid" ? "default" : penalty.status === "Pending" ? "destructive" : "secondary"
                    }
                    className="text-xs"
                  >
                    {penalty.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="text-xs sm:text-sm">
                    <div>{penalty.date}</div>
                    <div className="text-muted-foreground">{penalty.time}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 sm:gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="block sm:hidden space-y-3">
        {penalties.map((penalty) => (
          <Card key={penalty.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium text-sm">{penalty.id}</div>
                <Badge
                  variant={
                    penalty.status === "Paid" ? "default" : penalty.status === "Pending" ? "destructive" : "secondary"
                  }
                  className="text-xs"
                >
                  {penalty.status}
                </Badge>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>
                  <span className="font-medium">Location:</span> {penalty.location}
                </div>
                <div>
                  <span className="font-medium">Violation:</span> {penalty.violationType}
                </div>
                <div>
                  <span className="font-medium">Amount:</span> {penalty.amount}
                </div>
                <div>
                  <span className="font-medium">Date:</span> {penalty.date} at {penalty.time}
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
