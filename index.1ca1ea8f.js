function t(t,e,n){var i=t,a=e/2,c={min:a,max:n-a};return i<c.min&&(i=c.min),i>c.max&&(i=c.max),i-a}document.addEventListener("click",function(e){if("wall"===e.target.className){var n=e.target.firstElementChild,i={x:t(e.offsetX,n.clientWidth,e.target.clientWidth),y:t(e.offsetY,n.clientHeight,e.target.clientHeight)};n.style.cssText="\n      left: ".concat(i.x,"px;\n      top: ").concat(i.y,"px;\n    ")}});
//# sourceMappingURL=index.1ca1ea8f.js.map