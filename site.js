
document.addEventListener("DOMContentLoaded",()=>{
  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".links a").forEach(a=>{
    if(a.getAttribute("href")===path)a.classList.add("active");
  });
  const banner=document.querySelector(".cookie");
  if(banner && !localStorage.getItem("ethiotok_cookie_notice")){
    banner.classList.add("show");
  }
  document.querySelectorAll("[data-cookie-close]").forEach(btn=>btn.addEventListener("click",()=>{
    localStorage.setItem("ethiotok_cookie_notice","seen");
    banner?.classList.remove("show");
  }));
});
