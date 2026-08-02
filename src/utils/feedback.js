import axios from "axios";
const rawBaseUrl = import.meta.env.VITE_BACKEND_LINK || import.meta.env.VITE_API_BASE_URL || "";
const normalizedBaseUrl = rawBaseUrl.replace(/\/+$/, "");
const apiBase = normalizedBaseUrl.endsWith("/api")
    ? normalizedBaseUrl
    : `${normalizedBaseUrl}/api`;

const submitFeedback = async (feedbackData) => {
    try {
        console.log("Frontend: Submitting feedback", feedbackData);
        const response = await axios.post(`${apiBase}/feedback/submit`, feedbackData);
        console.log("Frontend: Feedback response received", response.data);
        
        if (response.data.success) {
            return { success: true, message: response.data.message };
        }
        return { success: false, message: response.data.message };
    } catch (err) {
        console.error("Frontend: Feedback submission error", err);
        return { success: false, message: err.response?.data?.message || "Failed to submit feedback" };
    }
};

export { submitFeedback };
