import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  Folder,
  Terminal,
  Chrome,
  FileText,
  Calculator,
  Search,
  Cloud,
  Wifi,
  LayoutGrid,
  Power,
  Settings,
  User,
  LogOut,
  Menu,
} from "lucide-react";

// Google Pixel Launcher aesthetic - Material You with glass-morphism and organic shapes
const Desktop = () => {
  const [query, setQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: 72, condition: "Partly Cloudy" });
  const [showStartMenu, setShowStartMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatDate = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${days[currentTime.getDay()]}, ${
      months[currentTime.getMonth()]
    } ${currentTime.getDate()}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const apps = [
    {
      name: "Files",
      icon: Folder,
      path: "/file-explorer",
      gradient: "from-sky-400/20 via-blue-400/20 to-indigo-400/20",
      iconColor: "text-sky-600 dark:text-sky-400",
      description: "Browse your files and folders",
    },
    {
      name: "Terminal",
      icon: Terminal,
      path: "/bash",
      gradient: "from-emerald-400/20 via-teal-400/20 to-green-400/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      description: "Command line interface",
    },
    {
      name: "Editor",
      icon: FileText,
      path: "/editor",
      gradient: "from-violet-400/20 via-purple-400/20 to-fuchsia-400/20",
      iconColor: "text-violet-600 dark:text-violet-400",
      description: "Text and code editor",
    },
    {
      name: "Browser",
      icon: Chrome,
      path: "/browser",
      gradient: "from-yellow-400/20 via-amber-400/20 to-orange-400/20",
      iconColor: "text-yellow-600 dark:text-orange-400",
      description: "Web browser",
    },
    {
      name: "Calculator",
      icon: Calculator,
      path: "/",
      gradient: "from-pink-400/20 via-rose-400/20 to-red-400/20",
      iconColor: "text-pink-600 dark:text-pink-400",
      description: "Quick calculations",
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-google">
      {/* Organic Blob Background Shapes - Pixel Launcher style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Animated blob shapes */}
        <div
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-300/30 to-orange-300/30 dark:from-amber-600/20 dark:to-orange-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content - layered above blobs */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Widgets Area - Pixel Launcher style */}
        <header className="w-full px-6 py-8">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Clock Widget - Large and prominent like Pixel */}
            <div className="w-fit backdrop-blur-2xl bg-white/40 dark:bg-white/10 rounded-[2.5rem] p-8 shadow-xl shadow-black/5 border border-white/60 dark:border-white/20">
              <div className="space-y-1">
                <h1 className="text-7xl font-light text-slate-800 dark:text-white tracking-tight">
                  {currentTime.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </h1>
                <p className="text-lg font-normal text-slate-600 dark:text-slate-300">
                  {formatDate()}
                </p>
              </div>
            </div>

            {/* Weather Widget - Glass-morphism style */}
            <div className="backdrop-blur-2xl bg-white/40 dark:bg-white/10 rounded-[2rem] p-6 shadow-xl shadow-black/5 border border-white/60 dark:border-white/20 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-4xl font-light text-slate-800 dark:text-white">
                    {weather.temp}°
                  </p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {weather.condition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center px-6 py-8 space-y-12">
          {/* Search Bar - Floating pill style */}
          <div className="w-full max-w-2xl">
            <div className="backdrop-blur-2xl bg-white/60 dark:bg-white/15 rounded-full shadow-2xl shadow-black/10 border border-white/80 dark:border-white/30 overflow-hidden material-transition hover:shadow-black/20">
              <div className="flex items-center gap-4 px-8 py-5">
                <Search
                  className="h-6 w-6 text-slate-500 dark:text-slate-400 flex-shrink-0"
                  strokeWidth={2}
                />
                <input
                  className="flex-1 bg-transparent text-slate-800 dark:text-white text-lg outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 font-normal"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && query) {
                      const lowerQuery = query.toLowerCase();
                      const matchedApp = apps.find((app) =>
                        app.name.toLowerCase().includes(lowerQuery)
                      );
                      if (matchedApp) navigate(matchedApp.path);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Dock/Taskbar - Enhanced with Start Menu */}
        <footer className="w-full pb-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-center gap-4">
            {/* Start Menu Button */}

            {/* App Dock */}
            <div className="flex gap-4 items-center backdrop-blur-2xl bg-white/60 dark:bg-white/15 rounded-full px-8 py-4 shadow-2xl shadow-black/10 border border-white/80 dark:border-white/30">
              <div className="flex items-center gap-3">
                {apps.slice(0, 5).map((app, index) => (
                  <Link
                    key={index}
                    to={app.path}
                    className="w-14 h-14 rounded-full backdrop-blur-xl bg-white/50 dark:bg-white/10 flex items-center justify-center material-transition-fast 
                               hover:bg-white/70 dark:hover:bg-white/20 hover:scale-110 active:scale-95 shadow-md"
                    title={app.name}
                  >
                    <app.icon
                      className={`h-6 w-6 ${app.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </Link>
                ))}
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowStartMenu(!showStartMenu)}
                  className="backdrop-blur-2xl bg-white/60 dark:bg-white/15 rounded-full p-4 shadow-2xl shadow-black/10 border border-white/80 dark:border-white/30 material-transition-fast
                           hover:bg-white/70 dark:hover:bg-white/20 hover:scale-110 active:scale-95"
                  title="Start Menu"
                >
                  <Menu
                    className="h-7 w-7 text-slate-700 dark:text-white"
                    strokeWidth={2}
                  />
                </button>

                {/* Start Menu Popup */}
                {showStartMenu && (
                  <div className="absolute bottom-20 left-0 backdrop-blur-2xl bg-white/70 dark:bg-white/15 rounded-[2rem] p-6 shadow-2xl shadow-black/20 border border-white/80 dark:border-white/30 w-96 animate-in fade-in slide-in-from-bottom-4 duration-200">
                    {/* User Info Section */}
                    <div className="mb-6 pb-6 border-b border-slate-300 dark:border-slate-700">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                          <User
                            className="h-7 w-7 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-slate-800 dark:text-white">
                            Welcome
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            WebOS User
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* All Apps Grid */}
                    <div className="mb-6">
                      <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-2">
                        All Applications
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {apps.map((app, index) => (
                          <Link
                            key={index}
                            to={app.path}
                            onClick={() => setShowStartMenu(false)}
                            className="group flex flex-col items-center gap-2 p-3 rounded-2xl material-transition-fast
                                     hover:bg-white/50 dark:hover:bg-white/10 active:scale-95"
                          >
                            <div
                              className={`w-12 h-12 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-white/20 flex items-center justify-center shadow-md
                                          group-hover:scale-110 material-transition`}
                            >
                              <app.icon
                                className={`h-6 w-6 ${app.iconColor}`}
                                strokeWidth={1.5}
                              />
                            </div>
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                              {app.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* System Actions */}
                    <div className="pt-4 border-t border-slate-300 dark:border-slate-700 flex gap-2">
                      <button
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full backdrop-blur-xl bg-white/50 dark:bg-white/10 material-transition-fast
                                 hover:bg-white/70 dark:hover:bg-white/20 active:scale-95"
                        title="Settings"
                      >
                        <Settings
                          className="h-5 w-5 text-slate-600 dark:text-slate-400"
                          strokeWidth={2}
                        />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Settings
                        </span>
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full backdrop-blur-xl bg-red-50 dark:bg-red-950/30 material-transition-fast
                                 hover:bg-red-100 dark:hover:bg-red-950/50 active:scale-95 border border-red-200 dark:border-red-800/30"
                        title="Logout"
                      >
                        <LogOut
                          className="h-5 w-5 text-red-600 dark:text-red-400"
                          strokeWidth={2}
                        />
                        <span className="text-sm font-medium text-red-700 dark:text-red-400">
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Desktop;
