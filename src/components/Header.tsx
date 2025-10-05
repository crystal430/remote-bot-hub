import { Button } from "@/components/ui/button";
import { Monitor, Link2, Clapperboard, RefreshCw, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const { toast } = useToast();

  const showIP = () => {
    toast({
      title: "Remote IP",
      description: "192.168.1.100:3000",
    });
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Discord Bot Manager
          </h1>

          <div className="flex items-center gap-2 flex-wrap">
            <Button onClick={showIP} variant="outline" size="sm">
              <Monitor className="mr-2 h-4 w-4" />
              Show IP
            </Button>
            <Button variant="outline" size="sm">
              <Link2 className="mr-2 h-4 w-4" />
              Connect Remote
            </Button>
            <Button variant="outline" size="sm">
              <Clapperboard className="mr-2 h-4 w-4" />
              FFmpeg
            </Button>
            <div className="w-px h-6 bg-border" />
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="default" size="sm" className="shadow-glow">
              <Plus className="mr-2 h-4 w-4" />
              Add Bot
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
