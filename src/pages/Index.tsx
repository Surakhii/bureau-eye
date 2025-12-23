import BureauHeader from "@/components/BureauHeader";
import SurveillanceSeal from "@/components/SurveillanceSeal";
import SurveillanceStats from "@/components/SurveillanceStats";
import OfficialDirectives from "@/components/OfficialDirectives";
import CitizenStatusCheck from "@/components/CitizenStatusCheck";
import ReportCitizen from "@/components/ReportCitizen";
import EnforcementActions from "@/components/EnforcementActions";
import AboutDirectorate from "@/components/AboutDirectorate";
import BureauFooter from "@/components/BureauFooter";

const Index = () => {
  const sealImageUrl = "https://psd-evidence-archive-8492.s3.us-east-1.amazonaws.com/department-seal.png";

  return (
    <div className="min-h-screen flex flex-col bg-background scanlines pattern-grid">
      <BureauHeader />
      
      {/* Main content with top padding for fixed header */}
      <main className="flex-1 pt-28">
        {/* Surveillance Seal - The focal point */}
        <SurveillanceSeal imageUrl={sealImageUrl} />

        {/* Real-time surveillance metrics */}
        <SurveillanceStats />

        {/* Recent enforcement activity */}
        <EnforcementActions />

        {/* Official directives */}
        <OfficialDirectives />

        {/* Citizen Status Check - The "nothing" interaction */}
        <CitizenStatusCheck />

        {/* Report a citizen form */}
        <ReportCitizen />

        {/* About the Directorate */}
        <AboutDirectorate />
      </main>

      <BureauFooter />
    </div>
  );
};

export default Index;
