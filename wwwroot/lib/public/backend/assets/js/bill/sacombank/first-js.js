//Số tiền
$("#txt-money").focusout(function(){
    let txt_money = $(this).val();
    if(txt_money != ''){
        $('#money-view-text').text("-"+txt_money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" đ");
        $('#sub-money-view-text').text(txt_money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
});

//Thời gian
$("#txt-time").focusout(function(){
    let txt_time = $(this).val();
    if(txt_time != ''){
        $('#time-view-text').text(txt_time);
    }
});

//Mã giao dịch
$("#txt-transaction-code").focusout(function(){
    let txt_transaction_code = $(this).val();
    if(txt_transaction_code != ''){
        $('#transaction-code-view-text').text(txt_transaction_code);
    }
});

//Loại giao dịch
$("#txt-transaction-type").focusout(function(){
    let txt_transaction_type = $(this).val();
    if(txt_transaction_type != ''){
        $('#transaction-type-view-text').text(txt_transaction_type);
    }
});

//Số thẻ gửi
$("#txt-card-number").focusout(function(){
    let txt_card_number = $(this).val();
    if(txt_card_number != ''){
        $('#card-number-view-text').text(txt_card_number);
    }
});

//Tk nhận
$("#txt-account-number").focusout(function(){
    let txt_account_number = $(this).val();
    if(txt_account_number != ''){
        $('#account-number-view-text').text(txt_account_number);
    }
});

//Ngân hàng nhận
$("#txt-bank-name").focusout(function(){
    let txt_bank_name = $(this).val();
    if(txt_bank_name != ''){
        $('#bank-name-view-text').text(txt_bank_name);
    }
});

//Nội dung
$("#txt-transaction-content").focusout(function(){
    let txt_transaction_content = $(this).val();
    if(txt_transaction_content != ''){
        $('#transaction-content-view-text').text(txt_transaction_content);
    }
});

//Phí
$("#txt-transaction-fee").focusout(function(){
    let txt_transaction_fee = $(this).val();
    if(txt_transaction_fee != ''){
        $('#transaction-fee-view').text(txt_transaction_fee);
    }
});

//Tổng tiền
$("#txt-total-money").focusout(function(){
    let txt_total_money = $(this).val();
    if(txt_total_money != ''){
        $('#total-money-view-text').text(txt_total_money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
});



