import useProffionPortfolio from "../../data/useProffionPortfolio";
import NotFound from "../../NotFound";
import ProfessionalProfile from "./ProfessionalProfile";

export default function ProfessionalUserProfile() {
  const data = useProffionPortfolio();
  // console.log(data, "dataddd");
  if (!data) return <NotFound />;
  if (data) {
    return (
      <>
        <ProfessionalProfile data={data} />
      </>
    );
  } else null;
}
