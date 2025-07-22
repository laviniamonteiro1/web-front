const fs = require("fs");
const path = require("path");

const pastaRaiz = path.join(__dirname, "frontend", "src");


function corrigirImportsEmArquivo(caminhoArquivo) {
  const conteudo = fs.readFileSync(caminhoArquivo, "utf-8");

  const conteudoCorrigido = conteudo.replace(/(['"`])\/app\/src\//g, "$1@/");

  if (conteudo !== conteudoCorrigido) {
    fs.writeFileSync(caminhoArquivo, conteudoCorrigido, "utf-8");
    console.log("✔ Corrigido:", caminhoArquivo);
  }
}

function percorrerDiretorios(diretorio) {
  const arquivos = fs.readdirSync(diretorio);

  for (const nome of arquivos) {
    const caminho = path.join(diretorio, nome);
    const stats = fs.statSync(caminho);

    if (stats.isDirectory()) {
      percorrerDiretorios(caminho);
    } else if (/\.(ts|tsx)$/.test(nome)) {
      corrigirImportsEmArquivo(caminho);
    }
  }
}

console.log("🛠 Corrigindo imports absolutos...");
percorrerDiretorios(pastaRaiz);
console.log("✅ Fim da correção.");
