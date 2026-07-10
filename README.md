# Portfólio — Brenda Barbosa

Site recriado em HTML/CSS/JS puro (sem WordPress), pronto para publicar no GitHub Pages.

## ⚠️ Passo obrigatório: adicionar as imagens

Não consegui baixar as imagens do seu site automaticamente (o WordPress bloqueou o acesso).
Baixe cada imagem abaixo do seu painel WordPress (**Mídia > Biblioteca**) e coloque na pasta `images/` com **exatamente esse nome de arquivo**:

| Nome do arquivo (salvar como)                          | Onde usar                          |
|----------------------------------------------------------|-------------------------------------|
| `ilustracao-principal-portfolio-web-designer.png`        | Imagem principal do topo (hero)     |
| `paleta-de-cores.png`                                     | Seção "Para onde quero ir"          |
| `catequistas-2027.jpg`                                     | Card de projeto                     |
| `catequistas-2026.jpg`                                     | Card de projeto                     |
| `sabonetes.jpg`                                             | Card de projeto                     |
| `riachuelo.jpg`                                             | Card de projeto                     |
| `catequese-plus.jpg`                                         | Card de projeto                     |
| `cachorros.png`                                              | Seção "Minhas Paixões e Sonhos" (pode usar a `Group-23-1.png` ou `Group-22-1.png` originais) |

**Como baixar do WordPress:**
1. Entre no painel do seu site (`brenda.lovestoblog.com/wp-admin`)
2. Vá em **Mídia > Biblioteca**
3. Clique em cada imagem → **Baixar arquivo original**
4. Renomeie e coloque na pasta `images/` deste projeto

Se preferir, me envie as imagens aqui no chat que eu ajusto os nomes/caminhos pra você.

## Como testar localmente

Basta abrir o arquivo `index.html` no navegador. Não precisa de servidor.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `portfolio`)
2. Envie estes arquivos para o repositório (`index.html`, `style.css`, `script.js`, pasta `images/`)
3. No repositório, vá em **Settings > Pages**
4. Em "Branch", selecione `main` e a pasta `/ (root)` → **Save**
5. Em alguns minutos seu site estará em `https://seu-usuario.github.io/portfolio/`

## O que foi simplificado em relação ao original

- Removi as dependências do Elementor, jQuery, Swiper e GSAP (eram só necessárias pelo WordPress)
- O carrossel horizontal de projetos agora usa scroll nativo com CSS (`scroll-snap`), mais leve e sem bibliotecas externas
- Os ícones de ferramentas (Photoshop, Figma, WordPress, Elementor) foram simplificados como texto — se quiser ícones de verdade, posso trocar por SVGs ou por uma biblioteca como Font Awesome
- Mantive as cores, fontes (Amatic SC + Montserrat), textos e estrutura originais
