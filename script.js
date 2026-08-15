const videos = [
  { title: "Project 02", category: "Event Experience", youtubeId: "7Mjo9ZoQKdk", thumbnail: "thumbnails/project-02.jpg" },
  { title: "Project 03", category: "Brand Activation", youtubeId: "78YeVpyMJgE", thumbnail: "thumbnails/project-03.jpg" },
  { title: "Project 04", category: "Live Event", youtubeId: "o-jr_uCeVGc", thumbnail: "thumbnails/project-04.jpg" },
  { title: "Project 05", category: "Campaign Experience", youtubeId: "SZuYLtXobTw", thumbnail: "thumbnails/project-05.jpg" },
  { title: "Project 06", category: "Event Production", youtubeId: "RYHhRRq4vmk", thumbnail: "thumbnails/project-06.jpg" },
  { title: "Project 07", category: "Creative Direction", youtubeId: "Ysb_F_TWdBM", thumbnail: "thumbnails/project-07.jpg" },
  { title: "Project 08", category: "Event Documentation", youtubeId: "ztzvE9rnH9U", thumbnail: "thumbnails/project-08.jpg" },
  { title: "Project 09", category: "Corporate Event", youtubeId: "6i2qeBiPmrM", thumbnail: "thumbnails/project-09.jpg" },
  { title: "Project 10", category: "Product Launch", youtubeId: "bmD3KTpkQu8", thumbnail: "thumbnails/project-10.jpg" },
  { title: "Project 11", category: "Music / Entertainment Event", youtubeId: "aNVfmG6Io88", thumbnail: "thumbnails/project-11.jpg" },
  { title: "Project 12", category: "Brand Experience", youtubeId: "vpmbdMpktXI", thumbnail: "thumbnails/project-12.jpg" },
  { title: "Project 13", category: "Event Recap", youtubeId: "nSuQSeqH0iI", thumbnail: "thumbnails/project-13.jpg" }
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
  img.src = video.thumbnail;
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
    thumbWrap.replaceChildren(iframe);
    thumbWrap.style.cursor = "default";
  }, { once: true });

  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `
    <div><h3>${video.title}</h3><p>${video.category}</p></div>
    <span>${String(index + 2).padStart(2, "0")}</span>`;
  card.appendChild(thumbWrap);
  card.appendChild(info);
  grid.appendChild(card);
});
