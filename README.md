## CS50X Final Project

# Name: Chandan K P

# Github: chandanyuva

# edX: Chandan_K_P

# City: Bangalore

# Country: India

# date: 12-04-2025

#### Video Demo: [<Link>](https://youtu.be/4MtTvmN4Z_A)

#### Description:

Stack
React + Vite (Front-End)
Express + Sqlite3 (Back-End)

This is Trending movies app that fetches data of movies from the [imdb]](https://api.themoviedb.org) api and shows top trending movies based on the searches made by users in the app

for the front-end i have used various libraries like

-   tailwindcss
-   react-dom
    in the front-end,
-   sqlite3
-   express
-   cors
    in the back-end

this app uses sqlite3 as a flat database to store

1. searchTerm
2. count
3. poster_url
4. movie_id

each time a user makes a search request in the app the count of that term is created or incremented using the path "/api/search" and updateSearchCount() function call,
and finally a getTrendingMovies api end point in path "/api/trending" is used to access that data in getTrendingMovies() function call.

This data is rendered using inside the section with class name "trending" in the main app.

# Steps to run locally

1. First run the npm script inside /server folder "initialize_DB" to create a sqlite db file if not present
2. now run the inside the same /server folder "start" script
3. finally start the front end in / (root of project) using npm "dev" script
