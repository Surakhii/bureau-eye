import BureauLogo from "./BureauLogo";
import DefconIndicator from "./DefconIndicator";

const BureauHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <BureauLogo />
          <DefconIndicator />
        </div>
      </div>
    </header>
  );
};

export default BureauHeader;
