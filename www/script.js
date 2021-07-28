/*let nbImages=9;
let tabImages=[];
for(let i=1;i<=nbImages;i++){
    tabImages.push("Pink"+i+".jpg");
}*/
let tabImages=["ApRyhL5SVr8V.jpg", "ay48oksh.jpg", "daoCuS6EULk8.jpg", "e4Biz0oGIdqO.jpg", "images.jpg", "jMwPKZULnANc.jpg", "mnRwftxYKYX.jpg", "ocUjiyhf9g9u.jpg", "ZfWqz65YD1Q.jpg"];

let monConteneur = document.querySelector("#conteneur");

let imageEnCoursDeDrag;

let zIndexMax = 0;

function debutDrag(monEvent){
    monEvent.preventDefault();
    imageEnCoursDeDrag = monEvent.currentTarget;
    monEvent.currentTarget.className = "draged";
    zIndexMax++;
    monEvent.currentTarget.style.zIndex = zIndexMax;
    
}

function finDrag(monEvent){
    if(imageEnCoursDeDrag!=null){
    
    imageEnCoursDeDrag.className= "";
    imageEnCoursDeDrag = null;
    }

}


//boucle de creation d'image

for(let i=1;i<tabImages.length;i++){
    monConteneur.innerHTML = monConteneur.innerHTML+ "<img src='image/"+tabImages[i]+"'>";

    
}

// fonction de placement initial des images
function placeImagesInitial(){
    let listeEnfantDuConteneur = monConteneur.childNodes;
    for(let i=0;i<listeEnfantDuConteneur.length;i++){
        let maCarte=listeEnfantDuConteneur[i];
        let maxLeft=window.innerWidth-maCarte.width;
      
         maCarte.addEventListener("mousedown",debutDrag);
         maCarte.addEventListener("mouseup",finDrag);
        
        maCarte.style="left:"+maxLeft/2+"px;top:-300px;transform:rotateZ(0deg);";
    }
}

//fonction de placement aléatoire des images
function placeImagesRandom(){
    let listeEnfantDuConteneur = monConteneur.childNodes;
    for(let i=0;i<listeEnfantDuConteneur.length;i++)
    {
        let maCarte=listeEnfantDuConteneur[i];
        let maxLeft=window.innerWidth-maCarte.width;
        let maxTop=window.innerHeight-maCarte.height;

        let decalageLeft=Math.round(Math.random()*maxLeft);
        let decalageTop=Math.round(Math.random()*maxTop);
        let rotationCarte=Math.round(Math.random()*90)-45;

        maCarte.style="left:"+decalageLeft+"px;top:"+decalageTop+"px;transform:rotateZ("+rotationCarte+"deg);";
    }

}
function majDrag(monEvent){
    if(imageEnCoursDeDrag != null){
    let nouveauTop = monEvent.clientY-(imageEnCoursDeDrag.height/2);
    let nouveauLeft = monEvent.clientX-(imageEnCoursDeDrag.widht/2);
    imageEnCoursDeDrag.style.top=nouveauTop+"px";
    imageEnCoursDeDrag.style.top=nouveauLeft+"px";
    }
    }


placeImagesInitial();
setTimeout(placeImagesRandom,1000);
//setInterval(placeImagesRandom,2000);
 document.addEventListener("mouseup",finDrag);
 document.addEventListener("mousemove",majDrag);