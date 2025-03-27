function bord_botn (){
    anime ({
        targets:'.hed1rad',
        easing:'linear',
        duration:1150,
        keyframes:[
            {scale:5.05},
        ]
    })
}

function bord_botn_liv (){
    anime ({
        targets:'.hed1rad',
        easing:'linear',
        duration:1150,
        keyframes:[
            {scale:1},
        ]
    })
}


let por_1= document.querySelector('.hed1rad')
por_1.addEventListener("mouseenter",bord_botn)
por_1.addEventListener("mouseleave",bord_botn_liv)