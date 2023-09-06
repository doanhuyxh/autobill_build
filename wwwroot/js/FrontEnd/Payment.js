payment_bank = new Vue({
    el: '#payment_bank',
    data: {
        dataPac1: [],
        dataPac2: [],
        dataPac3: [],
    },
    methods: {
        //async addVcb() {
        //    try {

        //        //const formData = new FormData();
        //        //formData.append('Name', pack1.name);
        //        //formData.append('Price', pack1.price);
        //        //formData.append('ConfigYear', pack1.configYear);
        //        //formData.append('id', pack1.id);
        //        await axios.post('/BillTransfer/PostPayment',
        //            {
        //                headers: {
        //                    'Content-Type': 'multipart/form-data'
        //                }
        //            });
        //        Swal.fire({
        //            icon: 'success',
        //            title: 'Thành công',
        //            text: 'Đã thành công',
        //            confirmButtonText: 'OK'
        //        }).then((result) => {
        //            if (result.isConfirmed) {
        //                window.location.href = "/BillTransfer/Vietcombankios"
        //            }
        //        });

        //    } catch (error) {
        //        console.error(error);
        //        Swal.fire({
        //            icon: 'error',
        //            title: 'Lỗi',
        //            text: 'Đã có lỗi xảy ra',
        //            confirmButtonText: 'OK'
        //        }).then((result) => {
        //            if (result.isConfirmed) {
        //                window.location.reload();

        //            }
        //        });
        //    }
        //}
    }
});