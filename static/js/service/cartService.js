DragonApp.service('dragonService',[
    'itemModel',
    '_',
    function (itemModel, _){
        var itemList = [];
        var cartList = [];

        init();

        return({
            inc: inc,
            dec: dec,
            getItems: getItems,
            addToCart: addToCart,
            getCartItems: getCartItems,
            getTotalAmt: getTotalAmt
        });

        function addToCart(id){
            for (item=0;item<itemList.length;item++){
				if(itemList[item].id==id){
                    var cartItem = itemList[item];
                    itemList[item].cart = true;
                    break;
				}
            }
            cartItem.qty = 1;
            cartList.push(cartItem);
        }

        function getTotalAmt(){
            var amt = 0;
            for(item=0;item<cartList.length;item++){
                amt += cartList[item].amount();
            }
            return amt;
        }

        function inc(id){
			var item = findItem(id);
            cartList[item].qty += 1; 
		}

		function dec(id){
            var item = findItem(id);
            if (cartList[item].qty===1){
                cartList = _.reject( cartList, {id: id})
                for (item=0;item<itemList.length;item++){
                    if(itemList[item].id==id){
                        itemList[item].cart = false;
                        break;
                    }
                }
            }else{
                cartList[item].qty -= 1;
            }
		}

        function getItems(){
            return ( angular.copy (itemList))
        }

        function getCartItems(){
            return ( angular.copy (cartList))
        }


        function findItem (getid){
			for (item=0;item<cartList.length;item++){
				if(cartList[item].id==getid){
					return item;
				}
			}
		}

        function init(){
			for(index=0;index<5;index++){
				var item = new itemModel(index);
                itemList.push(item);
            }
		}
    }
])