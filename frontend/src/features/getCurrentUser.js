import api from "../../utils/axios.js";

export const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/api/me");
    console.log("Current user data:", data);
  }
  catch (error) {
    console.log("Error fetching current user:", error);
  }
}
export default getCurrentUser;