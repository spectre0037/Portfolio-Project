const ElementString = {
    aboutCard: "about-card",
    resumeCard: "resume-card",
    worksCard: "works-card",
    blogsCard: "blogs-card",
    contactCard: "contact-card",
    menuInputs: "menu"
};

const Element = {
    aboutCard: document.querySelector(`.${ElementString.aboutCard}`),
    resumeCard: document.querySelector(`.${ElementString.resumeCard}`),
    worksCard: document.querySelector(`.${ElementString.worksCard}`),
    blogsCard: document.querySelector(`.${ElementString.blogsCard}`),
    contactCard: document.querySelector(`.${ElementString.contactCard}`)
};

// Ensure the button exists before adding the event listener
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const link = document.createElement("a");
            link.href = "../projects/GANESH's Resume_DataScience.pdf";  // Corrected file name & path
            link.download = "GANESH's Resume_DataScience.pdf";  // Corrected file name
            document.body.appendChild(link);  // Append link to the body
            link.click();
            document.body.removeChild(link);  // Remove link after clicking
        });
    }
});
