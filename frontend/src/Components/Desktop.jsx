import React from "react";
import {
  Wifi,
  Volume2,
  Battery,
  Search,
  Grid3X3,
  Folder,
  Terminal,
  Settings,
  Chrome,
  FileText,
  Calculator,
  Calendar,
  Music,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { handleFullScreen } from "../utils/openToFullScreene";
import { Link } from "react-router";

const Desktop = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col">
      <nav className="flex items-center justify-between px-4 py-2 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <span className="text-white font-medium">WebOS</span>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <Wifi className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <Battery className="h-4 w-4" />
          </Button>
          <span className="text-white text-sm">12:30 PM</span>
        </div>
      </nav>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-8 gap-4 h-full">
          <Card className="bg-transparent h-32 border-none cursor-pointer">
            <CardContent className="p-2 flex flex-col items-center justify-center ">
              <Folder className="h-8 w-8 text-white mb-2" />
              <span className="text-white text-xs text-center">Documents</span>
            </CardContent>
          </Card>

          <Card className="bg-transparent h-32 border-none cursor-pointe">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Terminal className="h-8 w-8 text-white mb-2" />
              <span className="text-white text-xs text-center">Terminal</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="px-4 py-3 bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center justify-center space-x-2">
          <Link to={"/browser"}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleFullScreen()}
              className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
            >
              <Chrome className="h-6 w-6" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Folder className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Terminal className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <FileText className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Calculator className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Calendar className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Music className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Camera className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 text-white hover:bg-white/10 rounded-xl"
          >
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
