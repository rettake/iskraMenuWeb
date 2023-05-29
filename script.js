bodyElement = document.querySelector(".body"); // Body
sliderElements = document.querySelectorAll(".slider"); // Slider
textElements = document.querySelectorAll(".title"); // Text
buttonElements = document.querySelectorAll(".bar"); // Button
pdfElement = document.querySelector(".pages"); // PDF
middleElements = document.querySelectorAll(".middle"); // Middle
buttonBackElement = document.querySelector(".button_back"); // Button
netmonetLinkElement = document.querySelector(".netmonet_link"); // Netmonet

const calculateStyles = (val, index) => {
  console.log(val, index);

  const getIconUrl = () => {
    if (index == 0) {
      return "icon_menu"
    }

    if (index == 1) {
      return "inst_icon"
    }

    if (index == 2) {
      return "rate_icon"
    }

    if (index == 3) {
      return "tips_icon"
    }
  };

  if (val < 50) {
    sliderElements[index].style.setProperty("--opacityIcon", 1 - (val * 2) / 100);
    sliderElements[index].style.setProperty("--linkIcon", `url(./images/${getIconUrl()}.svg)`);
  } else if (val == 50) {
    sliderElements[index].style.setProperty("--opacityIcon", 0);
  } else {
    sliderElements[index].style.setProperty("--opacityIcon", ((val % 50) * 2) / 100);
    sliderElements[index].style.setProperty("--linkIcon", `url(./images/${getIconUrl()}2.svg)`);
  }

  if (val > 10) {
    buttonElements[index].style.backgroundColor = `rgba(244, 244, 244, 0.${val})`;
  } else {
    buttonElements[index].style.backgroundColor = `rgba(244, 244, 244, .1)`;
  }

  textElements[index].style.opacity = 1 - val / 100;
};

sliderElements.forEach((e, index) => {
  e.addEventListener("touchmove", () => {
    if (sliderElements[index].value == 99) {
      console.log(`${index} submited`);
    } else {
      calculateStyles(sliderElements[index].value, index);
    }
  });
});
