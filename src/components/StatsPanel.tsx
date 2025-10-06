import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Server, Users, Cpu, Activity, Clock } from "lucide-react";

interface StatsPanelProps {
  localBots: number;
  remoteBots: number;
  activeUsers: number;
  totalUsers: number;
}

export const StatsPanel = ({ localBots, remoteBots, activeUsers, totalUsers }: StatsPanelProps) => {
  const nodeHealthStatus = "green" as "green" | "yellow" | "red";
  const avgResourceUsage = 42; // percentage
  const downtime24h = "0h 0m";
  const downtime7d = "2h 15m";

  const getHealthColor = (status: "green" | "yellow" | "red") => {
    switch (status) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
    }
  };

  return (
    <div className="w-80 border-l bg-card p-4 space-y-4 overflow-auto">
      <h2 className="text-lg font-semibold">System Statistics</h2>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Server className="h-4 w-4" />
            Total Bots Hosted
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Local:</span>
            <span className="font-medium">{localBots}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Remote:</span>
            <span className="font-medium">{remoteBots}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-sm font-semibold">
            <span>Total:</span>
            <span>{localBots + remoteBots}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Users className="h-4 w-4" />
            Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Active / Total:</span>
            <span className="font-medium">{activeUsers} / {totalUsers}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Cpu className="h-4 w-4" />
            Avg Resource Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{avgResourceUsage}%</span>
            <span className="text-xs text-muted-foreground">per bot</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Node Health Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${getHealthColor(nodeHealthStatus)}`} />
            <span className="text-sm font-medium capitalize">{nodeHealthStatus}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Downtime
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last 24h:</span>
            <span className="font-medium">{downtime24h}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last 7d:</span>
            <span className="font-medium">{downtime7d}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
