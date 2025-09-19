"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, UserPlus, Search, Filter, Edit, Trash2, Shield, Key, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

const users = [
  {
    id: "USR-001",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@municipality.gov",
    phone: "+91-9876543210",
    role: "Admin",
    department: "Waste Management",
    zone: "All Zones",
    status: "Active",
    lastLogin: "2024-01-15 09:30",
    permissions: ["Full Access", "User Management", "System Settings"],
  },
  {
    id: "USR-002",
    name: "Priya Singh",
    email: "priya.singh@municipality.gov",
    phone: "+91-9876543211",
    role: "Supervisor",
    department: "Operations",
    zone: "Zone A, B",
    status: "Active",
    lastLogin: "2024-01-15 14:20",
    permissions: ["Dashboard Access", "Penalty Management", "Reports"],
  },
  {
    id: "USR-003",
    name: "Mohammed Ali",
    email: "mohammed.ali@municipality.gov",
    phone: "+91-9876543212",
    role: "Field Officer",
    department: "Collection",
    zone: "Zone A",
    status: "Active",
    lastLogin: "2024-01-15 08:45",
    permissions: ["Dashboard Access", "Route Management"],
  },
  {
    id: "USR-004",
    name: "Sunita Patel",
    email: "sunita.patel@municipality.gov",
    phone: "+91-9876543213",
    role: "Analyst",
    department: "Analytics",
    zone: "All Zones",
    status: "Inactive",
    lastLogin: "2024-01-10 16:30",
    permissions: ["Dashboard Access", "Analytics", "Reports"],
  },
]

const roles = [
  {
    name: "Admin",
    description: "Full system access and user management",
    permissions: ["Full Access", "User Management", "System Settings", "All Reports"],
    count: 2,
  },
  {
    name: "Supervisor",
    description: "Operational oversight and penalty management",
    permissions: ["Dashboard Access", "Penalty Management", "Reports", "Route Planning"],
    count: 5,
  },
  {
    name: "Field Officer",
    description: "Field operations and route management",
    permissions: ["Dashboard Access", "Route Management", "Collection Updates"],
    count: 12,
  },
  {
    name: "Analyst",
    description: "Data analysis and reporting",
    permissions: ["Dashboard Access", "Analytics", "Reports"],
    count: 3,
  },
]

export function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const handleCreateUser = () => {
    alert("User created successfully!")
  }

  const handleEditUser = (userId: string) => {
    alert(`Editing user ${userId}`)
  }

  const handleResetPassword = (userId: string) => {
    alert(`Password reset link sent for user ${userId}`)
  }

  const handleDeleteUser = (userId: string) => {
    if (confirm(`Are you sure you want to delete user ${userId}?`)) {
      alert(`User ${userId} deleted`)
    }
  }

  const handleEditRole = (roleName: string) => {
    alert(`Editing role: ${roleName}`)
  }

  const handleViewRoleUsers = (roleName: string) => {
    alert(`Viewing users with role: ${roleName}`)
  }

  const handleMoreFilters = () => {
    alert("Advanced filters panel would open here")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage system users, roles, and permissions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Create a new user account for the system</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@municipality.gov" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="supervisor">Supervisor</SelectItem>
                      <SelectItem value="officer">Field Officer</SelectItem>
                      <SelectItem value="analyst">Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="waste">Waste Management</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="collection">Collection</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zones">Assigned Zones</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select zones" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Zones</SelectItem>
                    <SelectItem value="a">Zone A</SelectItem>
                    <SelectItem value="b">Zone B</SelectItem>
                    <SelectItem value="c">Zone C</SelectItem>
                    <SelectItem value="ab">Zone A & B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleCreateUser}>Create User</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">19</div>
            <p className="text-xs text-muted-foreground">86% of total users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
            <Shield className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Full system access</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Field Officers</CardTitle>
            <MapPin className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Active in field</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 flex-wrap">
                <div className="relative flex-1 min-w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or ID..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="supervisor">Supervisor</SelectItem>
                    <SelectItem value="officer">Field Officer</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={handleMoreFilters}>
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>System Users</CardTitle>
              <CardDescription>Manage user accounts and access</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/abstract-geometric-shapes.png?height=32&width=32&query=${user.name}`} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            {user.email}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {user.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.zone}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{user.lastLogin.split(" ")[0]}</div>
                          <div className="text-muted-foreground">{user.lastLogin.split(" ")[1]}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditUser(user.id)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleResetPassword(user.id)}>
                            <Key className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      {role.name}
                    </CardTitle>
                    <Badge variant="outline">{role.count} users</Badge>
                  </div>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium">Permissions:</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {role.permissions.map((permission, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditRole(role.name)}>
                        Edit Role
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleViewRoleUsers(role.name)}>
                        View Users
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix</CardTitle>
              <CardDescription>Overview of role permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Permission</th>
                      <th className="text-center p-2">Admin</th>
                      <th className="text-center p-2">Supervisor</th>
                      <th className="text-center p-2">Field Officer</th>
                      <th className="text-center p-2">Analyst</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "Dashboard Access",
                      "User Management",
                      "System Settings",
                      "Penalty Management",
                      "Route Management",
                      "Analytics",
                      "Reports",
                      "Collection Updates",
                    ].map((permission, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="p-2 font-medium">{permission}</td>
                        <td className="text-center p-2">
                          <div className="w-4 h-4 bg-primary rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center p-2">
                          {["Dashboard Access", "Penalty Management", "Reports", "Route Management"].includes(
                            permission,
                          ) ? (
                            <div className="w-4 h-4 bg-primary rounded-full mx-auto"></div>
                          ) : (
                            <div className="w-4 h-4 bg-muted rounded-full mx-auto"></div>
                          )}
                        </td>
                        <td className="text-center p-2">
                          {["Dashboard Access", "Route Management", "Collection Updates"].includes(permission) ? (
                            <div className="w-4 h-4 bg-primary rounded-full mx-auto"></div>
                          ) : (
                            <div className="w-4 h-4 bg-muted rounded-full mx-auto"></div>
                          )}
                        </td>
                        <td className="text-center p-2">
                          {["Dashboard Access", "Analytics", "Reports"].includes(permission) ? (
                            <div className="w-4 h-4 bg-primary rounded-full mx-auto"></div>
                          ) : (
                            <div className="w-4 h-4 bg-muted rounded-full mx-auto"></div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>User login and system activity log</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: "Rajesh Kumar", action: "Logged in", time: "2 minutes ago", type: "login" },
                  { user: "Priya Singh", action: "Updated penalty P-2024-005", time: "15 minutes ago", type: "update" },
                  { user: "Mohammed Ali", action: "Completed route optimization", time: "1 hour ago", type: "action" },
                  { user: "System", action: "Automated backup completed", time: "2 hours ago", type: "system" },
                  { user: "Sunita Patel", action: "Generated analytics report", time: "3 hours ago", type: "report" },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg border">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "login"
                          ? "bg-primary"
                          : activity.type === "update"
                            ? "bg-chart-2"
                            : activity.type === "action"
                              ? "bg-chart-3"
                              : activity.type === "system"
                                ? "bg-chart-4"
                                : "bg-muted"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.user}</div>
                      <div className="text-sm text-muted-foreground">{activity.action}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{activity.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
