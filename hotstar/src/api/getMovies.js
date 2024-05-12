export const getMovies = (genre) => {
  return fetch(`https://api.sampleapis.com/movies/${genre}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export const getMovie = (id, genre) => {
  return fetch(`https://api.sampleapis.com/movies/${genre}/${id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

// export const fetchMovies = async () => {
//   try {
//     const response = await fetch(movies);
//     if (!response.ok) {
//       throw new Error("Failed to fetch movie data");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching movie data:", error);
//     return []; // Return an empty array in case of an error
//   }
// };
