import { X, Plus, ChevronLeft, ChevronRight, RotateCw, Search, Globe, Home } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const Browser = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "New Tab", url: "", isActive: true },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [nextTabId, setNextTabId] = useState(2);
  const [urlInput, setUrlInput] = useState("");

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const addTab = () => {
    const newTab = {
      id: nextTabId,
      title: "New Tab",
      url: "",
      isActive: false,
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(nextTabId);
    setNextTabId(nextTabId + 1);
    setUrlInput("");
  };

  const closeTab = (tabId) => {
    if (tabs.length === 1) return;

    const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(updatedTabs);

    if (activeTabId === tabId) {
      const newActiveTab = updatedTabs[0];
      setActiveTabId(newActiveTab.id);
      setUrlInput(newActiveTab.url || "");
    }
  };

  const switchTab = (tabId) => {
    setActiveTabId(tabId);
    const tab = tabs.find(t => t.id === tabId);
    setUrlInput(tab?.url || "");
  };

  const updateTabUrl = (url) => {
    setTabs(
      tabs.map((tab) =>
        tab.id === activeTabId
          ? { ...tab, url, title: url ? extractDomain(url) : "New Tab" }
          : tab
      )
    );
  };

  const extractDomain = (url) => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return url.substring(0, 20) + '...';
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlInput.trim()) {
      let formattedUrl;
      
      // Check if it's a search query or URL
      if (urlInput.includes(' ') || (!urlInput.includes('.') && !urlInput.startsWith('http'))) {
        // It's a search query
        formattedUrl = `https://www.google.com/search?q=${encodeURIComponent(urlInput)}`;
      } else {
        // It's a URL
        formattedUrl = urlInput.startsWith("http") ? urlInput : `https://${urlInput}`;
      }
      
      updateTabUrl(formattedUrl);
    }
  };

  const handleGoogleSearch = (query) => {
    if (query.trim()) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      updateTabUrl(googleSearchUrl);
      setUrlInput(googleSearchUrl);
    }
  };

  const handleRefresh = () => {
    if (activeTab?.url) {
      // Force iframe reload by updating the key
      setTabs(tabs.map(tab => 
        tab.id === activeTabId 
          ? { ...tab, url: tab.url + '?' + Date.now() }
          : tab
      ));
    }
  };

  const goHome = () => {
    updateTabUrl("");
    setUrlInput("");
  };

  return (
    <section className="flex flex-col h-screen w-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 font-google">
      {/* Browser Window Container */}
      <div className="flex flex-col h-full m-4 backdrop-blur-2xl bg-white/70 dark:bg-white/10 rounded-[2rem] shadow-2xl shadow-black/10 border border-white/80 dark:border-white/20 overflow-hidden">
        
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-4">
              Browser
            </span>
          </div>
          <Link 
            to="/" 
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full material-transition-fast"
          >
            <X className="h-5 w-5 text-slate-600 dark:text-slate-400" strokeWidth={2} />
          </Link>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          <div className="flex gap-1 flex-1 overflow-x-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex items-center gap-2 min-w-[140px] max-w-[200px] px-4 py-2 rounded-t-xl material-transition cursor-pointer group ${
                  tab.id === activeTabId
                    ? "bg-white dark:bg-slate-800 shadow-sm"
                    : "bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => switchTab(tab.id)}
              >
                <Globe className="h-4 w-4 text-slate-500 dark:text-slate-400 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-slate-700 dark:text-slate-300 truncate flex-1">
                  {tab.title}
                </span>
                {tabs.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab.id);
                    }}
                    className="p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded opacity-0 group-hover:opacity-100 material-transition-fast"
                  >
                    <X className="h-3 w-3 text-slate-600 dark:text-slate-400" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button 
            onClick={addTab} 
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg material-transition-fast flex-shrink-0"
            title="New Tab"
          >
            <Plus className="h-5 w-5 text-slate-600 dark:text-slate-400" strokeWidth={2} />
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-white/5 border-b border-slate-200 dark:border-slate-700">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-1">
            <button 
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg material-transition-fast disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={!activeTab?.url}
              title="Back"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" strokeWidth={2} />
            </button>
            <button 
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg material-transition-fast disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={!activeTab?.url}
              title="Forward"
            >
              <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" strokeWidth={2} />
            </button>
            <button 
              onClick={handleRefresh}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg material-transition-fast"
              title="Refresh"
            >
              <RotateCw className="h-5 w-5 text-slate-600 dark:text-slate-400" strokeWidth={2} />
            </button>
            <button 
              onClick={goHome}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg material-transition-fast"
              title="Home"
            >
              <Home className="h-5 w-5 text-slate-600 dark:text-slate-400" strokeWidth={2} />
            </button>
          </div>

          {/* Address Bar */}
          <form onSubmit={handleUrlSubmit} className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Search or enter URL"
                className="w-full px-12 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-full border border-slate-200 dark:border-slate-700 outline-none material-transition
                  focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" strokeWidth={2} />
            </div>
          </form>
        </div>

        {/* Browser Content */}
        <div className="flex-1 bg-white dark:bg-slate-900 relative overflow-hidden">
          {activeTab?.url ? (
            <iframe
              key={activeTab.url}
              src={activeTab.url}
              className="w-full h-full border-none"
              title="Browser Content"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              <div className="text-center max-w-xl w-full px-6">
                {/* Google Logo */}
                <div className="mb-8">
                  <h1 className="text-6xl font-light text-slate-700 dark:text-slate-200 mb-2">
                    Google
                  </h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">WebOS Browser</p>
                </div>

                {/* Search Box */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search Google or type a URL"
                    className="w-full px-6 py-4 text-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 material-transition text-slate-800 dark:text-white"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleGoogleSearch(e.target.value);
                      }
                    }}
                  />
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full material-transition-fast"
                    onClick={(e) => {
                      const input = e.target.closest("div").querySelector("input");
                      handleGoogleSearch(input.value);
                    }}
                  >
                    <Search className="h-5 w-5 text-slate-400" strokeWidth={2} />
                  </button>
                </div>

                {/* Search Buttons */}
                <div className="flex justify-center gap-4">
                  <button
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 material-transition shadow-sm"
                    onClick={() => handleGoogleSearch("google search")}
                  >
                    Google Search
                  </button>
                  <button
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 material-transition shadow-sm"
                    onClick={() => handleGoogleSearch("I'm feeling lucky")}
                  >
                    I'm Feeling Lucky
                  </button>
                </div>

                {/* Quick Links */}
                <div className="mt-12 grid grid-cols-4 gap-6">
                  {[
                    { name: "YouTube", url: "https://youtube.com", icon: "🎥" },
                    { name: "Gmail", url: "https://gmail.com", icon: "📧" },
                    { name: "Maps", url: "https://maps.google.com", icon: "🗺️" },
                    { name: "News", url: "https://news.google.com", icon: "📰" }
                  ].map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        updateTabUrl(link.url);
                        setUrlInput(link.url);
                      }}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 material-transition shadow-sm hover:shadow-md"
                    >
                      <span className="text-3xl">{link.icon}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{link.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Browser;
