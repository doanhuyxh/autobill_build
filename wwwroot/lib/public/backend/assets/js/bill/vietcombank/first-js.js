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
$("#banking-time").focusout(function(){
    let banking_time = $(this).val();
    if(banking_time != ''){
        $('#banking-time-view-content').text(banking_time);
    }
});

//Kiểu pin
for(let i=1; i<6; i++){
    $("#pin"+i).click(function () {
        let pinImg = $(this).attr("src");
        let pinPercent  = $(this).next().text();
        $('#pin img').attr('src', pinImg);
        $('#pin-percent-view-content').text(pinPercent);
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
$("#beneficiary-person").focusout(function(){
    let beneficiary_person = $(this).val();
    if(beneficiary_person != ''){
        $('#beneficiary-person-view-content').text(beneficiary_person);
    }
});

//Tài khoản thụ hưởng
$("#beneficiary-account").focusout(function(){
    let beneficiary_account = $(this).val();
    if(beneficiary_account != ''){
        $('#beneficiary-account-view-content').text(beneficiary_account);
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

