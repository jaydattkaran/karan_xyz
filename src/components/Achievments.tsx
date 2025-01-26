import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Trophy } from 'lucide-react';

const Achievments = () => {
    const achievements = [
        {
            title: "HackerRank Five Star Coder in Java",
            icon: <Trophy className='w-8 h-8' />,
            description: "Achieved 5-star rating in Java programming on HackerRank platform"
        },
        {
            title: "HackerRank Five Star Coder in Java",
            icon: <Trophy className='w-8 h-8' />,
            description: "Achieved 5-star rating in Java programming on HackerRank platform"
        },
        {
            title: "HackerRank Five Star Coder in Java",
            icon: <Trophy className='w-8 h-8' />,
            description: "Achieved 5-star rating in Java programming on HackerRank platform"
        },
        {
            title: "HackerRank Five Star Coder in Java",
            icon: <Trophy className='w-8 h-8' />,
            description: "Achieved 5-star rating in Java programming on HackerRank platform"
        },
        {
            title: "HackerRank Five Star Coder in Java",
            icon: <Trophy className='w-8 h-8' />,
            description: "Achieved 5-star rating in Java programming on HackerRank platform"
        },
        {
            title: "HackerRank Five Star Coder in Java",
            icon: <Trophy className='w-8 h-8' />,
            description: "Achieved 5-star rating in Java programming on HackerRank platform"
        },
    ]



    return (
        <>
            <section id='achievements'
                className='py-50 bg-[#050816] relative overflow-hidden'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent' />

                <div className='max-w-7xl h-full mx-auto px-6 relative'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center'
                    >
                        <p className='text-[#aaa6c3] text-[14px] uppercase tracking-wider'>Recognition</p>
                        <h2 className='text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Achievements & Certifications</h2>
                    </motion.div>

                    <div className="mt-20">
                        <h3 className="text-white text-[24px] font-bold mb-8">Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card hover-card p-6 rounded-xl"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-violet-500/20 text-violet-500">
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-semibold">{achievement.title}</h4>
                                            <p className="text-[#aaa6c3] mt-2">{achievement.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievments