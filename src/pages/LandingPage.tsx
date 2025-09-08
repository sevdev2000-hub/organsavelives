import HeroSection from '../components/sections/HeroSection';
import WaitingListSection from '../components/sections/WaitingListSection';
import MythsSection from '../components/sections/MythsSection';
import CTASection from '../components/sections/CTASection';
import EquitySection from "../components/sections/EquitySection.tsx";

const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
        <HeroSection />
        <WaitingListSection />
        <MythsSection />
        <EquitySection />
        <CTASection />
    </div>
);

export default LandingPage;