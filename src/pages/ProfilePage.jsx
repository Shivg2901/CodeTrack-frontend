import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft,
  Trophy,
  Star,
  Settings,
  Code,
  BarChart2,
  Calendar,
  Clock,
  BookOpen,
  Activity,
  Target,
  Shield,
  Users,
  MessageSquare
} from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import AchievementCard from '../components/AchievementCard';

const ProfilePage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Fetch user data
  useEffect(() => {
    // This is a placeholder. In a real app, you'd fetch from your API
    setTimeout(() => {
      setUserData({
        username: username || "codemaster",
        email: `${username || "codemaster"}@example.com`,
        fullName: "John Developer",
        profilePhoto: "/default-avatar.png",
        location: "San Francisco, CA",
        bio: "Competitive programmer and software engineer passionate about algorithms and data structures.",
        codeforcesUsername: "codemaster42",
        leetcodeUsername: "codemaster",
        githubUsername: "codemaster-dev",
        organization: "Tech University",
        joinedDate: "Jan 15, 2023",
        stats: {
          problemsSolved: 328,
          streak: 14,
          contests: 27,
          highestRating: 1842
        },
        recentActivity: [
          { type: 'problem_solved', problem: 'Two Sum', platform: 'LeetCode', date: '2023-05-15T14:32:00Z' },
          { type: 'contest', name: 'Weekly Contest 345', platform: 'LeetCode', rank: 532, date: '2023-05-14T10:00:00Z' },
          { type: 'problem_solved', problem: 'Binary Search', platform: 'CodeForces', date: '2023-05-12T18:45:00Z' },
          { type: 'problem_solved', problem: 'DFS and BFS', platform: 'LeetCode', date: '2023-05-11T12:20:00Z' },
          { type: 'contest', name: 'Round #835', platform: 'CodeForces', rank: 1245, date: '2023-05-09T15:30:00Z' },
        ],
        achievements: [
          {
            id: 1,
            title: "Problem Solver",
            description: "Solve 100 problems across platforms",
            icon: "check",
            completed: true,
            progress: 100,
            totalRequired: 100,
            date: "2023-03-15",
            level: 1
          },
          {
            id: 2,
            title: "Streak Master",
            description: "Maintain a 7-day coding streak",
            icon: "clock",
            completed: true,
            progress: 7,
            totalRequired: 7,
            date: "2023-04-02",
            level: 2
          },
          {
            id: 3,
            title: "Contest Warrior",
            description: "Participate in 25 coding contests",
            icon: "trophy",
            completed: false,
            progress: 20,
            totalRequired: 25,
            level: 3
          },
          {
            id: 4,
            title: "Algorithm Expert",
            description: "Solve problems from 10 different algorithm categories",
            icon: "code",
            completed: false,
            progress: 7,
            totalRequired: 10,
            level: 4
          },
          {
            id: 5,
            title: "Elite Coder",
            description: "Reach 2000 rating on Codeforces",
            icon: "star",
            completed: false,
            progress: 1842,
            totalRequired: 2000,
            level: 5
          }
        ],
        skills: [
          { name: "Dynamic Programming", level: 85 },
          { name: "Graph Algorithms", level: 75 },
          { name: "Data Structures", level: 90 },
          { name: "Greedy Algorithms", level: 80 },
          { name: "String Manipulation", level: 70 },
          { name: "Math", level: 65 },
        ]
      });
      setLoading(false);
    }, 800);
  }, [username]);

  const handleProfileUpdate = (updatedData) => {
    setUserData(updatedData);
    // In a real app, you would save this data to your backend
    console.log("Profile updated:", updatedData);
  };

  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 text-white p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-64 bg-gray-800/50 rounded-xl animate-pulse"></div>
          <div className="mt-8 space-y-4">
            <div className="w-1/3 h-8 bg-gray-800/50 rounded animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-40 bg-gray-800/50 rounded-xl animate-pulse"></div>
              <div className="md:col-span-2 h-40 bg-gray-800/50 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
        
        {/* Profile Card */}
        <ProfileCard 
          userData={userData}
          editable={true}
          onSave={handleProfileUpdate}
          className="mb-8"
        />
        
        {/* Tabs Navigation */}
        <div className="mb-6 border-b border-gray-700/50 flex overflow-x-auto">
          <button 
            className={`py-3 px-4 border-b-2 focus:outline-none whitespace-nowrap ${
              activeTab === 'overview' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => handleTabChange('overview')}
          >
            <Activity size={16} className="inline-block mr-1" />
            Overview
          </button>
          <button 
            className={`py-3 px-4 border-b-2 focus:outline-none whitespace-nowrap ${
              activeTab === 'achievements' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => handleTabChange('achievements')}
          >
            <Trophy size={16} className="inline-block mr-1" />
            Achievements
          </button>
          <button 
            className={`py-3 px-4 border-b-2 focus:outline-none whitespace-nowrap ${
              activeTab === 'activity' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => handleTabChange('activity')}
          >
            <Calendar size={16} className="inline-block mr-1" />
            Activity
          </button>
          <button 
            className={`py-3 px-4 border-b-2 focus:outline-none whitespace-nowrap ${
              activeTab === 'skills' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => handleTabChange('skills')}
          >
            <Target size={16} className="inline-block mr-1" />
            Skills
          </button>
          <button 
            className={`py-3 px-4 border-b-2 focus:outline-none whitespace-nowrap ${
              activeTab === 'settings' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => handleTabChange('settings')}
          >
            <Settings size={16} className="inline-block mr-1" />
            Settings
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="mb-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Recent Achievements */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
                    Recent Achievements
                  </h3>
                  <div className="space-y-3">
                    {userData.achievements.slice(0, 3).map(achievement => (
                      <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                        <div className={`p-2 rounded-lg ${achievement.completed ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                          {achievement.icon === 'check' && <CheckSquare size={18} />}
                          {achievement.icon === 'clock' && <Clock size={18} />}
                          {achievement.icon === 'trophy' && <Trophy size={18} />}
                          {achievement.icon === 'code' && <Code size={18} />}
                          {achievement.icon === 'star' && <Star size={18} />}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-gray-400">{achievement.description}</p>
                        </div>
                        <div className="ml-auto">
                          {achievement.completed ? (
                            <Shield className="h-5 w-5 text-green-400" />
                          ) : (
                            <div className="text-xs text-gray-400">{achievement.progress}/{achievement.totalRequired}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="mt-4 w-full text-center py-2 text-indigo-400 hover:text-indigo-300 text-sm"
                    onClick={() => handleTabChange('achievements')}
                  >
                    View all achievements
                  </button>
                </div>
                
                {/* Top Skills */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-indigo-400" />
                    Top Skills
                  </h3>
                  <div className="space-y-4">
                    {userData.skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="mt-4 w-full text-center py-2 text-indigo-400 hover:text-indigo-300 text-sm"
                    onClick={() => handleTabChange('skills')}
                  >
                    View all skills
                  </button>
                </div>
              </div>
              
              {/* Right Column (wider) */}
              <div className="md:col-span-2 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl border border-blue-500/20 p-4 transition-all hover:border-blue-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-400 text-xs">Solved</h4>
                      <Code className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold">{userData.stats.problemsSolved}</div>
                    <div className="text-xs text-green-400 mt-1">+12 this week</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl border border-purple-500/20 p-4 transition-all hover:border-purple-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-400 text-xs">Rating</h4>
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold">{userData.stats.highestRating}</div>
                    <div className="text-xs text-green-400 mt-1">+53 last contest</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl border border-green-500/20 p-4 transition-all hover:border-green-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-400 text-xs">Streak</h4>
                      <Activity className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold">{userData.stats.streak}</div>
                    <div className="text-xs text-blue-400 mt-1">days</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl border border-yellow-500/20 p-4 transition-all hover:border-yellow-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-400 text-xs">Contests</h4>
                      <Trophy className="h-4 w-4 text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold">{userData.stats.contests}</div>
                    <div className="text-xs text-blue-400 mt-1">participated</div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-400" />
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {userData.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                        <div className={`p-2 rounded-lg ${activity.type === 'problem_solved' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                          {activity.type === 'problem_solved' ? <Code size={18} /> : <Trophy size={18} />}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">
                            {activity.type === 'problem_solved' ? 
                              `Solved: ${activity.problem}` : 
                              `Contest: ${activity.name}`
                            }
                          </h4>
                          <p className="text-xs text-gray-400 flex items-center">
                            <span className="mr-2">{activity.platform}</span>
                            {activity.type === 'contest' && (
                              <span className="text-yellow-400">Rank: #{activity.rank}</span>
                            )}
                          </p>
                        </div>
                        <div className="ml-auto text-xs text-gray-400">
                          {new Date(activity.date).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="mt-4 w-full text-center py-2 text-indigo-400 hover:text-indigo-300 text-sm"
                    onClick={() => handleTabChange('activity')}
                  >
                    View all activity
                  </button>
                </div>
                
                {/* Recommendations */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-purple-400" />
                    Recommended for You
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg border border-indigo-500/20 p-4 transition-all hover:border-indigo-500/40">
                      <div className="flex items-center justify-between mb-2">
                        <BarChart2 className="h-5 w-5 text-indigo-400" />
                        <span className="text-xs bg-indigo-900/50 text-indigo-400 px-2 py-0.5 rounded">Graph Algorithms</span>
                      </div>
                      <h4 className="font-medium mb-1">Improve your DFS skills</h4>
                      <p className="text-xs text-gray-400 mb-3">Practice more graph traversal problems to strengthen your skills</p>
                      <Link to="/cp-sheets" className="text-xs text-indigo-400 hover:underline">View recommended problems</Link>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg border border-purple-500/20 p-4 transition-all hover:border-purple-500/40">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="h-5 w-5 text-purple-400" />
                        <span className="text-xs bg-purple-900/50 text-purple-400 px-2 py-0.5 rounded">Community</span>
                      </div>
                      <h4 className="font-medium mb-1">Join a Contest</h4>
                      <p className="text-xs text-gray-400 mb-3">Upcoming Codeforces Round #845 starts in 2 days</p>
                      <a href="https://codeforces.com/contests" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:underline">Register now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userData.achievements.map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
          )}
          
          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Activity History</h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg overflow-hidden">
                <div className="p-4">
                  {/* Calendar heatmap would go here in a real implementation */}
                  <div className="h-40 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Activity calendar visualization would be displayed here</p>
                  </div>
                </div>
                <div className="border-t border-gray-700/50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-3">Detailed Activity</h3>
                    <div className="space-y-4">
                      {[...userData.recentActivity, ...userData.recentActivity].map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg">
                          <div className={`p-2 rounded-lg ${activity.type === 'problem_solved' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'} mt-1`}>
                            {activity.type === 'problem_solved' ? <Code size={18} /> : <Trophy size={18} />}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">
                                {activity.type === 'problem_solved' ? 
                                  `Solved problem: ${activity.problem}` : 
                                  `Participated in contest: ${activity.name}`
                                }
                              </h4>
                              <span className="text-xs text-gray-400">
                                {new Date(activity.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400 flex items-center mt-1">
                              <span className="mr-2">Platform: {activity.platform}</span>
                              {activity.type === 'contest' && (
                                <span className="text-yellow-400">Rank: #{activity.rank}</span>
                              )}
                            </p>
                            {activity.type === 'problem_solved' && (
                              <div className="mt-2 flex gap-2">
                                <a href="#" className="text-xs bg-gray-800 text-blue-400 hover:bg-gray-700 px-2 py-1 rounded transition-colors">
                                  View Problem
                                </a>
                                <a href="#" className="text-xs bg-gray-800 text-green-400 hover:bg-gray-700 px-2 py-1 rounded transition-colors">
                                  View Solution
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Your Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4">Skill Proficiency</h3>
                  <div className="space-y-4">
                    {userData.skills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4">Suggested Practice Areas</h3>
                  <div className="space-y-3">
                    {userData.skills
                      .sort((a, b) => a.level - b.level)
                      .slice(0, 3)
                      .map((skill, index) => (
                        <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium flex items-center">
                              <Target className="h-4 w-4 mr-2 text-blue-400" />
                              {skill.name}
                            </h4>
                            <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-0.5 rounded">
                              {skill.level}% proficiency
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mb-3">
                            Improve your {skill.name.toLowerCase()} skills to boost your overall performance.
                          </p>
                          <Link to="/cp-sheets" className="text-xs bg-indigo-600/40 hover:bg-indigo-600/60 text-white px-3 py-1.5 rounded-md transition-colors inline-flex items-center">
                            <BookOpen className="h-3 w-3 mr-1" />
                            Practice problems
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Settings */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Update your profile information, connect platforms, and manage your privacy settings.
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors">
                    Edit Profile
                  </button>
                </div>
                
                {/* Notification Settings */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Configure your notification preferences for contests, achievements, and updates.
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors">
                    Manage Notifications
                  </button>
                </div>
                
                {/* Account Security */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4">Account Security</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Change your password, enable two-factor authentication, and review login activity.
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors">
                    Security Settings
                  </button>
                </div>
                
                {/* Feedback and Support */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4">Feedback & Support</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    We value your feedback! Let us know how we can improve CodeTrack.
                  </p>
                  <a 
                    href="https://forms.gle/XqQ8CFTPYECdVLZ17" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Feedback
                  </a>
                </div>
                
                {/* Danger Zone */}
                <div className="md:col-span-2 bg-red-900/20 backdrop-blur-sm rounded-xl border border-red-700/30 shadow-lg p-5">
                  <h3 className="text-lg font-semibold mb-4 text-red-400">Danger Zone</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    These actions cannot be undone. Please proceed with caution.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Export Data
                    </button>
                    <button className="bg-red-600/40 hover:bg-red-600/60 text-white px-4 py-2 rounded-lg transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
