document.addEventListener("DOMContentLoaded", function () {
  const timelineEntries = document.querySelectorAll(".timeline-entry");
  const timelineTitle = document.querySelector(".timeline-title");
  const timelineDescription = document.querySelector(".timeline-description");
  const timelineImage = document.querySelector(".timeline-image");

  timelineEntries.forEach((entry) => {
    entry.addEventListener("click", () => {
      timelineEntries.forEach((e) => {
        e.classList.remove("active");
        e.querySelector(".timeline-dot").classList.remove("active");
      });
      entry.classList.add("active");
      entry.querySelector(".timeline-dot").classList.add("active");

      const year = entry.getAttribute("data-year");
      // const content = timelineContent[year] || {
      //   title: "Unknown",
      //   description: "No description available.",
      //   image: "./resources/placeholder.jpg",
      // };

      timelineTitle.textContent = content.title;
      timelineDescription.textContent = content.description;
      timelineImage.src = content.image;
    });
  });
});
