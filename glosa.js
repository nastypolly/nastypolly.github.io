const buscador = document.getElementById('buscador');
const lista = document.getElementById('lista-glosario').getElementsByTagName('li');

buscador.addEventListener('keyup', () => {
  let filtro = buscador.value.toLowerCase();
  for (let item of lista) {
    let texto = item.textContent.toLowerCase();
    item.style.display = texto.includes(filtro) ? 'block' : 'none';
  }
});
