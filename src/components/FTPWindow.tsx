import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Folder, File, Upload, Download } from "lucide-react";

interface FTPWindowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FTPWindow = ({ open, onOpenChange }: FTPWindowProps) => {
  const [currentPath, setCurrentPath] = useState("/");

  // Mock file structure
  const files = [
    { name: "bot1", type: "folder" },
    { name: "bot2", type: "folder" },
    { name: "config.json", type: "file" },
    { name: "logs", type: "folder" },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[500px]">
        <SheetHeader>
          <SheetTitle>FTP File Manager</SheetTitle>
          <SheetDescription>
            Manage your bot files and folders
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 h-[calc(100%-80px)]">
          <div className="flex gap-2">
            <Input value={currentPath} readOnly className="flex-1" />
            <Button size="icon" variant="outline">
              <Upload className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1 border rounded-md">
            <div className="p-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-accent cursor-pointer"
                >
                  {file.type === "folder" ? (
                    <Folder className="h-5 w-5 text-primary" />
                  ) : (
                    <File className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
