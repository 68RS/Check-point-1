const formControlTituloRef = document.querySelector('#formControlTitulo');
const formControlUrlDaImagemRef = document.querySelector('#formControlUrlDaImagem');
const formControlDescricaoRef = document.querySelector('#formControlDescricao');
const loginButtonRef = document.querySelector('#loginButton');

var formHasErro = {
    titulo: true,
    urlDaImagem: true,
    descricao: true
}

function validateUserTitulo(event) {

    const target = event.target
    const value = event.target.value
    const isvalid = target.checkValidity()

    console.log(value)

   
    if(isvalid) {
        formControlTitulo.classList.remove('error')
        formHasErro = false
        console.log('Valor válido')
    
    }else {
        formControlTitulo.classList.add('error')
        formHasErro = true
        console.log('Valor inválido')
      }
    
      validateUserTitulo()
} 

formControlRef.addEventListener('keyup', (event) => valideteUserName(event))
loginButtonRef.addEventListener('click', (event) => {event.preventDefault})
    
    
        
