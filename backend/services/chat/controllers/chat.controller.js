export const createConversation = async (req, res) => {
    try {
        const { participants } = req.body;