fetch("https://api.currencyfreaks.com/latest?apikey=755af3fb7afb4682ba8ef6a0b6271149")
    .then((result) => {
        // console.log(result);
        let myData = result.json();
        // console.log(myData)
        return myData;
    }).then((currency) => {
        let amount = document.querySelector(".amount");
        let egpPrice = document.querySelector(".egp span");
        let sarPrice = document.querySelector(".sar span");
        let tryPrice = document.querySelector(".try span");

        // egpPrice.innerHTML = amount.innerHTML * currency.rates["EGP"];
        egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
        sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
        tryPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["TRY"]);
        // console.log(currency.rates);
        console.log(currency.rates["EGP"]);
        console.log(currency.rates["SAR"]);
        console.log(currency.rates["TRY"]);
    })
