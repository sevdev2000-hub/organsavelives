import { useState } from 'react';
import { Heart, Users, ExternalLink, Shield, Globe, Banknote, UserCheck } from 'lucide-react';

const ActionPage = () => {
    const [activeTab, setActiveTab] = useState('donate');

    const charityOrganizations = [
        {
            name: "American Transplant Foundation",
            description: "The only nonprofit providing educational, emotional, and financial support to living donors, transplant recipients, and their families nationwide.",
            website: "https://www.americantransplantfoundation.org/donatefinancially/",
            focus: "Direct patient support and living donor assistance",
            icon: Heart,
            color: "bg-red-50 border-red-200 hover:border-red-300"
        },
        {
            name: "Donate Life America",
            description: "Leading nonprofit organization increasing donated organs, eyes & tissue available to save lives through transplantation and education.",
            website: "https://donatelife.net/",
            focus: "National awareness and education campaigns",
            icon: Globe,
            color: "bg-blue-50 border-blue-200 hover:border-blue-300"
        },
        {
            name: "Gift of Life Donor Program",
            description: "Supporting families through donation process and providing housing assistance for transplant patients and families.",
            website: "https://www.donors1.org/",
            focus: "Family support and transplant housing",
            icon: Users,
            color: "bg-green-50 border-green-200 hover:border-green-300"
        },
        {
            name: "LifeGift Foundation",
            description: "Supporting organ and tissue donation process while delivering life-saving transplants to recipients in need.",
            website: "https://www.lifegift.org/",
            focus: "Regional organ procurement and family support",
            icon: Shield,
            color: "bg-purple-50 border-purple-200 hover:border-purple-300"
        }
    ];

    const registrationOptions = [
        {
            name: "UNOS (United Network for Organ Sharing)",
            description: "The official organization managing the nation's organ transplant system and maintaining the national transplant waiting list.",
            website: "https://unos.org/",
            action: "Learn about the transplant system",
            type: "Information",
            icon: Shield,
            color: "bg-blue-50 border-blue-200"
        },
        {
            name: "organdonor.gov",
            description: "Official U.S. government resource for organ donation information and links to state donor registries.",
            website: "https://www.organdonor.gov/",
            action: "Find your state registry",
            type: "Registration Portal",
            icon: Globe,
            color: "bg-green-50 border-green-200"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 pt-20">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your actions can save lives. Choose to support organ donation through financial contributions
                        to trusted organizations or register as a donor to give the gift of life.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-xl p-2 shadow-sm border">
                        <button
                            onClick={() => setActiveTab('donate')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                activeTab === 'donate'
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                        >
                            <Banknote className="w-5 h-5 inline mr-2" />
                            Donate Money
                        </button>
                        <button
                            onClick={() => setActiveTab('register')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                activeTab === 'register'
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                        >
                            <UserCheck className="w-5 h-5 inline mr-2" />
                            Register as Donor
                        </button>
                    </div>
                </div>

                {/* Donate Money Tab */}
                {activeTab === 'donate' && (
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Organ Donation Charities</h3>
                            <p className="text-lg text-gray-600">
                                These trusted organizations work tirelessly to support donors, recipients, and their families
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {charityOrganizations.map((org, index) => {
                                const IconComponent = org.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-xl border-2 transition-all duration-300 ${org.color}`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-white p-3 rounded-lg shadow-sm">
                                                <IconComponent className="w-6 h-6 text-red-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">{org.name}</h4>
                                                <p className="text-gray-700 mb-3">{org.description}</p>
                                                <div className="bg-white bg-opacity-50 rounded-lg p-3 mb-4">
                                                    <p className="text-sm font-semibold text-gray-800">Focus Area:</p>
                                                    <p className="text-sm text-gray-700">{org.focus}</p>
                                                </div>
                                                <a
                                                    href={org.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                                                >
                                                    <span>Donate Now</span>
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Register as Donor Tab */}
                {activeTab === 'register' && (
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Register as an Organ Donor</h3>
                            <p className="text-lg text-gray-600">
                                One registration can save up to 8 lives and heal 75+ more people
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {registrationOptions.map((option, index) => {
                                const IconComponent = option.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-xl border-2 transition-all duration-300 ${option.color} hover:shadow-lg`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-white p-3 rounded-lg shadow-sm">
                                                <IconComponent className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <h4 className="text-xl font-bold text-gray-900">{option.name}</h4>
                                                    <span className="bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-600">
                                                        {option.type}
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 mb-4">{option.description}</p>
                                                {option.website !== '#' ? (
                                                    <a
                                                        href={option.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                                    >
                                                        <span>{option.action}</span>
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                ) : (
                                                    <button className="inline-flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                                                        <span>{option.action}</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Additional Information */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Important to Know</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-3xl font-bold mb-2">Free</div>
                                    <div className="text-blue-100">No cost to register or donate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">Safe</div>
                                    <div className="text-blue-100">Medical teams prioritize saving your life</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">Reversible</div>
                                    <div className="text-blue-100">You can change your mind anytime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActionPage;