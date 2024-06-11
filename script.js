const section = document.getElementById("result-section");

const addH2withResult = (section, result) => {
  let h2 = document.createElement("h2");
  h2.textContent = result;
  h2.classList = "";

  section.appendChild(h2);
};

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      addH2withResult(section, "fizzbuzz");
    } else if (i % 3 === 0) {
      addH2withResult(section, "fizz");
    } else if (i % 5 === 0) {
      addH2withResult(section, "buzz");
    } else {
    }
  }
};

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fizzbuzz();
});
