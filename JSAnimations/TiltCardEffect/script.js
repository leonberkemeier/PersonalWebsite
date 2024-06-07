// alert('hi')

const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
    rotateElement(e,card);
});

function rotateElement(event, element){
    //where is teh mouse

    const x = event.clientX;
    const y = event.clientY;
    // console.log(x,y)


    //where the middle of card

    //keep in MIND THIS IS ONLY FROM THE MIDDLE OF TEH SCREEN NOT THE CARD

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight /2;
    // console.log(middleX)


    // offset from mouse to middle of card

    const offsetX = ((x - middleX)) ;
    const offsetY = ((y - middleY));
    // console.log(offsetX,offsetY)

    const ratioOSX = ((x - middleX) / middleX)*20;
    const ratioOSY = ((y - middleY) / middleY)*20;
    // console.log(ratioOSX, ratioOSY);

    //lets rotatae
    element.style.setProperty("--rotateY", ratioOSX + "deg");
    element.style.setProperty("--rotateX", -1 * ratioOSY + "deg");
}