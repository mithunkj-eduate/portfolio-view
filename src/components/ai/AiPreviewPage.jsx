

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../NotFound";

const AiPreviewPage = () => {
  const { appId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_AWS_BUCKET_NAME;
  const baseKey = `apps/ai/${appId}`;

  const s3Url = `https://s3.ap-south-1.amazonaws.com/${apiBaseUrl}/${baseKey}/index.html`;

  useEffect(() => {
    const checkUrl = async () => {
      try {
        // A HEAD request checks for existence without downloading the whole file
        const response = await fetch(s3Url, { method: "HEAD" });
        if (!response.ok) {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    checkUrl();
  }, [s3Url]);

  // if (loading) return <div>Loading preview...</div>;

  if (error) {
    return <NotFound />;
  }

  return (
    <iframe
      src={s3Url}
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

export default AiPreviewPage;
