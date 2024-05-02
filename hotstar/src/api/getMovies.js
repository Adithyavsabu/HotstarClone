export const getData = () => {
    fetch("https://api.sampleapis.com/movies/family", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => console.error("error", error));
  };


 export const getHorror = () => {
    fetch("https://api.sampleapis.com/movies/horror", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => console.error("error", error));
  };
