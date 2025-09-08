const HeroSection = () => (
    <section className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Main Message */}
                <div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Organ donation saves lives.
                        <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block">
                            Equity makes it fair.
                        </span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                        Learn the facts, bust the myths, and take a 60-second pledge to spread awareness.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => {
                                const waitingListSection = document.querySelector('[data-section="waiting-list"]');
                                if (waitingListSection) {
                                    waitingListSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                        >
                            <span>Take the 60 seconds tour</span>
                        </button>
                    </div>
                </div>

                {/* Right Column - Visual Impact */}
                <div className="relative">
                    {/* Main Visual Element */}
                    <div className="relative bg-white rounded-3xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            NOW
                        </div>

                        {/* Updated Data Display */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
                                    <div className="text-2xl font-bold text-red-600">103,000+</div>
                                    <div className="text-xs text-red-700 font-medium">People Waiting</div>
                                    <div className="text-xs text-gray-600 mt-1">On the national transplant list</div>
                                </div>
                                <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                                    <div className="text-2xl font-bold text-orange-600">8 min</div>
                                    <div className="text-xs text-orange-700 font-medium">Someone Added</div>
                                    <div className="text-xs text-gray-600 mt-1">To the waiting list</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-600">17</div>
                                    <div className="text-xs text-blue-700 font-medium">Daily Deaths</div>
                                    <div className="text-xs text-gray-600 mt-1">People die waiting each day</div>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                                    <div className="text-2xl font-bold text-green-600">8 Lives</div>
                                    <div className="text-xs text-green-700 font-medium">One Donor Saves</div>
                                    <div className="text-xs text-gray-600 mt-1">Plus heals 75+ more</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-8 left-4 bg-white rounded-full p-3 shadow-lg animate-bounce border border-gray-100">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg border border-gray-100" style={{animationDelay: '1s'}}>
                        <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;