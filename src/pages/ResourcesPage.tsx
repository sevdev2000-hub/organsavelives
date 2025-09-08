import { ExternalLink, BarChart3, FileText, Globe, TrendingUp, Users, Shield } from 'lucide-react';
import {
    DATA_SOURCES,
    RESEARCH_SOURCES,
    NEWS_SOURCES,
    DIVERSITY_SOURCES,
    EDUCATIONAL_SOURCES
} from '../data/urls';

const ResourcesPage = () => {
    const resourceCategories = [
        {
            title: "Official Statistics & Data",
            icon: BarChart3,
            description: "Government and authoritative sources for current organ donation data",
            color: "from-blue-500 to-blue-600",
            resources: [
                DATA_SOURCES.ORGAN_DONOR_GOV_STATS,
                DATA_SOURCES.ORGAN_DONOR_GOV_DETAILED,
                DATA_SOURCES.UNOS_DATA_DASHBOARD,
                DATA_SOURCES.OPTN_NATIONAL_DATA,
                DATA_SOURCES.UNOS_FAQ
            ]
        },
        {
            title: "Research & Medical Studies",
            icon: FileText,
            description: "Peer-reviewed research on transplant outcomes and survival rates",
            color: "from-green-500 to-green-600",
            resources: [
                RESEARCH_SOURCES.SURVIVAL_RATES_STUDY,
                RESEARCH_SOURCES.RACIAL_DISPARITIES_STUDY
            ]
        },
        {
            title: "News & Current Updates",
            icon: TrendingUp,
            description: "Latest developments and record-breaking achievements in organ donation",
            color: "from-orange-500 to-orange-600",
            resources: [
                NEWS_SOURCES.TRANSPLANT_RECORDS_2024,
                NEWS_SOURCES.MILESTONE_2023
            ]
        },
        {
            title: "Diversity & Equity Resources",
            icon: Users,
            description: "Information about organ donation across different communities",
            color: "from-purple-500 to-purple-600",
            resources: [
                DIVERSITY_SOURCES.DONATE_LIFE_RACE_ETHNICITY,
                DIVERSITY_SOURCES.HISPANIC_COMMUNITY_FOCUS,
                DIVERSITY_SOURCES.LIFESOURCE_RACE_FAQ
            ]
        },
        {
            title: "Educational & Awareness",
            icon: Globe,
            description: "General information and myth-busting resources",
            color: "from-red-500 to-red-600",
            resources: [
                EDUCATIONAL_SOURCES.DONOR_NETWORK_WEST_FACTS,
                EDUCATIONAL_SOURCES.DONATE_LIFE_STATISTICS
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Research & Resources
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive collection of official data, research studies, and educational materials
                        from authoritative sources on organ donation and transplantation.
                    </p>
                </div>

                <div className="space-y-16">
                    {resourceCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={category.title}>
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                                        <p className="text-gray-600">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.resources.map((resource, index) => (

                                        <a key={index}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
                                        >
                                        <div className="flex items-start justify-between mb-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                                    {resource.type}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                        </div>

                                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {resource.name}
                                </h3>

                                <p className="text-sm text-gray-600 mb-3">
                                    {resource.description}
                                </p>

                                <div className="text-xs font-medium text-gray-500">
                                    Source: {resource.organization}
                                </div>
                            </a>
                        ))}
                        </div>
                        </div>
                        );
                    })}
                </div>

                <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Sources</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        All resources listed are from official government agencies, established medical organizations,
                        or peer-reviewed academic sources to ensure accuracy and reliability of information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;