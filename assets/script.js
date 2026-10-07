const toggle=document.querySelector('.theme-toggle');
const saved=localStorage.getItem('tejas-theme');
if(saved==='dark') document.body.classList.add('dark');
toggle?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('tejas-theme',document.body.classList.contains('dark')?'dark':'light')});
document.getElementById('year').textContent=new Date().getFullYear();
