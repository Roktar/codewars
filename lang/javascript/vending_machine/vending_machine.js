function VendingMachine(items, money) {
  this.items = items;
  this.money = money;
/*   this.get = function(selector) {
    for(let obj of this.items) {
      if(obj.code === selector)
        return obj;
    }
    return null;
  } */
};

VendingMachine.prototype.get = function(selector) {
  for(let obj of this.items) {
    if(obj.code === selector)
      return obj;
  }
  return null;
}

VendingMachine.prototype.vend = function (selection, itemMoney){  
  let item = this.get(selection.toUpperCase());
  let msg = null;

  if(item) {
    if(itemMoney >= item.price) {
      if(item.quantity > 0) {
        item.quantity--;
        this.money += item.price;
        msg = "Vending " + item.name + (itemMoney > item.price ? " with " + (itemMoney-item.price).toFixed(2) + " change." : "" );
      } else
        msg = item.name + ": Out of stock!";
    } else
      msg = "Not enough money!";
  } else if(!item)
    msg = "Invalid selection! : Money in vending machine = " + this.money.toFixed(2);

  return msg;
};