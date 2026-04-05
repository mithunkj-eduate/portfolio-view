import React from "react";
import { useParams } from "react-router-dom";

const PreviewPage = () => {
  const { appId } = useParams();
  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_BASE_URL;

  return (
      <iframe
        src={`${apiBaseUrl}/api/apps/${appId}`}
        sandbox="allow-scripts"
        style={{
          width: "100%",
          height: "100vh",
        }}
      />
  );
};

export default PreviewPage;
