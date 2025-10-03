const RoadmapSection = ({ roadmapData }) => (
    <section id="roadmap" className="min-h-min bg-[#030303] py-20 px-4 md:px-16 border-t border-green-500/50">
        <h2 className="text-3xl md:text-5xl font-mono uppercase text-center mb-16 text-white neon-title-red tracking-widest">
            Protocol Roadmap
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
            {roadmapData.map((item, index) => {
                let statusColor = 'text-green-400 text-shadow-glow-green'; // PENDING / FUTURE
                if (item.status === 'COMPLETE') {
                    statusColor = 'text-red-500 text-shadow-glow-red';
                } else if (item.status === 'IN PROGRESS') {
                    statusColor = 'text-yellow-400 text-shadow-glow';
                }

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex flex-col md:flex-row p-6 border-2 border-green-600/70 bg-black/50 shadow-xl shadow-green-900/50 rounded-lg transition duration-500 hover:border-red-500/70"
                    >
                        <div className={`font-mono text-xl md:text-2xl font-bold tracking-widest uppercase mb-4 md:mb-0 md:w-1/4 ${item.status === 'COMPLETE' ? 'text-red-500' : 'text-green-400'}`}>
                            {item.title.split(':')[0]}
                        </div>
                        
                        <div className="md:w-3/4 md:pl-8">
                            <p className="text-lg text-white mb-2">{item.description}</p>
                            <div className={`text-xs uppercase font-mono tracking-wider ${statusColor}`}>
                                Status: [{item.status}]
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    </section>
);

export default RoadmapSection;