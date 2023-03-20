var LISTS = [
  {
    name: "Coffees",
    listItems: [
      // ONE
      {
        item: "Big Order (4+ cups)",
        checked: false,
        category: "hot",
      },
      // ONE

      // TWO
      {
        item: "Iced Mocha Latte",
        checked: false,
        category: "cold",
      },
      // TWO

      // THREE
      {
        item: "Poured Pour-Over",
        checked: false,
        category: "hot",
      },
      // THREE

      // FOUR
      {
        item: "Cappuccino",
        checked: false,
        category: "cold",
      },
      // FOUR

      // FIVE
      {
        item: "Caramel Latte",
        checked: false,
        category: "hot",
      },
      // FIVE

      // SIX
      {
        item: "Cinnamon Latte",
        checked: false,
        category: "hot",
      },
      // SIX

      // SEVEN
      {
        item: "Straight Black",
        checked: false,
        category: "hot",
      },
      // SEVEN

      // EIGHT
      {
        item: "Iced Latte",
        checked: false,
        category: "cold",
      },
      // EIGHT

      // NINE
      {
        item: "Iced Black",
        checked: false,
        category: "cold",
      },
      // NINE

      // TEN
      {
        item: "Spiced Espresso",
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
        checked: false,
        category: "whole",
      },
      // ONE

      // TWO
      {
        item: "House Blonde Roast",
        checked: false,
        category: "ground",
      },
      // TWO

      // THREE
      {
        item: "Pour Over Glass",
        checked: false,
        category: "item",
      },
      // THREE

      // FOUR
      {
        item: "Pour Over Kettle",
        checked: false,
        category: "item",
      },
      // FOUR

      // FIVE
      {
        item: "House Dark Roast",
        checked: false,
        category: "whole",
      },
      // FIVE

      // SIX
      {
        item: "House Mystery Roast",
        checked: false,
        category: "whole",
      },
      // SIX

      // SEVEN
      {
        item: "House Espresso Shot",
        checked: false,
        category: "",
      },
      // SEVEN

      // EIGHT
      {
        item: "Pour Over Filters",
        checked: false,
        category: "item",
      },
      // EIGHT

      // NINE
      {
        item: "House Espresso",
        checked: false,
        category: "ground",
      },
      // NINE

      // TEN
      {
        item: "Imported Roast",
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


function addItem(listIndex) {
    let newItemName = $("#addItem").val();
    let newItemObj = {
        item: newItemName,
        checked: false,
        category: "",
    };
    // calling list/array, using idxval to determine which list, then targeting array of listItems by using .push (shoves new item into that array)
    LISTS[listIndex].listItems.push(newItemObj);
    // console.log(LISTS);
    loadListItems(listIndex);
}





function loadListItems(listIndex) {
  let listString = `<button onclick="loadData()">Back</button><ul>`;

  $.each(LISTS[listIndex].listItems, function (index, listItems) {
    listString += `<li id="${index}" class="${listItems.checked ? "strikethrough": ""}">
    <input ${listItems.checked ? (checked = "checked") : ""} type="checkbox" id="${index}" name="${listItems.item}" onclick="itemChecked(this, ${listIndex}, ${index})">

    ${listItems.item}
     </li>`;
  });
  listString += `</ul>
<div class="addItemInput">
    <input id="addItem" type="text">
        <button onclick="addItem(${listIndex})">Add an Item</button>
</div>`;

  $("#app").html(listString);
}





function loadData() {
  let listString = "<ul>";
  $.each(LISTS, function (index, list) {
    listString += `<li id="${index}" onclick="loadListItems(${index})">${list.name} <span class="right">Items: ${list.listItems.length}</span></li>`;
  });
  listString += "</ul>";

  $("#app").html(listString);
}

function initListeners() {}

$(document).ready(function () {
  // loadData();
  initListeners();
});
