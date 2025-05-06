const depoimentos = [
    {
      nome: "Angelina Nascimento",
      reviews: "3 reviews · 2 photos",
      estrelas: 5,
      tempo: "4 years ago",
      texto: "Ótimo atendimento, ambiente excelente, profissionais capacitados... Sou cliente e recomendo!",
      imagem: "https://lh3.googleusercontent.com/a-/ALV-UjWHgjCmfF3115WdT40s-pzTyMNls2m9B-x-6hcFo5NK1-qPxNKcpQ=w72-h72-p-rp-mo-ba1-br100"
    },
    {
      nome: "Álvaro Rocha",
      reviews: "5 reviews · 1 photo",
      estrelas: 4,
      tempo: "3 years ago",
      texto: "Top! Boa estrutura e ótimo atendimento.",
      imagem: "https://lh3.googleusercontent.com/a-/ALV-UjVfzhOxXGyDz8UO14Vi-icrrWCRZrtg0fW1VZtvWxaX4kr2gr5p=w72-h72-p-rp-mo-ba6-br100"
    },
    {
      nome: "janisson menezes",
      reviews: "2 reviews",
      estrelas: 5,
      tempo: "8 year ago",
      texto: "Ambiente climatilizado, com um ótimo atendimento e uma amplo estoque de remédios, suplementos e perfumes!",
      imagem: "https://lh3.googleusercontent.com/a-/ALV-UjVsQR3OAPYBcVC5dsbZfjHRb4LiyD3oAVnEDkcaXBaZicLLE0MxWQ=w72-h72-p-rp-mo-ba5-br100"
    }
    ,{
        nome: "Fabio Oliveira",
        reviews: "2 reviews",
        estrelas: 4,
        tempo: "8 year ago",
        texto: "Ambiente limpo e organizado, uma grande variedade de marcas e remédios.",
        imagem: "https://lh3.googleusercontent.com/a-/ALV-UjX_Omz_9bDaRR-p2kpSdUKFvIlvUMfsZOUe6M79867lHv1iykM=w72-h72-p-rp-mo-ba4-br100"
      }
  ];


  function gerarDepoimentos(depoimentos) {
    const container = document.querySelector("#depoimentos-container");
    depoimentos.forEach(depoimento => {
      const estrelas = Array(depoimento.estrelas).fill('<i class="bi bi-star-fill text-warning"></i>').join('');
      const cardHTML = `
        <div class="card border-0 mb-4" style="max-width: 500px">
          <div class="card-body p-0 d-flex flex-column gap-2">
            <!-- Perfil -->
            <div class="d-flex align-items-start">
              <img class="p-2" alt="${depoimento.nome}" src="${depoimento.imagem}">
              <div>
                <strong>${depoimento.nome}</strong><br>
                <small class="text-muted">${depoimento.reviews}</small>
              </div>
            </div>
            <!-- Estrelas e tempo -->
            <div class="d-flex align-items-center gap-2">
              <div>${estrelas}</div>
              <small class="text-muted">${depoimento.tempo}</small>
            </div>
            <!-- Texto do depoimento -->
            <p class="mb-1">${depoimento.texto}</p>
          </div>
        </div>
      `;
      container.innerHTML += cardHTML;
    });
  }
  
  // Chamar a função após o carregamento da página
  document.addEventListener("DOMContentLoaded", () => {
    gerarDepoimentos(depoimentos);
  });