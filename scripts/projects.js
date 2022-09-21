function makeTiles(numTiles, projects) {
  const grid = document.querySelector('.work-grid');
  
  for (var i = 0; i < projects.length; i++) {
    const project = projects[i];
    
    const projectImageDiv = document.createElement('div');
    projectImageDiv.style.aspectRatio = '1';
    projectImageDiv.className = 'tile project-image-tile';
    const projectImage = document.createElement('img');    
    projectImage.className = 'project-image';
    projectImage.src = project.image;
    projectImage.alt = `A picture of ${project.name}`
    projectImageDiv.appendChild(projectImage);

    const projectDescDiv = document.createElement('div');
    projectDescDiv.style.aspectRatio = '1';
    projectDescDiv.className = 'tile project-desc-tile';
    const projectDesc = document.createElement('p');
    projectDesc.className = 'project-desc';
    projectDesc.innerHTML = project.description;
    projectDescDiv.appendChild(projectDesc);


    if (i % 2 == 0) {
      grid.appendChild(projectImageDiv);
      grid.appendChild(projectDescDiv);
    }
    
    else {
      grid.appendChild(projectDescDiv);
      grid.appendChild(projectImageDiv);
    }
  }
}
function main(data) {
  console.log(data);
  let projects = data.projects;
  makeTiles(projects.length, projects);
}

fetch('../projects.json')
  .then((response) => response.json())
  .then((data) => {main(data)});