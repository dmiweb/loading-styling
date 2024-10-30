const createRequest = async (options = {}) => {
  return await fetch("https://loading-styling-backend-80ii1p8gm-dmiwebs-projects.vercel.app/news", options);
};

export default createRequest;
