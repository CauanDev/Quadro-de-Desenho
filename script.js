let tela = document.querySelector('#tela')
let conteudo = tela.getContext('2d');
let color = ''
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
tela.addEventListener('mousedown',mouseDownEvent);
tela.addEventListener('mousemove',mouseMoveEvent);
tela.addEventListener('mouseup',mouseUpEvent);

document.querySelectorAll('.colorArea .color').forEach(e=>{
    e.addEventListener('click',selecionarCor)
})

document.querySelector('.clear').addEventListener('click',()=>{
    conteudo.clearRect(0, 0, conteudo.canvas.width, conteudo.canvas.height) ;
})

function selecionarCor(e){
    color = e.target.getAttribute('data-color');

    document.querySelector('.color.active').classList.remove('active')
    document.querySelector(`div[data-color="${color}"]`).classList.add('active')

}

function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pageX - tela.offsetLeft;
    mouseY = e.pageY - tela.offsetTop;
}
function mouseMoveEvent(e){
    if(canDraw){
        
        Draw(e.pageX,e.pageY)
    }
}
function mouseUpEvent(){
    canDraw = false;
}

function Draw(x,y){
    let pointX = x - tela.offsetLeft;
    let pointY = y -tela.offsetTop

    conteudo.beginPath();
    conteudo.lineWidth = 5;
    conteudo.lineJoin = 'round';
    conteudo.moveTo(mouseX,mouseY);
    conteudo.lineTo(pointX,pointY)
    conteudo.closePath();
    conteudo.strokeStyle = color
    conteudo.stroke();
    mouseX = pointX;
    mouseY = pointY;
}


