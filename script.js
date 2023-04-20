async function dispCont() {
  let allCont = await fetch("https://restcountries.com/v3.1/all");
  let res = await allCont.json();
  console.log(res);
  res.forEach((el, index) => {
    theCountries.innerHTML += `
    <tr class="">
       <td>${index+1}</td>
       <td>${el.name.common}</td>
       <td>${el.capital}</td>
       <td>${el.population}</td>
       <td>${Object.values(el.languages).join(", ")}</td>
       <td>${el.independent}</td>
    </tr>
    `;
  });
}

dispCont();

let ind = document.getElementById("ind");
let nonInd = document.getElementById("nonInd");

ind.addEventListener("click", async() => {
    let allCount = await fetch("https://restcountries.com/v3.1/all");
    let res = await allCount.json();
    let indptCountries = res.filter((country) => country.independent == true);
    console.log(indptCountries);
    theCountries.innerHTML = "";
    indptCountries.forEach((el, index) => {
        theCountries.innerHTML += `
         <tr class="">
            <td>${index+1}</td>
            <td>${el.name.common}</td>
            <td>${el.capital}</td>
            <td>${el.population}</td>
            <td>${Object.values(el.languages).join(", ")}</td>
            <td>${el.independent}</td>
         </tr>
         `
    });
});


nonInd.addEventListener("click", async() => {
    let allCount = await fetch("https://restcountries.com/v3.1/all");
    let res = await allCount.json();
    let indptCountries = res.filter((country) => country.independent == false);
    console.log(indptCountries);
    theCountries.innerHTML = "";
    indptCountries.forEach((el, index) => {
        theCountries.innerHTML += `
         <tr class="">
            <td>${index+1}</td>
            <td>${el.name.common}</td>
            <td>${el.capital}</td>
            <td>${el.population}</td>
            <td>${Object.values(el.languages).join(", ")}</td>
            <td>${el.independent}</td>
         </tr>
         `
    });
});













