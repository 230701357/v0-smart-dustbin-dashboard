"use client"

import { useState, useEffect } from "react"
import { LoginPage } from "@/components/login-page"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard-overview"
import { WasteAnalyticsPage } from "@/components/waste-analytics-page"
import { SettingsPage } from "@/components/settings-page"
import { UserManagementPage } from "@/components/user-management-page"
import { ReportsPage } from "@/components/reports-page"
import { RouteOptimizationPage } from "@/components/route-optimization-page"
import { RealTimeMapPage } from "@/components/real-time-map-page"
import { PenaltyManagementPage } from "@/components/penalty-management-page"
import { TodayDashboard } from "@/components/today-dashboard"
import { TrendsPage } from "@/components/trends-page"
import { SensorCorrelationPage } from "@/components/sensor-correlation-page"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("overview")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated", "true")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
    setCurrentPage("overview")
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <DashboardOverview />
      case "today":
        return <TodayDashboard />
      case "trends":
        return <TrendsPage />
      case "correlation":
        return <SensorCorrelationPage />
      case "map":
        return <RealTimeMapPage />
      case "penalties":
        return <PenaltyManagementPage />
      case "analytics":
        return <WasteAnalyticsPage />
      case "routes":
        return <RouteOptimizationPage />
      case "reports":
        return <ReportsPage />
      case "users":
        return <UserManagementPage />
      case "settings":
        return <SettingsPage />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage} onLogout={handleLogout}>
      {renderPage()}
    </DashboardLayout>
  )
}
