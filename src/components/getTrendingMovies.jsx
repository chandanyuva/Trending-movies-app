export const getTrendingMovies = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/trending");
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || "Failed to fetch trending movies");
        }

        return result;
    } catch (error) {
        console.log(error);
    }
};
