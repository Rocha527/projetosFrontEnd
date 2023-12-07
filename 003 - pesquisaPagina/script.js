// Simulated articles data
const articles = [
    // Add more articles as needed
    { title: "Introduction to HTML", content: "HTML is a markup language..." },
    { title: "CSS Basics", content: "CSS is a style sheet language..." },
    { title: "JavaScript Fundamentals", content: "JavaScript is a scripting language..." },
    { title: "Responsive Web Design", content: "Responsive web design ensures that..." },
    { title: "Introduction to HTML", content: "HTML is a markup language..." },
    { title: "CSS Basics", content: "CSS is a style sheet language..." },
    { title: "JavaScript Fundamentals", content: "JavaScript is a scripting language..." },
    { title: "Responsive Web Design", content: "Responsive web design ensures that..." },
    { title: "Web Accessibility", content: "Web accessibility is the practice of ensuring..." },
    { title: "Node.js for Beginners", content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine..." },
    { title: "Python Programming Guide", content: "Python is a versatile and easy-to-learn programming language..." },
    { title: "Introduction to Data Science", content: "Data science is an interdisciplinary field that uses scientific methods..." },
    { title: "Cybersecurity Best Practices", content: "Cybersecurity involves implementing measures to protect computer systems and networks..." },
    { title: "Web Development Trends 2023", content: "Stay updated on the latest trends in web development for the year 2023..." },
    { title: "Machine Learning Basics", content: "Machine learning is a subset of artificial intelligence that focuses on..." },
    // Add more articles as needed
    ];

function searchArticles() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("resultsContainer");

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter articles based on the search input
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchInput) || article.content.toLowerCase().includes(searchInput)
    );

    // Display search results
    if (filteredArticles.length > 0) {
        filteredArticles.forEach(article => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
            resultsContainer.appendChild(articleDiv);
        });
    } else {
        // Display a message if no results are found
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No results found.";
        resultsContainer.appendChild(noResultsMessage);
    }
}

// Adiciona um listener para a tecla "Enter" no campo de pesquisa
document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchArticles();
    }
});