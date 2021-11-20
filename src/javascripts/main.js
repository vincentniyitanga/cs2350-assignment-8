// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

import { pictures } from './pictures'

for(let p of pictures){
   let p_thumb = document.getElementById('p' + p.id)
   p_thumb.innerHTML = `
      <img src="${p.poster}" alt="${p.title}" class="img-thumbnail"/>
   
   `
   p_thumb.onclick = function(){
         displayPicture(p)
   }
}

let featured_picture = document.querySelector(".featued")
function displayPicture(picture){
   featured_picture.innerHTML = `
   <div class="card" >
   <div class="card-header">${picture.title}</div>
   <img src="${picture.poster}" class="card-img-top" alt="${picture.title}">
   <div class="card-body">
     <h5 class="card-title"><small>${picture.description}</small></h5>
     <p class="card-text"></p>
   </div>
   <div class="card-footer text-muted">
     <div class="row row-cols-3">
         <div class="col"><strong>Title</strong>${picture.title}</div>
         <div class="col"><strong>Description</strong>${picture.description}</div>
     </div>
   </div>
 </div>

   `
}
