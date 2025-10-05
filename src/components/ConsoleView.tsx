import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal } from "lucide-react";

interface ConsoleViewProps {
  botName: string;
  botId: string;
}

export const ConsoleView = ({ botName, botId }: ConsoleViewProps) => {
  // Mock console logs - in a real app, this would be live data
  const consoleLogs = [
    `[${new Date().toLocaleTimeString()}] Starting ${botName}...`,
    `[${new Date().toLocaleTimeString()}] Connected to Discord Gateway`,
    `[${new Date().toLocaleTimeString()}] Bot is ready!`,
    `[${new Date().toLocaleTimeString()}] Loaded 15 commands`,
    `[${new Date().toLocaleTimeString()}] Monitoring 3 servers`,
  ];

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
        <Terminal className="h-4 w-4 text-primary" />
        <h2 className="font-semibold">{botName} Console</h2>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="font-mono text-sm space-y-1">
          {consoleLogs.map((log, index) => (
            <div key={index} className="text-muted-foreground">
              {log}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
