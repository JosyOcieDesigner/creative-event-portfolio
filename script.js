const BASE = "/creative-event-portfolio/";

const videos = [
  { title: "Project 02", category: "Event Experience", youtubeId: "7Mjo9ZoQKdk", thumbnail: "project-02.jpg" },
  { title: "Project 03", category: "Brand Activation", youtubeId: "78YeVpyMJgE", thumbnail: "project-03.jpg" },
  { title: "Project 04", category: "Live Event", youtubeId: "o-jr_uCeVGc", thumbnail: "project-04.jpg" },
  { title: "Project 05", category: "Campaign Experience", youtubeId: "SZuYLtXobTw", thumbnail: "project-05.jpg" },
  { title: "Project 06", category: "Event Production", youtubeId: "RYHhRRq4vmk", thumbnail: "project-06.jpg" },
  { title: "Project 07", category: "Creative Direction", youtubeId: "Ysb_F_TWdBM", thumbnail: "project-07.jpg" },
  { title: "Project 08", category: "Event Documentation", youtubeId: "ztzvE9rnH9U", thumbnail: "project-08.jpg" },
  { title: "Project 09", category: "Corporate Event", youtubeId: "6i2qeBiPmrM", thumbnail: "project-09.jpg" },
  { title: "Project 10", category: "Product Launch", youtubeId: "bmD3KTpkQu8", thumbnail: "project-10.jpg" },
  { title: "Project 11", category: "Music / Entertainment Event", youtubeId: "aNVfmG6Io88", thumbnail: "project-11.jpg" },
  { title: "Project 12", category: "Brand Experience", youtubeId: "vpmbdMpktXI", thumbnail: "project-12.jpg" },
  { title: "Project 13", category: "Event Recap", youtubeId: "nSuQSeqH0iI", thumbnail: "project-13.jpg" }
];

const grid = document.getElementById("videoGrid");

videos.forEach((video, index) => {
  const card = document.createElement("article");
  card.className = "card";

  const thumbWrap = document.createElement("button");
  thumbWrap.className = "thumb";
  thumbWrap.type = "button";
  thumbWrap.setAttribute("aria-label", `Play ${video.title}`);

  const img = document.createElement("img");
  img.src = `${BASE}${video.thumbnail}?v=6`;
  img.alt = video.title;

  const play = document.createElement("div");
  play.className = "play";
  play.textContent = "▶";

  thumbWrap.appendChild(img);
  thumbWrap.appendChild(play);

  thumbWrap.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";

    thumbWrap.replaceChildren(iframe);
    thumbWrap.style.cursor = "default";
  }, { once: true });

  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `
    <div>
      <h3>${video.title}</h3>
      <p>${video.category}</p>
    </div>
    <span>${String(index + 2).padStart(2, "0")}</span>
  `;

  card.appendChild(thumbWrap);
  card.appendChild(info);
  grid.appendChild(card);
});
