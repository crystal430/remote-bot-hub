import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Power, Terminal, FolderOpen, Trash2, Replace } from "lucide-react";

interface BotCardProps {
  name: string;
  avatar: string;
  location: "local" | "remote";
  isRunning: boolean;
  onToggle: () => void;
  onConsole: () => void;
  onReplace: () => void;
  onFolder: () => void;
  onDelete: () => void;
}

export const BotCard = ({
  name,
  avatar,
  location,
  isRunning,
  onToggle,
  onConsole,
  onReplace,
  onFolder,
  onDelete,
}: BotCardProps) => {
  return (
    <Card className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full border-2 border-border"
          />
          <div
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-card ${
              isRunning ? "bg-success" : "bg-muted-foreground"
            }`}
          />
        </div>

        <div className="text-center space-y-2 w-full">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <Badge variant={location === "local" ? "default" : "secondary"}>
            {location === "local" ? "Local PC" : "Remote PC"}
          </Badge>
        </div>

        <div className="w-full space-y-2">
          <Button
            onClick={onToggle}
            variant={isRunning ? "destructive" : "default"}
            className="w-full"
          >
            <Power className="mr-2 h-4 w-4" />
            {isRunning ? "Stop" : "Start"}
          </Button>

          <Button onClick={onConsole} variant="secondary" className="w-full">
            <Terminal className="mr-2 h-4 w-4" />
            Console
          </Button>

          <div className="flex gap-2">
            <Button
              onClick={onReplace}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <Replace className="h-4 w-4" />
            </Button>
            <Button
              onClick={onFolder}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <FolderOpen className="h-4 w-4" />
            </Button>
            <Button
              onClick={onDelete}
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
