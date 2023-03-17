let ApiCaricamento = async () => {
    try{
        let market = await fetch("https://striveschool-api.herokuapp.com/api/product/", { 
        headers: { 
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzJkOWY4MWI0MjAwMTM5YjI3ZWUiLCJpYXQiOjE2NzkwNDUzMzcsImV4cCI6MTY4MDI1NDkzN30.qySwc4UZZVAeCniItmWovOpAW3D_j66d8-LqPsVjRBc" 
        } 
        })
        let market2;
        market2 = await market.json();
        console.log(ApiCaricamento());
    }catch(err){
        console.log(err);
    }
}
ApiCaricamento();