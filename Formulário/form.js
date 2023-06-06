const form = document.getElementById('meuForm');
const submitBtn = document.getElementById('submitBtn');
const cardsContainer = document.getElementById('cardsContainer');

form.addEventListener('submit', (event) => {
  event.preventDefault();

 
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const urlImagem = document.getElementById('urlImagem').value;
  const assinatura = document.getElementById('assinatura').value;

 
  if (titulo && descricao && urlImagem && assinatura) {
    
    // const card = document.createElement('div');
    // card.classList.add('card');

    // const imagem = document.createElement('img');
    // imagem.src = urlImagem;

    // const cardInfo = document.createElement('div');
    // cardInfo.classList.add('card-info');

    // const tituloElement = document.createElement('h2');
    // tituloElement.textContent = titulo;

    // const descricaoElement = document.createElement('p');
    // descricaoElement.textContent = descricao;

    // const assinaturaElement = document.createElement('p');
    // assinaturaElement.classList.add('assinatura');
    // assinaturaElement.textContent = assinatura;

    // cardInfo.appendChild(tituloElement);
    // cardInfo.appendChild(descricaoElement);

    // card.appendChild(imagem);
    // card.appendChild(cardInfo);
    // card.appendChild(assinaturaElement);

    //     cardsContainer.appendChild(card);
    
        cardsContainer.innerHTML += `
        <div class="card">
            <img src="${urlImagem}">
            <div class="card-info">
                <h2>${titulo}</h2>
                <p>${descricao}</p>
            </div>
            <p class="assinatura">${assinatura}</p>
        </div>
    `
    form.reset();
    submitBtn.disabled = true;
  }
});

function validacao(inputElement, errorElement, errorMessage) {
  if (!inputElement.validity.valid) {
    errorElement.textContent = errorMessage;
    
  } else {
    errorElement.textContent = '';
    
  }
}

const tituloInput = document.getElementById('titulo');
const descricaoInput = document.getElementById('descricao');
const urlImagemInput = document.getElementById('urlImagem');
const assinaturaInput = document.getElementById('assinatura');

const tituloError = document.getElementById('tituloError');
const descricaoError = document.getElementById('descricaoError');
const urlImagemError = document.getElementById('urlImagemError');
const assinaturaError = document.getElementById('assinaturaError');

function validacaoLabel(inputElement, errorElement, errorMessage) {
  inputElement.addEventListener('input', () => {
   
    validacao(inputElement, errorElement, errorMessage);

   
    const isFormValid = tituloInput.value && descricaoInput.value && urlImagemInput.value && assinaturaInput.value;

   
    submitBtn.disabled = !isFormValid;
  });
}

validacaoLabel(tituloInput, tituloError, 'Mínimo 4 caracteres.');
validacaoLabel(descricaoInput, descricaoError, 'Mínimo 4 caracteres.');
validacaoLabel(urlImagemInput, urlImagemError, 'URL inválida.');
validacaoLabel(assinaturaInput, assinaturaError, 'O campo de assinatura deve ser preenchido.');
submitBtn.disabled = true;



