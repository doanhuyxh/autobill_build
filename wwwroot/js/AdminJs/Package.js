vue_package = new Vue({
    el: '#vue_package',
    data: {
      dataPac1 : [],
      dataPac2 : [],
        dataPac3: [],
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            axios.get("/Admin/Dashboard/GetProductsByCategory")
                .then((response) => {
                    this.dataPac1 = response.data.productsByCategory[0];
                    this.dataPac2 = response.data.productsByCategory[1];
                    this.dataPac3 = response.data.productsByCategory[2];
                    return Promise.resolve();
                });
        },
        formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return date.toLocaleDateString('vi-VN', options);
        },
        formatCurrency(amount) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });

            return formatter.format(amount);
        },
        async editPack(pack1) {
            try {
                const formData = new FormData();
                formData.append('Name', pack1.name);
                formData.append('Price', pack1.price);
                formData.append('ConfigYear', pack1.configYear);
                formData.append('id', pack1.id); 
                await axios.post('/Admin/Dashboard/EditPackage', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Đã thành công',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.init();
                    }
                });

            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi',
                    text: 'Đã có lỗi xảy ra',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.init();

                    }
                });
            }
        }
       
    }
});