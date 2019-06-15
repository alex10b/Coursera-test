(function (){
'use strict'
 
 
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
ToBuyController.$inject = ['ShoppingListCheckOffService'];


 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','$scope'];
 function AlreadyBoughtController(ShoppingListCheckOffService,$scope){
   var bought = this;   
   
    bought.items = ShoppingListCheckOffService.getItemb();
    var obj = bought.items;
    bought.message = function (){
    return (obj=="");
  };
  }

 function ShoppingListCheckOffService(){
  var service = this;
  var itemb = [];
   
   var items = [
{
   name: "bread",
   quantity: "10",
},


{
   name: "Cookie",
   quantity: "5",
},

{
   name: "Cereal box",
   quantity: "12",
},
{
   name: "Chocolate",
   quantity: "8",
},
{
   name: "Milk box",
   quantity: "22",
}   
];

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
   service.addItem = function (itemIndex) {
    var num = itemIndex;
    var item = {
      name: items[num].name,
      quantity: items[num].quantity
    };
    itemb.push(item);
    return itemb;
  };
  service.getItems = function(){  
  return items;
 };
 service.getItemb = function(){
 return itemb;
};
  
 }
 function ToBuyController(ShoppingListCheckOffService){
  var it = this;
  it.value = ShoppingListCheckOffService.getItems();
  it.item = ShoppingListCheckOffService.getItemb();
   it.move = function(itemIndex){
   ShoppingListCheckOffService.removeItem(itemIndex);
  };
     it.add = function(itemIndex){
     ShoppingListCheckOffService.addItem(itemIndex);
     console.log(ShoppingListCheckOffService.getItemb());
     }; 
  it.message = function (){
    return (it.value=="");
  };

 }
  



})();