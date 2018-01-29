var price = 0;
var total = 0;
var cost  = 0;
var tax   = 0;
function submitToPrint() {
	$("#mainForm").hide();
	$("#invoiceForm").show();
	transferDataToInvoice();
}

function transferDataToInvoice() {
	var student_name = $("#name").val();
	var signdate = $("#signdate").val();
	var paymentc = $("#paymentc").val();
	var dif = $("#dif").val();
	var difer = $("#difer").val();
	var diferent = $("#diferent").val();

	$("#invoice_name").text(student_name);
	$("#invoice_signdate").text(signdate);
	$("#invoice_paymentc").text(paymentc);
	$("#invoice_dif").text(dif);
	$("#invoice_difer").text(difer);
	$("#invoice_diferent").text(diferent);
	var devicecheck = $("input:radio[name='device']:checked").val();
	var operationcheck = $("input:radio[name='opertype']:checked").val();
	var taxcheck = $("input:radio[name='tax']:checked").val();
	var discount = $("input:radio[name='dis']:checked").val();
	var extra = $("input:radio[name='extra']:checked").val();
	calculatePrice(devicecheck,operationcheck,taxcheck,discount,dif);
	anothercalculatePrice(extra,taxcheck,diferent);

	
}

/*function calculateExtraPrice(){
	var columns = '';

	// extra selected options
	var extras =  $("input:checkbox[name='extras']:checked").map(function(){
      return { 'name' : $(this).parent().text().trim(), 'price' : $(this).val()};
    });

    extras = [].slice.call(extras);


    extras.forEach(function(extra){
    	columns += '<tr>' +
	      '<td>'+ extra.name +'</td>' +
	      '<td class="no-line"></td>' +
	      '<td class="no-line"></td>' +
	      '<td class="text-right">$'+ extra.price +'</td>' +
	    '</tr>';

	    total = parseInt(total) + parseInt(extra.price);
    });

    

	$("#priceSection").prepend(columns);
	$("#totalPrice").text(total);
}*/

