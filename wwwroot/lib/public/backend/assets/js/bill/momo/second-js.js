 //Giờ
 //$("#time").focusout(function(){
 //   let time = $(this).val();
 //   if(time != ''){
 //       $('#time-view-content').text(time);
 //   }
 //});

const timePicker = flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});


$("#time").on("input", function () {
    let time = $(this).val();
    if (time != '') {
        $('#time-view-content').text(time);
    }
});

$("#banking-time").on("input", function () {
    let bankingDate = $(this).val();
    if (bankingDate != '') {
        $('#banking-time-view-content').text(bankingDate);

    }
});









//Số tiền
$("#money").focusout(function(){
    let money = $(this).val();
    if(money != ''){
        $('#money-view-content').text("-"+money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+"đ");
    }
});

//Ngày tháng
//$("#banking-time").focusout(function(){
//    let banking_time = $(this).val();
//    if(banking_time != ''){
//        $('#banking-time-view-content').text(banking_time);
//    }
//});

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
$("#beneficiary-person").focusout(function(){
    let beneficiary_person = $(this).val();
    if(beneficiary_person != ''){
        $('#transaction-bank-view-name').text(beneficiary_person);
    }
});

//Ngân hàng thụ hưởng
$("#beneficiary-bank").focusout(function(){
    let beneficiary_person = $(this).val();
    if(beneficiary_person != ''){
        $('#beneficiary-bank-view-content').text(beneficiary_person);
    }
});
$("#transaction-money").focusout(function () {
    let beneficiary_person = $(this).val();
    if(beneficiary_person != ''){
        $('#transaction-bank-view-acc').text(beneficiary_person);
    }
});

//Tài khoản thụ hưởng
$("#beneficiary-account").focusout(function(){
    let beneficiary_account = $(this).val();
    if (beneficiary_account != '') {
        $('#beneficiary-account-view-content').text( beneficiary_account.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ");

    }
});
$("#beneficiary-money-bank").focusout(function () {
    let beneficiary_account = $(this).val();
    if (beneficiary_account != '') {
        $('#transaction-money-view-content').text( beneficiary_account.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "VND");

    }
});

//Mã giao dịch
//$("#transaction-code").focusout(function(){
//    let transaction_code = $(this).val();
//    if(transaction_code != ''){
//        $('#transaction-code-view-content').text(transaction_code);
//    }
//});
const transactionCodeInput = document.getElementById("transaction-code");
const transactionCodeViewContent = $('#transaction-code-view-content');

const randomNumber = Math.floor(Math.random() * 1000000000);
const formattedNumber = randomNumber.toString().padStart(11, "0");

const transactionCode = formattedNumber;

transactionCodeInput.value = transactionCode;
transactionCodeViewContent.text(transactionCode);

transactionCodeInput.addEventListener("input", function () {
    transactionCodeViewContent.text(this.value);
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

