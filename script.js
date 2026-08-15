const videos = [
  {
    title: "Creative Event Project",
    category: "Event Film • Creative Direction",
    youtubeId: "p5H_neI8nSA"
  },
  { title: "Project 02", category: "Event Experience", youtubeId: "" },
  { title: "Project 03", category: "Brand Activation", youtubeId: "" },
  { title: "Project 04", category: "Live Event", youtubeId: "" },
  { title: "Project 05", category: "Campaign Experience", youtubeId: "" },
  { title: "Project 06", category: "Event Production", youtubeId: "" },
  { title: "Project 07", category: "Creative Direction", youtubeId: "" },
  { title: "Project 08", category: "Event Documentation", youtubeId: "" },
  { title: "Project 09", category: "Corporate Event", youtubeId: "" },
  { title: "Project 10", category: "Product Launch", youtubeId: "" },
  { title: "Project 11", category: "Music Event", youtubeId: "" },
  { title: "Project 12", category: "Sports Event", youtubeId: "" },
  { title: "Project 13", category: "Exhibition", youtubeId: "" },
  { title: "Project 14", category: "Conference", youtubeId: "" },
  { title: "Project 15", category: "Brand Experience", youtubeId: "" },
  { title: "Project 16", category: "Roadshow", youtubeId: "" },
  { title: "Project 17", category: "Festival", youtubeId: "" },
  { title: "Project 18", category: "Community Event", youtubeId: "" },
  { title: "Project 19", category: "Digital Activation", youtubeId: "" },
  { title: "Project 20", category: "Creative Campaign", youtubeId: "" },
  { title: "Project 21", category: "Experiential Marketing", youtubeId: "" },
  { title: "Project 22", category: "Production Highlight", youtubeId: "" },
  { title: "Project 23", category: "Behind The Scenes", youtubeId: "" },
  { title: "Project 24", category: "Event Recap", youtubeId: "" }
];

const grid = document.getElementById("videoGrid");

videos.forEach((video, index) => {
  const card = document.createElement(video.youtubeId ? "a" : "div");
  card.className = "card" + (video.youtubeId ? "" : " placeholder");

  if (video.youtubeId) {
    card.href = `https://youtu.be/${video.youtubeId}`;
    card.target = "_blank";
    card.rel = "noopener";
  }

  const thumb = video.youtubeId
    ? `<div class="thumb">
         <img src="https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg" alt="${video.title}">
         <div class="play">▶</div>
       </div>`
    : `<div class="thumb"></div>`;

  card.innerHTML = `
    ${thumb}
    <div class="card-info">
      <div>
        <h3>${video.title}</h3>
        <p>${video.category}</p>
      </div>
      <span>${String(index + 1).padStart(2, "0")}</span>
    </div>
  `;

  grid.appendChild(card);
});