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
        const response = await fetch(`https://api.github.com/search/repositories?q=${topic}&sort=stars&order=desc`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        //Mostrar resultados o mensaje de "no encontrado"
        if(data.total_count === 0){
            resultsDiv.innerHTML =`<div class="text-center text-white p-8">
                <p class="text-xl">No se encontraron repositorios para "${topic}"</p>
              </div>`;
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
        const card = document.createElement('div');
        card.className = 'my-4 repo-card bg-gray-800 rounded-lg p-6 text-white hover:bg-gray-700 transition-colors';
        
        // Formatear la fecha
        const updatedDate = new Date(repo.updated_at).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        card.innerHTML = `
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-bold text-purple-300">
              <a href="${repo.html_url}" target="_blank" class="hover:underline">${repo.name}</a>
            </h3>
            <div class="flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>${repo.stargazers_count.toLocaleString()}</span>
            </div>
          </div>
          <p class="mt-2 text-gray-300">${repo.description || 'Sin descripción'}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${repo.language ? `<span class="px-2 py-1 bg-gray-700 rounded-full text-xs">${repo.language}</span>` : ''}
            <span class="px-2 py-1 bg-gray-700 rounded-full text-xs">Actualizado: ${updatedDate}</span>
            <span class="px-2 py-1 bg-gray-700 rounded-full text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              ${repo.forks_count.toLocaleString()}
            </span>
          </div>
        `;
        
        resultsDiv.appendChild(card);
    });
}