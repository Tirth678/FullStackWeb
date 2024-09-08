// script.js
const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const classYear = document.getElementById('class-year').value;

    // TO DO: implement API call to update user profile
    console.log(`Updating profile: ${name}, ${email}, ${classYear}`);
});
// events.js
const eventList = document.getElementById('event-list');

// TO DO: implement API call to retrieve upcoming events
const events = [
    {
        id: 1,
        title: 'Homecoming 2023',
        date: 'October 15, 2023',
        location: 'Campus Quad'
    },
    {
        id: 2,
        title: 'Networking Session',
        date: 'November 10, 2023',
        location: 'Alumni Center'
    },
    {
        id: 3,
        title: 'Reunion Weekend',
        date: 'June 17-19, 2024',
        location: 'Campus Wide'
    }
];

events.forEach((event) => {
    const eventListItem = document.createElement('li');
    eventListItem.textContent = `${event.title} - ${event.date} at ${event.location}`;
    eventList.appendChild(eventListItem);
});
