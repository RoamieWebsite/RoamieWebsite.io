let box = document.createElement("div");

let rating = document.createElement("h6");
rating.innerText = `⭐ ${Number(data[i].rating) / 20}`;

let price = document.createElement("h6");
price.innerText = `€ ${Number(data[i].price) * 10} / Person`;

box.append(rating, price);
card.append(image, location, box);
anchor.append(card);
cont.append(anchor);
document.getElementById("packages").append(cont);

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", function() {
    let searched = data.filter(function(item) {
        if (item.name.toUpperCase().includes(searchBar.value.toUpperCase())) {
            return true;
        } else {
            return false;
        }
    });
    display(searched);
});

