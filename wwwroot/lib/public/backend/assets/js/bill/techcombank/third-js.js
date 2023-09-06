 //Giờ
const timePicker = flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

$("#time").on("change", function () {
    let time = $(this).val();
    if (time !== '') {
        $('#time-view-content').text(time);
    }
});



//Số tiền
$("#money").focusout(function(){
    let money = $(this).val();
    if(money != ''){
        $('#money-view-content').text(money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
});

//Ngày tháng
$("#banking-time").focusout(function(){
    let banking_time = $(this).val();
    if(banking_time != ''){
        $('#banking-time-view-content').text(banking_time);
    }
});

//Người gửi
$("#sender-name").focusout(function(){
    let sender_name = $(this).val();
    if(sender_name != ''){
        $('#sender-name-view-content').text(sender_name);
    }
});

//Tk người gửi
$("#sender-bank").focusout(function(){
    let sender_bank = $(this).val();
    if(sender_bank != ''){
        $('#sender-bank-view-content').text(sender_bank);
    }
});
$("#beneficiary-acc").focusout(function () {
    let beneficiary = $(this).val();
    if (beneficiary != ''){
        $('#beneficiary-person-view-content').text(beneficiary);
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
$("#beneficiary-person").focusout(function(){
    let beneficiary_person = $(this).val();
    if(beneficiary_person != ''){
        $('#beneficiary-person-view-content').text(beneficiary_person);
    }
});

//Tk người nhận
$("#beneficiary-bank").focusout(function(){
    let beneficiary_bank = $(this).val();
    if(beneficiary_bank != ''){
        $('#beneficiary-bank-view-content').text(beneficiary_bank);
    }
});

//Ngân hàng nhận
$("#beneficiary-bank-name").focusout(function(){
    let beneficiary_bank_name = $(this).val();
    if(beneficiary_bank_name != ''){
        $('#beneficiary-bank-name-view-content').text(beneficiary_bank_name);

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

//Kiểu wifi
for(let i=1; i<4; i++){
    $("#wifi-"+i).click(function () {
        let srcImg = $(this).attr("src");
        $('#wifi img').attr('src', srcImg);
    });
}

//Kiểu sóng
for(let i=1; i<6; i++){
    $("#signal-"+i).click(function () {
        let srcImg = $(this).attr("src");
        $('#circle-signal img').attr('src', srcImg);
        $('#signal img').attr('src', srcImg);
    });
}

//Kiểu pin
for(let i=1; i<6; i++){
    $("#pin-"+i).click(function () {
        let pinImg = $(this).attr("src");
        $('#pin img').attr('src', pinImg);
    });
}

