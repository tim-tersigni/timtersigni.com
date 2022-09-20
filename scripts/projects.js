function setGridDimension() {

}

function main(data) {
  console.log(data);
}
fetch('../projects.json')
  .then((response) => response.json())
  .then((data) => {main(data)});