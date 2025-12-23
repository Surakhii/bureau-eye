import BureauHeader from "@/components/BureauHeader";
import SurveillanceSeal from "@/components/SurveillanceSeal";
import CitizenStatusCheck from "@/components/CitizenStatusCheck";
import BureauFooter from "@/components/BureauFooter";

const Index = () => {
  // Replace this URL with your actual seal image when ready
  const sealImageUrl = undefined;

  return (
    <div className="min-h-screen flex flex-col bg-background scanlines pattern-grid">
      <BureauHeader />
      
      {/* Main content with top padding for fixed header */}
      <main className="flex-1 pt-28">
        {/* Surveillance Seal - The focal point */}
        <SurveillanceSeal imageUrl={sealImageUrl} />
        
        {/* Citizen Status Check - The "nothing" interaction */}
        <CitizenStatusCheck />
      </main>

      <BureauFooter />
    </div>
  );
};

export default Index;
