// Official Government & Organizational Data Sources
export const DATA_SOURCES = {
    ORGAN_DONOR_GOV_STATS: {
        name: "U.S. Organ Donation Statistics",
        organization: "organdonor.gov",
        url: "https://www.organdonor.gov/learn/organ-donation-statistics",
        description: "Official U.S. government statistics including waiting list numbers, daily additions, and mortality data",
        type: "Government Data"
    },
    ORGAN_DONOR_GOV_DETAILED: {
        name: "Detailed Organ Breakdown",
        organization: "organdonor.gov",
        url: "https://www.organdonor.gov/learn/organ-donation-statistics/detailed-description",
        description: "Detailed breakdown of waiting list by organ type, updated monthly with current figures",
        type: "Government Data"
    },
    UNOS_DATA_DASHBOARD: {
        name: "UNOS Data Dashboard",
        organization: "UNOS",
        url: "https://unos.org/data/",
        description: "Real-time transplant statistics and trends from the United Network for Organ Sharing",
        type: "Live Data"
    },
    OPTN_NATIONAL_DATA: {
        name: "OPTN National Data",
        organization: "OPTN",
        url: "https://optn.transplant.hrsa.gov/data/view-data-reports/national-data/",
        description: "Organ Procurement and Transplantation Network comprehensive national reports",
        type: "Research Data"
    },
    UNOS_FAQ: {
        name: "Transplant Outcomes FAQ",
        organization: "UNOS",
        url: "https://unos.org/transplant/frequently-asked-questions/",
        description: "Comprehensive FAQ covering success rates, survival statistics, and patient outcomes",
        type: "Medical Guide"
    }
} as const;

// Research & Academic Studies
export const RESEARCH_SOURCES = {
    SURVIVAL_RATES_STUDY: {
        name: "Transplant Survival Analysis",
        organization: "Taylor & Francis",
        url: "https://www.tandfonline.com/doi/full/10.1080/13696998.2022.2033050",
        description: "Mean lifetime survival estimates following solid organ transplantation in the US and UK",
        type: "Academic Study"
    },
    RACIAL_DISPARITIES_STUDY: {
        name: "Racial Disparities in Organ Donation",
        organization: "PMC/NIH",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1831604/",
        description: "Research on preferences and perceptions regarding organ donation across ethnic groups",
        type: "Research Paper"
    }
} as const;

// News & Current Updates
export const NEWS_SOURCES = {
    TRANSPLANT_RECORDS_2024: {
        name: "2024 Transplant Records",
        organization: "OPTN",
        url: "https://optn.transplant.hrsa.gov/news/organ-transplants-exceeded-48-000-in-2024-a-33-percent-increase-from-the-transplants-performed-in-2023/",
        description: "Breaking news: Over 48,000 transplants performed in 2024, setting new records",
        type: "Press Release"
    },
    MILESTONE_2023: {
        name: "2023 Milestone Achievements",
        organization: "OPTN",
        url: "https://optn.transplant.hrsa.gov/news/continued-increase-in-organ-donation-drives-new-records-in-2023-new-milestones-exceeded/",
        description: "First year with 10,000+ liver transplants and 3,000+ lung transplants",
        type: "Annual Report"
    }
} as const;

// Diversity & Equity Resources
export const DIVERSITY_SOURCES = {
    DONATE_LIFE_RACE_ETHNICITY: {
        name: "Race & Ethnicity in Donation",
        organization: "Donate Life America",
        url: "https://donatelife.net/donation/organ-donation-race-ethnicity/",
        description: "How diversity in organ donation affects transplant success across communities",
        type: "Educational Guide"
    },
    HISPANIC_COMMUNITY_FOCUS: {
        name: "Hispanic Community & Transplants",
        organization: "American Heart Association",
        url: "https://www.heart.org/en/news/2024/04/19/1-in-5-people-awaiting-a-transplant-are-hispanic-heres-what-to-know",
        description: "Understanding organ donation needs and barriers in Hispanic communities",
        type: "Community Focus"
    },
    LIFESOURCE_RACE_FAQ: {
        name: "Does Race Matter in Donation?",
        organization: "LifeSource",
        url: "https://www.life-source.org/latest/does-my-race-ethnicity-matter-in-organ-donation/",
        description: "Explaining how ethnicity affects organ matching and why diversity matters",
        type: "FAQ"
    }
} as const;

// Educational & Awareness Resources
export const EDUCATIONAL_SOURCES = {
    DONOR_NETWORK_WEST_FACTS: {
        name: "Organ Donation Facts",
        organization: "Donor Network West",
        url: "https://www.donornetworkwest.org/about-donation/organ-donation-facts-statistics/",
        description: "Comprehensive facts, statistics, and myth-busting information",
        type: "Fact Sheet"
    },
    DONATE_LIFE_STATISTICS: {
        name: "Donation Statistics Overview",
        organization: "Donate Life America",
        url: "https://donatelife.net/donation/statistics/",
        description: "Key statistics and impact numbers from the national advocacy organization",
        type: "Overview"
    }
} as const;

// Organization & Registration Links (for future Organizations page)
export const ORGANIZATION_LINKS = {
    DONATE_LIFE_AMERICA: {
        name: "Donate Life America",
        url: "https://donatelife.net/",
        description: "National nonprofit promoting organ donation awareness and registration"
    },
    STATE_REGISTRIES: {
        name: "State Donor Registries",
        url: "https://www.organdonor.gov/sign-up",
        description: "Find your state's organ donor registry to sign up"
    },
    UNOS_MAIN: {
        name: "United Network for Organ Sharing",
        url: "https://unos.org/",
        description: "Non-profit organization that manages the nation's organ transplant system"
    }
} as const;

// Combined export for easy access
export const ALL_SOURCES = {
    data: DATA_SOURCES,
    research: RESEARCH_SOURCES,
    news: NEWS_SOURCES,
    diversity: DIVERSITY_SOURCES,
    educational: EDUCATIONAL_SOURCES,
    organizations: ORGANIZATION_LINKS
} as const;