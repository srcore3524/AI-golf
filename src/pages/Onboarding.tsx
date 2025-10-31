import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, User, Activity, Target, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Navigate to dashboard when complete
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      {/* Logo and Header */}
      <div className="max-w-3xl mx-auto pt-8 pb-4">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">⛳</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Birdie AI</span>
        </Link>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 shadow-xl">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
                  <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input id="height" type="number" placeholder="175" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" placeholder="70" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wrist-floor">Wrist to Floor (cm)</Label>
                  <Input id="wrist-floor" type="number" placeholder="85" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hand-size">Hand Size (cm)</Label>
                  <Input id="hand-size" type="number" placeholder="19" />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Swing Data */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Swing Information</h2>
                  <p className="text-sm text-muted-foreground">Share your swing data</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-speed">Driver Swing Speed (mph)</Label>
                  <Input id="driver-speed" type="number" placeholder="95" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="driver-distance">Driver Distance (yards)</Label>
                  <Input id="driver-distance" type="number" placeholder="250" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="iron-speed">7-Iron Swing Speed (mph)</Label>
                  <Input id="iron-speed" type="number" placeholder="80" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="iron-distance">7-Iron Distance (yards)</Label>
                  <Input id="iron-distance" type="number" placeholder="150" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="swing-tempo">Swing Tempo</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tempo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slow">Slow (3:1 ratio)</SelectItem>
                      <SelectItem value="moderate">Moderate (2.5:1 ratio)</SelectItem>
                      <SelectItem value="fast">Fast (2:1 ratio)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="ball-flight">Typical Ball Flight</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ball flight" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draw">Draw</SelectItem>
                      <SelectItem value="straight">Straight</SelectItem>
                      <SelectItem value="fade">Fade</SelectItem>
                      <SelectItem value="slice">Slice</SelectItem>
                      <SelectItem value="hook">Hook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Equipment */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Current Equipment</h2>
                  <p className="text-sm text-muted-foreground">Tell us about your clubs</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-brand">Driver Brand & Model</Label>
                  <Input id="driver-brand" placeholder="e.g., TaylorMade Stealth 2" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-loft">Driver Loft (degrees)</Label>
                    <Input id="driver-loft" type="number" placeholder="10.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-shaft">Shaft Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shaft" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stiff">Stiff</SelectItem>
                        <SelectItem value="regular">Regular</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="ladies">Ladies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="iron-set">Iron Set Brand & Model</Label>
                  <Input id="iron-set" placeholder="e.g., Callaway Paradym" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="putter">Putter Brand & Model</Label>
                  <Input id="putter" placeholder="e.g., Odyssey White Hot" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ball">Golf Ball</Label>
                  <Input id="ball" placeholder="e.g., Titleist Pro V1" />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Performance Stats */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Performance Stats</h2>
                  <p className="text-sm text-muted-foreground">Share your recent performance</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="handicap">Current Handicap</Label>
                  <Input id="handicap" type="number" placeholder="15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rounds">Rounds per Month</Label>
                  <Input id="rounds" type="number" placeholder="4" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="avg-score">Average Score</Label>
                  <Input id="avg-score" type="number" placeholder="88" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="best-score">Best Score (Last 6 months)</Label>
                  <Input id="best-score" type="number" placeholder="82" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fairways">Fairways Hit (%)</Label>
                  <Input id="fairways" type="number" placeholder="65" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="greens">Greens in Regulation (%)</Label>
                  <Input id="greens" type="number" placeholder="55" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="putts">Average Putts per Round</Label>
                  <Input id="putts" type="number" placeholder="32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Goal Handicap</Label>
                  <Input id="goal" type="number" placeholder="10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weakness">Areas for Improvement</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="driving">Driving Accuracy</SelectItem>
                    <SelectItem value="iron-play">Iron Play</SelectItem>
                    <SelectItem value="short-game">Short Game</SelectItem>
                    <SelectItem value="putting">Putting</SelectItem>
                    <SelectItem value="course-management">Course Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="bg-primary hover:bg-primary-glow text-white font-semibold group"
            >
              {step === totalSteps ? "Complete Setup" : "Continue"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
