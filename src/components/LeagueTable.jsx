const LeagueTable = ({ leagueData }) => (
    <section id="leaderboard" className="min-h-min bg-[#030303] py-20 px-4 md:px-16 border-t border-green-500/50">
        <div className="max-w-4xl mx-auto border-4 border-green-600 p-4 md:p-8 shadow-2xl shadow-green-900/70">
            <h2 className="text-3xl md:text-5xl font-mono uppercase text-center mb-8 text-white neon-title-red tracking-widest">
                The League
            </h2>

            <div className="space-y-0.5">
                {leagueData.map((team, index) => (
                    <motion.div
                        key={team.rank}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex items-center justify-between p-3 font-mono text-sm md:text-lg uppercase ${index % 2 === 0 ? 'bg-black/50' : 'bg-black/30'} border-b border-red-500/30 hover:bg-[#101010] transition duration-300`}
                    >
                        {/* Team Info */}
                        <div className="flex items-center space-x-4">
                            <span className="text-xl md:text-2xl">{team.logo}</span>
                            <span className="text-green-400 hover:text-red-500 text-shadow-glow-green">{team.team}</span>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center space-x-4 text-xs md:text-sm text-white">
                            <span className="w-8 text-right text-red-500">{team.score}</span>
                            <div className="flex items-center space-x-1 w-16">
                                <span className="text-base">💀</span>
                                <span className="text-green-400">{team.currency}</span>
                            </div>
                            <span className="text-red-500 w-12 text-right">SOL</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default LeagueTable;
