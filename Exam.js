document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let changed = true;
    const clickHandler = () =>{   
        if( changed ){ 
            body.style.backgroundColor = "black";
            body.style.color = "white";
            changed = false;
        }else{
            body.style.backgroundColor = "white";
            body.style.color = "black";
            changed = true;
        }
    }
    const btn = document.querySelector(".change");
    btn.addEventListener("click", clickHandler);
});

document.addEventListener('DOMContentLoaded', () => {
    const title = document.h2;
    let vul = 1;
    const ReName = () => {
        if (vul == 1){
            document.getElementById("ti").innerHTML = "true"
            vul--;
        }
        else {
            document.getElementById("ti").innerHTML = "false"
            vul++
        }
    }
    const btn = document.querySelector(".put")
    btn.addEventListener('click', ReName)

    const addText = () =>{
        const text = prompt('아무거나 적으')
        console.log(text)
        lin.textContent = text
        document.body.appendChild(lin)
    }

    const lin = document.createElement('p');
    const btn2 = document.querySelector('.text');
    btn2.addEventListener('click', addText)

})
