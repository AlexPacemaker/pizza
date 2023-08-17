"use strict";

export const header = {
  output() {
    const headerContainer = document.createElement("div");
    document.body.appendChild(headerContainer);
    headerContainer.classList.add("header");
    
    const menuTitles = ["Main", "Info", "About", "Contact Us"];

    menuTitles.forEach((value) => {
      const menuElement = document.createElement("h2");
      document.body.append(menuElement);
      headerContainer.appendChild(menuElement);
      menuElement.textContent = value;
      menuElement.classList.add("menuItem");
    });
  },
};
