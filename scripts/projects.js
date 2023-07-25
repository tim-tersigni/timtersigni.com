function makeTiles(numTiles, projects) {
  const grid = document.querySelector('.work-grid');
  
  for (var i = 0; i < projects.length; i++) {
    const project = projects[i];
    
    const projectLinkWrapper = document.createElement('a');
    projectLinkWrapper.href = project.link;
    projectLinkWrapper.className = "tile tile-link-wrapper shrink-on-hover"
    
    const projectImageDiv = document.createElement('div');
    projectImageDiv.style.aspectRatio = '1';
    projectImageDiv.className = 'tile project-image-tile';
    const projectImage = document.createElement('img');    
    projectImage.className = 'project-image';
    projectImage.src = project.image;
    projectImage.alt = `A picture of ${project.name}`
    
    const projectTitle = document.createElement('h3')
    projectTitle.className = 'project-title'
    projectTitle.innerHTML = project.name;

    projectImageDiv.appendChild(projectImage);
    projectLinkWrapper.appendChild(projectImage);
    projectLinkWrapper.appendChild(projectTitle);

    const projectDescDiv = document.createElement('div');
    projectDescDiv.style.aspectRatio = '1';
    projectDescDiv.className = 'tile project-desc-tile';
    const projectDesc = document.createElement('p');
    projectDesc.className = 'project-desc';
    projectDesc.innerHTML = project.description;
    projectDescDiv.appendChild(projectDesc);

    if (i % 2 == 0) {
      grid.appendChild(projectLinkWrapper);
      grid.appendChild(projectDescDiv);
    }
    else {
      grid.appendChild(projectDescDiv);
      grid.appendChild(projectLinkWrapper);
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