let countries = [];

async function dispCont() {
  let allCont = await fetch("https://restcountries.com/v3.1/all");
  countries = await allCont.json();
  displayCountries(countries);
}




function displayCountries(countries) {
  countries.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else if (a.name.common > b.name.common) {
      return 1;
    } else {
      return 0;
    }
  });

  theCountries.innerHTML = "";
  countries.forEach((el, index) => {
    theCountries.innerHTML += `
      <tr class="">
        <td>${index+1}</td>
        <td>${el.name.common}</td>
        <td>${el.capital}</td>
        <td>${el.population}</td>
        <td>${el.languages ? Object.values(el.languages).join(", ") : "None"}</td>
        <td>${el.independent}</td>
      </tr>
    `;
  });
}

dispCont();

let ind = document.getElementById("ind");
let nonInd = document.getElementById("nonInd");

ind.addEventListener("click", () => {
  let indptCountries = countries.filter((country) => country.independent == true);
  displayCountries(indptCountries);
});

nonInd.addEventListener("click", () => {
  let nonIndptCountries = countries.filter((country) => country.independent == false);
  displayCountries(nonIndptCountries);
});
