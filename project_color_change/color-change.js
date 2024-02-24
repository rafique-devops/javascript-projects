const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button)=> {
    console.log(button);
    button.addEventListener('click', (e)=> {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "black":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "pink":
                body.style.backgroundColor = e.target.id;
                break;
            case "purple":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }
    })
})