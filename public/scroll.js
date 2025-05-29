const marathon = document.querySelector(".karrusel-marathon");
    document.querySelector(".pil-scroll").addEventListener("click", () => {
      marathon.scrollBy({ left: 300, behavior: "smooth" });
    });
    document.querySelector(".pil-scroll-left").addEventListener("click", () => {
      marathon.scrollBy({ left: -300, behavior: "smooth" });
    });

    const community = document.querySelector(".karrusel-community");
    document
      .querySelector(".pil-scroll-community")
      .addEventListener("click", () => {
        community.scrollBy({ left: 300, behavior: "smooth" });
      });
    document
      .querySelector(".pil-scroll-left-community")
      .addEventListener("click", () => {
        community.scrollBy({ left: -300, behavior: "smooth" });
      });