const ElementString = { aboutCard: "about-card", resumeCard: "resume-card", worksCard: "works-card", blogsCard: "blogs-card", contactCard: "contact-card", menuInputs: "menu" }, Element = { ".about-card": document.querySelector(`.${ElementString.aboutCard}`), ".resume-card": document.querySelector(`.${ElementString.resumeCard}`), ".works-card": document.querySelector(`.${ElementString.worksCard}`), ".blogs-card": document.querySelector(`.${ElementString.blogsCard}`), ".contact-card": document.querySelector(`.${ElementString.contactCard}`) };
document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../../GANESH's Resume_DataScience.pdf";  // Replace this with the actual path to your CV file
    link.download = "My_CV.pdf";        // This will be the name of the downloaded file
    link.click();
});
