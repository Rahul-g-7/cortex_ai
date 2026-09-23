import api from "../../utils/axios.js";

export const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/api/me");
    return data;
  }
  catch (error) {
    console.log("Error fetching current user:", error);
    return null;
  }
}
export default getCurrentUser;