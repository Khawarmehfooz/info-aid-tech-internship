
let display = document.getElementById("display");
let button = Array.from(document.getElementsByClassName("button"));
button.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "";
                break;
            case "DEL":
                if(display.innerText == ""){
                    break;
                }
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                }
            case "=":
                try {
                    result = eval(display.innerText);
                    display.innerText = result.toFixed(2);
                } catch {
                    display.innerText = "Math Error!";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});