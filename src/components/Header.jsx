const Header = ({ onWalletConnect }) => (
    <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-8 text-green-400 font-mono text-xs uppercase bg-black/50 backdrop-blur-sm border-b border-green-700/50"
    >
        <div className="text-2xl font-extrabold tracking-widest text-red-500 neon-text-red">EHZ</div>
        <nav className="hidden md:flex space-x-8">
            <a href="#leaderboard" className="hover:text-red-500 transition duration-300">Leaderboard</a>
            <a href="#collection" className="hover:text-red-500 transition duration-300">NFT Collection</a>
            <a href="#roadmap" className="hover:text-red-500 transition duration-300">Roadmap</a>
        </nav>
        <button
            onClick={onWalletConnect}
            className="px-4 py-2 border border-green-400 hover:border-red-500 hover:text-red-500 transition duration-300 text-shadow-glow"
        >
            Connect Wallet
        </button>
    </motion.header>
);

export default Header;