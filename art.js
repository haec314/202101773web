window.onload = function() {

    //백지
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width=400;  
    canvas.height=400;

    ctx.strokeStyle = "purple";
    ctx.lineWidth=20;
    ctx.lineCap="round";


    //마우스
    let painting=false;

    function stopPainting(){
        painting = false;
        ctx.closePath();

    }

    function startPainting(event){
        painting=true;

        const x = event.offsetX;
        const y = event.offsetY
        ctx.beginPath(); //초기화
        ctx.moveTo(x,y);
    }

    function onMouseMove(event){
        const x = event.offsetX;
        const y = event.offsetY

        if (!painting){
            return;
        }
        ctx.lineTo(x,y);
        ctx.stroke();
    }

    if(canvas){
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown",startPainting);
        canvas.addEventListener("mouseup",stopPainting);
        canvas.addEventListener("mouseleave",stopPainting);
    }

}
