bodyElement = document.querySelector(".body"); // Body
sliderElements = document.querySelectorAll(".slider"); // Slider
textElements = document.querySelectorAll(".title"); // Text
buttonElements = document.querySelectorAll(".bar"); // Button
pdfElement = document.querySelector(".pages"); // PDF
middleElements = document.querySelectorAll(".middle"); // Middle
buttonBackElement = document.querySelector(".button_back"); // Button
instLinkElement = document.querySelector(".inst_link"); // Inst
reviewLinkElement = document.querySelector(".review_link"); // 2Gis
netmonetLinkElement = document.querySelector(".netmonet_link"); // Netmonet

const calculateStyles = (val, index) => {
  console.log(val, index);

  const getIconUrl = () => {
    if (index == 0) {
      return "icon_menu";
    }

    if (index == 1) {
      return "inst_icon";
    }

    if (index == 2) {
      return "rate_icon";
    }

    if (index == 3) {
      return "tips_icon";
    }
  };

  if (val < 50) {
    sliderElements[index].style.setProperty(
      "--opacityIcon",
      1 - (val * 2) / 100
    );
    sliderElements[index].style.setProperty(
      "--linkIcon",
      `url(./images/${getIconUrl()}.svg)`
    );
  } else if (val == 50) {
    sliderElements[index].style.setProperty("--opacityIcon", 0);
  } else {
    sliderElements[index].style.setProperty(
      "--opacityIcon",
      ((val % 50) * 2) / 100
    );
    sliderElements[index].style.setProperty(
      "--linkIcon",
      `url(./images/${getIconUrl()}2.svg)`
    );
  }

  if (val > 10) {
    buttonElements[
      index
    ].style.backgroundColor = `rgba(244, 244, 244, 0.${val})`;
  } else {
    buttonElements[index].style.backgroundColor = `rgba(244, 244, 244, .1)`;
  }

  textElements[index].style.opacity = 1 - val / 100;
};

sliderElements.forEach((e, index) => {
  e.addEventListener("touchmove", () => {
    if (sliderElements[index].value == 99) {
      if (index == 0) {
        pdfElement.classList.add("pages_show");
        middleElements[0].classList.add("middle_hide");
        middleElements[1].classList.add("middle_hide");
        middleElements[2].classList.add("middle_hide");
        middleElements[3].classList.add("middle_hide");
        bodyElement.classList.remove("overflow_hide");
      } else if (index == 1) {
        instLinkElement.click();
      } else if (index == 2) {
        reviewLinkElement.click();
      } else {
        netmonetLinkElement.click();
      }
      console.log(`${index} submited`);
    } else {
      calculateStyles(sliderElements[index].value, index);
    }
  });
});

sliderElements.forEach((e, index) => {
  e.addEventListener("change", () => {
    if (sliderElements[index].value == 99) {
      if (index == 0) {
        pdfElement.classList.add("pages_show");
        middleElements[0].classList.add("middle_hide");
        middleElements[1].classList.add("middle_hide");
        middleElements[2].classList.add("middle_hide");
        middleElements[3].classList.add("middle_hide");
        bodyElement.classList.remove("overflow_hide");
      } else if (index == 1) {
        instLinkElement.click();
      } else if (index == 2) {
        reviewLinkElement.click();
      } else {
        netmonetLinkElement.click();
      }
      console.log(`${index} submited`);
    } else {
      calculateStyles(sliderElements[index].value, index);
    }
  });
});

buttonBackElement.addEventListener("click", () => {
  console.log("1");

  sliderElements[0].value = 0;
  sliderElements[1].value = 0;
  sliderElements[2].value = 0;
  sliderElements[3].value = 0;
  calculateStyles(sliderElements[0].value, 0);
  calculateStyles(sliderElements[1].value, 1);
  calculateStyles(sliderElements[2].value, 2);
  calculateStyles(sliderElements[3].value, 3);

  pdfElement.classList.remove("pages_show");
  middleElements[0].classList.remove("middle_hide");
  middleElements[1].classList.remove("middle_hide");
  middleElements[2].classList.remove("middle_hide");
  middleElements[3].classList.remove("middle_hide");
  bodyElement.classList.add("overflow_hide");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
