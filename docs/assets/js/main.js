"use strict";const burger=document.querySelector(".js_burger"),list=document.querySelector(".js_links"),contact=document.querySelector(".js_contact"),portfolio=document.querySelector(".js_portfolio"),aboutme=document.querySelector(".js_aboutme");function handlerClick(){list.classList.toggle("open"),burger.classList.toggle("close")}function handlerClickContact(){list.classList.toggle("open"),burger.classList.toggle("close")}function handlerClickPortfolio(){list.classList.toggle("open"),burger.classList.toggle("close")}function handlerClickAboutme(){list.classList.toggle("open"),burger.classList.toggle("close")}burger.addEventListener("click",handlerClick),contact.addEventListener("click",handlerClickContact),portfolio.addEventListener("click",handlerClickPortfolio),aboutme.addEventListener("click",handlerClickAboutme);