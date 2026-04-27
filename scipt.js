async function loadFaculty() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const container = document.getElementById("facultyContainer");

    if (!container) return;

    data.slice(0, 4).forEach(user => {
        const card = document.createElement("div");
        card.classList.add("faculty-card");

        card.innerHTML = `
            <img src="https://via.placeholder.com/300x200">
            <h3>${user.name}</h3>
            <p>${user.company.name}</p>
        `;

        container.appendChild(card);
    });
}

loadFaculty();