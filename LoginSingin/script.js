//Para fazer a tela virar
const card = document.querySelector("#card");
const buttonS = document.querySelector(".btn-sing")
const buttonL = document.querySelector(".btn-log")
buttonS.addEventListener("click",(e)=>{
    card.classList.toggle("flip")
})
buttonL.addEventListener("click",(e)=>{
    card.classList.toggle("flip")
})

//login
const loginForm = document.querySelector('#logform');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('Por favor, preencha todos os campos');
    return;
  }

  loginForm.submit();
});

//singin
const singinForm = document.querySelector('#singin-form');

      singinForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const turmaInput = document.querySelector('#turma');
        const professorInput = document.querySelector('#professor');
        const quantidadeAlunosInput = document.querySelector('#quantidade-alunos');
        const senhaInput = document.querySelector('#senha');
        const verificacaoSenhaInput = document.querySelector('#verificacao-senha');

        const turmaValue = turmaInput.value.trim();
        const professorValue = professorInput.value.trim();
        const quantidadeAlunosValue = quantidadeAlunosInput.value.trim();
        const senhaValue = senhaInput.value.trim();
        const verificacaoSenhaValue = verificacaoSenhaInput.value.trim();

        if (turmaValue === '' || professorValue === '' || quantidadeAlunosValue === '' || senhaValue === '' || verificacaoSenhaValue === '') {
          alert('Por favor, preencha todos os campos');
          return;
        }

        if (senhaValue !== verificacaoSenhaValue) {
          alert('As senhas digitadas não coincidem');
          return;
        }

        singinForm.submit();
      });