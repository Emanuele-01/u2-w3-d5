let ApiCaricamento = async () => {
    try{
        let market = await fetch("https://striveschool-api.herokuapp.com/api/product/", { 
        headers: { 
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzJkOWY4MWI0MjAwMTM5YjI3ZWUiLCJpYXQiOjE2NzkwNDUzMzcsImV4cCI6MTY4MDI1NDkzN30.qySwc4UZZVAeCniItmWovOpAW3D_j66d8-LqPsVjRBc" 
        } 
        })
        let market2;
        market2 = await market.json();
        console.log(market2);

        let containar = document.querySelector('.containar');
        containar.innerHTML= ""
        let linea = document.createElement('div');
        linea.className = 'row';
        linea.classList.add('row-cols-4');
        linea.classList.add('d-flex');
        linea.classList.add('align-items-end');
        containar.appendChild(linea);

        market2.forEach((article) => {
            const col = document.createElement("div")
                col.className = "col-6"
                col.innerHTML = `<div class="ms-5 me-5 mb-4 mt-4 card";>
                <img src="${article.imageUrl}" class="img-fluid card-img-top" alt="${article.name}">
                <div class="card-body">
                <h3 class="card-title">
                ${article.name}</h3>
                <h5 class="card-title">
                ${article.brand}</h5>
                <p class="card-text">
                ${article.description}</p>
                <h5 class="card-text">
                ${article.price} €</h5>
                <button type="button" class="ps-5 pe-5 btn btn-outline-success">Buy</button>
                <button type="button" class="btn btn-outline-warning">Edit</button>
            </div>`
            linea.appendChild(col);
        })
    }catch(err){
        console.log(err);
    }
}
ApiCaricamento();