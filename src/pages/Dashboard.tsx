import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Target,
  TrendingUp,
  Activity,
  Calendar,
  BarChart3,
  User,
  Settings,
  LogOut,
  Bell,
  Flag,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Top Navigation */}
      <nav className="bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">⛳</span>
            </div>
            <span className="text-xl font-bold text-foreground">Birdie AI</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/profile">
                <User className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your personalized golf performance dashboard</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-green-600">↑ 2.3</span>
            </div>
            <div className="text-2xl font-bold text-foreground">15.2</div>
            <div className="text-xs text-muted-foreground">Current Handicap</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs font-medium text-green-600">↑ 8%</span>
            </div>
            <div className="text-2xl font-bold text-foreground">62%</div>
            <div className="text-xs text-muted-foreground">Fairways Hit</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-green-600">↑ 5%</span>
            </div>
            <div className="text-2xl font-bold text-foreground">48%</div>
            <div className="text-xs text-muted-foreground">GIR</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs font-medium text-green-600">↓ 1.2</span>
            </div>
            <div className="text-2xl font-bold text-foreground">31.8</div>
            <div className="text-xs text-muted-foreground">Avg Putts</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Recommendations */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">AI Recommendations</h2>
                  <p className="text-sm text-muted-foreground">Personalized insights for you</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Equipment Upgrade Suggestion</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Based on your swing speed of 95 mph, we recommend trying a stiff shaft driver for better control.
                      </p>
                      <Button size="sm" variant="link" className="text-primary p-0 h-auto">
                        View Details →
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Swing Adjustment</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Your ball flight tends to fade. Try the draw drill focusing on inside-out swing path.
                      </p>
                      <Button size="sm" variant="link" className="text-accent p-0 h-auto">
                        Start Drill →
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Flag className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Course Strategy</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Focus on playing to your strengths: lay up on par 5s and take more club on approach shots.
                      </p>
                      <Button size="sm" variant="link" className="text-primary p-0 h-auto">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Practice Plan */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">This Week's Practice Plan</h2>
                    <p className="text-sm text-muted-foreground">Your personalized training schedule</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { day: "Monday", task: "Driver accuracy drill - 30 min", done: true },
                  { day: "Wednesday", task: "Short game practice - 45 min", done: true },
                  { day: "Thursday", task: "Putting drills - 20 min", done: false },
                  { day: "Saturday", task: "Full round with focus on course management", done: false },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      item.done ? "bg-primary/5 border-primary/20" : "bg-muted/30 border-border"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        item.done ? "bg-primary border-primary" : "border-muted-foreground"
                      }`}
                    >
                      {item.done && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-foreground">{item.day}</div>
                      <div className="text-xs text-muted-foreground">{item.task}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Goal Progress</h3>
                  <p className="text-xs text-muted-foreground">Target: 10 Handicap</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Current: 15.2</span>
                    <span className="text-sm text-primary font-semibold">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">5.2</div>
                  <div className="text-xs text-muted-foreground">Strokes to target</div>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground">Recent Rounds</h3>
              </div>

              <div className="space-y-3">
                {[
                  { date: "Oct 28", score: 84, course: "Pine Valley" },
                  { date: "Oct 21", score: 88, course: "Oakmont CC" },
                  { date: "Oct 14", score: 86, course: "Augusta National" },
                ].map((round, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-sm text-foreground">{round.course}</div>
                      <div className="text-xs text-muted-foreground">{round.date}</div>
                    </div>
                    <div className="text-xl font-bold text-primary">{round.score}</div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4" size="sm">
                View All Rounds
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Log New Round
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Activity className="w-4 h-4 mr-2" />
                  Update Stats
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm" asChild>
                  <Link to="/profile">
                    <User className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
