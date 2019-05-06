function open_side() {
    document.getElementById("nav").style.marginLeft = "25%";
    document.getElementById("nav").style.width = "75%";
    document.getElementById("Sidebar").style.width = "25%";
    document.getElementById("Sidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("acctive").style.display = "none";
    document.getElementById("containerh").style.marginLeft = "25%";
    document.getElementById("containerh").style.width = "75%";
    document.getElementById("container1h").style.marginLeft = "25%";
    document.getElementById("container1h").style.width = "75%";
    document.getElementById("container2h").style.marginLeft = "25%";
    document.getElementById("container2h").style.width = "75%";
    document.getElementById("container3h").style.marginLeft = "25%";
    document.getElementById("container3h").style.width = "75%";
    document.getElementById("footr").style.marginLeft = "25%";
    document.getElementById("footr").style.width = "75%";
}
function close_side() {
    document.getElementById("nav").style.marginLeft = "0%";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("Sidebar").style.display = "none";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("acctive").style.display = "block";
    document.getElementById("containerh").style.marginLeft = "0%";
    document.getElementById("containerh").style.width = "100%";
    document.getElementById("container1h").style.marginLeft = "0%";
    document.getElementById("container1h").style.width = "100%";
    document.getElementById("container2h").style.marginLeft = "0%";
    document.getElementById("container2h").style.width = "100%";
    document.getElementById("container3h").style.marginLeft = "0%";
    document.getElementById("container3h").style.width = "100%";
    document.getElementById("footr").style.marginLeft = "0%";
    document.getElementById("footr").style.width = "100%";
}
function showElectronics() {
    document.getElementById("Electronicssh").style.display = "block";
    document.getElementById("Electronics").style.display = "none";
}
function hideElectronics() {
    document.getElementById("Electronicssh").style.display = "none";
    document.getElementById("Electronics").style.display = "block";
}
function Suitsshow() {
    document.getElementById("Suitssh").style.display = "block";
    document.getElementById("Suits").style.display = "none";
}
function Suitshide() {
    document.getElementById("Suitssh").style.display = "none";
    document.getElementById("Suits").style.display = "block";
}
function showDresses() {
    document.getElementById("Dressessh").style.display = "block";
    document.getElementById("Dresses").style.display = "none";
}
function hideDresses() {
    document.getElementById("Dressessh").style.display = "none";
    document.getElementById("Dresses").style.display = "block";
}
function showShoes() {
    document.getElementById("Shoessh").style.display = "block";
    document.getElementById("Shoes").style.display = "none";
}
function hideShoes() {
    document.getElementById("Shoessh").style.display = "none";
    document.getElementById("Shoes").style.display = "block";
}
function showbooks() {
    document.getElementById("bookssh").style.display = "block";
    document.getElementById("books").style.display = "none";
}
function hidebooks() {
    document.getElementById("bookssh").style.display = "none";
    document.getElementById("books").style.display = "block";
}
function showToys() {
    document.getElementById("Toyssh").style.display = "block";
    document.getElementById("Toys").style.display = "none";
}
function hideToys() {
    document.getElementById("Toyssh").style.display = "none";
    document.getElementById("Toys").style.display = "block";
}
function showkitchen() {
    document.getElementById("kitchensh").style.display = "block";
    document.getElementById("kitchen").style.display = "none";
}
function hidekitchen() {
    document.getElementById("kitchensh").style.display = "none";
    document.getElementById("kitchen").style.display = "block";
}
function showkitchen() {
    document.getElementById("kitchensh").style.display = "block";
    document.getElementById("kitchen").style.display = "none";
}
function hidekitchen() {
    document.getElementById("kitchensh").style.display = "none";
    document.getElementById("kitchen").style.display = "block";
}function buyinfoshow() {
    document.getElementById("buyinfo").style.display = "block";
    document.getElementById("buyinfo").style.left = "20%";
    document.getElem
} function buyinfohide() {
    document.getElementById("buyinfo").style.display = "none"; entById("buyinfo").style.top = "15%";
}
function buyinfoshow() {
    document.getElementById("buyinfo").style.display = "block";
    document.getElementById("buyinfo").style.left = "20%";
    document.getElementById("buyinfo").style.top = "15%";
    document.getElementById("about").style.display = "none";
}
function buyinfohide() {
    document.getElementById("buyinfo").style.display = "none";

}
function aboutshow() {
    document.getElementById("about").style.display = "block";
    document.getElementById("buyinfo").style.display = "none";

}
function abouthide() {
    document.getElementById("about").style.display = "none";

}
var comments = ["this exellent product ", " this vrey good product ", " this fanatastic product "];
var text = "<div></div>"
function showcomment() {

    var a = document.getElementById("com").value;
    if (a !== comments[comments.length - 1] && a !== "") {
        comments.push(a);
        comments.forEach(myFunction);

    }
    document.getElementById("shcomment").innerHTML = comments.join("<br />");
}
function myFunction(value) {
    text += "<div>" + value + "</div>";
}
var text = "<div></div>"
document.getElementById("shcomment").innerHTML = comments.join("<br />");
