let listItems = document.querySelectorAll("ul li");

Array.from(listItems).forEach((item) => {
  item.onclick = function () {
    // Collapsing item if it is expanded
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      alternateIcon(item);
    }

    // Expanding only clicked item
    else {
      // Removing active class from all items
      Array.from(listItems).forEach((item) => {
        item.classList.remove("active");
      });

      // Adding active class to only clicked item
      item.classList.add("active");

      // Alternating plus and minus icons
      Array.from(listItems).forEach((item) => {
        alternateIcon(item);
      });
    }
  };
});

function alternateIcon(item) {
  if (item.classList.contains("active"))
    item.firstElementChild.lastElementChild.setAttribute(
      "src",
      "assets/images/icon-minus.svg"
    );
  else
    item.firstElementChild.lastElementChild.setAttribute(
      "src",
      "assets/images/icon-plus.svg"
    );
}
