const jobPositions = [
    {
      timeline: "Aug 2024 — Present",
      currentPosition: "Founding Designer & Head of Product Design",
      place: "Stealth AI Startup",
      description:
        "Establishing and leading the design team for a Stealth AI Startup set to bring the New Era of Money.",
      skills: ["Brand Identity", "Product Design", "UI/UX Design"],
    },
    {
      timeline: "Mar 2024 — Present",
      currentPosition: "Head of Product Design",
      place: "Vela Exchange",
      description:
        "Leading the design team for Vela Exchange, a community-first decentralized perpetuals trading platform.",
      skills: ["Product Design", "UI/UX Design", "Team Leadership"],
    },
    {
      timeline: "Feb 2022 — Present",
      currentPosition: "Co-founder, Designer & Developer",
      place: "Swoop Exchange",
      description:
        "Co-founded and developed Swoop Exchange, scaling from zero to over $10M in trading volume.",
      skills: ["JavaScript", "CSS", "Blockchain Tech"],
    },
  ];
  
  const experienceContainer = document.getElementById("experience-cards");
  
  jobPositions.forEach((job) => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <div class="card-header">${job.timeline}</div>
      <div class="card-description">
        <strong>${job.currentPosition} • ${job.place}</strong>
        <p>${job.description}</p>
      </div>
      <div class="card-skills">
        ${job.skills.map((skill) => `<span class="badge">${skill}</span>`).join("")}
      </div>
    `;
  
    experienceContainer.appendChild(card);
  });
  