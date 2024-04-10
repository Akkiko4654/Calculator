const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
               }
               break;
            case '+':
            case '-':
            case '*':
            case '/':
                if(display.innerText.endsWith('+') || display.innerText.endsWith('-') || display.innerText.endsWith('*') || display.innerText.endsWith('/')){
                    display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
                }else{
                    display.innerText += e.target.innerText;
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch(e){
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    });
});