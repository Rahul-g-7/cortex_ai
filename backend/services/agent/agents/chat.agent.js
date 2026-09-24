import { getModel } from "../../llm/llm.js";
export const chatAgent = async (state) => {
  const llm = await getModel("chat");
  const prompt = "Your are a chat Assitant";
  const response = await llm.invoke(
    {
      role: "sysem",
      content: prompt,
    },
    {
      role: "user",
      content: state.prompt,
    },
  );
  return {
    ...state,
    aiResponse: response.content,
  };
};