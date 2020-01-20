(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/me.5710582f.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/salonpiekna.1d3c8024.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/portfolio.40e77881.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/simplePage.9fb60141.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/savings.543bb346.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/todo.e8673615.jpg"},30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(16),i=a.n(c),s=a(8),o=a(2),r=a(9),m=a(10),u=a(11),p=(a(35),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__description"},n.a.createElement("p",{className:"header__description--name"},"Patrycja"),n.a.createElement("p",{className:"header__description--surname"},"Paczkowska"),n.a.createElement("p",{className:"header__description--job"},"Junior Front-End Developer")))}),_=a(17),E=a.n(_),d=function(e){return n.a.createElement("div",{className:e.class},n.a.createElement("a",{href:"#about"},"about"),n.a.createElement("a",{href:"#tech"},"technologies"),n.a.createElement("a",{href:"#projects"},"projects"),n.a.createElement("a",{href:"#contact"},"contact"))},b=function(e){return n.a.createElement("button",{className:e.class,onClick:e.click},e.text)},h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={click:!1},a.hideMenu=function(){document.querySelector(".nav__mobile--list").style.top="-100%",a.setState({click:!a.state.click})},a.componentDidMount=function(){document.querySelectorAll(".nav__mobile--list a").forEach((function(e){e.addEventListener("click",a.hideMenu)}))},a.handleClick=function(){var e=document.querySelector(".nav__mobile--list");a.state.click?e.style.top="-100%":e.style.top="8vh",a.setState({click:!a.state.click})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.click?n.a.createElement(b,{click:this.handleClick,class:"nav__mobile--openMenu",text:n.a.createElement(E.a,{style:{fontSize:40}})}):n.a.createElement(b,{click:this.handleClick,class:"nav__mobile--closedMenu",text:"MENU"});return n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"nav__mobile"},e,n.a.createElement(d,{class:"nav__mobile--list"})),n.a.createElement("div",{className:"nav__desktop"},n.a.createElement(d,{class:"nav__desktop--list"})))}}]),t}(n.a.Component),k=a(19),f=a.n(k),g=function(){return n.a.createElement("section",{id:"about",className:"about"},n.a.createElement("h1",{className:"about__title"},"About me "),n.a.createElement("section",{className:"about__description"},n.a.createElement("div",{className:"about__description__text1"},'I graduated from the Ilawa IT School, passed the E.12, E.13, E.14 exams and went abroad to build a financial pillow. All this to become a Front-End Develope without studying! For this purpose, I learned from courses such as: Bart\u0142omiej Borowczyk: "From zero to first job" and UX & UI - the art of useful design.',n.a.createElement("span",{className:"hobby"},"Besides all that, my hobby is painting.")),n.a.createElement("div",{className:"about__description__image"},n.a.createElement("img",{className:"about__description__image--picture",src:f.a,alt:"photo of my person"})),n.a.createElement("div",{className:"about__description__text2"},n.a.createElement("h3",{className:"about__description__text2--title"},"It makes me stand out:"," "),n.a.createElement("ul",{className:"about__description__text2--list"},n.a.createElement("li",null,"Ambition to create new things,"),n.a.createElement("li",null,"Independence, "),n.a.createElement("li",null,"Self-discipline, "),n.a.createElement("li",null,"Constant self-development, "),n.a.createElement("li",null,"Stubbornness in pursuit of a goal, "),n.a.createElement("li",null,"Quickly establishing contacts with"),"colleagues."))))},v=function(){return n.a.createElement("section",{id:"tech",className:"skills"},n.a.createElement("h2",{className:"skills__mainTitle"},"Technological stack"),n.a.createElement("div",{className:"skills__skill"},n.a.createElement("h2",{className:"skills__title"},"Main technologies"),n.a.createElement("section",{className:"skills__listOfMainTech"},n.a.createElement("p",null,"React"),n.a.createElement("p",null,"JavaScript5/ES6"),n.a.createElement("p",null,"Responsive Web Design"),n.a.createElement("p",null,"Sass"),n.a.createElement("p",null,"CSS"),n.a.createElement("p",null,"Html"),n.a.createElement("p",null,"Git"),n.a.createElement("p",null,"Webpack"))),n.a.createElement("div",{className:"skills__skill"},n.a.createElement("h2",{className:"skills__title"},"Other technologies"),n.a.createElement("section",{className:"skills__listOfOtherTech"},n.a.createElement("p",null,"Flexbox/Grid"),n.a.createElement("p",null,"Methodology BEM"),n.a.createElement("p",null,"Basics of Vue and Pug"),n.a.createElement("p",null,"Basics of Linux and Vim"),n.a.createElement("p",null,"Basics of PhotoShop and GIMP"))),n.a.createElement("div",{className:"skills__skill"},n.a.createElement("h2",{className:"skills__title"},"Languages"),n.a.createElement("section",{className:"skills__listOfLang"},n.a.createElement("p",null,"English - intermediate, allowing to read the documentation"))))},N=a(20),j=a.n(N),x=a(21),y=a.n(x),S=a(22),C=a.n(S),w=a(23),P=a.n(w),O=a(24),L=a.n(O),M=a(26),R=a.n(M),B=a(25),D=a.n(B),F=function(e){return n.a.createElement("article",{className:"projects__project"},n.a.createElement("div",{className:"projects__project--about"},n.a.createElement("h5",{className:"projects__project--about--title"},e.title),n.a.createElement("p",null,e.text),n.a.createElement("div",{className:"projects__project--about__boxlink"},n.a.createElement("a",{className:"projects__project--about__boxlink--link",href:e.linkLive,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(D.a,null)," Live"),n.a.createElement("a",{className:"projects__project--about__boxlink--link",href:e.linkCode,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(R.a,null)," Code"))),n.a.createElement("img",{className:"projects__project--img",src:e.picture,alt:e.alt}))},z=function(){return n.a.createElement("section",{id:"projects",className:"projects"},n.a.createElement("h1",{className:"projects__title"},"Projects"),n.a.createElement(F,{title:"Beauty Salon",text:"Created in JavaScript, Css, Flexbox, RWD.",linkLive:"https://umbbra.github.io/SalonPieknosci/",linkCode:"https://github.com/umbbra/SalonPieknosci",picture:j.a,alt:"Beauty Salon picture"}),n.a.createElement(F,{title:"Old Portfolio",text:"Created in React, ScrollReveal, jQuery, RWD.",linkLive:"https://umbbra.github.io/Portfolio/",linkCode:"https://github.com/umbbra/Portfolio/",picture:y.a,alt:"Old Portfolio picture"}),n.a.createElement(F,{title:"Savings application",text:"Created in React, Sass, Flexbox, RWD.",linkLive:"https://umbbra.github.io/savings/",linkCode:"https://github.com/umbbra/savings",picture:P.a,alt:"Savings app picture"}),n.a.createElement(F,{title:"ToDo application",text:"Created in React, Css, RWD.",linkLive:"https://umbbra.github.io/todoapp/",linkCode:"https://github.com/umbbra/todoapp/",picture:L.a,alt:"Todo app picture"}),n.a.createElement(F,{title:"Simply Page",text:"Created in HTML, Sass, Flexbox, RWD.",linkLive:"https://umbbra.github.io/Flexbox-simplyPage/",linkCode:"https://github.com/umbbra/Flexbox-simplyPage/",picture:C.a,alt:"Simply page picture"}))},I=a(27),T=a.n(I),W=a(51),A=a(28),J=a.n(A),q=function(e){return n.a.createElement("a",{href:e.link,className:"contact__social--item",target:"_blank",rel:"noopener noreferrer"},e.icon)},G=function(){var e={fontSize:50};return n.a.createElement("section",{id:"contact",className:"contact"},n.a.createElement("h2",{className:"contact__title"},"Contact"),n.a.createElement("p",{className:"contact__phone"},"882 - 813 - 487"),n.a.createElement("p",{className:"contact__email"},"paczkowska.umbbra@gmail.com"),n.a.createElement("div",{className:"contact__social"},n.a.createElement(q,{link:"https://www.facebook.com/patrycja.paczkowska.336",icon:n.a.createElement(T.a,{style:e})}),n.a.createElement(q,{link:"https://github.com/umbbra",icon:n.a.createElement(W.a,{style:e})}),n.a.createElement(q,{link:"https://www.linkedin.com/in/patrycja-paczkowska-172667182/",icon:n.a.createElement(J.a,{style:e})})),n.a.createElement("p",{className:"contact__copy"},"\xa9 2020 Patrycja Paczkowska"))},U=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(p,null),n.a.createElement(g,null),n.a.createElement(v,null),n.a.createElement(z,null),n.a.createElement(G,null))}}]),t}(n.a.Component);i.a.render(n.a.createElement(U,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d588a7eb.chunk.js.map