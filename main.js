var items = [
    { barcode: '1', itemName: 'bobo' },
    { barcode: '2', itemName: 'banay' },
    { barcode: '3', itemName: 'shimon_bar.YOCHAI' },
    { barcode: '4', itemName: 'Instagram' },
    { barcode: '5', itemName: 'Tevelov' },
    { barcode: '6', itemName: 'Future' },
    { barcode: '7', itemName: 'Meshi' },
    { barcode: '8', itemName: 'Hotel' },
    { barcode: '9', itemName: 'Night' },
    { barcode: '10', itemName: 'Yuval' },
  ];

  function find(item) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = item ? `found item: ${item.itemName}` : `Sorry not here`;
    console.log(item ? `found item: ${item.itemName}` : `Sorry not here`);

  }
  
  function searchForItem(array, itemToFind, cb) {
    var itemFound = false;
    for (var i = 0; i < array.length; i++) {
      if (itemToFind === array[i].barcode || itemToFind === array[i].itemName) {
        itemFound = true;
        cb(array[i]);
        break;
      }
    }
    if (!itemFound) {
      cb(null);
    }
  }
  
  var submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', function() {
  var inputBarcode = document.getElementById('inputBarcode').value;
  searchForItem(items, inputBarcode, find);
});;
  
