fetch("json/index-products.json")
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    data.forEach(function (item) {
      output += `
        <div class="indexproduct">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          
        </div>
      `;
    });
    document.querySelector("#index-products").innerHTML = output;
  })
  .catch((error) => {
    console.error("Error fetching products", error);
  });