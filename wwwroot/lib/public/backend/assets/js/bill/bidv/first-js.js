//Số tiền
$("#txt-transaction-money").focusout(function(){
    let txt_transaction_money = $(this).val();
    if(txt_transaction_money != ''){
        $('#transaction-money').text(txt_transaction_money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" VND");
    }
});

//Số tham chiếu
$("#txt-reference-number").focusout(function(){
    let txt_reference_number = $(this).val();
    if(txt_reference_number != ''){
        $('#reference-number').text(txt_reference_number);
    }
});

//Ngày tháng
$("#txt-transaction-time").focusout(function(){
    let txt_transaction_time = $(this).val();
    if(txt_transaction_time != ''){
        $('#transaction-time').text(txt_transaction_time);
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
$("#txt-transaction-name").focusout(function(){
    let txt_transaction_name = $(this).val();
    if(txt_transaction_name != ''){
        $('#transaction-name').text(txt_transaction_name);
    }
});

//Tk người nhận
$("#txt-transaction-account").focusout(function(){
    let txt_transaction_account = $(this).val();
    if(txt_transaction_account != ''){
        $('#transaction-account').text(txt_transaction_account);
    }
});

//Ngân hàng nhận
$("#txt-transaction-bank").focusout(function(){
    let txt_transaction_bank = $(this).val();
    if(txt_transaction_bank != ''){
        $('#transaction-bank').text(txt_transaction_bank);
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



