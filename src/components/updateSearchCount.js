export const updateSearchCount = async (searchTerm, movie) => {
    console.log("in search update", movie);
    try {
        const response = await fetch("http://localhost:3000/api/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchTerm,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(
                "Failed to update search count:",
                data.error || response.statusText
            );
        } else {
            console.log("Search count updated:", data.message);
        }

        return data;
    } catch (error) {
        console.error("Error calling backend API:", error);
    }
};
