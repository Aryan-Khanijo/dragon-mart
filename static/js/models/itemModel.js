DragonApp.factory('itemModel',(
    function(){
        var item = function(index){
            angular.extend(this, {
                id: index + 1,
                name: itemName(index),
                desc: itemDesc(index),
                price: itemPrice(index),
                qty: 0,
                cart: false,
                amount: function(){return this.price*this.qty}
            })
        };

        return item;

        function itemName(index){
            var itemList = ['OnePlus Earphone', 'Sony Heaphones WB900X', 'Zotax RTX 3090', 'Casio G-Shock', 'Seiko Solar Chorongraph']
            return itemList[index];
        }

        function itemDesc(index){
            var descList = ['Stereo Sound', 'Noice Cancellation', '20GB VRAM 5yrs Warranty', 'Bluetooth Music Controll', 'No Batteries Required Solar Charging']
            return descList[index];
        }

        function itemPrice(index){
            var priceList = [2000, 20000, 70000, 10000, 20000]
            return priceList[index];
        }
        
    }
))