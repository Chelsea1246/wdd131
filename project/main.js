// ========== PRODUCT ARRAY FOR CONTACT FORM ==========
const products = [
    { name: "Leadership Training Program" },
    { name: "Digital Marketing Internship" },
    { name: "Women in Tech Scholarship" },
    { name: "Entrepreneurship Bootcamp" },
];

// Populate product select field
function populateProducts() {
    const productSelect = document.getElementById("product");
    if (!productSelect) return; // Skip if not on contact page

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// ========== OPPORTUNITIES ARRAY ==========
const opportunities = [
    {
        title: "Digital Marketing Internship",
        category: "Internship",
        location: "Remote",
        deadline: "2026-03-01"
    },
    {
        title: "Women in Tech Scholarship",
        category: "Scholarship",
        location: "Ghana",
        deadline: "2026-04-15"
    },
    {
        title: "Leadership Training Program",
        category: "Training",
        location: "Accra",
        deadline: "2026-05-10"
    },
    {
        title: "Entrepreneurship Bootcamp",
        category: "Training",
        location: "Kumasi",
        deadline: "2026-06-01"
    }
];

// ========== DISPLAY OPPORTUNITIES ==========
function displayOpportunities(list) {
    const container = document.getElementById("opportunity-list");
    if (!container) return; // Skip if not on opportunities page

    container.innerHTML = list.map(op => `
        <div class="opportunity-card">
            <h3>${op.title}</h3>
            <p>Category: ${op.category}</p>
            <p>Location: ${op.location}</p>
            <p>Deadline: ${op.deadline}</p>
            <button data-title="${op.title}">Save Opportunity</button>
        </div>
    `).join("");
}

// ========== FILTER OPPORTUNITIES ==========
function setupFilter() {
    const filterSelect = document.getElementById("category-filter");
    if (!filterSelect) return; // Skip if not on opportunities page

    filterSelect.addEventListener("change", () => {
        const selected = filterSelect.value;
        if (selected === "all") {
            displayOpportunities(opportunities);
        } else {
            const filtered = opportunities.filter(op => op.category === selected);
            displayOpportunities(filtered);
        }
    });
}

// ========== SAVE OPPORTUNITY TO LOCALSTORAGE ==========
function setupSaveButtons() {
    document.addEventListener("click", e => {
        if (e.target.matches("button[data-title]")) {
            const title = e.target.dataset.title;
            localStorage.setItem("savedOpportunity", title);
            alert(`You saved: ${title}`);
        }
    });
}

// ========== INIT FUNCTION ==========
function init() {
    populateProducts();
    displayOpportunities(opportunities);
    setupFilter();
    setupSaveButtons();
}

// Initialize when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
