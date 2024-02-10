addEventListener('DOMContentLoaded', e => {
    const form = document.getElementById('form');
    const grade1 = document.getElementById('grade1');
    const grade2 = document.getElementById('grade2');
    const grade3 = document.getElementById('grade3');
    const grade4 = document.getElementById('grade4');
    const amount = document.getElementById('amount');
    const text = document.getElementById('result');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        let total = +grade1.value + +grade2.value + +grade3.value + +grade4.value;
        console.warn(total);
        let result = total / +amount.value;
        text.textContent = "The result is " + result;
    })
})