function calculatePrice(device,operation,taxcheck,discount,dif){
    if (device == 'iphone5' && operation == 'glass') {
			price = 70;
			device = 'iPhone 5';
			operation = 'Glass Repair';
	}else if (device == 'iphone5' && operation == 'lcd') {
			price = 80;
			device = 'iPhone 5';
			operation = 'LCD Repair';
	}else if (device == 'iphone5' && operation == 'battery') {
			price = 35;
			device = 'iPhone 5';
			operation = 'Battery Replacement';
	}else if (device == 'iphone5' && operation == 'chargingp') {
			price = 35;
			device = 'iPhone 5';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone5' && operation == 'homebut') {
			price = 35;
			device = 'iPhone 5';
			operation = 'Home Button';
	}else if (device == 'iphone5' && operation == 'backcam') {
			price = 35;
			device = 'iPhone 5';
			operation = 'Back Camera';
    }else if (device == 'iphone5' && operation == 'frontcam') {
			price = 35;
			device = 'iPhone 5';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone5' && operation == 'speaker') {
			price = 35;
			device = 'iPhone 5';
			operation = 'Speaker';
    }
    
    if (device == 'iphone5s' && operation == 'glass') {
			price = 70;
			device = 'iPhone 5s';
			operation = 'Glass Repair';
	}else if (device == 'iphone5s' && operation == 'lcd') {
			price = 80;
			device = 'iPhone 5s';
			operation = 'LCD Repair';
	}else if (device == 'iphone5s' && operation == 'battery') {
			price = 35;
			device = 'iPhone 5s';
			operation = 'Battery Replacement';
	}else if (device == 'iphone5s' && operation == 'chargingp') {
			price = 35;
			device = 'iPhone 5s';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone5s' && operation == 'homebut') {
			price = 35;
			device = 'iPhone 5s';
			operation = 'Home Button';
	}else if (device == 'iphone5s' && operation == 'backcam') {
			price = 40;
			device = 'iPhone 5s';
			operation = 'Back Camera';
    }else if (device == 'iphone5s' && operation == 'frontcam') {
			price = 35;
			device = 'iPhone 5s';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone5s' && operation == 'speaker') {
			price = 35;
			device = 'iPhone 5s';
			operation = 'Speaker';
    }

    if (device == 'iphone5c' && operation == 'glass') {
			price = 70;
			device = 'iPhone 5c';
			operation = 'Glass Repair';
	}else if (device == 'iphone5c' && operation == 'lcd') {
			price = 80;
			device = 'iPhone 5c';
			operation = 'LCD Repair';
	}else if (device == 'iphone5c' && operation == 'battery') {
			price = 35;
			device = 'iPhone 5c';
			operation = 'Battery Replacement';
	}else if (device == 'iphone5c' && operation == 'chargingp') {
			price = 35;
			device = 'iPhone 5c';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone5c' && operation == 'homebut') {
			price = 35;
			device = 'iPhone 5c';
			operation = 'Home Button';
	}else if (device == 'iphone5c' && operation == 'backcam') {
			price = 35;
			device = 'iPhone 5c';
			operation = 'Back Camera';
    }else if (device == 'iphone5c' && operation == 'frontcam') {
			price = 35;
			device = 'iPhone 5c';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone5c' && operation == 'speaker') {
			price = 35;
			device = 'iPhone 5c';
			operation = 'Speaker';
    }

        if (device == 'iphonese' && operation == 'glass') {
			price = 70;
			device = 'iPhone SE';
			operation = 'Glass Repair';
	}else if (device == 'iphonese' && operation == 'lcd') {
			price = 80;
			device = 'iPhone SE';
			operation = 'LCD Repair';
	}else if (device == 'iphonese' && operation == 'battery') {
			price = 35;
			device = 'iPhone SE';
			operation = 'Battery Replacement';
	}else if (device == 'iphonese' && operation == 'chargingp') {
			price = 35;
			device = 'iPhone SE';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphonese' && operation == 'homebut') {
			price = 35;
			device = 'iPhone SE';
			operation = 'Home Button';
	}else if (device == 'iphonese' && operation == 'backcam') {
			price = 35;
			device = 'iPhone SE';
			operation = 'Back Camera';
    }else if (device == 'iphonese' && operation == 'frontcam') {
			price = 35;
			device = 'iPhone SE';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphonese' && operation == 'speaker') {
			price = 35;
			device = 'iPhone SE';
			operation = 'Speaker';
    }

    if (device == 'iphone6' && operation == 'glass') {
			price = 80;
			device = 'iPhone 6';
			operation = 'Glass Repair';
	}else if (device == 'iphone6' && operation == 'lcd') {
			price = 90;
			device = 'iPhone 6';
			operation = 'LCD Repair';
	}else if (device == 'iphone6' && operation == 'battery') {
			price = 40;
			device = 'iPhone 6';
			operation = 'Battery Replacement';
	}else if (device == 'iphone6' && operation == 'chargingp') {
			price = 35;
			device = 'iPhone 6';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone6' && operation == 'homebut') {
			price = 35;
			device = 'iPhone 6';
			operation = 'Home Button';
	}else if (device == 'iphone6' && operation == 'backcam') {
			price = 50;
			device = 'iPhone 6';
			operation = 'Back Camera';
    }else if (device == 'iphone6' && operation == 'frontcam') {
			price = 40;
			device = 'iPhone 6';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone6' && operation == 'speaker') {
			price = 40;
			device = 'iPhone 6';
			operation = 'Speaker';
    }

     if (device == 'iphone6p' && operation == 'glass') {
			price = 90;
			device = 'iPhone 6 Plus';
			operation = 'Glass Repair';
	}else if (device == 'iphone6p' && operation == 'lcd') {
			price = 100;
			device = 'iPhone 6 Plus';
			operation = 'LCD Repair';
	}else if (device == 'iphone6p' && operation == 'battery') {
			price = 45;
			device = 'iPhone 6 Plus';
			operation = 'Battery Replacement';
	}else if (device == 'iphone6p' && operation == 'chargingp') {
			price = 40;
			device = 'iPhone 6 Plus';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone6p' && operation == 'homebut') {
			price = 40;
			device = 'iPhone 6 Plus';
			operation = 'Home Button';
	}else if (device == 'iphone6p' && operation == 'backcam') {
			price = 60;
			device = 'iPhone 6 Plus';
			operation = 'Back Camera';
    }else if (device == 'iphone6p' && operation == 'frontcam') {
			price = 45;
			device = 'iPhone 6 Plus';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone6p' && operation == 'speaker') {
			price = 40;
			device = 'iPhone 6 Plus';
			operation = 'Speaker';
    }

    if (device == 'iphone6s' && operation == 'glass') {
			price = 95;
			device = 'iPhone 6s';
			operation = 'Glass Repair';
	}else if (device == 'iphone6s' && operation == 'lcd') {
			price = 115;
			device = 'iPhone 6s';
			operation = 'LCD Repair';
	}else if (device == 'iphone6s' && operation == 'battery') {
			price = 45;
			device = 'iPhone 6s';
			operation = 'Battery Replacement';
	}else if (device == 'iphone6s' && operation == 'chargingp') {
			price = 40;
			device = 'iPhone 6s';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone6s' && operation == 'homebut') {
			price = 40;
			device = 'iPhone 6s';
			operation = 'Home Button';
	}else if (device == 'iphone6s' && operation == 'backcam') {
			price = 65;
			device = 'iPhone 6s';
			operation = 'Back Camera';
    }else if (device == 'iphone6s' && operation == 'frontcam') {
			price = 45;
			device = 'iPhone 6s';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone6s' && operation == 'speaker') {
			price = 40;
			device = 'iPhone 6s';
			operation = 'Speaker';
    }

     if (device == 'iphone6sp' && operation == 'glass') {
			price = 90;
			device = 'iPhone 6s Plus';
			operation = 'Glass Repair';
	}else if (device == 'iphone6sp' && operation == 'lcd') {
			price = 100;
			device = 'iPhone 6s Plus';
			operation = 'LCD Repair';
	}else if (device == 'iphone6sp' && operation == 'battery') {
			price = 45;
			device = 'iPhone 6s Plus';
			operation = 'Battery Replacement';
	}else if (device == 'iphone6sp' && operation == 'chargingp') {
			price = 40;
			device = 'iPhone 6s Plus';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone6sp' && operation == 'homebut') {
			price = 40;
			device = 'iPhone 6s Plus';
			operation = 'Home Button';
	}else if (device == 'iphone6sp' && operation == 'backcam') {
			price = 60;
			device = 'iPhone 6s Plus';
			operation = 'Back Camera';
    }else if (device == 'iphone6sp' && operation == 'frontcam') {
			price = 45;
			device = 'iPhone 6s Plus';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone6sp' && operation == 'speaker') {
			price = 40;
			device = 'iPhone 6s Plus';
			operation = 'Speaker';
    }

    if (device == 'iphone7' && operation == 'glass') {
			price = 100;
			device = 'iPhone 7';
			operation = 'Glass Repair';
	}else if (device == 'iphone7' && operation == 'lcd') {
			price = 120;
			device = 'iPhone 7';
			operation = 'LCD Repair';
	}else if (device == 'iphone7' && operation == 'battery') {
			price = 50;
			device = 'iPhone 7';
			operation = 'Battery Replacement';
	}else if (device == 'iphone7' && operation == 'chargingp') {
			price = 45;
			device = 'iPhone 7';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone7' && operation == 'homebut') {
			price = 40;
			device = 'iPhone 7';
			operation = 'Home Button';
	}else if (device == 'iphone7' && operation == 'backcam') {
			price = 65;
			device = 'iPhone 7';
			operation = 'Back Camera';
    }else if (device == 'iphone7' && operation == 'frontcam') {
			price = 55;
			device = 'iPhone 7';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone7' && operation == 'speaker') {
			price = 45;
			device = 'iPhone 7';
			operation = 'Speaker';
    }

    if (device == 'iphone7p' && operation == 'glass') {
			price = 100;
			device = 'iPhone 7 Plus';
			operation = 'Glass Repair';
	}else if (device == 'iphone7p' && operation == 'lcd') {
			price = 130;
			device = 'iPhone 7 Plus';
			operation = 'LCD Repair';
	}else if (device == 'iphone7p' && operation == 'battery') {
			price = 50;
			device = 'iPhone 7 Plus';
			operation = 'Battery Replacement';
	}else if (device == 'iphone7p' && operation == 'chargingp') {
			price = 45;
			device = 'iPhone 7 Plus';
			operation = 'Charging Port / Headphone Jack';
	}else if (device == 'iphone7p' && operation == 'homebut') {
			price = 40;
			device = 'iPhone 7 Plus';
			operation = 'Home Button';
	}else if (device == 'iphone7p' && operation == 'backcam') {
			price = 145;
			device = 'iPhone 7 Plus';
			operation = 'Back Camera';
    }else if (device == 'iphone7p' && operation == 'frontcam') {
			price = 55;
			device = 'iPhone 7 Plus';
			operation = 'Front Camera / Proximity Sensor';
    }else if (device == 'iphone7p' && operation == 'speaker') {
			price = 55;
			device = 'iPhone 7 Plus';
			operation = 'Speaker';
    }

   if (device == 'ipad1' && operation == 'glass') {
			price = 90;
			device = 'iPad 1/2';
			operation = 'Glass Repair';
	}else if (device == 'ipad1' && operation == 'lcd') {
			price = 180;
			device = 'iPad 1/2';
			operation = 'LCD Repair';
	}
    if (device == 'ipad3' && operation == 'glass') {
			price = 95;
			device = 'iPad 3/4';
			operation = 'Glass Repair';
	}else if (device == 'ipad3' && operation == 'lcd') {
			price = 185;
			device = 'iPad 3/4';
			operation = 'LCD Repair';
    }
	if (device == 'ipadm1' && operation == 'glass') {
			price = 95;
			device = 'iPad Mini 1';
			operation = 'Glass Repair';
	}else if (device == 'ipadm1' && operation == 'lcd') {
			price = 140;
			device = 'iPad Mini 1';
			operation = 'LCD Repair';
    }
	if (device == 'ipadm2' && operation == 'glass') {
			price = 95;
			device = 'iPad Mini 2';
			operation = 'Glass Repair';
	}else if (device == 'ipadm2' && operation == 'lcd') {
			price = 160;
			device = 'iPad Mini 2';
			operation = 'LCD Repair';
    }
     if (device == 'ipadm3' && operation == 'glass') {
			price = 105;
			device = 'iPad Mini 3';
			operation = 'Glass Repair';
	}else if (device == 'ipadm3' && operation == 'lcd') {
			price = 160;
			device = 'iPad Mini 3';
			operation = 'LCD Repair';
	}
    if (device == 'ipadm4' && operation == 'lcd') {
			price = 160;
			device = 'iPad Mini 4';
			operation = 'LCD Repair';
    }
    if (device == 'ipada1' && operation == 'glass') {
			price = 105;
			device = 'iPad Air 1';
			operation = 'Glass Repair';
	}else if (device == 'ipada1' && operation == 'lcd') {
			price = 180;
			device = 'iPad Air 1';
			operation = 'LCD Repair';
    }
    if (device == 'ipada2' && operation == 'lcd') {
			price = 280;
			device = 'iPad Air 2';
			operation = 'LCD Repair';
    }
//------------------------------------------------------------------------------------------------------------
    if (device == 's7edge' && operation == 'lcd') {
			price = 280;
			device = 'Samsung S7 Edge';
			operation = 'LCD Repair';
    }
    if (device == 's7' && operation == 'lcd') {
			price = 210;
			device = 'Samsung S7';
			operation = 'LCD Repair';
    }
    if (device == 's6edgeplus' && operation == 'lcd') {
			price = 270;
			device = 'Samsung S6 Edge Plus';
			operation = 'LCD Repair';
    }
    if (device == 's6edge' && operation == 'lcd') {
			price = 235;
			device = 'Samsung S6 Edge';
			operation = 'LCD Repair';
    }
    if (device == 's6' && operation == 'lcd') {
			price = 210;
			device = 'Samsung S6';
			operation = 'LCD Repair';
    }
    if (device == 's5' && operation == 'lcd') {
			price = 170;
			device = 'Samsung S5';
			operation = 'LCD Repair';
    }
    if (device == 's4' && operation == 'lcd') {
			price = 140;
			device = 'Samsung S4';
			operation = 'LCD Repair';
    }
    if (device == 'note5' && operation == 'lcd') {
			price = 250;
			device = 'Samsung Note 5';
			operation = 'LCD Repair';
    }
    if (device == 'note4' && operation == 'lcd') {
			price = 220;
			device = 'Samsung Note 4';
			operation = 'LCD Repair';
    }
    if (device == 'note3' && operation == 'lcd') {
			price = 190;
			device = 'Samsung Note 3';
			operation = 'LCD Repair';
    }
    if (device == 'notee' && operation == 'lcd') {
			price = 250;
			device = 'Samsung Note E';
			operation = 'LCD Repair';
    }

    //********************************************************************************************

    if (device == 'lgstylo' && operation == 'lcd') {
			price = 150;
			device = 'LG Stylo';
			operation = 'LCD Repair';
    }  if (device == 'lgstylo2' && operation == 'lcd') {
			price = 155;
			device = 'LG Stylo 2';
			operation = 'LCD Repair';
    }  if (device == 'g2' && operation == 'lcd') {
			price = 135;
			device = 'LG G2';
			operation = 'LCD Repair';
    }  if (device == 'g3' && operation == 'lcd') {
			price = 150;
			device = 'LG G3';
			operation = 'LCD Repair';
    }  if (device == 'g4' && operation == 'lcd') {
			price = 135;
			device = 'LG G4';
			operation = 'LCD Repair';
    }


if (dif != "")
	{
		price = parseFloat(dif);
	}	
  
if (discount=='twent') {
    price = (parseFloat(price) - 20);
    }else if(discount=='fourth'){
    price = parseFloat(price) - 40;
    }

 if(taxcheck=='yes'){
    	total =  ((parseFloat(total) * 9.5)/100)+parseFloat(total);
    	price = ((parseFloat(price) * 9.5)/100)+parseFloat(price);
    	total = parseFloat(total).toFixed(2);
    	price = parseFloat(price).toFixed(2);
    }

	var columns = '<tr>' +
      '<td>'+ device +' '+ operation + ' '+' </td>' +
      '<td class="no-line"></td>' +
      '<td class="no-line"></td>' +
      '<td class="text-right">$'+ price +'</td>' +
    '</tr>';
if (device!="none"){
    total = parseFloat(total) + parseFloat(price);
    total = parseFloat(total).toFixed(2);
	$("#priceSection").prepend(columns);
	$("#totalPrice").text(total);
}
}

