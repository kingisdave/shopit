var Quantity1 = 50; var Quantity2 = 50;var Quantity3 = 25;var Quantity4 = 40;var Quantity5 = 30;var Quantity6 = 42;var Quantity7 = 50;var Quantity8 = 35; var Subtotal; var total;
var over= document.getElementById('overall');

function starter() {
    container.style.display = "none";
    shop.style.display = "block";
}

function total1() {
    var Subtotal = 8000*order1.value;
    (Quantity1 >= order1.value)?
    demo.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity');
    t1.innerHTML = (Number(Quantity1)-Number(order1.value));
    if (Quantity1 <= "0" ) { Quantity1 == "0"};
    var total = 8000*order1.value;
    over.innerHTML= total
}

function total2() {
    var Subtotal = 5000*order2.value;
    (Quantity2 >= order2.value)?
    demo1.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity'); 
    t2.innerHTML = (Number(Quantity2)-Number(order2.value));
    var total = parseFloat(8000*order1.value)+parseFloat(5000*order2.value);
    over.innerHTML= total
}

function total3() {
    var Subtotal = 3000*order3.value;
    (Quantity3 >= order3.value)?
    demo2.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity'); 
    t3.innerHTML = (Number(Quantity3)-Number(order3.value));
    var total = parseFloat(8000*order1.value)+parseFloat(5000*order2.value)+parseFloat(3000*order3.value);
    over.innerHTML = total
}

function total4() {
    var Subtotal = 4000*order4.value;
    (Quantity4 >= order4.value)?
    demo3.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity');
    t4.innerHTML = (Number(Quantity4)-Number(order4.value));
    var total = parseFloat(8000*order1.value)+parseFloat(5000*order2.value)+parseFloat(3000*order3.value)+parseFloat(4000*order4.value);
    over.innerHTML= total
}
function total5() {
    var Subtotal = 1000*order5.value;
    (Quantity5 >= order5.value)?
    demo4.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity'); 
    t5.innerHTML = (Number(Quantity5)-Number(order5.value));
    var total = parseFloat(8000*order1.value)+parseFloat(5000*order2.value)+parseFloat(3000*order3.value)+parseFloat(4000*order4.value)+parseFloat(1000*order5.value);
    over.innerHTML= total
}

function total6() {
    var Subtotal = 5000*order6.value;
    (Quantity6 >= order6.value)?
    demo5.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity');
    t6.innerHTML = (Number(Quantity6)-Number(order6.value));
    var total = parseFloat(8000*order1.value)+parseFloat(5000*order2.value)+parseFloat(3000*order3.value)+parseFloat(4000*order4.value)+parseFloat(1000*order5.value)+parseFloat(5000*order6.value);
    over.innerHTML= total;
}

function total7() {
    var Subtotal = 2000*order7.value;
    (Quantity7 >= order7.value)?
    demo6.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity'); 
    t7.innerHTML = (Number(Quantity7)-Number(order7.value));
    var total = parseFloat(8000*order1.value)+parseFloat(5000*order2.value)+parseFloat(3000*order3.value)+parseFloat(4000*order4.value)+parseFloat(1000*order5.value)+parseFloat(5000*order6.value)+parseFloat(2000*order7.value);
    over.innerHTML= total
}

function total8() {
    var Subtotal = 10000*order8.value;
    (Quantity8 >= order8.value)?
    demo7.innerHTML= Subtotal: alert('SORRY USER! Your requested quantity has exceeded the available quantity'); 
    t8.innerHTML = (Number(Quantity8)-Number(order8.value));
    var total = + parseFloat(8000*order1.value) + parseFloat(5000*order2.value) + parseFloat(3000*order3.value)+parseFloat(4000*order4.value)+parseFloat(1000*order5.value)+parseFloat(5000*order6.value)+parseFloat(2000*order7.value)+parseFloat(10000*order8.value);
    over.innerHTML= total
}

function forall(a){ 
    pic.style.display = 'inline';
    pic.src=a;  }

function normal() {

    pic.style = "none";
}

function printer()
{
    if (confirm("Do you want to print the receipt?"))
    {
        alert("Are you sure")
        if ("Are you sure") 
        {
    //         w = window.open();
    // w.document.write(receiptSection.innerHTML)
    // w.print(i)
        }
    }
    else
    {
        alert("OK! You are not sure")
    }
}
