const btn =document.querySelector('[data-form-btn]');

const createTasck = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
    input.value="";
}
//arrow functions o funciones anonimas
btn.addEventListener('click',(createTasck));