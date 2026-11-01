document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");
    const products = document.querySelectorAll(".featured-products .product");

    if (searchInput && products.length) {

        searchInput.addEventListener("input", function () {

            const searchText = this.value.toLowerCase().trim();

            products.forEach(function (product) {

                const productText = product.innerText.toLowerCase();

                if (productText.includes(searchText)) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            });

        });

    }

});
