import { CheckCircle, XCircle } from 'lucide-react';

const MythsSection = () => {
    const mythsAndFacts = [
        {
            type: 'myth',
            title: 'Doctors won\'t try to save me',
            content: 'Medical teams are completely separate from organ procurement teams and always prioritize saving your life first.'
        },
        {
            type: 'fact',
            title: 'No age limit exists',
            content: 'The oldest organ donor was 92. Medical suitability is determined case-by-case, not by age alone.'
        },
        {
            type: 'myth',
            title: 'My religion forbids it',
            content: 'All major religions support organ donation, viewing it as an act of charity and compassion.'
        },
        {
            type: 'fact',
            title: 'Open casket is possible',
            content: 'Organ donation doesn\'t interfere with open-casket funerals. The body is treated with care and respect.'
        },
        {
            type: 'myth',
            title: 'My family will be charged',
            content: 'There\'s no cost to donor families. All donation expenses are covered by organ procurement organizations.'
        },
        {
            type: 'fact',
            title: 'Living donation is safe',
            content: 'Living donors undergo extensive screening and can donate kidneys or liver portions with minimal risk.'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.03),transparent_50%)]"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Myths vs Facts
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Separating truth from misconception about organ donation
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {mythsAndFacts.map((item, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl bg-white border-gray-100"
                        >
                            {/* Type Badge */}
                            <div className="flex items-center space-x-3 mb-6">
                                {item.type === 'myth' ? (
                                    <>
                                        <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                                            <XCircle className="w-6 h-6 text-red-600" />
                                        </div>
                                        <span className="px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-full border border-red-100">
                                            MYTH
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-100">
                                            FACT
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                "{item.title}"
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.content}
                            </p>

                            {/* Decorative Element */}
                            <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl ${
                                item.type === 'myth' ? 'bg-gradient-to-r from-red-200 to-red-300' : 'bg-gradient-to-r from-green-200 to-green-300'
                            }`} />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center space-y-6 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Test your knowledge
                        </h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            See how much you know about organ donation with our interactive quiz
                        </p>
                        <button
                            onClick={() => window.location.href = '/quiz'}
                            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Take the Quiz
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MythsSection;