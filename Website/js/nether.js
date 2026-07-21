let direction = "overworld";

function swapDirection() {

    if (direction === "overworld") {

        direction = "nether";

        document.getElementById("fromLabel").textContent = "Nether";
        document.getElementById("toLabel").textContent = "Overworld";

        document.getElementById("x").placeholder = "Nether X";
        document.getElementById("z").placeholder = "Nether Z";

    } else {

        direction = "overworld";

        document.getElementById("fromLabel").textContent = "Overworld";
        document.getElementById("toLabel").textContent = "Nether";

        document.getElementById("x").placeholder = "Overworld X";
        document.getElementById("z").placeholder = "Overworld Z";

    }

}

function calculateNether() {

    const xInput = document.getElementById("x");
    const zInput = document.getElementById("z");

    const x = Number(xInput.value);
    const z = Number(zInput.value);

    if (xInput.value === "" || zInput.value === "") {

        document.getElementById("result").textContent =
            "Please enter both X and Z coordinates.";

        return;

    }

    let resultX;
    let resultZ;

    if (direction === "overworld") {

       resultX = Math.round(x / 8);
resultZ = Math.round(z / 8);

        document.getElementById("result").innerHTML =
`
<strong>Nether Coordinates</strong><br><br>

X: ${resultX}<br>

Z: ${resultZ}
`;

    } else {

       resultX = Math.round(x * 8);
resultZ = Math.round(z * 8);

        document.getElementById("result").innerHTML =
`
<strong>Overworld Coordinates</strong><br><br>

X: ${resultX}<br>

Z: ${resultZ}
`;

    }

}
function handleEnter(event) {

    if (event.key === "Enter") {

        calculateNether();

    }
}
function copyResult() {

    const result = document.getElementById("result").innerText;

    const message = document.getElementById("copyMessage");

    if (result === "") {

        message.textContent = "Please calculate coordinates first.";

        setTimeout(() => {

            message.textContent = "";

        }, 2000);

        return;

    }

    navigator.clipboard.writeText(result);

    message.textContent = "✓ Coordinates copied!";

    setTimeout(() => {

        message.textContent = "";

    }, 2000);

}