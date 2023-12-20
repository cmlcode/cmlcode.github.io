const menu_wrapper = document.querySelector(".header_menu_wrapper")
const menu_button = document.querySelector(".header_menu")
const open_menu_button = document.querySelector(".header_menu_open")
const menu_box = document.querySelector(".header_expanded")

menu_wrapper.addEventListener('click', () => {
    //Change menu button
    if (menu_button.classList.contains("invisible")){
        menu_button.classList.remove("invisible");
        open_menu_button.classList.add("invisible");
        menu_box.classList.add("invisible")
    }
    else{
        menu_button.classList.add("invisible");
        open_menu_button.classList.remove("invisible");
        menu_box.classList.remove("invisible")
    }
  })