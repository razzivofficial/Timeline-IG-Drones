document.addEventListener("DOMContentLoaded", function () {
  const timelineEntries = document.querySelectorAll(".timeline-entry");
  const timelineTitle = document.querySelector(".timeline-title");
  const timelineDescription = document.querySelector(".timeline-description");
  const timelineImage = document.querySelector(".timeline-image");

  const timelineContent = {
    "April 2018": {
      title: "April 2018",
      description:
        "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
      image: "./resources/drone.jpg",
    },
    // Add content for other years here...
  };

  timelineEntries.forEach((entry) => {
    entry.addEventListener("click", () => {
      timelineEntries.forEach((e) => {
        e.classList.remove("active");
        e.querySelector(".timeline-dot").classList.remove("active");
      });
      entry.classList.add("active");
      entry.querySelector(".timeline-dot").classList.add("active");

      const year = entry.getAttribute("data-year");
      const content = timelineContent[year] || {
        title: "Unknown",
        description: "No description available.",
        image: "./resources/placeholder.jpg",
      };

      timelineTitle.textContent = content.title;
      timelineDescription.textContent = content.description;
      timelineImage.src = content.image;
    });
  });
});
