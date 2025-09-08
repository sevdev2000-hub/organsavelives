import { MapPin, DollarSign, Users, Shield, AlertTriangle, TrendingDown } from 'lucide-react';

const EquitySection = () => {
    const disparityStats = [
        {
            icon: TrendingDown,
            stat: "1 year longer",
            description: "Average wait time for Black patients vs. white patients",
            context: "for kidney transplants"
        },
        {
            icon: Users,
            stat: "50% less likely",
            description: "Black patients to be placed on transplant waitlists",
            context: "despite higher need for organs"
        },
        {
            icon: AlertTriangle,
            stat: "27.8%",
            description: "of people waiting are Black/African American",
            context: "while being 13.6% of population"
        },
        {
            icon: Shield,
            stat: "Lower rates",
            description: "People with disabilities face evaluation barriers",
            context: "due to bias and assumptions"
        }
    ];

    const equityAreas = [
        {
            icon: Users,
            title: "Racial Health Disparities",
            description: "Black Americans experience higher rates of kidney disease, diabetes, and hypertension but face more barriers throughout the transplant process, from referral to receiving organs.",
            color: "border-red-100"
        },
        {
            icon: Shield,
            title: "Disability Discrimination",
            description: "People with intellectual, developmental, or physical disabilities often face unjust exclusion from transplant lists based on quality-of-life assumptions rather than medical criteria.",
            color: "border-purple-100"
        },
        {
            icon: MapPin,
            title: "Geographic Access",
            description: "Rural communities and areas with fewer transplant centers create disparities in access to evaluation, waitlisting, and post-transplant care.",
            color: "border-blue-100"
        },
        {
            icon: DollarSign,
            title: "Socioeconomic Barriers",
            description: "Insurance coverage, transportation costs, lost wages, and complex navigation requirements disproportionately affect lower-income patients and families.",
            color: "border-green-100"
        }
    ];

    const systemicChallenges = [
        {
            challenge: "Referral Disparities",
            description: "Primary care providers refer white patients for transplant evaluation more frequently than patients of color, even with similar medical conditions."
        },
        {
            challenge: "Trust in Healthcare",
            description: "Historical medical abuses, including unethical research on Black communities, have created justified mistrust that affects organ donation decisions."
        },
        {
            challenge: "Disability Bias",
            description: "Transplant teams may exclude people with disabilities based on assumptions about life quality rather than evidence-based medical criteria."
        },
        {
            challenge: "Cultural Communication",
            description: "Lack of culturally competent care and language barriers can lead to misunderstandings about organ donation and transplant options."
        },
        {
            challenge: "Insurance Coverage",
            description: "Medicaid patients face longer wait times and may have limited access to certain transplant centers, creating a two-tiered system."
        },
        {
            challenge: "Family Approach",
            description: "Organ procurement organizations may approach families of color differently or less frequently, affecting donation consent rates."
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
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold border border-red-200">
                            Health Justice
                        </span>
                    </div>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Significant disparities exist in organ transplantation based on race, disability status, geography, and socioeconomic factors.
                        Understanding and addressing these inequities is essential for creating a just healthcare system.
                    </p>
                </div>

                {/* Disparity Statistics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {disparityStats.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-6 text-center border border-red-100 shadow-lg">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 rounded-xl mb-4">
                                    <IconComponent className="w-6 h-6 text-red-600" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">{item.stat}</div>
                                <div className="text-sm font-semibold text-gray-700 mb-2">{item.description}</div>
                                <div className="text-xs text-gray-500">{item.context}</div>
                            </div>
                        );
                    })}
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

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Health Equity is Human Rights</h3>
                    <p className="text-lg text-gray-200 mb-6 max-w-4xl mx-auto">
                        Everyone deserves equal access to life-saving transplants, regardless of race, disability status,
                        income, or where they live. Creating equity requires acknowledging disparities and taking concrete action to address them.
                    </p>
                    <div className="text-sm text-gray-300">
                        Data sources: National Academy of Sciences, UNOS, American Medical Association Journal of Ethics
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquitySection;