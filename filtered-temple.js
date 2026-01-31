const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyy7SHO4s1BRf8WsaazIbWSSb7iS6XlK1XQ&s"
  },  
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhf62erApN0aKXiTN0H7UrAT8O1U9h1iX6g&s"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  }
];

const templeCards = document.querySelector("#temple-cards");

function displayTemples(templeList) {
  templeCards.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.append(name, location, dedicated, area, image);
    templeCards.appendChild(card);
  });
}

// Initial load
displayTemples(temples);

// Filters
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));

document.querySelector("#old").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

// Hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
