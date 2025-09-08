import { Heart, Zap, Eye, Activity } from 'lucide-react';

const WaitingListSection = () => {
    const organData = [
        { organ: 'Kidney', count: 89792, percentage: 85, color: 'from-blue-500 to-blue-600', icon: Activity },
        { organ: 'Liver', count: 9424, percentage: 9, color: 'from-orange-500 to-orange-600', icon: Zap },
        { organ: 'Heart', count: 3456, percentage: 3, color: 'from-red-500 to-red-600', icon: Heart },
        { organ: 'Lung', count: 898, percentage: 1, color: 'from-green-500 to-green-600', icon: Eye },
        { organ: 'Other', count: 2653, percentage: 2, color: 'from-purple-500 to-purple-600', icon: Activity }
    ];

    return (
        <section data-section="waiting-list" className="py-20 bg-white relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.03),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What People Need Most</h2>
                    <p className="text-xl text-gray-600">Breakdown of the 103,000+ people waiting</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Chart */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Organs Needed</h3>
                        <div className="space-y-6">
                            {organData.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={item.organ} className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold text-gray-900 text-lg">{item.organ}</span>
                                                <span className="text-sm font-semibold text-gray-600">{item.count.toLocaleString()}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-3 border border-gray-200">
                                                <div
                                                    className={`h-3 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                                                    style={{ width: `${item.percentage}%` }}
                                                ></div>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-2 font-medium">{item.percentage}% of total</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Success Rates */}
                    <div className="space-y-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Success Rates Are High</h3>

                        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-lg">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-semibold text-gray-900 text-lg">Kidney Transplants</span>
                                <span className="text-3xl font-bold text-green-600">95%</span>
                            </div>
                            <p className="text-gray-600 mb-2">Function well after 1 year</p>
                            <div className="text-sm text-gray-500">Mean survival: 22+ years</div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-semibold text-gray-900 text-lg">Liver Transplants</span>
                                <span className="text-3xl font-bold text-blue-600">85%</span>
                            </div>
                            <p className="text-gray-600 mb-2">5-year survival rate</p>
                            <div className="text-sm text-gray-500">Mean survival: 20+ years</div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-lg">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-semibold text-gray-900 text-lg">Heart Transplants</span>
                                <span className="text-3xl font-bold text-red-600">85%</span>
                            </div>
                            <p className="text-gray-600 mb-2">1-year survival rate</p>
                            <div className="text-sm text-gray-500">Mean survival: 14+ years</div>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                            <p className="text-green-800 font-medium leading-relaxed">
                                These high success rates mean donated organs truly save lives and provide years of healthy living.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitingListSection;