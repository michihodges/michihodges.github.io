(() => {
    const navbar = document.querySelector("#navbar__list");
    const sections = document.querySelectorAll('section');

    const buildNav = () => {
        for (let i = 0; i < sections.length; i++) {
            let navElement = document.createElement("li");
            navElement.classList.add("menu__link");
            navbar.appendChild(navElement);

            let navSection = sections[i];
            let navSelection = navSection.dataset.nav;
            console.log("navSelection " + navSelection);
            navElement.textContent = navSelection;
        
            navElement.dataset["section_id"] = navSection.id;
        }
    }

    const makeActive = () => {
        for (const section of sections) {
            const box = section.getBoundingClientRect();
            if (box.top <= 150 && box.bottom >= 150) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        }
    }

    const scrollToAnchor = e => {
        let section = document.querySelector(`#${e.target.dataset.section_id}`);
        section.scrollIntoView({behavior: "smooth"});
    }

    buildNav();

    navbar.addEventListener("click", scrollToAnchor);

    document.addEventListener("scroll", makeActive);
})();
