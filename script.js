// Projects Data
const myProjects = [
    {
        title: "AI JobFit Chatbot",
        desc: "A rule-based and AI-powered system that analyzes resumes and highlights key skills[cite: 42, 46].",
        tags: ["Python", "NLP", "AI"],
        link: "https://github.com/SabrinaAkbar05/AI-JOBFIT-CHATBOT"
    },
    {
        title: "Syntexhub Port Scanner",
        desc: "A network security tool built during my internship to identify open ports and vulnerabilities[cite: 21].",
        tags: ["Python", "Cybersecurity", "Networking"],
        link: "https://github.com/SabrinaAkbar05/Syntexhub_Port_Scanner"
    },
    {
        title: "Fake News Detector",
        desc: "ML project to classify news articles as real or fake using text preprocessing algorithms[cite: 39, 41].",
        tags: ["Machine Learning", "Python", "Data Science"],
        link: "https://github.com/SabrinaAkbar05/CodeAlpha_UnemploymentInIndia"
    },
    {
        title: "Password Manager",
        desc: "A secure tool developed for managing and storing digital credentials safely.",
        tags: ["Security", "Encryption", "Python"],
        link: "https://github.com/SabrinaAkbar05/Syntexhub_PasswordManager"
    }
];

// Load Projects into Grid
const grid = document.getElementById('projectGrid');
myProjects.forEach(p => {
    grid.innerHTML += `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">${p.tags.join(' • ')}</div>
            <a href="${p.link}" target="_blank" style="text-decoration:none; color:#64ffda; font-size:0.8rem; margin-top:15px; display:inline-block;">View GitHub →</a>
        </div>
    `;
});

// Resume Modal Logic
const modal = document.getElementById("resumeModal");
const btn = document.getElementById("openResume");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scroll
}

span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}