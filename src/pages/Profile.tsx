import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Settings,
  Bell,
  CreditCard,
  Shield,
  LogOut,
  ArrowLeft,
  Save,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Top Navigation */}
      <nav className="bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Dashboard</span>
          </Link>

          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">⛳</span>
            </div>
            <span className="text-xl font-bold text-foreground">Birdie AI</span>
          </Link>

          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Profile Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>

          {/* Profile Card */}
          <Card className="p-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                JS
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-1">John Smith</h2>
                <p className="text-muted-foreground mb-3">john.smith@example.com</p>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Pro Member
                  </div>
                  <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Handicap: 15.2
                  </div>
                </div>
              </div>
              <Button variant="outline">Change Photo</Button>
            </div>
          </Card>

          {/* Settings Tabs */}
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="golf">Golf Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Smith" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.smith@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" defaultValue="32" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select defaultValue="male">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary-glow text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Golf Profile Tab */}
            <TabsContent value="golf">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Golf Profile</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="handicap">Current Handicap</Label>
                      <Input id="handicap" type="number" defaultValue="15.2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goal-handicap">Goal Handicap</Label>
                      <Input id="goal-handicap" type="number" defaultValue="10" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="driver-speed">Driver Swing Speed (mph)</Label>
                      <Input id="driver-speed" type="number" defaultValue="95" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="driver-distance">Driver Distance (yards)</Label>
                      <Input id="driver-distance" type="number" defaultValue="250" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="home-course">Home Course</Label>
                    <Input id="home-course" placeholder="e.g., Pebble Beach Golf Links" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="rounds-per-month">Rounds per Month</Label>
                      <Input id="rounds-per-month" type="number" defaultValue="4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="years-playing">Years Playing</Label>
                      <Input id="years-playing" type="number" defaultValue="8" />
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary-glow text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Update Golf Profile
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <div className="font-medium text-foreground">Practice Reminders</div>
                      <div className="text-sm text-muted-foreground">Get reminded about your practice schedule</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <div className="font-medium text-foreground">AI Insights</div>
                      <div className="text-sm text-muted-foreground">Receive new personalized recommendations</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <div className="font-medium text-foreground">Performance Updates</div>
                      <div className="text-sm text-muted-foreground">Get notified about progress milestones</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <div className="font-medium text-foreground">Weekly Reports</div>
                      <div className="text-sm text-muted-foreground">Receive weekly performance summaries</div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-foreground">Marketing Emails</div>
                      <div className="text-sm text-muted-foreground">Receive news and product updates</div>
                    </div>
                    <Switch />
                  </div>
                  <Button className="bg-primary hover:bg-primary-glow text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing">
              <Card className="p-6 mb-4">
                <h3 className="text-lg font-bold text-foreground mb-4">Current Plan</h3>
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div>
                    <div className="text-xl font-bold text-foreground">Pro Plan</div>
                    <div className="text-sm text-muted-foreground">Billed monthly</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">$29.99</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline" className="text-destructive hover:text-destructive">
                    Cancel Subscription
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Payment Method</h3>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border mb-4">
                  <CreditCard className="w-8 h-8 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="font-medium text-foreground">•••• •••• •••• 4242</div>
                    <div className="text-sm text-muted-foreground">Expires 12/2025</div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
                <Button variant="outline">Add Payment Method</Button>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Danger Zone */}
          <Card className="p-6 mt-6 border-destructive/50">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-destructive" />
              Danger Zone
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <div className="font-medium text-foreground">Delete Account</div>
                  <div className="text-sm text-muted-foreground">Permanently delete your account and all data</div>
                </div>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium text-foreground">Sign Out</div>
                  <div className="text-sm text-muted-foreground">Sign out of your account on this device</div>
                </div>
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
