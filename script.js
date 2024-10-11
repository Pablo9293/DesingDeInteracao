// Captura os elementos do DOM
const bgColorInput = document.getElementById('bgColor');
const borderColorInput = document.getElementById('borderColor');
const sizeInput = document.getElementById('size');
const textInput = document.getElementById('text');
const borderRadiusInput = document.getElementById('borderRadius');
const card = document.getElementById('card');
const cardText = document.getElementById('cardText');

// Função para aplicar as alterações no cartão
function updateCard() {
    // Mudar a cor de fundo
    card.style.backgroundColor = bgColorInput.value;

    // Mudar a cor da borda
    card.style.borderColor = borderColorInput.value;

    // Alterar o tamanho da div (cartão)
    const size = sizeInput.value + 'px';
    card.style.width = size;
    card.style.height = size;

    // Alterar o texto do cartão
    cardText.textContent = textInput.value ? textInput.value : 'Texto de Exemplo';

    // Mudar o arredondamento da borda
    card.style.borderRadius = borderRadiusInput.value + 'px';
}

// Adiciona eventos para quando o usuário alterar os inputs
bgColorInput.addEventListener('input', updateCard);
borderColorInput.addEventListener('input', updateCard);
sizeInput.addEventListener('input', updateCard);
textInput.addEventListener('input', updateCard);
borderRadiusInput.addEventListener('input', updateCard);

// Chama a função pela primeira vez para garantir que o cartão está atualizado
updateCard();
