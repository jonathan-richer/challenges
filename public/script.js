
window.onload = () => {
    active = 0;
    const buttonsList = document.getElementsByClassName("btn");
    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList.item(i).addEventListener("click", e => {
            document.getElementsByClassName("active").item(0).classList.replace("active", "inactive");
            buttonsList.item(i).classList.replace("inactive", "active");
            active = i;
        });
    }
    document.getElementById("submit").onclick = () => {
        const val = document.getElementById("number_input").value;

        const outputElement = document.getElementById("output");

        switch (active) {
            case 0:
                outputElement.innerText = `The number ${val} ${prime(val) ? "is" : "isn't"} a prime.`;
                break;
            case 1:
                outputElement.innerText = `The number ${val} is factorized like so: ${factorize(val).join(' x ')}.`;
                break;
            case 2:
                const num = val.split('/')[0],
                      den = val.split('/')[1];
                
                const simplified = simplify(num, den);
                
                outputElement.innerText = `The simplified fraction of ${num}/${den} is ${simplified[0]}/${simplified[1]}.`;
        }
    };
}

const submit = () => {
    const val = document.getElementById("number_input").value;
    document.getElementById("output").innerText = (active < 3) ? functions[active](val).toString() : functions[3](val.split('/')[0],val.split('/')[1])
};
