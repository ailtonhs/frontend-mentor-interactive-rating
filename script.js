const submit = document.querySelector(".submit button");
const rate = document.querySelectorAll(".rating input");
const rateResult = document.getElementById("rate");
const experiencia = document.querySelector(".experiencia");
const result = document.querySelector(".result");
result.setAttribute("style", "display: none");

submit.addEventListener("click", () => {
    

    for (let i = 0; i < rate.length; i++) {
        if (rate[i].checked) {
            rateResult.innerHTML = rate[i].value;
        }
    }

    result.setAttribute("style", "display: flex");
    experiencia.setAttribute("style", "display: none");
});


