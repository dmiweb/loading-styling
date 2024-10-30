const createRequest = async (options = {}) => {
  return await fetch("https://loading-styling-backend.vercel.app/news", options);
};

export default createRequest;
