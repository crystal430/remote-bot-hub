import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Terminal, HardDrive } from "lucide-react";

interface Bot {
  id: string;
  name: string;
  avatar: string;
  location: "local" | "remote";
  isRunning: boolean;
}

interface ConsoleSidebarProps {
  bots: Bot[];
  activeConsoleId: string | null;
  onSelectConsole: (id: string) => void;
  onFtpClick: () => void;
}

export const ConsoleSidebar = ({
  bots,
  activeConsoleId,
  onSelectConsole,
  onFtpClick,
}: ConsoleSidebarProps) => {
  return (
    <div className="w-16 bg-card border-r border-border flex flex-col">
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-2">
          {bots.map((bot) => (
            <button
              key={bot.id}
              onClick={() => onSelectConsole(bot.id)}
              className={cn(
                "relative group rounded-lg p-1 transition-all hover:bg-accent",
                activeConsoleId === bot.id && "bg-accent"
              )}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={bot.avatar} alt={bot.name} />
                <AvatarFallback>
                  <Terminal className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              {bot.isRunning && (
                <div className="absolute bottom-1 right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-card" />
              )}
              <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                {bot.name}
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-2 border-t border-border">
        <Button
          onClick={onFtpClick}
          size="icon"
          variant="outline"
          className="w-full h-12"
        >
          <HardDrive className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
