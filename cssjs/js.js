let selectedBlock = null;

function selectBlock(block) {
  selectedBlock = block;
  alert(`Bạn đã chọn block: ${block}`);
}

document
  .getElementById("building-area")
  .addEventListener("click", function (event) {
    if (!selectedBlock) return;
    let x = event.offsetX;
    let y = event.offsetY;
    const newBlock = document.createElement("div");
    newBlock.className = "block";
    newBlock.style.position = "absolute";
    newBlock.style.left = `${x - 10}px`;
    newBlock.style.top = `${y - 10}px`;

    if (selectedBlock === "stone") {
      newBlock.style.backgroundColor = "gray";
    } else if (selectedBlock === "wood") {
      newBlock.style.backgroundColor = "brown";
    } else if (selectedBlock === "grass") {
      newBlock.style.backgroundColor = "green";
    }

    document.getElementById("building-area").appendChild(newBlock);
  });
