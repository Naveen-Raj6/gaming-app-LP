const StatOverlay = ({ data }) => (
    <>
        {data.map((stat, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className={`fixed z-40 p-4 md:p-8 text-green-400 font-mono text-[10px] uppercase pointer-events-none ${stat.position}`}
            >
                {stat.content.map((item, i) => (
                    <div key={i} className="mb-1 text-shadow-glow-green">
                        <span className="opacity-70">{item.label}:</span> <span className="text-red-500">{item.value}</span>
                    </div>
                ))}
                {/* Corner Brackets - Replicating the HUD feel */}
                <div className="absolute inset-0 border-2 border-green-600 mix-blend-screen opacity-50">
                    <div className="w-4 h-4 absolute top-0 left-0 border-t-2 border-l-2 border-green-400" />
                    <div className="w-4 h-4 absolute top-0 right-0 border-t-2 border-r-2 border-green-400" />
                    <div className="w-4 h-4 absolute bottom-0 left-0 border-b-2 border-l-2 border-green-400" />
                    <div className="w-4 h-4 absolute bottom-0 right-0 border-b-2 border-r-2 border-green-400" />
                </div>
            </motion.div>
        ))}
    </>
);

export default StatOverlay;