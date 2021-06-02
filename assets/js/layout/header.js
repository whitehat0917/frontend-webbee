// document.querySelector('.theme-toggler').addEventListener('click', function() {
//     document.body.classList.toggle('dark');
    
//     if (document.querySelector('body').classList.contains('dark')) {
//         document.querySelector('.theme-toggler').innerHTML = '<span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke="#FFE102" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span>';
//     } else {
//         document.querySelector('.theme-toggler').innerHTML = '<span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg></span>';
//     }
// });

// document.querySelector('.navbar-color.green').addEventListener('click', function() {
//     document.querySelector('.navbar-color.green').innerHTML = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
//     document.querySelector('.navbar-color.blue').innerHTML = '';
//     document.querySelector('.navbar-color.purple').innerHTML = '';
//     document.querySelector('.navbar-color.red').innerHTML = '';
//     document.querySelector('.navbar-color.orange').innerHTML = '';
//     changeCssFile("green");
// });

// document.querySelector('.navbar-color.blue').addEventListener('click', function() {
//     document.querySelector('.navbar-color.green').innerHTML = '';
//     document.querySelector('.navbar-color.blue').innerHTML = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
//     document.querySelector('.navbar-color.purple').innerHTML = '';
//     document.querySelector('.navbar-color.red').innerHTML = '';
//     document.querySelector('.navbar-color.orange').innerHTML = '';
//     changeCssFile("blue");
// });

// document.querySelector('.navbar-color.purple').addEventListener('click', function() {
//     document.querySelector('.navbar-color.green').innerHTML = '';
//     document.querySelector('.navbar-color.blue').innerHTML = '';
//     document.querySelector('.navbar-color.purple').innerHTML = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
//     document.querySelector('.navbar-color.red').innerHTML = '';
//     document.querySelector('.navbar-color.orange').innerHTML = '';
//     changeCssFile("purple");
// });

// document.querySelector('.navbar-color.red').addEventListener('click', function() {
//     document.querySelector('.navbar-color.green').innerHTML = '';
//     document.querySelector('.navbar-color.blue').innerHTML = '';
//     document.querySelector('.navbar-color.purple').innerHTML = '';
//     document.querySelector('.navbar-color.red').innerHTML = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
//     document.querySelector('.navbar-color.orange').innerHTML = '';
//     changeCssFile("red");
// });

// document.querySelector('.navbar-color.orange').addEventListener('click', function() {
//     document.querySelector('.navbar-color.green').innerHTML = '';
//     document.querySelector('.navbar-color.blue').innerHTML = '';
//     document.querySelector('.navbar-color.purple').innerHTML = '';
//     document.querySelector('.navbar-color.red').innerHTML = '';
//     document.querySelector('.navbar-color.orange').innerHTML = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
//     changeCssFile("orange");
// });

// function changeCssFile(newCssName) {
//     var cssLink = document.getElementById('theme-color');
//     cssLink.href = "assets/css/colors/" + newCssName + ".css";
// }

function onOpenSidebarButton() {
    document.getElementById('nav-content').style.transform = 'translateX(0)';
    document.getElementById('sidebar-bg').style.visibility = 'visible';
}

function onCloseSidebarButton() {
    document.getElementById('nav-content').style.transform = 'translateX(-100%)';
    document.getElementById('sidebar-bg').style.visibility = 'hidden';
}