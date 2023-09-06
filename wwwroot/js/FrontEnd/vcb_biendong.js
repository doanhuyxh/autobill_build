bd_vcb_vue = new Vue({
    el: '#bd_vcb_vue',
    data: {
        divList: [],
        soTienBandau: '',
        receiverAccount: '',
        newItem: {
            date: '',
            time: '',
            receiverAccount: '',
            amountNumber: '',
            description: '',
            isAmDuong: false
        }
    },
    computed: {
        formattedAmountNumber: {
            get: function () {
                // Lấy giá trị định dạng từ item.amountNumber
                return this.formatAmountNumber(this.newItem.amountNumber);
            },
            set: function (value) {
                // Lưu giá trị không định dạng vào item.amountNumber
                this.newItem.amountNumber = value.replace(/,/g, '');
            }
        },
        formattedRemainingBalance: {
            get: function () {
                const banDau = this.soTienBandau;
                const amountNumber = this.newItem.amountNumber;

                const remainingBalance = (banDau - amountNumber).toString();
                return this.formatAmountNumber(remainingBalance);
            },
            set: function (value) {
                // Không cần làm gì trong phương thức set này nếu bạn không muốn cho phép người dùng thay đổi giá trị này.
                // Nếu bạn muốn thực hiện điều này, hãy xử lý nó tại đây.
            }
        }
    },
    methods: {
        addNewDiv: function () {
            // Thêm một phần tử mới vào danh sách
            const formattedAmountNumber = this.formatAmountNumber(this.newItem.amountNumber);
            const banDau = this.soTienBandau;
            const amountNumber = this.newItem.amountNumber;
            const remainingBalance = (banDau - amountNumber).toString();

            this.divList.push({

                id: this.divList.length + 1,
                date: this.newItem.date,
                time: this.newItem.time,
                receiverAccount: this.receiverAccount,
                amountNumber: formattedAmountNumber,
                description: this.newItem.description,
                isAmDuong: this.newItem.isAmDuong,
                banDau: this.soTienBandau,
                daChuyen: remainingBalance,
                ref: this.generateRandomString()
            });

            // Xóa dữ liệu từ biểu mẫu
            this.newItem = {
                date: '',
                time: '',
                receiverAccount: '',
                amountNumber: '',
                description: '',
                isAmDuong: false
            };
        },
        calculateBalance(index) {
            let balance = parseFloat(this.soTienBandau.replace(/,/g, '')); 

            for (let i = 0; i <= index; i++) {
                const item = this.divList[i];
                const amount = parseFloat(item.amountNumber.replace(/,/g, ''));

                if (item.isAmDuong) {
                    balance -= amount;
                } else {
                    balance += amount;
                }
            }

            return this.formatAmountNumber(balance.toString());
        },


        formatAmountNumber: function (value) {
            return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        updateRemainingBalance: function () {
            const banDau = this.soTienBandau;
            const amountNumber = this.newItem.amountNumber;
            const remainingBalance = (banDau - amountNumber).toString();
            this.newItem.daChuyen = remainingBalance;
        },
        generateRandomNumber() {
            return Math.floor(Math.random() * 1000000);
        },

        generateRandomString() {
            const parts = [];
            for (let i = 0; i < 3; i++) {
                parts.push(this.generateRandomNumber());
            }
            return parts.join('.');
        }


    }
});