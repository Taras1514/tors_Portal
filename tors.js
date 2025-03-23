function bord_botn (a){
    a.style.border-bottom='3px solid black',
}

function bord_botn_liv (a){
    a.style.border-bottom='0px solid black',
}

let por_1=document.querySelector('#por_1')
por_1.addEventListener("mouseenter",bord_botn(#por_1))
por_1.addEventListener("mouseleave",bord_botn_liv(#por_1))