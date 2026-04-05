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
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        border: "none",
      }}
      title="External Content"
    />
  );
};

export default PreviewPage;
