bodyElement = document.querySelector(".body"); // Body
pdfElement = document.querySelector(".pages"); // PDF
buttonElements = document.querySelectorAll(".middle"); // Main Interface Buttons
buttonBackElement = document.querySelector(".button_back"); // Button
instLinkElement = document.querySelector(".inst_link"); // Inst
reviewLinkElement = document.querySelector(".review_link"); // 2Gis
netmonetLinkElement = document.querySelector(".netmonet_link"); // Netmonet

buttonElements.forEach((e, index) => e.addEventListener('click', () => {
  buttonElements[index].classList.add('middle_active');

  if (index == 0) {
    setTimeout(() => {
      pdfElement.classList.add("pages_show");
      buttonElements.forEach(e => e.classList.add("middle_hide"))
      bodyElement.classList.remove("overflow_hide");
    }, 500)

    setTimeout(() => {
      buttonElements.forEach(e => e.classList.remove('middle_active'))
    }, 1500)
  } else if (index == 1) {
    instLinkElement.click();
  } else if (index == 2) {
    reviewLinkElement.click();
  } else {
    netmonetLinkElement.click();
  }
}))


buttonBackElement.addEventListener("click", () => {
  console.log("1");

  pdfElement.classList.remove("pages_show");

  buttonElements.forEach(e => e.classList.remove("middle_hide"))

  bodyElement.classList.add("overflow_hide");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
