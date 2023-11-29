function recomendarIA(nome) {
    // Obtém as letras do nome
    const letras = nome.split("");
  
    // Cria uma lista de IAs
    const ias = ["Bard", "LaMDA", "GPT-3", "GPT-Neo", "Jena", "Hummingbird", "Cleverbot", "Mitsuku", "ELIZA","AlphaGo", "AlphaFold", "Alexa","Bixby", "Baidu Brain","Cleverbot", "CogniToy", "Copilot DeepMind", "DeepVariant", "Dall-E 2", "Erica", "Evi", "Google AI" ,"ChatGPT","Gboard",
    "TensorFlow", "Watson Assistant", "Tay","Unitree", "Upwork", "Utter","Viv", "Watson Visual Recognition","WAVE", "Wolfram Alpha", "WOZ","Xperience", "XRSpace", "Xiaoice","YOLOv5", "Yotta", "You", "Zetta", "Zen", "Zocdoc"];
  
    // Recomenda uma IA para cada letra
    const saida = [];
    for (const letra of letras) {
      // Verifica se a letra já foi usada
      const jaFoiUsada = saida.some((ia) => ia.letra === letra);
  
      // Se não foi usada, recomenda uma IA
      if (!jaFoiUsada) {
        const ia = ias.shift();
  
        // Atualiza a lista de IAs
        ias.push(ia);
  
        // Adiciona a IA à saída
        saida.push({ letra, ia });
      } else {
        // Se foi usada, recomenda a mesma IA
        saida.push({ letra, ia: ias[0] });
      }
    }
  
    // Exibe a saída
    const saidaElemento = document.getElementById("saida");
    saidaElemento.innerHTML = "";
    for (const ia of saida) {
      const li = document.createElement("li");
      li.innerHTML = `${ia.letra} - ${ia.ia}`;
      saidaElemento.appendChild(li);
    }
  }
  
  // Executa a função ao carregar a página
  window.onload = function() {
    const nomeElemento = document.getElementById("nome");
    nomeElemento.addEventListener("keyup", (e) => {
      recomendarIA(e.target.value);
    });
  };
  