const moviesContainer = document.querySelector('.movies');

const renderNewData = (data, id) => {
    let html = 
    `
    <div class="card text-center" style="margin-top: 16px; margin-bottom: 16px;" data-id="${id}">
        <img src="${data.imageURL === '-' ? '../img/homescreen/cinema-96x96.png' : data.imageURL}" alt="Card image cap" style="object-fit: contain;">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p>${data.genre}</p>
            <p class="card-text">${data.description}</p>
        </div>
        <div class="card-body">
            <a href="#" class="card-link" data-id="${id}">Delete</a>
        </div>
    </div>
    `;

    moviesContainer.innerHTML += html;
}

const deleteData = (id) => {
    const data = document.querySelector(`.card[data-id="${id}"]`);
    data.remove();
}