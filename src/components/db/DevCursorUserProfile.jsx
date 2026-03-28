import usePortfolioData from "../../data/portfolioData";
import DevCursorProfile from "./DevCursorProfile";

export default function DevCursorUserProfile() {
  const data = usePortfolioData();
  console.log(data, "dataddd");
  if (data) {
    return (
      <>
      <DevCursorProfile data={data} />
      </>
    );
  } else null;
}
