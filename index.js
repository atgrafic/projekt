fetch("https://github.com/atgrafic/projekt/blob/master/json/list.json", { mode: "no-cors" })
  .then(response => response.json())
  .then(data => console.log(data));

// const carsList_url = "https://github.com/atgrafic/projekt/blob/master/json/list.json";

//     async function carsList() {
//       const response = await fetch('carsList_url',{ mode: "no-cors" });
//       const json = await response.json();
//       const { message: imageUrl } = await result.json();

//       carsList
//     }

//     carsList();
