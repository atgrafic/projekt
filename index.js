// fetch("https://github.com/atgrafic/projekt/blob/master/json/list.json", { mode: "no-cors" })
//   .then(response => response.json())
//   .then(data => console.log(data));

const carsList_url = "./json/list.json";

async function carsList() {
    const response = await fetch(carsList_url, { mode: "no-cors" });
    console.log(response);
    const json = await response.json();
    console.log(json);
    document.getElementById("carsList").innerHTML = json;

}

carsList();
