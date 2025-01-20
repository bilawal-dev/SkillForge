"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Award, ArrowRight, Book, Brain } from 'lucide-react';

export function LearningJourney() {
  const [activeSkill, setActiveSkill] = useState('');

  const careerPaths = [
    {
      role: "Data Analytics",
      skills: ["Data Visualization", "Statistical Analysis", "Business Intelligence"],
      color: "from-blue-400/20 to-cyan-500/20"
    },
    {
      role: "Business Development",
      skills: ["Strategic Planning", "Market Analysis", "Client Relations"],
      color: "from-blue-600/20 to-indigo-500/20"
    },
    {
      role: "Digital Marketing",
      skills: ["Content Strategy", "Social Media", "Analytics"],
      color: "from-sky-500/20 to-blue-500/20"
    },
    {
      role: "Project Management",
      skills: ["Agile Methodologies", "Team Leadership", "Risk Management"],
      color: "from-blue-500/20 to-sky-600/20"
    },
    {
      role: "Financial Analysis",
      skills: ["Investment Planning", "Financial Modeling", "Risk Assessment"],
      color: "from-cyan-500/20 to-blue-400/20"
    },
    {
      role: "Healthcare Administration",
      skills: ["Medical Records", "Healthcare Policy", "Patient Care"],
      color: "from-indigo-400/20 to-blue-500/20"
    }
  ];

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#2563eb,transparent)] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Learning Journey, Reimagined
          </motion.h2>
          <p className="text-xl text-foreground/80">Watch as AI transforms your goals into a personalized learning adventure</p>
        </div>

        <div className="relative">
          {/* Floating Icons Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Brain className="w-8 h-8 text-blue-400/40" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/4"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Book className="w-8 h-8 text-blue-500/40" />
            </motion.div>
          </div>

          {/* Interactive Learning Paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div 
                  className={`rounded-lg p-6 backdrop-blur-sm bg-gradient-to-br ${path.color} 
                    border border-blue-200/10 hover:border-blue-400/30 transition-all duration-300
                    transform hover:-translate-y-2 shadow-lg hover:shadow-blue-500/10`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-blue-500/10">
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{path.role}</h3>
                  </div>

                  <div className="space-y-3">
                    {path.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2 cursor-pointer"
                        whileHover={{ x: 10 }}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onMouseLeave={() => setActiveSkill('')}
                      >
                        <ArrowRight className={`w-4 h-4 ${activeSkill === skill ? 'text-blue-500' : 'text-foreground/60'}`} />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-200/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/60">Completion Time</span>
                      <span className="font-medium text-blue-500">3-6 months</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <motion.div 
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-blue-500">
              <Compass className="w-4 h-4" />
              <span>Your journey adapts as you learn</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;