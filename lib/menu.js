




var menu=document.createElement("div");
document.body.appendChild(menu);
menu.id="menu";

var top_bar=document.createElement("div");
top_bar.id="top_bar";
menu.appendChild(top_bar);

var logolnk=document.createElement("a");
menu.appendChild(logolnk);
logolnk.href="localhost:3000";

var logo=document.createElement("img");
logolnk.appendChild(logo);

logo.src="/lib/images/logo.PNG";
logo.id="logo";



var menuLink=function(ref,txt){
this.lnk=document.createElement("a");
this.lnk.href=ref;
menu.appendChild(lnk);
this.menulink=document.createElement("span");
this.lnk.appendChild(this.menulink);
this.menulink.classList.add("menuLinks");
this.menulink.innerText=txt;
this.menulink.id=txt;

this.menulink.addEventListener("click",click);
this.menulink.addEventListener("mouseover",hover);
this.menulink.addEventListener("mouseout",out);

function click(){
window.location=ref;
};

function hover(){
document.getElementById(txt).className="menuLinks_hover";
};

function out(){
document.getElementById(txt).className="menuLinks";
};





};



var menuLinks=[{ref:'https://localhost:3000/home',name:"Home"},{ref:"http://localhost:3000//projects",name:"Projects"},{ref:"http://localhost:3000//login",name:"Login"},{ref:"http://localhost:3000//discussion",name:"Discussion"},{ref:"http://localhost:3000//about",name:"About"},{ref:"http://localhost:3000//account",name:"Account"}];
//
for(var a=0;a<menuLinks.length;a++){
menuLink(menuLinks[a].ref,menuLinks[a].name);

}
