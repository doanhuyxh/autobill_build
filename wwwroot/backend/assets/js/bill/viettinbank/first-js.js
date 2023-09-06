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

//Số tiền bằng chữ
$("#string-money").focusout(function(){
    let string_money = $(this).val();
    if(string_money != ''){
        $('#string-money-view-content').text(string_money);
    }
});

//Ngày tháng
$("#transaction-datetime").focusout(function(){
    let transaction_datetime = $(this).val();
    if(transaction_datetime != ''){
        $('#transaction-datetime-view-content').text(transaction_datetime);
    }
});

//Mã bill
$("#bill-code").focusout(function(){
    let bill_code = $(this).val();
    if(bill_code != ''){
        $('#bill-code-view-content').text(bill_code);
    }
});

//Kiểu pin
for(let i=1; i<6; i++){
    $("#pin-"+i).click(function () {
        let pinImg = $(this).attr("src");
        let pinPercent  = $(this).next().text();
        $('#pin img').attr('src', pinImg);
        $('#pin-percent-view-content').text(pinPercent);
    });
}

//Kiểu wifi
for(let i=1; i<4; i++){
    $("#wifi-"+i).click(function () {
        let srcImg = $(this).attr("src");
        $('#signal-wifi img').attr('src', srcImg);
    });
}

//Người gửi
$("#from-account-name").focusout(function(){
    let from_account_name = $(this).val();
    if(from_account_name != ''){
        $('#from-account-name-view-content').text(from_account_name);
    }
});

//Tk người gửi
$("#from-account-number").focusout(function(){
    let from_account_number = $(this).val();
    if(from_account_number != ''){
        $('#from-account-number-view-content').text(from_account_number);
    }
});

//Phần trăm pin
$("#pin-percent").focusout(function(){
    let pin_percent = $(this).val();
    if(pin_percent != ''){
        $('#pin-percent-view-content').text(pin_percent);
    }
});

//Tên Người nhận
$("#to-account-name").focusout(function(){
    let to_account_name = $(this).val();
    if(to_account_name != ''){
        $('#to-account-name-view-content').text(to_account_name);
    }
});

//Tk người nhận
$("#to-account-number").focusout(function(){
    let to_account_number = $(this).val();
    if(to_account_number != ''){
        $('#to-account-number-view-content').text(to_account_number);
    }
});

//Ngân hàng nhận
$("#to-bank-name").focusout(function(){
    let beneficiary_bank_name = $(this).val();
    if(beneficiary_bank_name != ''){
        $('#bank-name-view-content').text(beneficiary_bank_name);
    }
});

//Nội dung
$("#transaction-content").focusout(function(){
    let transaction_content = $(this).val();
    if(transaction_content != ''){
        $('#transaction-content-view-content').text(transaction_content);
    }
});

//Kiểu sóng 1
for(let i=1; i<5; i++){
    $("#signal-1-"+i).click(function () {
        let pinImg = $(this).attr("src");
        $('#signal-1 img').attr('src', pinImg);
    });
}

//Kiểu sóng 2
for(let i=1; i<5; i++){
    $("#signal-2-"+i).click(function () {
        let pinImg = $(this).attr("src");
        $('#signal-2 img').attr('src', pinImg);
    });
}

//Mạng điện thoại
$('#phone').on('change', function() {
    var phone = $('#phone').find(":selected").text();
    if(phone === 'Viettel'){
        $('#viettel-content').text('Viettel');
        $('#mobifone-content').hide();
    }
    if(phone == 'Mobifone'){
        $('#viettel-content').text('Mobifone');
        $('#mobifone-content').hide();
    }
  });



