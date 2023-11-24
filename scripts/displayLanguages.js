function displayLanguages(props) {
    const ul = document.querySelector("ul");
    ul.textContent = "";

    document.querySelector(".data-type").textContent =
        "10 most spoken languages in the world";

    const obj = {};

    for (const i of props) {
        for (const language of i.languages) {
            if (obj[language]) {
                obj[language]++;
            } else {
                obj[language] = 1;
            }
        }
    }

    const tenMostSpoken = Object.keys(obj)
        .map((language) => {
            return { Country: language, Count: obj[language] };
        })
        .sort((a, b) => {
            if (a.Count > b.Count) return -1;
            if (a.Count < b.Count) return 1;
            else return 0;
        })
        .slice(0, 10);

    const mostSpokenCount = tenMostSpoken[0].Count;
    tenMostSpoken.forEach((el) => {
        const percent = (el.Count / mostSpokenCount) * 100;
        const li = `<li>
                        <div class="tooltip">
                            <p>${el.Country}</p>
                            <span class="tooltiptext">${el.Country}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="bar" style="width: ${percent.toFixed()}%"></div>
                        </div>
                        <div class="tooltip">
                            <p>${el.Count}</p>
                            <span class="tooltiptext">${el.Count}</span>
                        </div>
                    </li>`;

        ul.innerHTML += li;
    });
}

export default displayLanguages;
