const cards = document.querySelector('.cards');
const url = 'https://panasher.github.io/wdd230/chamber/data/members.json';

async function getActivityData() {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayData = (companies) => {
  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let companyName = document.createElement('h2');
    let portrait = document.createElement('img');
    let cardContent = document.createElement('p');

    // Build the h2 content out to show the prophet's full name
    companyName.textContent = `${company.name}`;
    cardContent.innerHTML = `
    <ul>
    <li>Company Address: ${company.address}</li>
    <li>Phone: ${company.phone}</li>
    <li><a href=${company.website}>Website</a></li>
    <li>Membership: ${company.membership}</li>
    <li>Donations: ${company.donations}</li>
    <ul>
    `;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', company.icon);
    portrait.setAttribute('alt', `Portait of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '250');
    portrait.setAttribute('height', '250');

    // Append the section(card) with the created elements
    card.appendChild(companyName);
    card.appendChild(portrait);
    card.appendChild(cardContent)

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}

getActivityData();