export const  convertDriveToImageUrl =(driveUrl) =>{
    // Extract file ID using regex
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);

    if (!match) {
      console.error("Invalid Google Drive URL");
      return null;
    }

    const fileId = match[1];

    // Return thumbnail URL (best for <img>)
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  }