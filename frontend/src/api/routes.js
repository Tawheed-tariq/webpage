import apiClient from "./axios";

export const AllRoutes = {
    fetchNews: async () => {
        try {
            const response = await apiClient.get('news/');


            if (response.status !== 200) {
                return {
                    success: false,
                    data: "Problem While Fetching News"
                }
            }


            return {
                success: true,
                data: response.data
            }

        } catch (error) {
            return {
                success: false,
                data: error
            }
        }
    },

    fetchPublications: async () => {
        try {
            const response = await apiClient.get('/publications');

            if (response.status !== 200) {
                return {
                    success: false,
                    data: "Problem While Fetching Publications"
                }
            }

            return {
                success: true,
                data: response.data
            }
        } catch (error) {
            return {
                success: false,
                data: error
            }
        }
    },

    fetchWebTeam: async () => {
        try {
            const response = await apiClient.get('/web-team');

            if (response.status !== 200) {
                return {
                    success: false,
                    data: "Problem While Fetching Team Members"
                }
            }

            return {
                success: true,
                data: response.data
            }

        } catch (error) {
            return {
                success: false,
                data: error
            }
        }
    },

    fetchTeamData: async () => {
        try {
            const response = await apiClient.get('/team');

            if (response.status !== 200) {
                return {
                    success: false,
                    data: "Problem While Fetching Team Members"
                }
            }

            return {
                success: true,
                data: response.data
            }
        } catch (error) {
            return {
                success: false,
                data: error
            }
        }
    }
}