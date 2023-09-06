const navbarToggler = document.querySelector(".navbar-toggler");
const offCanvas = document.querySelector("#header-off-canvas");
const servicesDropdown = document.querySelector("#services-dropdown");
const aboutDropdown = document.querySelector("#about-dropdown");
const cooperationsDropdown = document.querySelector("#cooperations-dropdown");
const linkWrapper = document.querySelector("#link-wrapper");
const privacyYesCheckBox = document.querySelector("#privacy-yes");
const submitFormBtn = document.querySelector("#submitFormBtn");
const videoWrappper = document.querySelector("#videoWrapper");

let servicesDropdownParent =
  servicesDropdown.parentElement.querySelector(".dropdown");
let aboutDropdownParent =
  aboutDropdown.parentElement.querySelector(".dropdown");
let cooperationsDropdownParent =
  cooperationsDropdown.parentElement.querySelector(".dropdown");

navbarToggler?.addEventListener("click", () => {
  offCanvas.classList.add("open-canvas");
  offCanvas.children[0].classList.remove("-translate-x-[100%]");
  offCanvas.children[0].classList.add("translate-x-o");
});

document.body.addEventListener("click", (e) => {
  if (e.target === offCanvas) {
    offCanvas.children[0].classList.add("-translate-x-[100%]");
    offCanvas.children[0].classList.remove("translate-x-o");
    setTimeout(() => {
      offCanvas.classList.remove("open-canvas");
    }, 100);
  } else if (
    e.target == linkWrapper ||
    e.target.parentElement == linkWrapper ||
    e.target.parentElement.parentElement == linkWrapper ||
    e.target.parentElement.parentElement.parentElement == linkWrapper ||
    e.target.parentElement.parentElement.parentElement.parentElement ==
      linkWrapper
  ) {
  } else {
    if (servicesDropdownParent.classList.contains("block")) {
      servicesDropdownParent.classList.remove("block");
      servicesDropdownParent.classList.add("hidden");
      servicesDropdownParent.parentElement.classList.remove("active");
    } else if (aboutDropdownParent.classList.contains("block")) {
      aboutDropdownParent.classList.remove("block");
      aboutDropdownParent.classList.add("hidden");
      aboutDropdownParent.parentElement.classList.remove("active");
    } else if (cooperationsDropdownParent.classList.contains("block")) {
      cooperationsDropdownParent.classList.remove("block");
      cooperationsDropdownParent.classList.add("hidden");
      cooperationsDropdownParent.parentElement.classList.remove("active");
    }
  }

  privacyCheck();
});

function privacyCheck() {
  if (privacyYesCheckBox?.checked) submitFormBtn.removeAttribute("disabled");
  else submitFormBtn?.setAttribute("disabled", true);
}
privacyCheck();

function openLinksDropdown(
  currentDiplayStatus,
  firstCurrentDiplayStatus,
  secondCurrentDiplayStatus
) {
  if (currentDiplayStatus.classList.contains("hidden")) {
    if (firstCurrentDiplayStatus.classList.contains("block")) {
      firstCurrentDiplayStatus.classList.remove("block");
      firstCurrentDiplayStatus.classList.add("hidden");
      firstCurrentDiplayStatus.parentElement.classList.remove("active");
    } else if (secondCurrentDiplayStatus.classList.contains("block")) {
      secondCurrentDiplayStatus.classList.remove("block");
      secondCurrentDiplayStatus.classList.add("hidden");
      secondCurrentDiplayStatus.parentElement.classList.remove("active");
    }

    currentDiplayStatus.classList.remove("hidden");
    currentDiplayStatus.classList.add("block");
    currentDiplayStatus.parentElement.classList.add("active");
  } else {
    currentDiplayStatus.classList.remove("block");
    currentDiplayStatus.classList.add("hidden");
    currentDiplayStatus.parentElement.classList.remove("active");
  }
}

servicesDropdown.addEventListener("click", () =>
  openLinksDropdown(
    servicesDropdownParent,
    aboutDropdownParent,
    cooperationsDropdownParent
  )
);
aboutDropdown.addEventListener("click", () =>
  openLinksDropdown(
    aboutDropdownParent,
    servicesDropdownParent,
    cooperationsDropdownParent
  )
);
cooperationsDropdown.addEventListener("click", () =>
  openLinksDropdown(
    cooperationsDropdownParent,
    aboutDropdownParent,
    servicesDropdownParent
  )
);

function takeFileName(e) {
  document.querySelector("#fileLabel").textContent = e.target.files[0].name;
}

videoWrappper?.addEventListener("click", (e) => {
  videoWrappper?.querySelector("#videoImg")?.click();
  const videoModal = document?.querySelector(".fancybox-content");
  const src = videoModal?.querySelector("video source")?.src?.trim();

  setTimeout(() => {
    if (src !== undefined) {
      const newChild = `<video class="fancybox-video m-0 p-0 object-fill" src="${src}" controls=""></video>`;
      videoModal.innerHTML = newChild;
    }
  }, 100);
});
