var usuarios = [
    { id: 15, nome: "MARIA" },
    { id: 22, nome: "JOSÉ" },
    { id: 25, nome: "ANDERSON" },
    { id: 24, nome: "ADMINISTRADOR" },
    { id: 35, nome: "MARTA" },
    { id: 36, nome: "MAISTRE" },
    { id: 47, nome: "ANTONIO" },
    { id: 18, nome: "JORGE" },
    { id: 49, nome: "WILLIAM" },
    { id: 20, nome: "MARCOS" }
  ];

// Função para retornar todos os usuários de uma só vez
function getAllUsuarios() {
    return usuarios
}

// Função para retornar os usuários em partes de dois registros por vez
function getUsuariosPaginados(pagina) {
    var inicio = (pagina - 1) * 2
    var fim = inicio + 2
    return usuarios.slice(inicio, fim)
}

// Exemplos de utilização das funções
console.log("Todos os usuários: " + getAllUsuarios())
console.log(getUsuariosPaginados(1)) // retorna os dois primeiros registros
console.log(getUsuariosPaginados(2)) // retorna os registros 3 e 4

// Função de fazer a separação e concatenação dos valores com id de valor entre from e from +10
function concatenaPosicao(arr, from) {
    var filtrados = arr.filter(function(usuario) {
      return usuario.id >= from && usuario.id < from + 10
    })
  
    var resultado = filtrados.map(function(usuario, index) {
      return usuario.nome + ' - ' + (arr.indexOf(usuario) + 1)
    })
  
    return resultado
  }
  
  var nomesComPosicao = concatenaPosicao(usuarios, 15) // Fique a vontade de alterar este número
  console.log(nomesComPosicao)