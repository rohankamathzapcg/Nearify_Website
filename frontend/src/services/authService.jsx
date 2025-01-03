import appClient from './appClient'

export const registerUser = async (data) => {
    try {
        const response = await appClient.post('/user', data)
        return response.data
    } catch (error) {
        throw error.response?.data?.error || "Something went wrong!";
    }
}