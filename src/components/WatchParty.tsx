
import { useState } from "react";
import { Users, Play, Video, Clock, UserPlus } from "lucide-react";

export const WatchParty = () => {
  const [activeTab, setActiveTab] = useState<'join' | 'create'>('join');
  const [roomCode, setRoomCode] = useState('');
  const [roomName, setRoomName] = useState('');

  const activeParties = [
    {
      id: 1,
      name: "Movie Night with Friends",
      host: "Sarah",
      content: "The Batman (2022)",
      participants: 4,
      status: "watching",
      timeRemaining: "1h 45m",
    },
    {
      id: 2,
      name: "Stranger Things Marathon",
      host: "Mike",
      content: "Stranger Things S4E7",
      participants: 6,
      status: "paused",
      timeRemaining: "25m",
    },
    {
      id: 3,
      name: "Comedy Hour",
      host: "Alex",
      content: "The Office S3E12",
      participants: 3,
      status: "waiting",
      timeRemaining: "22m",
    },
  ];

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      console.log(`Created room "${roomName}" with code: ${newCode}`);
      // Here you would typically create the room and navigate to it
    }
  };

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      console.log(`Joining room with code: ${roomCode}`);
      // Here you would typically join the room
    }
  };

  return (
    <div className="h-screen overflow-y-auto p-12">
      <h1 className="text-4xl font-bold mb-12">Watch Party</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('join')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'join'
              ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Join Party
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'create'
              ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Create Party
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Join/Create */}
        <div className="space-y-8">
          {activeTab === 'join' ? (
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <UserPlus className="w-6 h-6 mr-3 text-orange-400" />
                Join a Watch Party
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Room Code</label>
                  <input
                    type="text"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    placeholder="Enter 6-digit code"
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    maxLength={6}
                  />
                </div>
                <button
                  onClick={handleJoinRoom}
                  disabled={roomCode.length !== 6}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join Party
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-orange-400" />
                Create a Watch Party
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Party Name</label>
                  <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter party name"
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleCreateRoom}
                  disabled={!roomName.trim()}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Party
                </button>
              </div>
            </div>
          )}

          {/* How it Works */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">How Watch Party Works</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <p>Create or join a watch party room</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <p>Choose content to watch together</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <p>Watch in sync with friends and chat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Active Parties */}
        <div className="bg-gray-800/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Active Watch Parties</h2>
          <div className="space-y-4">
            {activeParties.map((party) => (
              <div key={party.id} className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{party.name}</h3>
                    <p className="text-gray-400">Hosted by {party.host}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{party.participants}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <Video className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-medium">{party.content}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{party.timeRemaining} left</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      party.status === 'watching' ? 'bg-green-500/20 text-green-400' :
                      party.status === 'paused' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {party.status}
                    </span>
                    
                    <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                      <Play className="w-4 h-4" />
                      <span>Join</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
