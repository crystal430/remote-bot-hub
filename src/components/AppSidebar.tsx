import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Terminal,
  HardDrive,
  Monitor,
  Link2,
  Clapperboard,
  RefreshCw,
  Plus,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Bot {
  id: string;
  name: string;
  avatar: string;
  location: "local" | "remote";
  isRunning: boolean;
}

interface AppSidebarProps {
  bots: Bot[];
  activeConsoleId: string | null;
  onSelectConsole: (id: string) => void;
  onFtpClick: () => void;
}

export function AppSidebar({
  bots,
  activeConsoleId,
  onSelectConsole,
  onFtpClick,
}: AppSidebarProps) {
  const { toast } = useToast();

  const showIP = () => {
    toast({
      title: "Remote IP",
      description: "192.168.1.100:3000",
    });
  };

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Discord Bot Manager
        </h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-col gap-2 p-2">
              <Button onClick={showIP} variant="outline" size="sm" className="w-full justify-start">
                <Monitor className="mr-2 h-4 w-4" />
                Show IP
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Link2 className="mr-2 h-4 w-4" />
                Connect Remote
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Clapperboard className="mr-2 h-4 w-4" />
                FFmpeg
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button variant="default" size="sm" className="w-full justify-start shadow-glow">
                <Plus className="mr-2 h-4 w-4" />
                Add Bot
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Bot Consoles</SidebarGroupLabel>
          <SidebarGroupContent>
            <ScrollArea className="flex-1">
              <SidebarMenu>
                {bots.map((bot) => (
                  <SidebarMenuItem key={bot.id}>
                    <SidebarMenuButton
                      onClick={() => onSelectConsole(bot.id)}
                      isActive={activeConsoleId === bot.id}
                      className="relative"
                    >
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={bot.avatar} alt={bot.name} />
                        <AvatarFallback>
                          <Terminal className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <span>{bot.name}</span>
                      {bot.isRunning && (
                        <div className="ml-auto h-2 w-2 bg-green-500 rounded-full" />
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <Button
          onClick={onFtpClick}
          variant="outline"
          className="w-full justify-start"
        >
          <HardDrive className="mr-2 h-4 w-4" />
          FTP File Manager
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
