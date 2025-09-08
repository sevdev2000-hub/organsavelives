import { MapPin, Clock, DollarSign, Users, Heart, Shield } from 'lucide-react';

const EquitySection = () => {
    const equityAreas = [
        {
            icon: MapPin,
            title: "Geographic Access",
            description: "Where you live affects referral speed, evaluation, and wait time. Rural and remote areas often have limited access to transplant centers.",
            color: "border-blue-100"
        },
        {
            icon: DollarSign,
            title: "Economic Barriers",
            description: "Insurance coverage, travel costs, time off work, and ongoing medical expenses can prevent people from accessing transplant care.",
            color: "border-green-100"
        },
        {
            icon: Users,
            title: "Trust & Information",
            description: "Historic inequities reduce trust. Community-led education and multilingual resources help close gaps in registration and referral.",
            color: "border-purple-100"
        },
        {
            icon: Heart,
            title: "Living Donation Support",
            description: "Travel, time off work, and childcare are real barriers. Policies that reimburse donors and protect jobs increase equitable access.",
            color: "border-orange-100"
        }
    ];

    const systemicChallenges = [
        {
            challenge: "Insurance & Coverage",
            description: "Different insurance plans have varying coverage for transplant evaluation, surgery, and lifelong immunosuppressive medications."
        },
        {
            challenge: "Transportation & Distance",
            description: "Many patients must travel hundreds of miles for evaluation and follow-up care, creating significant logistical and financial burdens."
        },
        {
            challenge: "Employment Protection",
            description: "Taking time off for medical appointments, surgery, and recovery can threaten job security and income stability."
        },
        {
            challenge: "Information Access",
            description: "Complex medical information and navigation requirements can be barriers for those with limited health literacy or language differences."
        }
    ];

    return (
        <section className="py-20 bg-white relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.03),transparent_50%)]"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Why Equity Matters
                        </h2>
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-200">
                            Systemic Lens
                        </span>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Creating fair access to organ donation and transplantation means addressing the systemic barriers
                        that prevent people from getting the care they need, regardless of their background.
                    </p>
                </div>

                {/* Main Equity Areas */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {equityAreas.map((area, index) => {
                        const IconComponent = area.icon;
                        return (
                            <div key={index} className={`rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl bg-white ${area.color}`}>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                                        <IconComponent className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{area.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Systemic Challenges */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Systemic Barriers to Address</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {systemicChallenges.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="w-3 h-3 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">{item.challenge}</h4>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions Focus */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                        <Clock className="w-14 h-14 text-blue-600 mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Transparent Processes</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Clear timelines and criteria help ensure fair evaluation and allocation of organs across all communities.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                        <Shield className="w-14 h-14 text-green-600 mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Policy Advocacy</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Supporting policies that remove financial and logistical barriers while protecting donor rights and employment.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                        <Users className="w-14 h-14 text-purple-600 mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Community Partnership</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Working with local organizations to provide culturally appropriate education and support systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquitySection;