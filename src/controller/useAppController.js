import { useState, useEffect, useMemo } from 'react';
import { LEAGUE_DATA, NFT_DATA, ROADMAP_DATA } from '../model/data';

const useAppController = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (d) => d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
    const formatTime = (d) => d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const handleWalletConnect = () => {
        console.log("Controller: Connecting Wallet Protocol Initiated...");
    };

    const handleGameStart = () => {
        console.log("Controller: Game Launch Sequence Initiated...");
    };

    const statOverlayData = useMemo(() => [
        { position: 'top-left', content: [{ label: 'DGP', value: '1907 x 979' }, { label: 'FPS', value: '61.90' }], delay: 1.0 },
        { position: 'top-right', content: [{ label: 'DATE', value: formatDate(time) }, { label: 'TIME', value: formatTime(time) }], delay: 1.2 },
        { position: 'bottom-left', content: [{ label: 'EVO.Alpha', value: 'VERS 2.06.84' }, { label: 'STATUS', value: 'ONLINE' }], delay: 1.4 },
        { position: 'bottom-right', content: [{ label: 'LOG', value: '74.506' }, { label: 'SYS', value: 'WIN NT Chrome/138.0.0.0' }], delay: 1.6 },
    ], [time]);

    return {
        handleWalletConnect,
        handleGameStart,
        statOverlayData,
        leagueData: LEAGUE_DATA,
        nftData: NFT_DATA,
        roadmapData: ROADMAP_DATA,
    };
};

export default useAppController;
