
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { HomePage } from "@/components/HomePage";
import { Dashboard } from "@/components/Dashboard";
import { WatchParty } from "@/components/WatchParty";
import { AlternatePersona } from "@/components/AlternatePersona";

type ActivePage = 'home' | 'dashboard' | 'watch-party' | 'alternate-persona';

const Index = () => {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <Dashboard />;
      case 'watch-party':
        return <WatchParty />;
      case 'alternate-persona':
        return <AlternatePersona />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1 overflow-hidden">
        {renderActivePage()}
      </main>
    </div>
  );
};

export default Index;
