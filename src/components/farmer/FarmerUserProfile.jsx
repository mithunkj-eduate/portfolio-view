import useProffionPortfolio from "../../data/useProffionPortfolio";
import NotFound from "../../NotFound";
import FarmerProfile from "./FarmerProfile";

export default function FarmerUserProfile() {
  const data = useProffionPortfolio();
console.log(data,"type")
  if (!data || data.type !== "farmer") return <NotFound />;
  if (data) {
    return (
      <>
        <FarmerProfile data={data} />
      </>
    );
  } else null;
}
