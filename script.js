/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".about-card, " +
        ".highlight-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".certificate-card, " +
        ".education-card, " +
        ".contact-card"
    );


    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    /*
                     * Add animation when element
                     * enters the screen.
                     */

                    entry.target.classList.add("reveal");
                    entry.target.classList.add("show");

                } else {

                    /*
                     * Remove animation when element
                     * leaves the screen.
                     *
                     * This allows the animation to
                     * play again when we return.
                     */

                    entry.target.classList.remove("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });



    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.getElementById("navbar");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 40) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        },
        {
            passive: true
        }
    );



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );


    const activeSectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const currentSection =
                            entry.target.getAttribute("id");


                        navLinks.forEach((link) => {

                            link.classList.remove("active");

                            const linkTarget =
                                link.getAttribute("href");


                            if (
                                linkTarget ===
                                `#${currentSection}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach((section) => {

        activeSectionObserver.observe(section);

    });



    /* =====================================================
       NAVIGATION CLICK
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.forEach((item) => {
                    item.classList.remove("active");
                });

                link.classList.add("active");

            }
        );

    });



    /* =====================================================
       BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons = document.querySelectorAll(
        ".btn"
    );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            function (event) {

                const rect =
                    this.getBoundingClientRect();


                const ripple =
                    document.createElement("span");


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${
                        event.clientX -
                        rect.left -
                        size / 2
                    }px`;


                ripple.style.top =
                    `${
                        event.clientY -
                        rect.top -
                        size / 2
                    }px`;


                ripple.classList.add(
                    "ripple"
                );


                this.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });



    /* =====================================================
       PROJECT CARD MOUSE TILT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                /*
                 * Disable tilt on small screens.
                 */

                if (window.innerWidth <= 768) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -4;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 4;


                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-12px)
                    scale(1.015)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });



    /* =====================================================
       SKILL CARD TILT
    ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 768) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -3;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 3;


                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-10px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });



    /* =====================================================
       CONTACT CARD TILT
    ===================================================== */

    const contactCards =
        document.querySelectorAll(
            ".contact-card"
        );


    contactCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 768) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const rotateX =
                    ((y - rect.height / 2) /
                        (rect.height / 2)) * -2;


                const rotateY =
                    ((x - rect.width / 2) /
                        (rect.width / 2)) * 2;


                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-7px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });



    /* =====================================================
       PROFILE PHOTO MOUSE PARALLAX
    ===================================================== */

    const profile =
        document.querySelector(
            ".profile-ring"
        );


    const hero =
        document.querySelector(
            ".hero-section"
        );


    if (profile && hero) {

        hero.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 768) {
                    return;
                }


                const x =
                    (
                        event.clientX /
                        window.innerWidth
                    ) - 0.5;


                const y =
                    (
                        event.clientY /
                        window.innerHeight
                    ) - 0.5;


                profile.style.transform =
                    `
                    translate(
                        ${x * 12}px,
                        ${y * 12}px
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                profile.style.transform =
                    "";

            }
        );

    }



    /* =====================================================
       SMOOTH BUTTON RIPPLE STYLE
    ===================================================== */

    const style =
        document.createElement("style");


    style.innerHTML = `

        .ripple {
            position: absolute;

            border-radius: 50%;

            background:
                rgba(255, 255, 255, 0.35);

            transform: scale(0);

            pointer-events: none;

            animation:
                rippleAnimation 0.6s linear;
        }


        @keyframes rippleAnimation {

            to {
                transform: scale(2.5);
                opacity: 0;
            }

        }

    `;


    document.head.appendChild(style);



    /* =====================================================
       INITIAL PAGE STATE
    ===================================================== */

    window.dispatchEvent(
        new Event("scroll")
    );

});