import usePortfolioData from "../../data/portfolioData";
import DeveloperProfile from "./DeveloperProfile"

export default function DeveloperCursorUserProfile() {
  const data = usePortfolioData();
  console.log(data, "dataddd");
  if (data) {
    return (
      <>
        <DeveloperProfile data={data} />
      </>
    );
  } else null;
}
