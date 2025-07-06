import React from 'react';
import { Trophy, Award, Star, Clock, Code, Target, CheckSquare, Zap } from 'lucide-react';

const AchievementCard = ({ achievement, className = "" }) => {
  const {
    id,
    title,
    description,
    icon,
    completed = false,
    progress = 0,
    totalRequired = 0,
    date = null,
    level = 1
  } = achievement;

  // Map icon string to component
  const getIcon = () => {
    switch(icon) {
      case 'trophy': return <Trophy size={20} />;
      case 'award': return <Award size={20} />;
      case 'star': return <Star size={20} />;
      case 'clock': return <Clock size={20} />;
      case 'code': return <Code size={20} />;
      case 'target': return <Target size={20} />;
      case 'check': return <CheckSquare size={20} />;
      case 'zap': return <Zap size={20} />;
      default: return <Award size={20} />;
    }
  };

  // Calculate badge color based on level
  const getBadgeColor = () => {
    switch(level) {
      case 1: return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 2: return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 3: return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      case 4: return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
      case 5: return 'bg-red-600/20 text-red-400 border-red-600/30';
      default: return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
    }
  };

  // Calculate completion percentage
  const completionPercentage = Math.min(Math.round((progress / totalRequired) * 100), 100);

  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border ${completed ? 'border-green-500/30 shadow-green-900/10' : 'border-gray-700/50'} shadow-lg overflow-hidden transition-all duration-300 ${className}`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className={`p-3 rounded-lg ${getBadgeColor()} flex-shrink-0`}>
            {getIcon()}
          </div>
          
          {/* Content */}
          <div className="flex-1">
            {/* Level badge */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-white">{title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getBadgeColor()}`}>
                Level {level}
              </span>
            </div>
            
            <p className="text-sm text-gray-400 mb-2">{description}</p>
            
            {/* Progress */}
            {!completed && totalRequired > 0 && (
              <div className="mb-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-gray-400">{progress}/{totalRequired}</span>
                </div>
                <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      completionPercentage < 30 ? 'bg-blue-500' : 
                      completionPercentage < 70 ? 'bg-yellow-500' : 
                      'bg-green-500'
                    }`} 
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Completion status */}
            <div className="flex items-center justify-between mt-2 text-xs">
              {completed ? (
                <span className="text-green-400 flex items-center gap-1">
                  <CheckSquare size={14} />
                  Completed {date && `on ${new Date(date).toLocaleDateString()}`}
                </span>
              ) : (
                <span className="text-yellow-400 flex items-center gap-1">
                  <Clock size={14} />
                  In progress
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
