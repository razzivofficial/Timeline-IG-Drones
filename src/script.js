document.addEventListener("DOMContentLoaded", function () {
  const timelineEntries = document.querySelectorAll(".timeline-entry");
  const timelineTitle = document.querySelector(".timeline-title");
  const timelineDescription = document.querySelector(".timeline-description");
  const timelineImage = document.querySelector(".timeline-image");
  const timeline = document.querySelector(".timeline");
  const timelineLine = document.querySelector(".timeline-line");

  const timelineContent = {
    "April 2018": {
      title: "April 2018",
      description:
        "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
      image: "./resources/drone1.jpg",
    },
    "April 2019": {
      title: "April 2019",
      description:
        "Launched our new drone model with enhanced battery life and improved camera resolution.",
      image: "./resources/drone2.jpg",
    },
    "April 2020": {
      title: "April 2020",
      description:
        "Expanded our services to include drone-based agricultural solutions, improving crop monitoring and management.",
      image: "./resources/drone3.png",
    },
    "April 2021": {
      title: "April 2021",
      description:
        "Partnered with government agencies to develop drones for disaster management and emergency response.",
      image: "./resources/drone4.jpeg",
    },
    "April 2022": {
      title: "April 2022",
      description:
        "Introduced autonomous drone technology for urban logistics and delivery services.",
      image: "./resources/drone5.jpg",
    },
    "April 2023": {
      title: "April 2023",
      description:
        "Achieved ISO certification for our drone manufacturing processes, ensuring the highest standards of quality and safety.",
      image: "./resources/drone6.png",
    },
    "April 2024": {
      title: "April 2024",
      description:
        "Rolled out our global expansion strategy, entering new international markets with our cutting-edge drone solutions.",
      image: "./resources/drone7.jpeg",
    },
  };

  const updateTimelineLine = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const startDot = timelineEntries[0].querySelector(".timeline-dot");
      const endDot =
        timelineEntries[timelineEntries.length - 1].querySelector(
          ".timeline-dot"
        );

      const startDotRect = startDot.getBoundingClientRect();
      const endDotRect = endDot.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();

      const startTop =
        startDotRect.top - timelineRect.top + startDotRect.height / 2;
      const endTop =
        endDotRect.bottom - timelineRect.top - endDotRect.height / 2;
      const lineHeight = endTop - startTop;

      timelineLine.style.top = `${startTop}px`;
      timelineLine.style.height = `${lineHeight}px`;
      timelineLine.style.width = "4px";
      timelineLine.style.left = "50%";
      timelineLine.style.transform = "translateX(-50%)";
    } else {
      const startDot = timelineEntries[0].querySelector(".timeline-dot");
      const endDot =
        timelineEntries[timelineEntries.length - 1].querySelector(
          ".timeline-dot"
        );

      const startDotRect = startDot.getBoundingClientRect();
      const endDotRect = endDot.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();

      const startLeft =
        startDotRect.left - timelineRect.left + startDotRect.width / 2;
      const endLeft =
        endDotRect.right - timelineRect.left - endDotRect.width / 2;
      const lineWidth = endLeft - startLeft;

      timelineLine.style.left = `${startLeft}px`;
      timelineLine.style.width = `${lineWidth}px`;
      timelineLine.style.height = "4px";
      timelineLine.style.top = "50%";
      timelineLine.style.transform = "translateY(-50%)";
    }
  };

  const updateTimelineContent = (content) => {
    timelineTitle.style.opacity = 0;
    timelineDescription.style.opacity = 0;
    timelineImage.style.opacity = 0;

    setTimeout(() => {
      timelineTitle.textContent = content.title;
      timelineDescription.textContent = content.description;
      timelineImage.src = content.image;

      timelineTitle.style.opacity = 1;
      timelineDescription.style.opacity = 1;
      timelineImage.style.opacity = 1;
    }, 300);
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
      image: "./resources/igdroneslogobig.png",
    };

    updateTimelineContent(content);
    updateTimelineLine();
  };

  timelineEntries.forEach((entry) => {
    entry.addEventListener("click", () => {
      setActiveEntry(entry);
    });
  });

  window.addEventListener("resize", updateTimelineLine);
  updateTimelineLine();
});
