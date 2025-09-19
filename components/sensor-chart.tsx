"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const ultrasonicData = [
  { time: "00:00", value: 25, serviceTime: 2.5 },
  { time: "04:00", value: 35, serviceTime: 3.2 },
  { time: "08:00", value: 65, serviceTime: 4.1 },
  { time: "12:00", value: 78, serviceTime: 5.8 },
  { time: "16:00", value: 82, serviceTime: 6.2 },
  { time: "20:00", value: 45, serviceTime: 3.8 },
  { time: "24:00", value: 30, serviceTime: 2.9 },
]

const moistureData = [
  { time: "00:00", value: 15, serviceTime: 1.8 },
  { time: "04:00", value: 22, serviceTime: 2.1 },
  { time: "08:00", value: 45, serviceTime: 3.5 },
  { time: "12:00", value: 67, serviceTime: 4.9 },
  { time: "16:00", value: 72, serviceTime: 5.2 },
  { time: "20:00", value: 58, serviceTime: 4.1 },
  { time: "24:00", value: 35, serviceTime: 2.8 },
]

const gasData = [
  { time: "00:00", value: 120, serviceTime: 3.1 },
  { time: "04:00", value: 145, serviceTime: 3.8 },
  { time: "08:00", value: 180, serviceTime: 4.5 },
  { time: "12:00", value: 220, serviceTime: 6.1 },
  { time: "16:00", value: 195, serviceTime: 5.4 },
  { time: "20:00", value: 165, serviceTime: 4.2 },
  { time: "24:00", value: 140, serviceTime: 3.6 },
]

interface SensorChartProps {
  type: "ultrasonic" | "moisture" | "gas"
}

export function SensorChart({ type }: SensorChartProps) {
  const getData = () => {
    switch (type) {
      case "ultrasonic":
        return ultrasonicData
      case "moisture":
        return moistureData
      case "gas":
        return gasData
      default:
        return ultrasonicData
    }
  }

  const getColor = () => {
    switch (type) {
      case "ultrasonic":
        return "#3b82f6" // Blue
      case "moisture":
        return "#10b981" // Emerald
      case "gas":
        return "#f59e0b" // Amber
      default:
        return "#3b82f6"
    }
  }

  const getServiceTimeColor = () => {
    switch (type) {
      case "ultrasonic":
        return "#8b5cf6" // Purple
      case "moisture":
        return "#06b6d4" // Cyan
      case "gas":
        return "#ef4444" // Red
      default:
        return "#8b5cf6"
    }
  }

  const getUnit = () => {
    switch (type) {
      case "ultrasonic":
        return "%"
      case "moisture":
        return "%"
      case "gas":
        return "ppm"
      default:
        return "%"
    }
  }

  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={getData()}>
          <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}${getUnit()}`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-3 shadow-sm">
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Time</span>
                        <span className="font-bold text-muted-foreground">{label}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                        <span className="font-bold" style={{ color: getColor() }}>
                          {payload[0].value}
                          {getUnit()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Service Time</span>
                        <span className="font-bold" style={{ color: getServiceTimeColor() }}>
                          {payload[0].payload.serviceTime}h
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line type="monotone" dataKey="value" strokeWidth={2} stroke={getColor()} dot={false} />
          <Line
            type="monotone"
            dataKey="serviceTime"
            strokeWidth={2}
            stroke={getServiceTimeColor()}
            dot={false}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
