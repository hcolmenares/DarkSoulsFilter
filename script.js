const upload = document.getElementById("img-btn");
const imgBox = document.getElementById("img-box");
const content = document.getElementById("content");
const download = document.getElementById("download");

upload.addEventListener("change", function (e) {
  const existingImg = document.getElementById("canvasImg");
  const existingFilter = document.querySelector(".filter");

  if (existingImg) {
    existingImg.remove();
  }

  if (existingFilter) {
    existingFilter.remove();
  }

  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = function (f) {
    let img = document.createElement("img");
    img.classList.add("canvas");
    img.setAttribute("id", "canvasImg");
    img.src = f.target.result;
    content.classList.remove("hidden");
    imgBox.appendChild(img);

    let filter = document.createElement("h1");
    filter.classList.add("filter");
    filter.innerHTML = "Has Muerto";
    imgBox.appendChild(filter);
  };

  download.classList.remove("hidden");
  reader.readAsDataURL(file);
});

download.addEventListener("click", function () {
  html2canvas(imgBox, {
    width: imgBox.scrollWidth,
    height: imgBox.scrollHeight,
    scale: 2
  }).then(function (canvas) {
    const link = document.createElement("a");
    link.download = "dark-souls-filter.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });  
});
