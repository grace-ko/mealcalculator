$(function() {
    var dinerList = [];

    function Diner(name, dishes) {
        this.name = name;
        this.dishes = function() {
            var allDishes = [];
            for (var i = 0; i < dishes.length; i++) {
                allDishes.push(dishes[i][0]);
            }
            return allDishes;
        }();

        this.price = function() {
            var cost = 0;
            for (var i = 0; i < dishes.length; i++) {
                cost += dishes[i][1];
            }
            return cost;
        }();

        var price = this.price;
        this.tax = function() {
            return parseFloat((price * 0.0775).toFixed(2));
        }();

        var tax = this.tax;
        this.tip = function() {
            return parseFloat((price * 0.15).toFixed(2));
        }();

        var tip = this.tip
        this.total = function() {
            return parseFloat((price + tax + tip).toFixed(2));
        }();
        dinerList.push(this);
    }


    var foodGrace = [
        ["chicken", 20],
        ["drink", 6]
    ];
    var foodJenny = [
        ["beef", 30],
        ["drink", 7]
    ];
    var foodShawn = [
        ["fish", 40],
        ["drink", 8]
    ];

    var dinerGrace = new Diner("Grace", foodGrace);
    var dinerJenny = new Diner("Jenny", foodJenny);
    var dinerShawn = new Diner("Shawn", foodShawn);

    var bill = {

        billTotal: function() {
            var totalBill = 0;
            for (var i = 0; i < dinerList.length; i++) {
                totalBill += dinerList[i].total;
            }
            console.log("Bill Total: " + totalBill);
        },

        tipTotal: function() {
            var totalTip = 0;
            for (var i = 0; i < dinerList.length; i++) {
                totalTip += dinerList[i].tip;
            }
            console.log("Tip Total: " + totalTip);
        },


        diner: function() {
            var diner = "";
            for (var i = 0; i < dinerList.length; i++) {
                var name = dinerList[i].name;
                var total = dinerList[i].price;
                var tip = dinerList[i].tip;
                diner += name + " "+ "Total: $" + total + " " + "Tip: $" + tip + " ";
            }
               console.log(diner);
        }
    }

    bill.billTotal();
    bill.tipTotal();
    bill.diner();


});
