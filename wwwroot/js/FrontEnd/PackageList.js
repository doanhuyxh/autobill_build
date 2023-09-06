package_list = new Vue({
    el: '#package_list',
    data: {
        dataPac1: [],
        dataPac2: [],
        dataPac3: [],
        MoneyTotal: 0,
        dataPackageUser: []
    },
    mounted() {
        this.init();
        setTimeout(function () {
            this.MoneyTotal = side_bar.$data.money
        }, 3000)
    },
    methods: {
        init() {
            axios.get("/Home/GetPackage")
                .then((response) => {
                    this.dataPac1 = response.data.productsByCategory[0];
                    this.dataPac2 = response.data.productsByCategory[1];
                    this.dataPac3 = response.data.productsByCategory[2];
                    return Promise.resolve();
                });
            this.callData();

        },
        formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return date.toLocaleDateString('vi-VN', options);
        },
        //formatCurrency(amount) {
        //    const formatter = new Intl.NumberFormat('vi-VN', {
        //        style: 'currency',
        //    });

        //    return formatter.format(amount);
        //},
        formatCurrency(number) {
            const formattedNumber = number.toLocaleString('vi-VN');
            return formattedNumber;
        },
        BuyTranfer(event, username, package, cateid) {
            let currentThis = this
            Swal.fire({
                title: `Bạn có chắc chắn muốn mua bill chuyển khoản ${package.name}`,
                showCancelButton: true,
                confirmButtonText: 'Mua',
                CancelButtonText: 'Hủy',
            }).then((result) => {
                if (result.isConfirmed) {
                    if (MoneyTotal < package.price) {
                        Swal.fire(`Bạn không đủ tiền mua gói này. Vui lòng nạp thêm tiền`, '', 'error')
                    } else {
                        let data = new FormData();
                        fetch(`/Home/BuyTranfer?userName=${username}&packageId=${package.id}&cateId=${cateid}`)
                            .then(res => res.json())
                            .then(data => {
                                currentThis.callData();
                                if (data.success == true) {
                                    Swal.fire(`${data.mesaage}`, '', 'success')
                                } else {
                                    Swal.fire(`${data.mesaage}`, '', 'error')
                                }
                            })
                    }
                }
            })
        },
        callData() {
            let userName = document.getElementById("user").value;
            fetch("/Home/GetPackageBuybyUsername?username=" + userName)
                .then(res => res.json())
                .then(data => {
                    this.dataPackageUser = data.object;
                    console.log(data);
                })
        }


    }
});