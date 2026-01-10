// Get the current year
const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.getElementById("currentyear").textContent = currentYear;

// Insert the document's last modified date
document.getElementById("lastModified").textContent = document.lastModified;
