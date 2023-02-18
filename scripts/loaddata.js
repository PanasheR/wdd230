const URL = "https://panasher.github.io/wdd230/learning-activities.json";
const cardContent = document.querySelector('.card-content');
// https.get(url, res => {
//   let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     data = JSON.parse(data);
//     displayData(data.weeks)
//   })
// }).on('error', err => {
//   console.log(err.message);
// })

async function getActivityData() {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      console.log(data.weeks[0]); // testing only
      displayData(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  let week = data.weeks[0].week;
  let week2 = data.weeks[1].week;
  let week3 = data.weeks[2].week;
  let week4 = data.weeks[3].week;
  let week5 = data.weeks[4].week;

  cardContent.innerHTML = `
  <span>${week[0]}${week[1]}${week[2]}${week[3]}${week[4]}${week[5]}: 
  </span><a href=${data.weeks[0].links[0].url}>${data.weeks[0].links[0].title}</a> | 
  <a href=${data.weeks[0].links[1].url}>${data.weeks[0].links[1].title}</a><br>

  <span>${week2[0]}${week2[1]}${week2[2]}${week2[3]}${week2[4]}${week2[5]}: 
  </span><a href=${data.weeks[1].links[0].url}>${data.weeks[1].links[0].title}</a> | 
  <a href=${data.weeks[1].links[1].url}>${data.weeks[1].links[1].title}</a> | 
  <a href=${data.weeks[1].links[2].url}>${data.weeks[1].links[2].title}</a><br>

  <span>${week3[0]}${week3[1]}${week3[2]}${week3[3]}${week3[4]}${week3[5]}: 
  </span><a href=${data.weeks[2].links[0].url}>${data.weeks[2].links[0].title}</a> | 
  <a href=${data.weeks[2].links[1].url}>${data.weeks[2].links[1].title}</a> | 
  <a href=${data.weeks[2].links[2].url}>${data.weeks[2].links[2].title}</a> | 
  <a href=${data.weeks[2].links[3].url}>${data.weeks[2].links[3].title}</a><br>

  <span>${week4[0]}${week4[1]}${week4[2]}${week4[3]}${week4[4]}${week4[5]}: 
  </span><a href=${data.weeks[3].links[0].url}>${data.weeks[3].links[0].title}</a> | 
  <a href=${data.weeks[3].links[1].url}>${data.weeks[3].links[1].title}</a> | 
  <a href=${data.weeks[3].links[2].url}>${data.weeks[3].links[2].title}</a> | 
  <a href=${data.weeks[3].links[3].url}>${data.weeks[3].links[3].title}</a><br>

  <span>${week5[0]}${week5[1]}${week5[2]}${week5[3]}${week5[4]}${week5[5]}: 
  </span><a href=${data.weeks[4].links[0].url}>${data.weeks[4].links[0].title}</a> | 
  <a href=${data.weeks[4].links[1].url}>${data.weeks[4].links[1].title}</a> | 
  <a href=${data.weeks[4].links[2].url}>${data.weeks[4].links[2].title}</a> | 
  <a href=${data.weeks[4].links[3].url}>${data.weeks[4].links[3].title}</a><br>

  `;
}

getActivityData()