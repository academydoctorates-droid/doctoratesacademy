// export const BASE_ASSET_URL = "http://localhost:8080";

// export const BASE_ASSET_URL = "https://api.doctoratesacademy.com";

export const BASE_ASSET_URL = "https://doctoratesacademybackend.onrender.com";

export const API_PATHS = {
  ADD_Testimonial: `${BASE_ASSET_URL}/testimonial`,
  ADD_Faq: `${BASE_ASSET_URL}/faq`,
  GET_Members: `${BASE_ASSET_URL}/members`,
  GET_Posts: `${BASE_ASSET_URL}/post`,
  GET_Posts_By_Id: `${BASE_ASSET_URL}/post`,
  GET_Publication: `${BASE_ASSET_URL}/publication`,
};

/**
 * Helper function to convert relative image paths to full backend URLs
 * @param {string|object} imagePathOrObject - The image path from the API (could be string or object with path/filename)
 * @returns {string} - Full URL to the image on the backend
 */
export const getImageUrl = (imagePathOrObject) => {
  // Handle object with path property (preferred)
  let imagePath = imagePathOrObject;
  if (typeof imagePathOrObject === 'object' && imagePathOrObject !== null) {
    // Prefer 'path' over 'filename' as it includes the uploads folder
    imagePath = imagePathOrObject.path || imagePathOrObject.filename;
  }
  
  if (!imagePath) {
    return "";
  }
  
  // If it's already a full URL (starts with http:// or https://), return as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  
  // Remove any leading slashes to normalize the path
  const normalizedPath = imagePath.replace(/^\/+/, '');
  
  // If path doesn't start with "uploads/", add it
  const pathWithUploads = normalizedPath.startsWith('uploads/') 
    ? normalizedPath 
    : `uploads/${normalizedPath}`;
  
  // Build the full URL
  const fullUrl = `${BASE_ASSET_URL}/${pathWithUploads}`;
  
  return fullUrl;
};