/*function anothercalculatePrice(){



	var columns = '';

	// extra selected options
	var extras =  $("input:checkbox[name='extra']:checked").map(function(){
      return { 'name' : $(this).parent().text().trim(), 'price' : $(this).val()};
    });


	if(extras.name=="case"){
		extras.name="Case";
		price = 20;
	}else if (extras.name=="temp") {
		extras.name="Tempered Glass";
		price = 20;
	}

    extras = [].slice.call(extras);


    extras.forEach(function(extra){
    	columns += '<tr>' +
	      '<td>'+ extra.name +'</td>' +
	      '<td class="no-line"></td>' +
	      '<td class="no-line"></td>' +
	      '<td class="text-right">$'+ extra.price +'</td>' +
	    '</tr>';

	    total = parseInt(total) + parseInt(extra.price);
    });

}*/

function clearFunction() {
    document.getElementById("clrForm").reset();
}
function anothercalculatePrice(extra,taxcheck,diferent,discount){


if (diferent != "")
	{
		cost = parseFloat(diferent);
	}

if (extra=='case'){
	extra = "Case";
	cost = 20;
}
else if (extra=='temp'){
	extra = "Tempered Glass";
	cost = 20;
}



 if(taxcheck=='yes'){
    	cost =  ((parseFloat(cost) * 9.5)/100)+parseFloat(cost);
    }

var columns = '<tr>' +
      '<td>'+ extra +'</td>' +
      '<td class="no-line"></td>' +
      '<td class="no-line"></td>' +
      '<td class="text-right">$'+ cost +'</td>' +
    '</tr>';
if (extra!="none"){
    total = parseFloat(total) + parseFloat(cost);
    total = parseFloat(total).toFixed(2);
	$("#priceSection").prepend(columns);
	$("#totalPrice").text(total);
}
}