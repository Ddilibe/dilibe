const PokerAI = () => {
    function PokerHeader() {
        return (
            <div className="pokerheader">
                <h1>AI Poker Game with Monte Carlo CFR</h1>
                <p>A sophisticated poker AI implementation using Monte Carlo Counterfactual Regret Minimization</p>
            </div>
        )
    };

    function PokerContainer() {
        return (
            <div className="pokercontainer">
                <PokerOverview />
                <PokerFeatures />
                <PokerCate />
            </div>
        )
    }

    function PokerOverview() {
        return (
            <div className="pokerproject-overview">
                <div>
                    <h2>Project Overview</h2>
                    <p>
                        This project implements a heads-up (two-player) Texas Hold'em poker game featuring an AI opponent
                        trained using Monte Carlo Counterfactual Regret Minimization (MCCFR). The AI learns optimal strategies
                        through self-play and provides a challenging opponent for human players.
                    </p>
                    <div className="pokerbuttons">
                        <a href="https://github.com/yourusername/pockergame" className="pokerbutton">View on GitHub</a>
                        <a href="#demo" className="pokerbutton">Live Demo</a>
                    </div>
                </div>
                <div className="pokertech-stack">
                    <h3>Technology Stack</h3>
                    <div>
                        <span className="pokertag">Python 3.8+</span>
                        <span className="pokertag">NumPy</span>
                        <span className="pokertag">Monte Carlo CFR</span>
                        <span className="pokertag">CLI</span>
                        <span className="pokertag">Unit Testing</span>
                        <span className="pokertag">Git</span>
                    </div>
                </div>
            </div>
        )
    }

    function PokerFeatures() {
        return (
            <div className="projects-grid">
                <div className="pokerfeature-card">
                    <h3>🎮 Game Engine</h3>
                    <ul>
                        <li>Standard poker hand rankings</li>
                        <li>Complete betting system</li>
                        <li>Blind structure</li>
                        <li>Hand evaluation</li>
                    </ul>
                </div>
                <div className="pokerfeature-card">
                    <h3>🤖 AI System</h3>
                    <ul>
                        <li>Monte Carlo CFR implementation</li>
                        <li>Strategy computation</li>
                        <li>Self-play training</li>
                        <li>Progressive learning</li>
                    </ul>
                </div>
                <div className="pokerfeature-card">
                    <h3>👥 User Interface</h3>
                    <ul>
                        <li>Interactive CLI</li>
                        <li>Colored card display</li>
                        <li>Game state visualization</li>
                        <li>Training progress tracking</li>
                    </ul>
                </div>
            </div>
        )
    }

    function PokerCate() {
        return (
            <div className="pokercontainer">
                <h2 className="section-title">Technical Challenges</h2>
                <div className="pokerfeature-card">
                    <h3>Solved Problems</h3>
                    <ul>
                        <li>Efficient information state representation for large game trees</li>
                        <li>Strategy computation and normalization in Monte Carlo sampling</li>
                        <li>Memory management for long training sessions</li>
                        <li>Real-time strategy application during gameplay</li>
                    </ul>
                </div>

                <h2 className="section-title">Development Process</h2>
                <div className="projects-grid pockercontainer">
                    <div className="pokerfeature-card">
                        <h3 className="modal-title">📝 Planning</h3>
                        <ul>
                            <li>System architecture design</li>
                            <li>Component interaction mapping</li>
                            <li>Algorithm selection</li>
                            <li>Interface design</li>
                        </ul>
                    </div>
                    <div className="pokerfeature-card">
                        <h3 className="modal-title">🛠️ Implementation</h3>
                        <ul>
                            <li>Test-driven development</li>
                            <li>Modular code structure</li>
                            <li>Performance optimization</li>
                            <li>Comprehensive documentation</li>
                        </ul>
                    </div>
                    <div className="pokerfeature-card">
                        <h3 className="modal-title">🔍 Testing</h3>
                        <ul>
                            <li>Unit testing suite</li>
                            <li>Integration testing</li>
                            <li>Performance benchmarking</li>
                            <li>User acceptance testing</li>
                        </ul>
                    </div>
                </div>

                <h2 className="section-title">Results and Impact</h2>
                <div className="pokerfeature-card">
                    <ul>
                        <li>AI achieves competitive play level after 100,000 training iterations</li>
                        <li>Efficient memory usage allowing for extended training sessions</li>
                        <li>Modular design enabling easy extension to other poker variants</li>
                        <li>Comprehensive test suite ensuring reliability</li>
                    </ul>
                </div>

                <h2 className="section-title">Lessons Learned</h2>
                <div className="projects-grid">
                    <div className="pokerfeature-card">
                        <h3 className="modal-title">Technical Insights</h3>
                        <ul>
                            <li>Importance of efficient state representation</li>
                            <li>Balance between exploration and exploitation in AI training</li>
                            <li>Value of comprehensive testing in complex systems</li>
                        </ul>
                    </div>
                    <div className="pokerfeature-card">
                        <h3 className="modal-title">Project Management</h3>
                        <ul>
                            <li>Iterative development benefits</li>
                            <li>Importance of clear documentation</li>
                            <li>Value of modular design</li>
                        </ul>
                    </div>
                </div>

                <h2 className="section-title">Future Enhancements</h2>
                <div className="pokerfeature-card">
                    <ul>
                        <li>Implementation of multiplayer support</li>
                        <li>GUI development for better user experience</li>
                        <li>Advanced opponent modeling techniques</li>
                        <li>Distributed training capabilities</li>
                    </ul>
                </div>

            </div>
        )
    }

    return (
        <>
            <PokerHeader />
            <PokerContainer />
        </>
    )
}

export default PokerAI