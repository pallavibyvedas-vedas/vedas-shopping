document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");
    const products = document.querySelectorAll(".featured-products .product");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        products.forEach(function (product) {

            const title = product.querySelector("h3");

            const productName = title
                ? title.textContent.toLowerCase()
                : "";

            if (searchText === "" || productName.includes(searchText)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

});
