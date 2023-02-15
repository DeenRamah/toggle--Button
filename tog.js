let body = document.getElementById("body");
let con = document.getElementById(".con");

body = document.querySelector("body"),
      con = document.querySelector(".con");

let getMode = localStorage.getItem("mode");

//local item is an object that allows you to save key/values pains in the browser
//syntax = window.localStorage || localStroge
//Save Data to local storage = localStorage.setItem(key, value);
//Read data from localStorag=e-----let mkuu = localStorage.getItem(key);
//Remove data from localStorage------ localstorage.removeItem(key);
//Remove all(clear local storage)
//localstrorage.clear
if(getMode && getMode ==="dark"){
    body.classList.add("dark");
    body.classList.add("active");
}
con.addEventListener("click", ()=>{
    body.classList.con("dark");

    if(!body.classList.contains("dark")){
      return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode","dark");
});
con.addEventListener("click", ()=> con.classList.con("active"));
/** 
<script>
  const body = document.querySelector("body"),
      con = document.querySelector(".con");

  con.addEventListener("click", ()=> con.classList.con("active"));

</script>
-->
<!--
<script>
  const body = document.querySelector("body"),
    con = document.querySelector(".con");


  con.addEventListener("click", ()=>{
   body.classList.con("dark");
   
   if(!body.classList.contains("dark")){
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode","dark");

  });

con.addEventListener("click", ()=> con.classList.con("active"));
  --> */
  /**let body = document.getElementById("body");
let con = document.getElementById(".con");


body.querySelector("body");
body.querySelector(".con");


con.addEventListener("click", ()=> con.classList.con("active"));
con.addEventListener("click", ()=> con.classList.remove("open")); */