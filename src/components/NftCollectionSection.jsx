const NftCollectionSection = ({ nftData }) => (
    <section id="collection" className="min-h-screen bg-black py-20 px-4 md:px-16 border-t border-red-500/50">
        <h2 className="text-3xl md:text-5xl font-mono uppercase text-center mb-16 text-white neon-title-green tracking-widest">
            Digital Assets
        </h2>

        <div className="flex justify-center space-x-2 md:space-x-8 mb-12 border-y border-green-600/50 py-4 overflow-x-auto">
            {nftData.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-green-400 font-mono text-xs uppercase tracking-wider whitespace-nowrap px-4 py-1 hover:text-red-500 transition duration-300 cursor-pointer"
                >
                    {item.name}
                </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
            {nftData.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-square p-2 border-2 border-green-600 bg-[#080808] hover:border-red-500 transition duration-300 group shadow-lg shadow-green-900/50"
                >
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900/50">
                        {/* Placeholder SVG Icon */}
                        <svg className="w-1/3 h-1/3 text-gray-600 group-hover:text-red-500 transition duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4zm8.5 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 18.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-.5z" />
                            <path fillRule="evenodd" d="M18.75 9.25a.75.75 0 00-1.5 0v3.5a.75.75 0 00.75.75h3.5a.75.75 0 000-1.5h-2.75v-2.75a.75.75 0 00-.75-.75z" clipRule="evenodd" />
                        </svg>
                        <p className="mt-4 text-xs font-mono uppercase text-green-400 group-hover:text-red-500 text-shadow-glow-green">{item.name}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default NftCollectionSection;