function heroSlider() {
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 1000,
            speed: 400,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            spaceBetween: 100,
        },
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            speed: 400,
            spaceBetween: 100,
        },
    });
    swiper.slideNext();
}

heroSlider();

function questionsAcordeon() {
    $(".questions-block").on("click", function () {
        $(this).children(".text-question").toggleClass("none")
    });
}

questionsAcordeon();

function stepsAccordeon() {
    $(".step-one").on("click", function () {
        $(".step-one").removeClass("no-cliked");
        $(".step-one").addClass("clicked");
        $(".step-two").removeClass("clicked");
        $(".step-two").addClass("no-cliked");
        $(".step-tree").removeClass("clicked");
        $(".step-tree").addClass("no-cliked");
        $(".step-four").removeClass("clicked");
        $(".step-four").addClass("no-cliked");
    });

    $(".step-two").on("click", function () {
        $(".step-two").removeClass("no-cliked");
        $(".step-two").addClass("clicked");
        $(".step-one").removeClass("clicked");
        $(".step-one").addClass("no-cliked");
        $(".step-tree").removeClass("clicked");
        $(".step-tree").addClass("no-cliked");
        $(".step-four").removeClass("clicked");
        $(".step-four").addClass("no-cliked");

    });

    $(".step-tree").on("click", function () {
        $(".step-tree").removeClass("no-cliked");
        $(".step-tree").addClass("clicked");
        $(".step-two").removeClass("clicked");
        $(".step-two").addClass("no-cliked");
        $(".step-one").removeClass("clicked");
        $(".step-one").addClass("no-cliked");
        $(".step-four").removeClass("clicked");
        $(".step-four").addClass("no-cliked");

    });

    $(".step-four").on("click", function () {
        $(".step-four").removeClass("no-cliked");
        $(".step-four").addClass("clicked");
        $(".step-two").removeClass("clicked");
        $(".step-two").addClass("no-cliked");
        $(".step-tree").removeClass("clicked");
        $(".step-tree").addClass("no-cliked");
        $(".step-one").removeClass("clicked");
        $(".step-one").addClass("no-cliked");

    });

    function acordeonContainerSteps() {
        if ($(".step-one").hasClass("clicked")) {
            $("#image-step").addClass("img-two");
            $("#image-step").removeClass("image-step-four");
            $("#image-step").removeClass("image-step-tree");
            $("#image-step").removeClass("image-step-two");
            $(".step-one-container").removeClass("unclicked");
            $(".step-two-container").addClass("unclicked");
            $(".step-tree-container").addClass("unclicked");
            $(".step-four-container").addClass("unclicked");
        }

        if ($(".step-two").hasClass("clicked")) {
            $("#image-step").removeClass("img-two");
            $("#image-step").removeClass("image-step-four");
            $("#image-step").removeClass("image-step-tree");
            $("#image-step").addClass("image-step-two");
            $(".step-two-container").removeClass("unclicked");
            $(".step-one-container").addClass("unclicked");
            $(".step-tree-container").addClass("unclicked");
            $(".step-four-container").addClass("unclicked");
        }

        if ($(".step-tree").hasClass("clicked")) {
            $("#image-step").removeClass("img-two");
            $("#image-step").removeClass("image-step-four");
            $("#image-step").addClass("image-step-tree");
            $("#image-step").removeClass("image-step-two");
            $(".step-tree-container").removeClass("unclicked");
            $(".step-two-container").addClass("unclicked");
            $(".step-one-container").addClass("unclicked");
            $(".step-four-container").addClass("unclicked");

        }

        if ($(".step-four").hasClass("clicked")) {
            $("#image-step").removeClass("img-two");
            $("#image-step").addClass("image-step-four");
            $("#image-step").removeClass("image-step-tree");
            $("#image-step").removeClass("image-step-two");
            $(".step-four-container").removeClass("unclicked");
            $(".step-two-container").addClass("unclicked");
            $(".step-tree-container").addClass("unclicked");
            $(".step-one-container").addClass("unclicked");

        }
    }

    $(".step-one").on("click", function () {
        acordeonContainerSteps();
    });

    $(".step-two").on("click", function () {
        acordeonContainerSteps();
    });

    $(".step-tree").on("click", function () {
        acordeonContainerSteps();
    });

    $(".step-four").on("click", function () {
        acordeonContainerSteps();
    });

}

stepsAccordeon();

function search(){
    $(".button").on("click", function () {
        $(".search").toggleClass("none");
    });

    $(".remove").on("click", function () {
        $(".search").toggleClass("none");
    });
}

search();

function burgerMenu(){
    $(".mobile-burger").on("click", function () {
        $(".mobile-burger-menu").toggleClass("none");
    });
}

burgerMenu();