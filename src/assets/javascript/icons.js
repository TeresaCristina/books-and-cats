const InesIcon = "/assets/img/ines-cat.png";
const TeresaIcon = "/assets/img/teresa-cat.png";





const halfPaw = "/assets/img/half-paw.png";
const emptyPaw = "/assets/img/empty-paw.png";
const fullPaw = "/assets/img/full-paw.png";

const paw = [{"pawOne": "../../assets/img/full-paw.png",
"pawTwo": "../../assets/img/full-paw.png",
"pawThree": "../../assets/img/full-paw.png",
"pawFour": "../../assets/img/empty-paw.png",
"pawFive": "../../assets/img/empty-paw.png"
},
{"pawOne": "../../assets/img/full-paw.png",
"pawTwo": "../../assets/img/full-paw.png",
"pawThree": "../../assets/img/full-paw.png",
"pawFour": "../../assets/img/half-paw.png",
"pawFive": "../../assets/img/empty-paw.png"
},
{"pawOne": "../../assets/img/empty-paw.png",
"pawTwo": "../../assets/img/empty-paw.png",
"pawThree": "../../assets/img/empty-paw.png",
"pawFour": "../../assets/img/empty-paw.png",
"pawFive": "../../assets/img/empty-paw.png"
},
{"pawOne": "../../assets/img/empty-paw.png",
"pawTwo": "../../assets/img/empty-paw.png",
"pawThree": "../../assets/img/empty-paw.png",
"pawFour": "../../assets/img/empty-paw.png",
"pawFive": "../../assets/img/empty-paw.png"
},
{"pawOne": "../../assets/img/empty-paw.png",
"pawTwo": "../../assets/img/empty-paw.png",
"pawThree": "../../assets/img/empty-paw.png",
"pawFour": "../../assets/img/empty-paw.png",
"pawFive": "../../assets/img/empty-paw.png"
}
]

function pawReview(i) {
 
    var sizePaw = '"10%">';
    return '<img src="'  + paw[i].pawOne + '" width=' + sizePaw + 
                    '<img src="'  + paw[i].pawTwo + '" width=' + sizePaw +
                    '<img src="'  + paw[i].pawThree + '" width=' + sizePaw +
                    '<img src="'  + paw[i].pawFour + '" width=' + sizePaw +
                '<img src="'  + paw[i].pawFive + '" width=' + sizePaw 
}