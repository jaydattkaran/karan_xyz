import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Server, Code, Braces, Laptop, GitBranch, Users, Figma } from 'lucide-react';


const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "React.js", level: 90, icon: <Braces className="w-4 h-4" /> },
        { name: "JavaScript", level: 85, icon: <Code className="w-4 h-4" /> },
        { name: "HTML/CSS", level: 90, icon: <Laptop className="w-4 h-4" /> },
        { name: "Tailwind CSS", level: 85, icon: <Code className="w-4 h-4" /> },
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      items: [
        { name: "Node.js", level: 85, icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", level: 80, icon: <Code className="w-4 h-4" /> },
        { name: "WebSockets", level: 75, icon: <Code className="w-4 h-4" /> },
        { name: "REST APIs", level: 85, icon: <Braces className="w-4 h-4" /> },
      ]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      items: [
        { name: "MongoDB", level: 85, icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", level: 80, icon: <Database className="w-4 h-4" /> },
        { name: "AWS", level: 70, icon: <Server className="w-4 h-4" /> },
      ]
    },
    {
      category: "Other",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "Git", level: 85, icon: <GitBranch className="w-4 h-4" /> },
        { name: "Figma", level: 85, icon: <Figma className="w-4 h-4" /> },
        { name: "Team Leadership", level: 80, icon: <Users className="w-4 h-4" /> },
        { name: "Problem Solving", level: 90, icon: <Code className="w-4 h-4" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#050816] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#aaa6c3] text-[14px] uppercase tracking-wider">My abilities</p>
          <h2 className="text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills.</h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              className="glass-card hover-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${skillGroup.color} text-white`}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="text-white text-[24px] font-bold">{skillGroup.category}</h3>
              </div>

              <div className="grid gap-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skillGroup.color} text-white opacity-75`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-[#aaa6ce] text-sm">{skill.level}%</span>
                        </div>
                        <div className="mt-2 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl group-hover:opacity-75 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
