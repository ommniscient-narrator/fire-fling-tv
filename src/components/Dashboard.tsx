
import { Clock, TrendingUp, Calendar, Award } from "lucide-react";

export const Dashboard = () => {
  const stats = {
    totalWatchTime: "127 hours",
    currentStreak: "15 days",
    longestStreak: "42 days",
    showsWatched: 28,
    moviesWatched: 156,
  };

  const genreData = [
    { genre: "Action", percentage: 35, hours: "45h 30m" },
    { genre: "Drama", percentage: 28, hours: "35h 45m" },
    { genre: "Comedy", percentage: 20, hours: "25h 15m" },
    { genre: "Sci-Fi", percentage: 12, hours: "15h 20m" },
    { genre: "Horror", percentage: 5, hours: "6h 10m" },
  ];

  const recentActivity = [
    { title: "Stranger Things S4E8", time: "2 hours ago", duration: "85 min" },
    { title: "The Batman", time: "Yesterday", duration: "176 min" },
    { title: "Breaking Bad S5E16", time: "3 days ago", duration: "47 min" },
    { title: "Top Gun: Maverick", time: "1 week ago", duration: "131 min" },
  ];

  return (
    <div className="h-screen overflow-y-auto p-12">
      <h1 className="text-4xl font-bold mb-12">Your Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-blue-400">{stats.totalWatchTime}</span>
          </div>
          <h3 className="text-lg font-semibold">Total Watch Time</h3>
          <p className="text-gray-400">This month</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-green-400">{stats.currentStreak}</span>
          </div>
          <h3 className="text-lg font-semibold">Current Streak</h3>
          <p className="text-gray-400">Keep it up!</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-orange-400" />
            <span className="text-2xl font-bold text-orange-400">{stats.longestStreak}</span>
          </div>
          <h3 className="text-lg font-semibold">Longest Streak</h3>
          <p className="text-gray-400">Personal best</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-purple-400">{stats.showsWatched + stats.moviesWatched}</span>
          </div>
          <h3 className="text-lg font-semibold">Content Watched</h3>
          <p className="text-gray-400">{stats.showsWatched} shows, {stats.moviesWatched} movies</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Most Watched Genres */}
        <div className="bg-gray-800/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Most Watched Genres</h2>
          <div className="space-y-4">
            {genreData.map((item, index) => (
              <div key={item.genre} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.genre}</span>
                  <span className="text-gray-400">{item.hours}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-400">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <div>
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-300">{activity.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
