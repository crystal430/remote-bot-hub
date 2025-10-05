import { useState } from "react";
import { Header } from "@/components/Header";
import { BotCard } from "@/components/BotCard";
import { ConsoleSidebar } from "@/components/ConsoleSidebar";
import { ConsoleView } from "@/components/ConsoleView";
import { FTPWindow } from "@/components/FTPWindow";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { HardDrive } from "lucide-react";

interface Bot {
  id: string;
  name: string;
  avatar: string;
  location: "local" | "remote";
  isRunning: boolean;
}

const Index = () => {
  const { toast } = useToast();
  const [activeConsoleId, setActiveConsoleId] = useState<string | null>(null);
  const [ftpOpen, setFtpOpen] = useState(false);
  const [bots, setBots] = useState<Bot[]>([
    {
      id: "1",
      name: "Music Bot",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=music",
      location: "local",
      isRunning: true,
    },
    {
      id: "2",
      name: "Moderation Bot",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=mod",
      location: "remote",
      isRunning: false,
    },
    {
      id: "3",
      name: "Utility Bot",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=utility",
      location: "local",
      isRunning: true,
    },
    {
      id: "4",
      name: "Welcome Bot",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=welcome",
      location: "remote",
      isRunning: false,
    },
  ]);

  const toggleBot = (id: string) => {
    setBots((prev) =>
      prev.map((bot) =>
        bot.id === id ? { ...bot, isRunning: !bot.isRunning } : bot
      )
    );
    const bot = bots.find((b) => b.id === id);
    toast({
      title: bot?.isRunning ? "Bot Stopped" : "Bot Started",
      description: `${bot?.name} has been ${bot?.isRunning ? "stopped" : "started"}.`,
    });
  };

  const showConsole = (name: string) => {
    toast({
      title: "Console",
      description: `Opening console for ${name}...`,
    });
  };

  const replaceBot = (name: string) => {
    toast({
      title: "Replace Bot",
      description: `Replacing ${name}...`,
    });
  };

  const openFolder = (name: string) => {
    toast({
      title: "Open Folder",
      description: `Opening folder for ${name}...`,
    });
  };

  const deleteBot = (id: string) => {
    const bot = bots.find((b) => b.id === id);
    setBots((prev) => prev.filter((b) => b.id !== id));
    toast({
      title: "Bot Deleted",
      description: `${bot?.name} has been deleted.`,
      variant: "destructive",
    });
  };

  const activeBot = bots.find((bot) => bot.id === activeConsoleId);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ConsoleSidebar
          bots={bots}
          activeConsoleId={activeConsoleId}
          onSelectConsole={setActiveConsoleId}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {activeConsoleId && activeBot ? (
            <ConsoleView botName={activeBot.name} botId={activeBot.id} />
          ) : (
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {bots.map((bot) => (
                    <BotCard
                      key={bot.id}
                      name={bot.name}
                      avatar={bot.avatar}
                      location={bot.location}
                      isRunning={bot.isRunning}
                      onToggle={() => toggleBot(bot.id)}
                      onConsole={() => {
                        setActiveConsoleId(bot.id);
                        showConsole(bot.name);
                      }}
                      onReplace={() => replaceBot(bot.name)}
                      onFolder={() => openFolder(bot.name)}
                      onDelete={() => deleteBot(bot.id)}
                    />
                  ))}
                </div>
              </div>
            </main>
          )}
          <div className="border-t border-border p-4 bg-card">
            <Button
              onClick={() => setFtpOpen(true)}
              className="w-full"
              variant="outline"
            >
              <HardDrive className="mr-2 h-4 w-4" />
              FTP File Manager
            </Button>
          </div>
        </div>
      </div>
      <FTPWindow open={ftpOpen} onOpenChange={setFtpOpen} />
    </div>
  );
};

export default Index;
