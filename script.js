const videos = [
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

function thumbnailCandidates(id) {
  return [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
  ];
}

videos.forEach((video, index) => {
  const card = document.createElement("article");
  card.className = "card";

  const thumbWrap = document.createElement("button");
  thumbWrap.className = "thumb";
  thumbWrap.type = "button";
  thumbWrap.setAttribute("aria-label", `Play ${video.title}`);

  const img = document.createElement("img");
  img.alt = video.title;

  const sources = thumbnailCandidates(video.youtubeId);
  let sourceIndex = 0;
  img.src = sources[sourceIndex];
  img.onerror = () => {
    sourceIndex += 1;
    if (sourceIndex < sources.length) {
      img.src = sources[sourceIndex];
    } else {
      img.style.display = "none";
      thumbWrap.classList.add("thumb-fallback");
    }
  };

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
