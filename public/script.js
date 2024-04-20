document.addEventListener('DOMContentLoaded', () => {
    const petList = document.getElementById('petList');

    // Fetch pets from API
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => {
            pets.forEach(pet => {
                const li = document.createElement('li');
                petItem.className = 'petItem';
                petItem.innerHTML = `
                    <h3>${pet.name}</h3>
                    <p><strong>Breed:</strong> ${pet.breed}</p>
                    <p><strong>Age:</strong> ${pet.age}</p>
                    <p><strong>Owner:</strong> ${pet.owner}</p>
                    <p><strong>Telephone:</strong> ${pet.telephone}</p>
                    <p><strong>Appointments:</strong></p>
                    <ul>
                        ${pet.appointments.map(appt => `<li>Date: ${appt.date} | Time: ${appt.time} | Reason: ${appt.reason}</li>`).join('')}
                    </ul>
                `;
                petList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching pets:', error);
        });
});
