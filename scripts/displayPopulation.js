const displayPopulation = (props) => {
    const totalPop = props.reduce((acc, curr) => acc + curr.population, 0);
    const ul = document.querySelector("ul");
    ul.textContent = "";

    document.querySelector(".data-type").textContent =
        "10 most populated countries in the world";

    function formatNumberWithDots(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const tenMostPopulated = props
        .sort((a, b) => {
            if (a.population < b.population) return 1;
            if (a.population > b.population) return -1;
            else return 0;
        })
        .slice(0, 10);

    ul.innerHTML = `<li>
                        <div class="tooltip">
                            <p>World</p>
                            <span class="tooltiptext">World</span>
                        </div>
                        <div class="progress-bar">
                            <div class="bar" style="width: 100%">100%</div>
                        </div>
                        <div class="tooltip">
                            <p>${formatNumberWithDots(totalPop)}</p>
                            <span class="tooltiptext">${formatNumberWithDots(
                                totalPop
                            )}</span>
                        </div>
                    </li>`;

    tenMostPopulated.forEach((el) => {
        const percent = (el.population / totalPop) * 200;
        const li = `<li>
                        <div class="tooltip">
                            <p>${el.name}</p>
                            <span class="tooltiptext">${el.name}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="bar" style="width: ${percent}%">${percent.toFixed()}%</div>
                        </div>
                        <div class="tooltip">
                            <p>${formatNumberWithDots(el.population)}</p>
                            <span class="tooltiptext">${formatNumberWithDots(
                                el.population
                            )}</span>
                        </div>
                    </li>`;

        ul.innerHTML += li;
    });
};
export default displayPopulation;
