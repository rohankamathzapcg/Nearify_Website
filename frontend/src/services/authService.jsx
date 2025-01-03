import appClient from './appClient'

/* Post API - Registration */
export const registerUser = async (data) => {
    try {
        const response = await appClient.post('/user', data)
        return response.data
    } catch (error) {
        throw error.response?.data?.error || "Something went wrong!";
    }
}

/* Get API - Login */
export const loginUser = async (data) => {
    try {
        const response=await appClient.get('/user',data)
        return response.data
    } catch (error) {
        throw error.response?.data?.error || "Something went wrong!";
    }
}