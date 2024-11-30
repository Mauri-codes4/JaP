let DataPelis = [];

document.addEventListener('DOMContentLoaded', fetchDataPelis);
document.getElementById("btnBuscar").addEventListener("click", buscarPelis);

async function fetchDataPelis() {
    try {
        const response = await fetch('https://japceibal.github.io/japflix_api/movies-data.json');
        DataPelis = await response.json();
        console.log("Películas cargadas correctamente:", DataPelis);
    } catch (error) {
        console.error("Error al cargar los datos de las películas:", error);
    }
}

function renderStars(voteAverage) {
    const maxStars = 5;
    const stars = Math.round((voteAverage / 10) * maxStars); 
    return '★'.repeat(stars) + '☆'.repeat(maxStars - stars);
}

function buscarPelis() {
    const inputBuscar = document.getElementById("inputBuscar").value.toLowerCase();
    const resultadosContainer = document.getElementById("resultados");
    resultadosContainer.innerHTML = ""; 

    if (!inputBuscar) {
        alert("Por favor, ingresa un término de búsqueda.");
        return;
    }

    const pelisFiltradas = DataPelis.filter(movie =>
        (movie.title && movie.title.toLowerCase().includes(inputBuscar)) ||
        (movie.tagline && movie.tagline.toLowerCase().includes(inputBuscar)) ||
        (movie.overview && movie.overview.toLowerCase().includes(inputBuscar))
    );

    if (pelisFiltradas.length === 0) {
        resultadosContainer.innerHTML = "<p>No se encontraron películas.</p>";
        return;
    }

    pelisFiltradas.forEach(peli => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie", "list-group-item", "list-group-item-dark", "mb-2");

        movieElement.innerHTML = `
            <h3>${peli.title}</h3>
            <p><em>${peli.tagline || "Sin tagline"}</em></p>
            <p>Calificación: ${renderStars(peli.vote_average)}</p>
        `;

        movieElement.addEventListener("click", () => mostrarDetalles(peli));

        resultadosContainer.appendChild(movieElement);
    });
}

function mostrarDetalles(peli) {
    document.getElementById("movieTitle").textContent = peli.title || "Sin título";
    document.getElementById("movieOverview").textContent = peli.overview || "Sin descripción";
    document.getElementById("movieGenres").textContent = peli.genres ? peli.genres.join(", ") : "No disponible";

    document.getElementById("movieYear").textContent = peli.release_date ? new Date(peli.release_date).getFullYear() : "No disponible";
    document.getElementById("movieRuntime").textContent = peli.runtime ? `${peli.runtime} mins` : "No disponible";
    document.getElementById("movieBudget").textContent = peli.budget ? `$${peli.budget.toLocaleString()}` : "No disponible";
    document.getElementById("movieRevenue").textContent = peli.revenue ? `$${peli.revenue.toLocaleString()}` : "No disponible";

    const movieDetailsOffcanvas = new bootstrap.Offcanvas(document.getElementById("movieDetailsOffcanvas"));
    movieDetailsOffcanvas.show();
}
