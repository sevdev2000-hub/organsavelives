const CTASection = () => (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Explore helpful resources or take direct action to support organ donation and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                    onClick={() => window.location.href = '/resources'}
                    className="bg-white text-red-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Browse Resources
                </button>
                <button
                    onClick={() => window.location.href = '/action'}
                    className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                    Take Action
                </button>
            </div>
        </div>
    </section>
);

export default CTASection;