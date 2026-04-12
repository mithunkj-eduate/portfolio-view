import usePortfolioData from "../../data/portfolioData";
import NotFound from "../../NotFound";
import { PortfolioType } from "../../utly/constants";
import DeveloperProfile from "./DeveloperProfile"

export default function DeveloperCursorUserProfile() {
  const data = usePortfolioData();

    if (!data || data.type !== PortfolioType.DEVELOPER) return <NotFound />;
  
  if (data) {
    return (
      <>
        <DeveloperProfile data={data} />
      </>
    );
  } else null;
}
