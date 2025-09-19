"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Settings, Bell, Shield, Database, MapPin, DollarSign, Save } from "lucide-react"

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">System Settings</h1>
          <p className="text-muted-foreground">Configure your smart dustbin monitoring system</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="sensors">Sensors</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="penalties">Penalties</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Basic Configuration
                </CardTitle>
                <CardDescription>Core system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="municipality">Municipality Name</Label>
                  <Input id="municipality" defaultValue="Delhi Municipal Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="asia-kolkata">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-kolkata">Asia/Kolkata (IST)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="asia-dubai">Asia/Dubai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="inr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                      <SelectItem value="usd">US Dollar ($)</SelectItem>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location Settings
                </CardTitle>
                <CardDescription>Enhanced geographic configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New Delhi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" defaultValue="Delhi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="India" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input id="latitude" defaultValue="28.6139" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input id="longitude" defaultValue="77.2090" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="map-provider">Map Provider</Label>
                  <Select defaultValue="google">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Maps</SelectItem>
                      <SelectItem value="openstreet">OpenStreetMap</SelectItem>
                      <SelectItem value="mapbox">Mapbox</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
              <CardDescription>Configure how long data is stored</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="sensor-data">Sensor Data</Label>
                  <Select defaultValue="90">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="penalty-data">Penalty Records</Label>
                  <Select defaultValue="2555">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="1095">3 years</SelectItem>
                      <SelectItem value="2555">7 years</SelectItem>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="analytics-data">Analytics Data</Label>
                  <Select defaultValue="365">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="1095">3 years</SelectItem>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sensors" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sensor Thresholds</CardTitle>
                <CardDescription>Configure alert thresholds for sensors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Fill Level Warning (%)</Label>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={5} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Fill Level Critical (%)</Label>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Slider defaultValue={[90]} max={100} step={5} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Moisture Threshold (%)</Label>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Slider defaultValue={[60]} max={100} step={5} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Gas Level Alert (ppm)</Label>
                    <span className="text-sm text-muted-foreground">200</span>
                  </div>
                  <Slider defaultValue={[200]} max={500} step={10} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sensor Calibration</CardTitle>
                <CardDescription>Calibration settings for accuracy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ultrasonic-offset">Ultrasonic Sensor Offset (cm)</Label>
                  <Input id="ultrasonic-offset" type="number" defaultValue="2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moisture-calibration">Moisture Sensor Calibration</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dry">Dry Climate</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="humid">Humid Climate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gas-baseline">Gas Sensor Baseline (ppm)</Label>
                  <Input id="gas-baseline" type="number" defaultValue="50" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-calibration" defaultChecked />
                  <Label htmlFor="auto-calibration">Auto-calibration enabled</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Collection</CardTitle>
              <CardDescription>Configure sensor data collection intervals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="ultrasonic-interval">Ultrasonic Reading Interval</Label>
                  <Select defaultValue="5">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 minute</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moisture-interval">Moisture Reading Interval</Label>
                  <Select defaultValue="10">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gas-interval">Gas Reading Interval</Label>
                  <Select defaultValue="15">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alert Configuration
                </CardTitle>
                <CardDescription>Configure system alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="fill-alerts">Fill Level Alerts</Label>
                    <p className="text-sm text-muted-foreground">Notify when dustbins need collection</p>
                  </div>
                  <Switch id="fill-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sensor-alerts">Sensor Malfunction Alerts</Label>
                    <p className="text-sm text-muted-foreground">Alert when sensors go offline</p>
                  </div>
                  <Switch id="sensor-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="penalty-alerts">Penalty Alerts</Label>
                    <p className="text-sm text-muted-foreground">Notify when violations are detected</p>
                  </div>
                  <Switch id="penalty-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenance-alerts">Maintenance Alerts</Label>
                    <p className="text-sm text-muted-foreground">Predictive maintenance notifications</p>
                  </div>
                  <Switch id="maintenance-alerts" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
                <CardDescription>Configure how alerts are delivered</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Input id="email-notifications" type="email" defaultValue="admin@municipality.gov" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <Input id="sms-notifications" type="tel" defaultValue="+91-9876543210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <Input id="webhook-url" type="url" placeholder="https://your-system.com/webhook" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dashboard-notifications" defaultChecked />
                  <Label htmlFor="dashboard-notifications">Dashboard notifications</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="penalties" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Penalty Structure
                </CardTitle>
                <CardDescription>Configure fine amounts for violations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="wrong-segregation">Wrong Segregation Fine (₹)</Label>
                  <Input id="wrong-segregation" type="number" defaultValue="2500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plastic-bio">Plastic in Bio-waste Fine (₹)</Label>
                  <Input id="plastic-bio" type="number" defaultValue="1500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hazardous">Hazardous Material Fine (₹)</Label>
                  <Input id="hazardous" type="number" defaultValue="5000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="overfilling">Overfilling Fine (₹)</Label>
                  <Input id="overfilling" type="number" defaultValue="1000" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="repeat-multiplier" defaultChecked />
                  <Label htmlFor="repeat-multiplier">2x fine for repeat offenders</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Penalty Processing</CardTitle>
                <CardDescription>Configure penalty workflow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="grace-period">Grace Period (days)</Label>
                  <Select defaultValue="7">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-methods">Accepted Payment Methods</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="online-payment" defaultChecked />
                      <Label htmlFor="online-payment">Online Payment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="bank-transfer" defaultChecked />
                      <Label htmlFor="bank-transfer">Bank Transfer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="cash-payment" />
                      <Label htmlFor="cash-payment">Cash Payment</Label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-penalty" defaultChecked />
                  <Label htmlFor="auto-penalty">Auto-generate penalties</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Database Settings
                </CardTitle>
                <CardDescription>Database configuration and maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="backup-retention">Backup Retention (days)</Label>
                  <Input id="backup-retention" type="number" defaultValue="30" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Create Backup</Button>
                  <Button variant="outline">Restore Backup</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>System security configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="60" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="two-factor" defaultChecked />
                  <Label htmlFor="two-factor">Require 2FA for admin users</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="audit-logging" defaultChecked />
                  <Label htmlFor="audit-logging">Enable audit logging</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="api-rate-limit" defaultChecked />
                  <Label htmlFor="api-rate-limit">API rate limiting</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>Current system status and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold">v2.1.4</div>
                  <div className="text-sm text-muted-foreground">System Version</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold">99.8%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Connected Devices</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold">2.3 GB</div>
                  <div className="text-sm text-muted-foreground">Database Size</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
