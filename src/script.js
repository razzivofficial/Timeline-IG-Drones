document.addEventListener("DOMContentLoaded", function () {
  const timelineEntries = document.querySelectorAll(".timeline-entry");
  const timelineTitle = document.querySelector(".timeline-title");
  const timelineDescription = document.querySelector(".timeline-description");
  const timelineImage = document.querySelector(".timeline-image");
  const timeline = document.querySelector(".timeline");
  const timelineLine = document.createElement("div");
  timelineLine.classList.add("timeline-line");
  timeline.appendChild(timelineLine);

  const timelineContent = {
    "April 2018": {
      title: "April 2018",
      description:
        "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
      image: "./resources/drone.jpg",
    },
    // Add content for other years here...
  };

  const updateTimelineLine = () => {
    const startDot = timelineEntries[0].querySelector(".timeline-dot");
    const endDot =
      timelineEntries[timelineEntries.length - 1].querySelector(
        ".timeline-dot"
      );

    const startDotRect = startDot.getBoundingClientRect();
    const endDotRect = endDot.getBoundingClientRect();
    const containerRect = timeline.getBoundingClientRect();

    const startLeft =
      startDotRect.left - containerRect.left + startDotRect.width / 2;
    const endLeft =
      endDotRect.right - containerRect.left - endDotRect.width / 2;
    const lineWidth = endLeft - startLeft;

    timelineLine.style.left = `${startLeft}px`;
    timelineLine.style.width = `${lineWidth}px`;
  };

  const setActiveEntry = (entry) => {
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
  };

  timelineEntries.forEach((entry) => {
    entry.addEventListener("click", () => {
      setActiveEntry(entry);
    });
  });

  window.addEventListener("resize", updateTimelineLine);
  updateTimelineLine(); // Initial call to set the timeline line
});
