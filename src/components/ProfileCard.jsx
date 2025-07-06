import React, { useState } from 'react';
import { 
  User, 
  Edit2, 
  Award, 
  Code, 
  Clock, 
  Calendar, 
  GitHub, 
  ExternalLink,
  MapPin, 
  Mail,
  Briefcase,
  BookOpen,
  Save,
  X,
  Check,
  Upload,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ 
  userData = {}, 
  editable = false, 
  onSave = () => {},
  className = ""
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...userData });
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'success', 'error', null
  const fileInputRef = React.useRef();
  
  const {
    username = "CodeTrack User",
    email = "",
    fullName = "",
    profilePhoto = "/default-avatar.png",
    location = "",
    bio = "No bio provided",
    codeforcesUsername = "",
    leetcodeUsername = "",
    githubUsername = "",
    organization = "",
    joinedDate = new Date().toLocaleDateString(),
    stats = {
      problemsSolved: 0,
      streak: 0,
      contests: 0,
      highestRating: 0
    }
  } = userData;

  const handleEditToggle = () => {
    if (isEditing) {
      setEditedUser({ ...userData });
      setSaveStatus(null);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [name]: parseInt(value) || 0
      }
    }));
  };

  const handleSave = async () => {
    try {
      await onSave(editedUser);
      setSaveStatus('success');
      setTimeout(() => {
        setIsEditing(false);
        setSaveStatus(null);
      }, 1500);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadingPhoto(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setEditedUser(prev => ({
            ...prev,
            profilePhoto: event.target.result
          }));
          setUploadingPhoto(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-indigo-900/10 ${className}`}>
      {/* Profile Header with animated gradient border */}
      <div className="relative">
        {/* Background banner with animation */}
        <div className="h-24 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-blue-600/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/60 via-purple-500/60 to-blue-500/60"></div>
        </div>
        
        {/* Avatar with upload functionality */}
        <div className="absolute left-6 transform -translate-y-1/2" style={{ top: "6rem" }}>
          <div className="relative group">
            <div className="w-20 h-20 rounded-full border-4 border-gray-800 overflow-hidden bg-gray-700 flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
              {profilePhoto ? (
                <img 
                  src={editedUser.profilePhoto || profilePhoto} 
                  alt={username} 
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.src = "/default-avatar.png"}}
                />
              ) : (
                <User size={36} className="text-gray-400" />
              )}
              
              {/* Upload overlay when editing */}
              {isEditing && (
                <div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={triggerFileInput}
                >
                  {uploadingPhoto ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Camera size={20} className="text-white" />
                  )}
                </div>
              )}
            </div>
            
            {/* Hidden file input */}
            <input 
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Edit button with animation */}
        {editable && (
          <div className="absolute top-4 right-4">
            <button
              onClick={handleEditToggle}
              className={`p-2 rounded-full transition-all transform hover:scale-105 ${
                isEditing 
                  ? 'bg-red-500 hover:bg-red-600 shadow-red-500/20' 
                  : 'bg-indigo-500 hover:bg-indigo-600 shadow-indigo-500/20'
              } text-white shadow-lg`}
              aria-label={isEditing ? "Cancel editing" : "Edit profile"}
            >
              {isEditing ? <X size={16} /> : <Edit2 size={16} />}
            </button>
          </div>
        )}
      </div>
      
      {/* Profile Content */}
      <div className="pt-12 px-6 pb-6">
        {/* Basic info section */}
        <div className="mb-6">
          {isEditing ? (
            <div className="space-y-3 animate-fade-in">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Username</label>
                <input
                  type="text"
                  name="username"
                  value={editedUser.username || ''}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/60 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Username"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={editedUser.fullName || ''}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/60 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Bio</label>
                <textarea
                  name="bio"
                  value={editedUser.bio || ''}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/60 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 min-h-[80px] resize-none"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {fullName || username}
                {stats.highestRating > 1800 && (
                  <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs bg-yellow-900/30 text-yellow-400 border border-yellow-800/30">
                    <Star size={10} className="mr-1" /> Expert
                  </div>
                )}
              </h2>
              {fullName && <p className="text-indigo-300 text-sm mb-1">@{username}</p>}
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{bio}</p>
            </div>
          )}
        </div>
        
        {/* Details grid with hover effects */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm group transition-all p-1 -ml-1 rounded hover:bg-gray-700/30">
            <div className="p-1.5 bg-gray-700/60 rounded-lg text-indigo-400 group-hover:bg-indigo-900/40 transition-colors">
              <MapPin size={14} />
            </div>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editedUser.location || ''}
                onChange={handleInputChange}
                className="flex-1 bg-gray-700/60 text-white px-3 py-1 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                placeholder="Location"
              />
            ) : (
              <span className="text-gray-300">{location || "Not specified"}</span>
            )}
          </div>
          
          {/* Email */}
          <div className="flex items-center gap-2 text-sm group transition-all p-1 -ml-1 rounded hover:bg-gray-700/30">
            <div className="p-1.5 bg-gray-700/60 rounded-lg text-indigo-400 group-hover:bg-indigo-900/40 transition-colors">
              <Mail size={14} />
            </div>
            <span className="text-gray-300">{email}</span>
          </div>
          
          {/* Organization */}
          <div className="flex items-center gap-2 text-sm group transition-all p-1 -ml-1 rounded hover:bg-gray-700/30">
            <div className="p-1.5 bg-gray-700/60 rounded-lg text-indigo-400 group-hover:bg-indigo-900/40 transition-colors">
              <Briefcase size={14} />
            </div>
            {isEditing ? (
              <input
                type="text"
                name="organization"
                value={editedUser.organization || ''}
                onChange={handleInputChange}
                className="flex-1 bg-gray-700/60 text-white px-3 py-1 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                placeholder="Organization"
              />
            ) : (
              <span className="text-gray-300">{organization || "Not specified"}</span>
            )}
          </div>
          
          {/* Joined date */}
          <div className="flex items-center gap-2 text-sm group transition-all p-1 -ml-1 rounded hover:bg-gray-700/30">
            <div className="p-1.5 bg-gray-700/60 rounded-lg text-indigo-400 group-hover:bg-indigo-900/40 transition-colors">
              <Calendar size={14} />
            </div>
            <span className="text-gray-300">Joined {joinedDate}</span>
          </div>
        </div>
        
        {/* Connected platforms with improved styling */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-1.5">
            <Code size={14} className="text-indigo-400" />
            Connected Platforms
          </h3>
          <div className="space-y-3 mt-3">
            {/* Codeforces */}
            <div className="bg-gray-800/60 rounded-lg p-3 border border-gray-700/50 hover:border-indigo-700/30 transition-colors group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-red-900/20 rounded-lg text-red-400">
                  <Code size={14} />
                </div>
                <span className="text-sm font-medium">Codeforces</span>
              </div>
              
              {isEditing ? (
                <div className="mt-2">
                  <input
                    type="text"
                    name="codeforcesUsername"
                    value={editedUser.codeforcesUsername || ''}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/60 text-white px-3 py-1.5 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all duration-200"
                    placeholder="Codeforces Username"
                  />
                </div>
              ) : (
                <div className="mt-2">
                  {codeforcesUsername ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 text-sm">@{codeforcesUsername}</span>
                      <a 
                        href={`https://codeforces.com/profile/${codeforcesUsername}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1 ml-auto"
                      >
                        <ExternalLink size={12} />
                        View profile
                      </a>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">Not connected</span>
                  )}
                </div>
              )}
            </div>
            
            {/* LeetCode */}
            <div className="bg-gray-800/60 rounded-lg p-3 border border-gray-700/50 hover:border-yellow-700/30 transition-colors group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-yellow-900/20 rounded-lg text-yellow-400">
                  <BookOpen size={14} />
                </div>
                <span className="text-sm font-medium">LeetCode</span>
              </div>
              
              {isEditing ? (
                <div className="mt-2">
                  <input
                    type="text"
                    name="leetcodeUsername"
                    value={editedUser.leetcodeUsername || ''}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/60 text-white px-3 py-1.5 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all duration-200"
                    placeholder="LeetCode Username"
                  />
                </div>
              ) : (
                <div className="mt-2">
                  {leetcodeUsername ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 text-sm">@{leetcodeUsername}</span>
                      <a 
                        href={`https://leetcode.com/${leetcodeUsername}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1 ml-auto"
                      >
                        <ExternalLink size={12} />
                        View profile
                      </a>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">Not connected</span>
                  )}
                </div>
              )}
            </div>
            
            {/* GitHub */}
            <div className="bg-gray-800/60 rounded-lg p-3 border border-gray-700/50 hover:border-purple-700/30 transition-colors group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-purple-900/20 rounded-lg text-purple-400">
                  <GitHub size={14} />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </div>
              
              {isEditing ? (
                <div className="mt-2">
                  <input
                    type="text"
                    name="githubUsername"
                    value={editedUser.githubUsername || ''}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/60 text-white px-3 py-1.5 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all duration-200"
                    placeholder="GitHub Username"
                  />
                </div>
              ) : (
                <div className="mt-2">
                  {githubUsername ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 text-sm">@{githubUsername}</span>
                      <a 
                        href={`https://github.com/${githubUsername}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1 ml-auto"
                      >
                        <ExternalLink size={12} />
                        View profile
                      </a>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">Not connected</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Statistics with animated counters */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-1.5">
            <Award size={14} className="text-indigo-400" />
            Statistics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-indigo-900/20 rounded-lg p-3 text-center border border-indigo-800/30 hover:border-indigo-700/40 transition-colors">
              <div className="text-xl font-bold text-white">
                {isEditing ? (
                  <input
                    type="number"
                    name="problemsSolved"
                    value={editedUser.stats?.problemsSolved || 0}
                    onChange={handleStatChange}
                    className="w-full bg-gray-700/60 text-white text-center px-2 py-1 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                ) : (
                  <span className="animate-value">{stats.problemsSolved}</span>
                )}
              </div>
              <div className="text-xs text-indigo-300 mt-1">Problems Solved</div>
            </div>
            
            <div className="bg-green-900/20 rounded-lg p-3 text-center border border-green-800/30 hover:border-green-700/40 transition-colors">
              <div className="text-xl font-bold text-white">
                {isEditing ? (
                  <input
                    type="number"
                    name="streak"
                    value={editedUser.stats?.streak || 0}
                    onChange={handleStatChange}
                    className="w-full bg-gray-700/60 text-white text-center px-2 py-1 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                ) : (
                  <span className="animate-value">{stats.streak}</span>
                )}
              </div>
              <div className="text-xs text-green-300 mt-1">Day Streak</div>
            </div>
            
            <div className="bg-purple-900/20 rounded-lg p-3 text-center border border-purple-800/30 hover:border-purple-700/40 transition-colors">
              <div className="text-xl font-bold text-white">
                {isEditing ? (
                  <input
                    type="number"
                    name="contests"
                    value={editedUser.stats?.contests || 0}
                    onChange={handleStatChange}
                    className="w-full bg-gray-700/60 text-white text-center px-2 py-1 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                ) : (
                  <span className="animate-value">{stats.contests}</span>
                )}
              </div>
              <div className="text-xs text-purple-300 mt-1">Contests</div>
            </div>
            
            <div className="bg-yellow-900/20 rounded-lg p-3 text-center border border-yellow-800/30 hover:border-yellow-700/40 transition-colors">
              <div className="text-xl font-bold text-white">
                {isEditing ? (
                  <input
                    type="number"
                    name="highestRating"
                    value={editedUser.stats?.highestRating || 0}
                    onChange={handleStatChange}
                    className="w-full bg-gray-700/60 text-white text-center px-2 py-1 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  />
                ) : (
                  <span className="animate-value">{stats.highestRating}</span>
                )}
              </div>
              <div className="text-xs text-yellow-300 mt-1">Highest Rating</div>
            </div>
          </div>
        </div>
        
        {/* Save Button (when editing) with status feedback */}
        {isEditing && (
          <div className="mt-6 flex justify-end space-x-3 items-center">
            {saveStatus === 'success' && (
              <div className="flex items-center gap-1.5 text-green-400 text-sm animate-fade-in">
                <Check size={16} />
                <span>Changes saved</span>
              </div>
            )}
            
            {saveStatus === 'error' && (
              <div className="flex items-center gap-1.5 text-red-400 text-sm animate-fade-in">
                <X size={16} />
                <span>Error saving changes</span>
              </div>
            )}
            
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saveStatus === 'success'}
              className={`px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white flex items-center gap-2 transition-colors ${
                saveStatus === 'success' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {saveStatus === 'success' ? (
                <>
                  <Check size={16} />
                  Saved
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes countUp {
          from { content: "0"; }
          to { content: attr(data-value); }
        }
        
        .animate-value {
          position: relative;
        }
        
        .animate-value::before {
          content: attr(data-value);
          animation: countUp 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
