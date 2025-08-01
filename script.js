function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.src);
}

function drop(ev) {
    ev.preventDefault();
    const src = ev.dataTransfer.getData("src");
    const img = document.createElement("img");
    img.src = src;
    img.style.position = "absolute";
    img.style.top = "50px"; // Ajuste de posição inicial
    img.style.left = "50px";
    img.style.width = "100px";
    img.draggable = true;
    img.ondragstart = drag;
    ev.target.appendChild(img);
}

function resetLook() {
    const dollArea = document.getElementById("capture");
    dollArea.innerHTML = '<img src="imagens/bonecabase.png" class="base" alt="Boneca Base">';
}

function saveLook() {
    html2canvas(document.getElementById("capture")).then(canvas => {
        const link = document.createElement("a");
        link.download = "look.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
