function toggleMode(){
   const html = document.documentElement
   html.classList.toggle('light')

//    if(html.classList.contains('light')){
//     html.classList.remove('light')
//    }else{
//     html.classList.add('light')
//    }

//pegar a imagem 
const img = document.querySelector('#profile img')

//substituir imagem 
if(html.classList.contains('light')){
  img.setAttribute('src','./assets/avatar-light.png')
  img.style.borderRadius = '50%'
}else{
  img.setAttribute('src','./assets/avatar.png')
  img.style.borderRadius = ''
  img.style.background = ''
}

}