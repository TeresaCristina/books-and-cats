/*Paths, Methods and Variables used for the Icons (cats, paw reviews)*/

//CAT ICONS
const InesIcon = "/assets/img/ines-cat.png";
const TeresaIcon = "/assets/img/teresa-cat.png";

//PAW REVIEWS
const halfPaw = "/assets/img/half-paw.png";
const emptyPaw = "/assets/img/empty-paw.png";
const fullPaw = "/assets/img/full-paw.png";
const reviewsDone = 2;

function pawReview(i , numberReview) {
    if (i < reviewsDone) {
        var sizePaw = '"10%">';
        var paws = "";
        var review = numberReview[i]['reviewTotal'];
        var reviewFull = Math.trunc(review);
        var reviewHalf = review - reviewFull;
        for (j = 0; j < reviewFull; j++) {
            paws += '<img src="' + fullPaw + '" width=' + sizePaw
        }
        if (reviewHalf > 0) {
            paws += '<img src="' + halfPaw + '" width=' + sizePaw
        }
        return paws
    }
    else {
        return ""
    }
}

