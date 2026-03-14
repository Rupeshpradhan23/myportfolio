import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Target, Award } from 'lucide-react';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const query = `
          query {
            userProfile(username: "rupeshpradhan01") {
              username
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
            }
          }
        `;
        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        const data = await response.json();
        if (data.data && data.data.userProfile) {
          const submitStats = data.data.userProfile.submitStats.acSubmissionNum;
          const statsData = {
            totalSolved: submitStats.reduce((sum, item) => sum + item.count, 0),
            easySolved: submitStats.find(item => item.difficulty === 'Easy')?.count || 0,
            mediumSolved: submitStats.find(item => item.difficulty === 'Medium')?.count || 0,
            hardSolved: submitStats.find(item => item.difficulty === 'Hard')?.count || 0,
            acceptanceRate: 0, // Not available in this API
            totalQuestions: 0, // Not available
            totalEasy: 0,
            totalMedium: 0,
            totalHard: 0,
          };
          setStats(statsData);
        } else {
          throw new Error('User not found or invalid response');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, total, icon: Icon, color }) => {
    const percentage = total ? Math.round((value / total) * 100) : null;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
            <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{value}</div>
            {total && <div className="text-sm text-slate-400">/ {total}</div>}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">{title}</h3>
        {percentage !== null && (
          <>
            <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full ${color} transition-all duration-1000`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="text-sm text-slate-400">{percentage}%</div>
          </>
        )}
      </motion.div>
    );
  };

  if (loading) {
    return (
      <section id="leetcode" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">LeetCode Statistics</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          <div className="text-center text-slate-400">Loading LeetCode stats...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leetcode" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">LeetCode Statistics</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          <div className="text-center text-red-400">Error loading stats: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="leetcode" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">LeetCode Statistics</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My problem-solving journey on LeetCode, showcasing progress across different difficulty levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Solved"
            value={stats.totalSolved}
            icon={Code}
            color="bg-blue-500"
          />
          <StatCard
            title="Easy Solved"
            value={stats.easySolved}
            icon={Target}
            color="bg-green-500"
          />
          <StatCard
            title="Medium Solved"
            value={stats.mediumSolved}
            icon={TrendingUp}
            color="bg-yellow-500"
          />
          <StatCard
            title="Hard Solved"
            value={stats.hardSolved}
            icon={Award}
            color="bg-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;