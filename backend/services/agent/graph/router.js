import { getModel } from "../llm.js";
export const router = async (params) => {
  const llm=await getModel("router")
}