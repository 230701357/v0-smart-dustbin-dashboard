"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Biodegradable", value: 65, color: "hsl(var(--chart-2))" },
  { name: "Non-Biodegradable", value: 28, color: "hsl(var(--chart-3))" },
  { name: "Mixed/Contaminated", value: 7, color: "hsl(var(--chart-4))" },
]

export function WasteClassificationChart() {
  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
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

      <div className="grid grid-cols-3 gap-4 text-center">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
            <p className="text-xs text-muted-foreground">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
