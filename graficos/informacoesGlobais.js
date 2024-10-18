const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function vizualizarInformacoesGlobais() {
    try {
      const res = await fetch(url);
      const dados = await res.json();
  
      const paragrafo = document.createElement('p');
      paragrafo.classList.add('graficos-container__texto');
      paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}<span/> pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas?`;
  
      const container = document.getElementById('graficos-container');
      container.appendChild(paragrafo);
    } catch (error) {
      console.error('Erro ao buscar informações globais:', error);
    }
  }
  
  vizualizarInformacoesGlobais();
  