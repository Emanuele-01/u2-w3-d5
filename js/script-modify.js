let UserId = Math.floor(Math.random() * 1000);

// let nameU = document.getElementById('nameArticle');
// let desciption = document.getElementById('Description');
// let brand = document.getElementById('brand');
// let imageUrl = document.getElementById('imgUrl');
// let price = document.getElementById('priceArticle');

const push = async () => {

    // let newObj = {

    //     name: nameU.value,
    //     desciption: desciption.value,
    //     brand: brand.value,
    //     imageUrl: imageUrl.value,
    //     price: price.value,
    //     userId: UserId
    // };

    let newObj = {
        name: document.getElementById('nameArticle').value,
        desciption: document.getElementById('Description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('imgUrl').value,
        price: document.getElementById('priceArticle').value,
        userId: UserId
    }

    try{

        let market = fetch("https://striveschool-api.herokuapp.com/api/product/", { 
            method : 'post',
            body: JSON.stringify(newObj),
            headers: { 
                'Content-Type' : "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzJkOWY4MWI0MjAwMTM5YjI3ZWUiLCJpYXQiOjE2NzkwNDUzMzcsImV4cCI6MTY4MDI1NDkzN30.qySwc4UZZVAeCniItmWovOpAW3D_j66d8-LqPsVjRBc" 
            } 
            })
            let market2;
            market2 = await market.json();
            console.log(market2);
    }catch (err){
        console.log(err);
    }
}
push();