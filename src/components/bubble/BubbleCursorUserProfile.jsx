import usePortfolioData from "../../data/portfolioData";
import NotFound from "../../NotFound";
import BubbleCursorProfile from "./BubbleCursorProfile";

export default function BubbleCursorUserProfile() {
  const data = usePortfolioData();
  console.log(data, "dataddd");
  if (!data) return <NotFound />;
  if (data) {
    return (
      <>
        <BubbleCursorProfile data={data} />
      </>
    );
  } else null;
}
