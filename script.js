const BASE = "/creative-event-portfolio/";

const videos = [
  {id:"p5H_neI8nSA",title:"Creative Event",category:"Creative Direction • Event Experience",thumbnail:"project-01.jpg"},
  {id:"7Mjo9ZoQKdk",title:"Project 02",category:"Event Experience",thumbnail:"project-02.jpg"},
  {id:"78YeVpyMJgE",title:"Project 03",category:"Brand Activation",thumbnail:"project-03.jpg"},
  {id:"o-jr_uCeVGc",title:"Project 04",category:"Live Event",thumbnail:"project-04.jpg"},
  {id:"SZuYLtXobTw",title:"Project 05",category:"Campaign Experience",thumbnail:"project-05.jpg"},
  {id:"RYHhRRq4vmk",title:"Project 06",category:"Event Production",thumbnail:"project-06.jpg"},
  {id:"Ysb_F_TWdBM",title:"Project 07",category:"Creative Direction",thumbnail:"project-07.jpg"},
  {id:"ztzvE9rnH9U",title:"Project 08",category:"Event Documentation",thumbnail:"project-08.jpg"},
  {id:"6i2qeBiPmrM",title:"Project 09",category:"Corporate Event",thumbnail:"project-09.jpg"},
  {id:"bmD3KTpkQu8",title:"Project 10",category:"Product Launch",thumbnail:"project-10.jpg"},
  {id:"aNVfmG6Io88",title:"Project 11",category:"Entertainment Event",thumbnail:"project-11.jpg"},
  {id:"vpmbdMpktXI",title:"Project 12",category:"Brand Experience",thumbnail:"project-12.jpg"},
  {id:"nSuQSeqH0iI",title:"Project 13",category:"Event Recap",thumbnail:"project-13.jpg"},
  {id:"4tqC6Hr1R5E",title:"Project 14",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/4tqC6Hr1R5E/hqdefault.jpg"},
  {id:"CfSAYpalJAE",title:"Project 15",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/CfSAYpalJAE/hqdefault.jpg"},
  {id:"1G8XVFR8NeQ",title:"Project 16",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/1G8XVFR8NeQ/hqdefault.jpg"},
  {id:"x93EqiUeD6c",title:"Project 17",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/x93EqiUeD6c/hqdefault.jpg"},
  {id:"v7SNZDYfVOQ",title:"Project 18",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/v7SNZDYfVOQ/hqdefault.jpg"},
  {id:"a6JZUictggw",title:"Project 19",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/a6JZUictggw/hqdefault.jpg"},
  {id:"qIE1wK0Zf2o",title:"Project 20",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/qIE1wK0Zf2o/hqdefault.jpg"},
  {id:"Qbv4WrXNDXM",title:"Project 21",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/Qbv4WrXNDXM/hqdefault.jpg"},
  {id:"kVx6Bget3Wk",title:"Project 22",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/kVx6Bget3Wk/hqdefault.jpg"},
  {id:"Ww2o08iwjF4",title:"Project 23",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/Ww2o08iwjF4/hqdefault.jpg"},
  {id:"EFi6plBvvSg",title:"Project 24",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/EFi6plBvvSg/hqdefault.jpg"},
  {id:"mWOWWVG1gdk",title:"Project 25",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/mWOWWVG1gdk/hqdefault.jpg"},
  {id:"hsdsg711GOw",title:"Project 26",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/hsdsg711GOw/hqdefault.jpg"},
  {id:"K3IL5DFYE1Y",title:"Project 27",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/K3IL5DFYE1Y/hqdefault.jpg"},
  {id:"iFeY5ShrP_8",title:"Project 28",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/iFeY5ShrP_8/hqdefault.jpg"},
  {id:"jddCyUzLeBQ",title:"Project 29",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/jddCyUzLeBQ/hqdefault.jpg"},
  {id:"kc7d9YxAAeM",title:"Project 30",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/kc7d9YxAAeM/hqdefault.jpg"},
  {id:"CEhWNUVJiB8",title:"Project 31",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/CEhWNUVJiB8/hqdefault.jpg"},
  {id:"n_zRjZcywXM",title:"Project 32",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/n_zRjZcywXM/hqdefault.jpg"},
  {id:"oUe9WBMy-Is",title:"Project 33",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/oUe9WBMy-Is/hqdefault.jpg"},
  {id:"cQAOSfosogE",title:"Project 34",category:"Creative Event",thumbnail:"https://i.ytimg.com/vi/cQAOSfosogE/hqdefault.jpg"}
];

const grid = document.getElementById("videoGrid");

function thumbSrc(v){
  return v.thumbnail.startsWith("http") ? v.thumbnail : `${BASE}${v.thumbnail}?v=12`;
}

function stopOtherPlayers(currentCard){
  document.querySelectorAll(".card.is-playing").forEach(card => {
    if(card !== currentCard){
      const frame = card.querySelector(".video-frame");
      if(frame) frame.remove();
      const btn = card.querySelector(".thumb");
      if(btn) btn.classList.remove("hidden");
      card.classList.remove("is-playing");
    }
  });
}

function playInline(card, button, video){
  if(card.classList.contains("is-playing")) return;

  stopOtherPlayers(card);

  const frame = document.createElement("div");
  frame.className = "video-frame";

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`;
  iframe.title = video.title;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;

  frame.appendChild(iframe);
  card.insertBefore(frame, button);
  button.classList.add("hidden");
  card.classList.add("is-playing");
}

videos.forEach((v,i)=>{
  const card = document.createElement("article");
  card.className = "card";

  const button = document.createElement("button");
  button.className = "thumb";
  button.type = "button";
  button.setAttribute("aria-label", `Play ${v.title}`);
  button.oncontextmenu = e => e.preventDefault();

  const img = document.createElement("img");
  img.src = thumbSrc(v);
  img.alt = v.title;
  img.draggable = false;

  const play = document.createElement("div");
  play.className = "play";
  play.textContent = "▶";

  button.append(img, play);
  button.addEventListener("click", ()=>playInline(card, button, v));

  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `<div><h3>${v.title}</h3><p>${v.category}</p></div><span>${String(i+1).padStart(2,"0")}</span>`;

  card.append(button, info);
  grid.appendChild(card);
});
