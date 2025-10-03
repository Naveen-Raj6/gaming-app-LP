const HeroSection = ({ onGameStart }) => (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center p-4">
        <WireframeGrid />

        <div className="relative z-10 text-center pt-24">
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-7xl font-mono uppercase tracking-widest mb-6 neon-title text-white"
            >
                Explore NFT Collection
            </motion.h1>

            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-lg font-mono text-green-400 max-w-2xl mx-auto mb-12"
            >
                A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, metaverse-ready, and designed to benefit their holders.
            </motion.p>

            <motion.button
                onClick={onGameStart}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 69, 0, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 text-xl font-mono uppercase tracking-widest border-2 border-red-500 text-red-500 bg-black/50 hover:bg-red-500 hover:text-black transition duration-300 relative overflow-hidden text-shadow-glow-red"
            >
                Start Game
                <span className="absolute inset-0 border-4 border-red-500 opacity-0 animate-pulse-slow pointer-events-none"></span>
            </motion.button>
        </div>
    </section>
);

export default HeroSection;