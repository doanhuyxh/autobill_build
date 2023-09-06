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
const datePicker = flatpickr("#banking-time", {
    enableTime: false,
    dateFormat: "dddd DD/MM/YYYY",
    disableMobile: false
});

$("#time").on("input", function () {
    let time = $(this).val();
    if (time != '') {
        updateBankingTimeView(time);
        $('#time-view-content').text(time);
    }
});

$("#banking-time").on("input", function () {
    let bankingDate = $(this).val();
    if (bankingDate != '') {
        updateDateInView(bankingDate);
    }
});

function updateBankingTimeView(newTime) {
    let bankingDateTime = $('#banking-time-view-content').text();
    let bankingTimeArray = bankingDateTime.split(' ');
    let newBankingTimeValue = newTime + ' ' + bankingTimeArray.slice(1).join(' ');
    $('#banking-time-view-content').text(newBankingTimeValue);
}

function updateDateInView(newDate) {
    let bankingTime = getTimeFromBankingTimeView();

    // Sử dụng Moment.js để lấy thứ và chuyển đổi sang tiếng Việt
    let dayOfWeek = moment(newDate, "dddd DD/MM/YYYY").format("dddd");
    dayOfWeek = convertToVietnameseDayOfWeek(dayOfWeek);

    let newBankingTimeValue = bankingTime + ' ' + dayOfWeek + ' ' + newDate;
    $('#banking-time-view-content').text(newBankingTimeValue);
}

function getTimeFromBankingTimeView() {
    let bankingTime = $('#banking-time-view-content').text();
    let bankingTimeArray = bankingTime.split(' ');
    return bankingTimeArray[0];
}

function convertToVietnameseDayOfWeek(dayOfWeek) {
    // Định nghĩa chuyển đổi thứ sang tiếng Việt
    let days = {
        'Monday': 'Thứ Hai',
        'Tuesday': 'Thứ Ba',
        'Wednesday': 'Thứ Tư',
        'Thursday': 'Thứ Năm',
        'Friday': 'Thứ Sáu',
        'Saturday': 'Thứ Bảy',
        'Sunday': 'Chủ Nhật'
    };

    return days[dayOfWeek] || dayOfWeek;
}


//Số tiền
$("#money").focusout(function(){
    let money = $(this).val();
    if(money != ''){
        $('#money-view-content').text(money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" VND");
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
        $('#beneficiary-person-view-content').text(beneficiary_person);
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

