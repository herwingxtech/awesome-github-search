const searchForm = document.getElementById('search-form');
const topicInput = document.getElementById('topic');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const topic = topicInput.value;

    // Limpiar resultados anteriores
    resultsDiv.innerHTML = '';

     //Mostrar mensaje de espera
     resultsDiv.innerHTML = '<p>Buscando...</p>';


    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${topic}`);

        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }

        const data = await response.json();

        //Mostrar resultados o mensaje de "no encontrado"
        if(data.total_count === 0){
            resultsDiv.innerHTML = '<p class="error-message">No se encontraron repositorios para este tema.</p>';
        } else{
            displayResults(data.items);
        }



    } catch (error) {
        resultsDiv.innerHTML = `<p class="error-message">Error al buscar repositorios: ${error.message}</p>`;
    }
});

function displayResults(repositories) {
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

    repositories.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.classList.add('repo-item');

        const repoName = document.createElement('h2');
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.full_name;
        repoLink.target = "_blank";  //Abrir en una nueva pestaña
        repoName.appendChild(repoLink);

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description || 'Sin descripción.'; //Manejo de descripciones vacias

        const repoStars = document.createElement('p');
        repoStars.textContent = `Estrellas: ${repo.stargazers_count}`;

        repoItem.appendChild(repoName);
        repoItem.appendChild(repoDescription);
        repoItem.appendChild(repoStars);

        resultsDiv.appendChild(repoItem);
    });
}