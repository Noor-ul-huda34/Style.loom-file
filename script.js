

let cart = 0;

const cartCount = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-btn");

const cartBtn = document.getElementById("cartBtn");

const toast = document.getElementById("toast");




addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cart++;

        cartCount.textContent = cart;

        button.textContent = "Added ✓";

        showToast("Added to cart ✓");


        setTimeout(function () {

            button.textContent = "Add to Cart";

        }, 1000);

    });

});




cartBtn.addEventListener("click", function () {

    if (cart === 0) {

        showToast("Your cart is empty");

    } else {

        showToast(
            cart + " item" + (cart > 1 ? "s" : "") + " in your cart"
        );

    }

});




const filters = document.querySelectorAll(".filter");

const products = document.querySelectorAll(".product-card");

const productCount = document.getElementById("productCount");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        filters.forEach(function (btn) {

            btn.classList.remove("active");

        });


        filter.classList.add("active");


        const category = filter.dataset.category;

        let count = 0;


        products.forEach(function (product) {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {

                product.classList.remove("hide");

                count++;

            } else {

                product.classList.add("hide");

            }

        });


        productCount.textContent =
            count + " product" + (count !== 1 ? "s" : "");

    });

});




const shopBtn = document.getElementById("shopBtn");


shopBtn.addEventListener("click", function () {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

});




const contactBtn = document.getElementById("contactBtn");


contactBtn.addEventListener("click", function () {

    showToast("Contact: hello@styleloom.com");

});




let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 2200);

}


const valueCards = document.querySelectorAll(".value-card");


const cardObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


valueCards.forEach(function (card) {

    cardObserver.observe(card);

});



valueCards.forEach(function (card) {

    card.addEventListener("click", function () {

        valueCards.forEach(function (item) {

            item.classList.remove("selected");

        });

        card.classList.add("selected");

    });

});


const journeyCards = document.querySelectorAll(".journey-card");




journeyCards.forEach(function (card) {

    card.addEventListener("click", function () {

        journeyCards.forEach(function (item) {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});




const journeyObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.2
    }

);


journeyCards.forEach(function (card, index) {

    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    card.style.transition =
        `opacity 0.5s ease ${index * 0.1}s,
         transform 0.5s ease ${index * 0.1}s`;

    journeyObserver.observe(card);

});


const collectionFilters =
    document.querySelectorAll(".collection-filter");

const collectionCards =
    document.querySelectorAll(".collection-card");




collectionFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {


        collectionFilters.forEach(function (button) {

            button.classList.remove("active");

        });



        filter.classList.add("active");



        const category =
            filter.getAttribute("data-category");


        // Filter cards
        collectionCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});




const collectionShopButtons =
    document.querySelectorAll(".collection-shop");


collectionShopButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.textContent = "Added ✓";


        setTimeout(function () {

            button.textContent = "Shop Now ↗";

        }, 1000);

    });

});




const collectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


collectionCards.forEach(function (card) {

    collectionObserver.observe(card);

});


const testimonialCards =
    document.querySelectorAll(".testimonial-card");




testimonialCards.forEach(function (card) {

    card.addEventListener("click", function () {

        testimonialCards.forEach(function (item) {

            item.classList.remove("selected");

        });

        card.classList.add("selected");

    });

});



const testimonialObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


testimonialCards.forEach(function (card, index) {

    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    card.style.transition =
        `opacity 0.5s ease ${index * 0.08}s,
         transform 0.5s ease ${index * 0.08}s`;

    testimonialObserver.observe(card);

});


const faqFilters =
    document.querySelectorAll(".faq-filter");

const faqCards =
    document.querySelectorAll(".faq-card");


faqFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {


        faqFilters.forEach(function (button) {

            button.classList.remove("active");

        });



        filter.classList.add("active");



        const selectedCategory =
            filter.getAttribute("data-filter");



        faqCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});



const faqObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


faqCards.forEach(function (card) {

    faqObserver.observe(card);

});





const ctaShopBtn =
    document.getElementById("ctaShopBtn");

const faqToast =
    document.getElementById("faqToast");


ctaShopBtn.addEventListener("click", function () {

    faqToast.textContent =
        "Welcome to StyleLoom! 🛍️";

    faqToast.classList.add("show");


    setTimeout(function () {

        faqToast.classList.remove("show");

    }, 2000);

});