let x = "";

let ButtonValue = document.querySelectorAll('.All-button-class');
Array.from(ButtonValue).forEach((Data1) => {
    Data1.addEventListener("click", (v) => {
        // console.log(v.target)

        if (v.target.innerHTML === '=') {
            x = eval(x)
            document.querySelector('.inputvk').value = x;
        } else if (['*', '+', '-', '/'].includes(v.target.value)) {

            let inputElement = document.querySelector('.inputvk');

            let inputValue = inputElement.value;

            let lastCharacter = inputValue.charAt(inputValue.length - 1);

            if (['*', '+', '-', '/'].includes(lastCharacter) && ['*', '+', '-', '/'].includes(v.target.value)) {
                inputValue = inputValue

            } else {
                inputValue += v.target.value;
                x = inputValue

            }
            inputElement.value = inputValue;


        }
       
        else if (v.target.innerHTML == "C") {
            x = "";
            document.querySelector('.inputvk').value = x;
        }
        else {
            x = x + v.target.innerHTML;
            console.log("input", x)
            document.querySelector('.inputvk').value = x;
        };


    })
})

