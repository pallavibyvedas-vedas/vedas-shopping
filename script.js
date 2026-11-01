document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".featured-products .product");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        products.forEach(function (product) {

            const productText = product.textContent.toLowerCase();

            if (searchText === "" || productText.includes(searchText)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

});
