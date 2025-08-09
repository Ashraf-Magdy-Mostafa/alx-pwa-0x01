# ALX - MoviesDatabase(rapidAPI) 

## API Overview:

Collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members.  
-----------------
## API Version:
v1.0
-------
## API Endpoints Summary

### 🎬 Titles
- `GET /titles/{id}` – Get title details.  
- `GET /titles/series/{seriesId}` – Get series details.  
- `GET /titles/seasons/{seriesId}` – Get seasons list.  
- `GET /titles/episode/{id}` – Get episode details.  
- `GET /titles/{id}/ratings` – Get ratings.  
- `GET /titles/random` – Get a random title.  
- `GET /titles/x/upcoming` – Get upcoming titles.  

### 🔍 Search
- `GET /titles/search/title/{title}` – Search by title.  
- `GET /titles/search/keyword/{keyword}` – Search by keyword.  
- `GET /titles/search/akas/{aka}` – Search by alternative name.  

### 🎭 Actors
- `GET /actors/{id}` – Get actor details.  
- `GET /actors/random` – Get a random actor.  

### ⚙️ Utilities
- `GET /titles/utils/genres` – List genres.  
- `GET /titles/utils/titleTypes` – List title types.  
---------

## MoviesDatabase API Guide

### Request and Response Format

#### Request Structure
All API requests are made via **HTTP GET** to the `MoviesDatabase` API base URL through RapidAPI.  
Requests typically include:
- **Path parameters** (e.g., `/titles/{id}`, `/actors/{id}`)
- **Optional query parameters** to filter, sort, or limit results.

**Example Request:**

    GET https://moviesdatabase.p.rapidapi.com/titles/search/title/Inception?exact=false&limit=5
    Headers:
    X-RapidAPI-Key: YOUR_API_KEY
    X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

### Common Query Parameters:

info – level of detail (e.g., mini_info, base_info, rating, awards)

limit – max number of results (default 10, max 50)

page – page number for pagination

year, startYear, endYear – filter by release year or range

genre – filter by genre (capitalized)

list – predefined collections (e.g., most_pop_movies, top_rated_250)

sort – sorting order (year.incr, year.decr)

exact – for exact title matching in search endpoints

------

#### Response Structure
All endpoints return a JSON object containing:

results – the main data array or object

Additional pagination keys (page, next, entries) for multi-page endpoints

Example Response (Search by Title):


    {
    "results": [
        {
        "id": "tt1375666",
        "titleText": { "text": "Inception" },
        "primaryImage": { "url": "https://image.url" },
        "titleType": { "text": "Movie" },
        "releaseDate": { "year": 2010, "month": 7, "day": 16 },
        "genres": [{ "text": "Action" }, { "text": "Sci-Fi" }],
        "ratingsSummary": { "aggregateRating": 8.8, "voteCount": 2200000 }
        }
    ],
    "page": 1,
    "next": 2,
    "entries": 5
    }

-------

## Authentication
All requests require authentication via RapidAPI.
You must include your API key in the request headers.

Authentication Headers:

    X-RapidAPI-Key: YOUR_API_KEY
    X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

-----

## Error Handling
Common error responses:

- **401** Unauthorized – Missing or invalid API key
Solution: Ensure X-RapidAPI-Key and X-RapidAPI-Host are correctly set.

- **404** Not Found – Resource does not exist (e.g., invalid id)
Solution: Verify the ID or search parameters.

- **429** Too Many Requests – Rate limit exceeded
Solution: Implement retry logic with exponential backoff.

- **500** Internal Server Error – Server-side issue
Solution: Retry after a short delay.

Example Error Response:

    {
    "message": "You are not authorized to perform this action",
    "status": 401
    }
