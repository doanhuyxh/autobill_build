 //Giờ
 $("#time").focusout(function(){
    let time = $(this).val();
    if(time != ''){
        $('#time-view-content').text(time);
    }
});

//Số tiền
$("#money").focusout(function(){
    let money = $(this).val();
    if(money != ''){
        $('#money-view-content').text(money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" VND");
    }
});

//Ngày tháng
$("#transaction-time").focusout(function(){
    let transaction_time = $(this).val();
    if(transaction_time != ''){
        $('#transaction-time-view-content').text(transaction_time);
    }
});

//Kiểu pin
for(let i=1; i<6; i++){
    $("#pin-"+i).click(function () {
        let pinImg = $(this).attr("src");
        $('#pin img').attr('src', pinImg);
    });
}

//Kiểu wifi
for(let i=1; i<4; i++){
    $("#wifi"+i).click(function () {
        let srcImg = $(this).attr("src");
        $('#signal-wifi img').attr('src', srcImg);
    });
}

//Tên người thụ hưởng
$("#beneficiary-name").focusout(function(){
    let beneficiary_name = $(this).val();
    if(beneficiary_name != ''){
        $('#beneficiary-name-view-content').text(beneficiary_name);
    }
});

//Ngân hàng thụ hưởng
$("#beneficiary-bank").focusout(function(){
    let beneficiary_person = $(this).val();
    if(beneficiary_person != ''){
        $('#beneficiary-bank-view-content').text(beneficiary_person);
    }
});

//Tài khoản thụ hưởng
$("#card-number").focusout(function(){
    let card_number = $(this).val();
    if(card_number != ''){
        $('#card-number-view-content').text(card_number);
    }
});

//Phí
$("#fee").focusout(function(){
    let fee = $(this).val();
    if(fee != ''){
        $('#fee-view-content').text(fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" VND");
    }
});


//Mã giao dịch
$("#transaction-code").focusout(function(){
    let transaction_code = $(this).val();
    if(transaction_code != ''){
        $('#transaction-code-view-content').text(transaction_code);
    }
});

//Nội dung
$("#transaction-content").focusout(function(){
    let transaction_content = $(this).val();
    if(transaction_content != ''){
        $('#transaction-content-view-content').text(transaction_content);
    }
});

//Kiểu sóng
for(let i=1; i<5; i++){
    $("#signal-"+i).click(function () {
        let signalImg = $(this).attr("src");
        $('#signal img').attr('src', signalImg);
    });
}

//Kiểu wifi
for(let i=1; i<5; i++){
    $("#wifi-"+i).click(function () {
        let wifiImg = $(this).attr("src");
        $('#wifi img').attr('src', wifiImg);
    });
}

