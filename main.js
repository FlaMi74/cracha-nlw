const linksSocialMedia = {
  github: 'FlaMi74',
  youtube: 'c/EscoladeMúsicaEvolução',
  instagram: 'flapm74',
  facebook: 'Emevolucao',
  twitter: 'flami74'
}

function changeSocialMediaLinks() {
  /* document.getElementById('userName').textContent = 'Olivia' */
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` // tem q ser crase pra entender que é um comando
    // alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      //userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

//    arrow functions
//    function nomedafunção(argumento){
//  code
//  }
//  argumento => {
//    }
