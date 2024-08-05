function generateInputs() {
    const numPeople = document.getElementById('numPeople').value;
    const detailsForm = document.getElementById('details-form');
    const totalRentForm = document.getElementById('total-rent-form');
    const addressForm = document.getElementById('address-form');
    detailsForm.innerHTML = '';

    for (let i = 0; i < numPeople; i++) {
        detailsForm.innerHTML += `
            <li>
                <label for="name${i}">Housemate #${i+1} Name:</label>
                <input type="text" id="name${i}">
                <label for="bedroom${i}">Bedroom Sqft:</label>
                <input type="number" id="bedroom${i}">
                <label for="bathroom${i}">Bathroom Sqft:</label>
                <input type="number" id="bathroom${i}">
            </li>
        `;
    }

    totalRentForm.style.display = 'block';
    addressForm.style.display = 'block';
}

function calculateRent() {
    const numPeople = document.getElementById('numPeople').value;
    const totalRent = document.getElementById('totalRent').value;
    let totalSqft = 0;
    const people = [];

    for (let i = 0; i < numPeople; i++) {
        const name = document.getElementById(`name${i}`).value;
        const bedroom = parseFloat(document.getElementById(`bedroom${i}`).value);
        const bathroom = parseFloat(document.getElementById(`bathroom${i}`).value);
        const sqft = bedroom + bathroom;
        totalSqft += sqft;
        people.push({ name, sqft });
    }

    let result = '<ul>';
    for (let i = 0; i < numPeople; i++) {
        const percent = (people[i].sqft / totalSqft) * 100;
        const rent = (totalRent * (percent / 100)).toFixed(2);
        result += `<li>${people[i].name}: ${percent.toFixed(2)}% of the rent, which is $${rent}</li>`;
    }
    result += '</ul>';

    document.getElementById('result').innerHTML = result;
}

function fetchBlueprint() {
    const address = document.getElementById('address').value;
    const blueprintSection = document.getElementById('blueprint-selection');
    const blueprint = document.getElementById('blueprint');

    // Simulate fetching blueprint - this part should be replaced with actual backend logic
    blueprint.innerHTML = `
        <h3>Blueprint for ${address}</h3>
        <img src="blueprint_example.jpg" alt="Blueprint">
        <p>Assign rooms to housemates below:</p>
        <select id="roomSelection">
            <option value="room1">Room 1</option>
            <option value="room2">Room 2</option>
            <option value="room3">Room 3</option>
            <!-- Add more rooms as necessary -->
        </select>
    `;

    blueprintSection.style.display = 'block';
}
