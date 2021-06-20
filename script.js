const container = document.querySelector(".container");
createDivs(container);
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    for (const child of container.children) {
        child.style.background = "";
    }
    const length = prompt("Enter number of cells for each side:");
    if (parseInt(length) <= 100) {
        document.documentElement.style.setProperty("--grid-cell-number", length);
        createDivs(container);
    }
});

/**
 * @param {HTMLDivElement} container 
 */
function createDivs(container) {
    removeChildren(container);
    const cellNumber = getComputedStyle(document.documentElement)
        .getPropertyValue("--grid-cell-number")
    for (let i = 0; i < cellNumber; i++) {
        for (let j = 0; j < cellNumber; j++) {
            const child = document.createElement("div");
            child.addEventListener("mouseover", () => {
                child.style.background = "black";
            });
            container.appendChild(child)
        }
    }
}

/**
 * 
 * @param {Element} container 
 */
function removeChildren(container) {
    for (const child of container.children) {
        container.removeChild(child);
    }
}