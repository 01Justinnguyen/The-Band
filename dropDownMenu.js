let header = document.getElementById('header');
let menuBtn = document.getElementById('js-menu-btn');
let heightCurrent = header.clientHeight;

menuBtn.onclick = function() {
    if(header.clientHeight === heightCurrent) {
        header.style.height = 'auto';
    } else {
        header.style.height = heightCurrent + 'px';
    }
}


let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(let i=0;i<menuItems.length;i++)
{
    let menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        
        if(isParentMenu) {
            event.preventDefault();
        }else {
            header.style.height = heightCurrent + 'px';
        }
    }
}