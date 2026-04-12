import usePortfolioData from "../../data/portfolioData";
import NotFound from "../../NotFound";
import { PortfolioType } from "../../utly/constants";
import BubbleCursorProfile from "./BubbleCursorProfile";

export default function BubbleCursorUserProfile() {
  const data = usePortfolioData();

  if (!data || data.type !== PortfolioType.BUBBLE) return <NotFound />;
  
  if (data) {
    return (
      <>
        <BubbleCursorProfile data={data} />
      </>
    );
  } else null;
}
