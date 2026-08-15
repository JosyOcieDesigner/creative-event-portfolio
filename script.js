const videos = [
  { title: "Project 01", category: "Event Film • Creative Direction", youtubeId: "p5H_neI8nSA" },
  { title: "Project 02", category: "Event Experience", youtubeId: "7Mjo9ZoQKdk" },
  { title: "Project 03", category: "Brand Activation", youtubeId: "78YeVpyMJgE" },
  { title: "Project 04", category: "Live Event", youtubeId: "o-jr_uCeVGc" },
  { title: "Project 05", category: "Campaign Experience", youtubeId: "SZuYLtXobTw" },
  { title: "Project 06", category: "Event Production", youtubeId: "RYHhRRq4vmk" },
  { title: "Project 07", category: "Creative Direction", youtubeId: "Ysb_F_TWdBM" },
  { title: "Project 08", category: "Event Documentation", youtubeId: "ztzvE9rnH9U" },
  { title: "Project 09", category: "Corporate Event", youtubeId: "6i2qeBiPmrM" },
  { title: "Project 10", category: "Product Launch", youtubeId: "bmD3KTpkQu8" },
  { title: "Project 11", category: "Music / Entertainment Event", youtubeId: "aNVfmG6Io88" },
  { title: "Project 12", category: "Brand Experience", youtubeId: "vpmbdMpktXI" },
  { title: "Project 13", category: "Event Recap", youtubeId: "nSuQSeqH0iI" }
];


const grid = document.getElementById("videoGrid");

videos.forEach((video, index) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = `https://youtu.be/${video.youtubeId}`;
  card.target = "_blank";
  card.rel = "noopener";

  card.innerHTML = `
    <div class="thumb">
      <img src="https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg" alt="${video.title}">
      <div class="play">▶</div>
    </div>
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
