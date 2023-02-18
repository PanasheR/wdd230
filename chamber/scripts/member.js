const cards = document.querySelector('#cards');
const url = 'https://panasher.github.io/wdd230/chamber/data/members.json';

async function getActivityData() {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.members);
}

const displayData = (members) => {
  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let parag = document.createElement('p');
    let portrait = document.createElement('img');
    let websiteLink = document.createElement('a');

    name.textContent = `${member.name}`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', member.icon);
    portrait.setAttribute('alt', `Portait of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    websiteLink.setAttribute('href', member.website);
    websiteLink.textContent = member.name;

    parag.appendChild(mamber.address);
    parag.appendChild(mamber.phone);
    parag.appendChild(mamber.membership);
    parag.appendChild(mamber.donations);
    parag.appendChild(mamber.address);
    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(portrait);
    card.appendChild(websiteLink);
    card.appendChild(parag)

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}

getActivityData();

