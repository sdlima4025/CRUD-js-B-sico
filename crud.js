//CRUD === CREATE|READ|UPDATE|DELETE
const miniTwitter = {
  usuarios:[
    {
      username:'sergiolima',
    }
  ],
  posts:[
    { id: 1,
      owner: 'sergiolima',
      content: 'Meu primeiro twitter'
    }
  ]
}
// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length +1,
    owner: dados.owner, 
    content: dados.content
  });
}

criaPost({owner:'silviolima', content: 'Meu Segundo tweet' });
criaPost({owner:'Reinaldolima', content: 'Meu terceiro tweet' });
// console.log(miniTwitter.posts)

// READ
function pegaPosts(){
  return miniTwitter.posts;
}
console.log(pegaPosts())
// UPDATE
function atualizaContentPost(id, novoConteudo) {
  const postQueVaiSerAtualizado =  pegaPosts().find((post)=> {
    return post.id === id;
  });
  console.log(postQueVaiSerAtualizado)
}
atualizaContentPost(1, 'Novo conteúdo do post')
console.log(pegaPosts())
// DELETE
function apagaPost(id) {
  const listaDePostsAtualizado = pegaPosts().filter((postAtual)=> {
    return postAtual.id !== id;
  })
  miniTwitter.posts = listaDePostsAtualizado;
}
apagaPost(1)
apagaPost(2)
apagaPost(3)
console.log(pegaPosts());
