
import useAppController from './controller/useAppController';
import Footer from './components/Footer';
import Header from './components/Header';
import StatOverlay from './components/StatOverlay';
import HeroSection from './components/HeroSection';
import NftCollectionSection from './components/NftCollectionSection';
import RoadmapSection from './components/RoadmapSection';
import LeagueTable from './components/LeagueTable';


const App = () => {
    // 1. Hook into the Controller/Logic
    const { 
        handleWalletConnect, 
        handleGameStart, 
        statOverlayData,
        leagueData,
        nftData,
        roadmapData,
    } = useAppController();

    return (
        <div className="min-h-screen bg-black text-white antialiased">
            {/* Custom CSS for Aesthetic (Monospace Font & Neon Glow) */}
            <style jsx="true">{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
                
                body {
                    background-color: #000;
                    font-family: 'Space Mono', monospace;
                }
                .font-mono {
                    font-family: 'Space Mono', monospace;
                }
                .neon-title {
                    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff4500, 0 0 30px #ff4500, 0 0 40px #ff4500;
                }
                .neon-title-green {
                     text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #34d399, 0 0 30px #34d399, 0 0 40px #34d399;
                }
                .text-shadow-glow {
                    text-shadow: 0 0 2px #ff4500;
                }
                .text-shadow-glow-red {
                    text-shadow: 0 0 2px #ff4500;
                }
                .text-shadow-glow-green {
                    text-shadow: 0 0 2px #34d399;
                }
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.05);
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s infinite ease-in-out;
                }
                @media (max-width: 640px) {
                    .neon-title {
                        font-size: 2.5rem; 
                    }
                }
            `}</style>
            
            {/* 2. Pass Controller Logic/Handlers to Views */}
            <Header onWalletConnect={handleWalletConnect} />
            <StatOverlay data={statOverlayData} />
            
            <main className="overflow-x-hidden">
                {/* 3. Pass Controller Handlers and Model Data to respective Views */}
                <HeroSection onGameStart={handleGameStart} />
                <NftCollectionSection nftData={nftData} />
                <RoadmapSection roadmapData={roadmapData} />
                <LeagueTable leagueData={leagueData} />
            </main>

            <Footer />
        </div>
    );
};

export default App;
