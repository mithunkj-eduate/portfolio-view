// import React from "react";
// import { useParams } from "react-router-dom";

// const PreviewPage = () => {
//   const { appId } = useParams();
//   const apiBaseUrl = import.meta.env.VITE_PRODUCTION_BASE_URL;

//   return (
//     <iframe
//       src={`${apiBaseUrl}/api/apps/${appId}`}
//       sandbox="allow-scripts"
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         border: "none",
//       }}
//       title="External Content"
//     />
//   );
// };

// export default PreviewPage;

import { useParams } from "react-router-dom";

const PreviewPage = () => {
  const { appId } = useParams();
  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_AWS_BUCKET_NAME;

  const baseKey = `apps/${appId}`;
  const s3Url = `https://s3.ap-south-1.amazonaws.com/${apiBaseUrl}/${baseKey}/index.html`;

  return (
    <iframe
      src={`${s3Url}`}
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
