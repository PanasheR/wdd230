const cards = document.querySelector('#cards');
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

    // Build the h2 content out to show the prophet's full name
    companyName.textContent = `${company.name}`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', company.icon);
    portrait.setAttribute('alt', `Portait of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(companyName);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}

getActivityData();