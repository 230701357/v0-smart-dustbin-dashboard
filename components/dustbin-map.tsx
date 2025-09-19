"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

const dustbins = [
  {
    id: "DB-001",
    zone: "Connaught Place",
    fillLevel: 25,
    status: "normal",
    lat: 28.6315,
    lng: 77.2167,
    address: "Block A, Connaught Place",
    serviceTime: 2.5,
    lastService: "2 hours ago",
  },
  {
    id: "DB-002",
    zone: "India Gate",
    fillLevel: 78,
    status: "warning",
    lat: 28.6129,
    lng: 77.2295,
    address: "Near India Gate Metro",
    serviceTime: 5.8,
    lastService: "6 hours ago",
  },
  {
    id: "DB-003",
    zone: "Red Fort",
    fillLevel: 95,
    status: "critical",
    lat: 28.6562,
    lng: 77.241,
    address: "Red Fort Main Gate",
    serviceTime: 8.2,
    lastService: "12 hours ago",
  },
  {
    id: "DB-004",
    zone: "Karol Bagh",
    fillLevel: 45,
    status: "normal",
    lat: 28.6519,
    lng: 77.1909,
    address: "Karol Bagh Market",
    serviceTime: 3.8,
    lastService: "4 hours ago",
  },
  {
    id: "DB-005",
    zone: "Chandni Chowk",
    fillLevel: 88,
    status: "warning",
    lat: 28.6506,
    lng: 77.2334,
    address: "Chandni Chowk Main Road",
    serviceTime: 6.5,
    lastService: "8 hours ago",
  },
]

export function DustbinMap() {
  return (
    <div className="space-y-4">
      {/* Map placeholder - in a real app, this would be an interactive map */}
      <div className="relative h-[200px] bg-muted rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground font-medium">Delhi Municipal Area</p>
            <p className="text-xs text-muted-foreground">Real-time GPS Tracking</p>
          </div>
        </div>

        {/* Enhanced dustbin markers with more accurate positioning */}
        {dustbins.map((dustbin, index) => (
          <div
            key={dustbin.id}
            className="absolute w-4 h-4 rounded-full border-2 border-background shadow-lg"
            style={{
              left: `${15 + index * 18}%`,
              top: `${25 + (index % 3) * 25}%`,
              backgroundColor:
                dustbin.status === "critical" ? "#ef4444" : dustbin.status === "warning" ? "#f59e0b" : "#10b981",
            }}
            title={`${dustbin.id} - ${dustbin.zone}`}
          />
        ))}
      </div>

      {/* Enhanced dustbin status list with service time */}
      <div className="space-y-2">
        {dustbins.map((dustbin) => (
          <div key={dustbin.id} className="flex items-center justify-between p-3 rounded-lg border bg-card">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    dustbin.status === "critical" ? "#ef4444" : dustbin.status === "warning" ? "#f59e0b" : "#10b981",
                }}
              />
              <div>
                <p className="text-sm font-medium">{dustbin.id}</p>
                <p className="text-xs text-muted-foreground">{dustbin.zone}</p>
                <p className="text-xs text-muted-foreground">{dustbin.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{dustbin.serviceTime}h</span>
                </div>
                <p className="text-xs text-muted-foreground">{dustbin.lastService}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">{dustbin.fillLevel}%</span>
                <Badge
                  variant={
                    dustbin.status === "critical"
                      ? "destructive"
                      : dustbin.status === "warning"
                        ? "secondary"
                        : "outline"
                  }
                  className="ml-2"
                >
                  {dustbin.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
