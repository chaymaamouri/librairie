function openClose() {
    sidebar = document.querySelector(".sidebar-container");
    btn = document.querySelector(".my-btn");
    if (sidebar.className === "sidebar-container") {
      sidebar.classList.add("close");
      btn.classList.add("fa-bars");
      btn.classList.remove("fa-times");
    } else {
      sidebar.classList.remove("close");
      btn.classList.add("fa-times");
      btn.classList.remove("fa-bars");
      
    }
  }
  
  btn = document.querySelector(".my-btn");
  btn.addEventListener("click", () => openClose());             

function addbasket()
{
let score=0
let basket=document.getElementById("score-basket")

score=score+1
basket.innerHTML="("+ score +")" 
}
