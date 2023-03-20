var LISTS = [
  {
    name: "Coffees",
    listItems: [
      // ONE
      {
        item: "Flight",
        price: "$25",
        image: "../img/home/main1.png",
        checked: false,
        category: "hot",
      },
      // ONE

      // TWO
      {
        item: "Iced Mocha Latte",
        price: "$5",
        image: "../img/home/main2.png",
        checked: false,
        category: "cold",
      },
      // TWO

      // THREE
      {
        item: "Poured Pour-Over",
        price: "$5",
        image: "../img/home/main3.png",
        checked: false,
        category: "hot",
      },
      // THREE

      // FOUR
      {
        item: "Cappuccino",
        price: "$5",
        image: "../img/home/main4.png",
        checked: false,
        category: "cold",
      },
      // FOUR

      // FIVE
      {
        item: "Caramel Latte",
        price: "$5",
        image: "../img/home/main5.png",
        checked: false,
        category: "hot",
      },
      // FIVE

      // SIX
      {
        item: "Cinnamon Latte",
        price: "$5",
        image: "../img/home/main6.png",
        checked: false,
        category: "hot",
      },
      // SIX

      // SEVEN
      {
        item: "Straight Black",
        price: "$2",
        image: "../img/home/main7.png",
        checked: false,
        category: "hot",
      },
      // SEVEN

      // EIGHT
      {
        item: "Iced Latte",
        price: "$5",
        image: "../img/home/main8.png",
        checked: false,
        category: "cold",
      },
      // EIGHT

      // NINE
      {
        item: "Iced Black",
        price: "$3",
        image: "../img/home/main9.png",
        checked: false,
        category: "cold",
      },
      // NINE

      // TEN
      {
        item: "Spiced Espresso",
        price: "$5",
        image: "../img/home/main10.png",
        checked: false,
        category: "hot",
      },
      // TEN
    ],
  },

  {
    name: "More",
    listItems: [
      // ONE
      {
        item: "House Medium Roast",
        price: "$10",
        image: "../img/more/sub1.png",
        checked: false,
        category: "whole",
      },
      // ONE

      // TWO
      {
        item: "House Blonde Roast",
        price: "$10",
        image: "../img/more/sub2.png",
        checked: false,
        category: "ground",
      },
      // TWO

      // THREE
      {
        item: "Pour Over I",
        price: "$20",
        image: "../img/more/sub3.png",
        checked: false,
        category: "item",
      },
      // THREE

      // FOUR
      {
        item: "Pour Over II",
        price: "$25",
        image: "../img/more/sub4.png",
        checked: false,
        category: "item",
      },
      // FOUR

      // FIVE
      {
        item: "House Dark Roast",
        price: "$10",
        image: "../img/more/sub5.png",
        checked: false,
        category: "whole",
      },
      // FIVE

      // SIX
      {
        item: "House Mystery Roast",
        price: "$10",
        image: "../img/more/sub6.png",
        checked: false,
        category: "whole",
      },
      // SIX

      // SEVEN
      {
        item: "House Espresso Shot",
        price: "$2",
        image: "../img/more/sub7.png",
        checked: false,
        category: "",
      },
      // SEVEN

      // EIGHT
      {
        item: "Pour Over III",
        price: "$30",
        image: "../img/more/sub8.png",
        checked: false,
        category: "item",
      },
      // EIGHT

      // NINE
      {
        item: "House Espresso",
        price: "$10",
        image: "../img/more/sub9.png",
        checked: false,
        category: "ground",
      },
      // NINE

      // TEN
      {
        item: "Imported Roast",
        price: "$15",
        image: "../img/more/sub10.png",
        checked: false,
        category: "ground",
      },
      // TEN
    ],
  },
];

function itemChecked(element, listIndex, itemIndex ){
    $(element).parent().toggleClass("strikethrough");
    let checkedValue = !LISTS[listIndex].listItems[itemIndex].checked;
    LISTS[listIndex].listItems[itemIndex].checked = checkedValue;
    // console.log("checked" + LISTS);

}
    // TERNARY: a way to write an IF STATEMENT in a VERY SMALL LINE OF CODE
// ${listItems.checked ? checked:""} 
// BASICALLY IS SAYING: IF the list items key value, "checked", is true -> THEN we are going to apply the property "checked"

function loadListItems(listIndex) {
  let listString = `<button onclick="loadData()">Back</button><ul>`;

  $.each(LISTS[listIndex].listItems, function (index, listItems) {
    listString += `<li id="${index}" class="${listItems.checked ? "strikethrough": ""}">
    <input ${listItems.checked ? (checked = "checked") : ""} type="checkbox" id="${index}" name="${listItems.item}" onclick="itemChecked(this, ${listIndex}, ${index})">

    ${listItems.item}
    </li>`;
  });
  listString += "</ul>";

  $("#app").html(listString);
}

function loadData() {
  let listString = "<ul>";
  $.each(LISTS, function (index, list) {
    listString += `<li id="${index}" onclick="loadListItems(${index})">${list.name}</li>`;
  });
  listString += "</ul>";

  $("#app").html(listString);
}

function initListeners() {}

$(document).ready(function () {
  // loadData();
  initListeners();
});
