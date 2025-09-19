"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboard,
  MapPin,
  AlertTriangle,
  Settings,
  Bell,
  User,
  Menu,
  X,
  BarChart3,
  Users,
  FileText,
  Route,
  LogOut,
  UserCircle,
  Settings2,
  Calendar,
  TrendingUp,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "overview", icon: LayoutDashboard },
  { name: "Today", href: "today", icon: Calendar },
  { name: "Trends", href: "trends", icon: TrendingUp },
  { name: "Sensor Correlation", href: "correlation", icon: Activity },
  { name: "Real-time Map", href: "map", icon: MapPin },
  { name: "Penalty Management", href: "penalties", icon: AlertTriangle },
  { name: "Waste Analytics", href: "analytics", icon: BarChart3 },
  { name: "Route Optimization", href: "routes", icon: Route },
  { name: "Reports", href: "reports", icon: FileText },
  { name: "User Management", href: "users", icon: Users },
  { name: "Settings", href: "settings", icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
  currentPage: string
  onPageChange: (page: string) => void
  onLogout?: () => void // Added logout prop
}

export function DashboardLayout({ children, currentPage, onPageChange, onLogout }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notifications] = useState([
    { id: 1, message: "Dustbin DB-023 at 98% capacity", time: "2 min ago", type: "critical" },
    { id: 2, message: "Penalty issued for wrong segregation", time: "5 min ago", type: "warning" },
    { id: 3, message: "Route optimization completed", time: "10 min ago", type: "info" },
    { id: 4, message: "New sensor correlation detected", time: "15 min ago", type: "info" },
    { id: 5, message: "Collection efficiency improved by 12%", time: "20 min ago", type: "info" },
  ])

  const handleSignOut = () => {
    if (onLogout) {
      onLogout()
    } else {
      window.location.href = "/signin"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", sidebarOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-lg font-bold text-sidebar-foreground">Smart Dustbin Monitor</h1>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      onPageChange(item.href)
                      setSidebarOpen(false)
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-left",
                      currentPage === item.href
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar border-r border-sidebar-border px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-lg font-bold text-sidebar-foreground">Smart Dustbin Monitor</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => onPageChange(item.href)}
                        className={cn(
                          "group flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors text-left",
                          currentPage === item.href
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <h2 className="text-xl font-semibold text-foreground">Municipal Waste Management Dashboard</h2>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-5 w-5" />
                    {notifications.length > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500">
                        {notifications.length}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3">
                      <div className="flex items-center gap-2 w-full">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full",
                            notification.type === "critical" && "bg-red-500",
                            notification.type === "warning" && "bg-yellow-500",
                            notification.type === "info" && "bg-blue-500",
                          )}
                        />
                        <span className="text-sm font-medium flex-1">{notification.message}</span>
                      </div>
                      <span className="text-xs text-muted-foreground ml-4">{notification.time}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Admin User</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings2 className="mr-2 h-4 w-4" />
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
