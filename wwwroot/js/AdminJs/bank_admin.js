﻿bank_admin = new Vue({
    el: '#bank_admin',
    data: {
        dataBank: [],
        nameCate: "",
        bankAuto: [],
        PrPath: null,

        imageFile: null,
        previewImage: null,
        uploadedImage: null,

        imageFile1: null,
        previewImage1: null,
        uploadedImage1: null,

        bankName: "",
        bankAccount: "",
        nameAccount: "",
        id: 0,
        Qr: "",
        bankLogo: ''
    },
    computed: {
        selectedBank: {
            get() {
                const bank = this.bankAuto.find(bank => bank.shortName === this.bankName);
                return bank ? bank.logo : '';
            },
            set(newValue) {
                this.bankLogo = newValue;
            }
        }
    },
    mounted() {
        $('#preloader').fadeIn();

        axios.get("/Administrator/GetAllBank")
            .then((response) => {
                this.dataBank = response.data;
                $('#preloader').fadeOut();

                return Promise.resolve();
            })
            .then(() => {
                $("#table_bank").DataTable({
                    'columnDefs': [{
                        'targets': [-1],
                        'orderable': false,
                    }],
                    searching: true,
                    iDisplayLength: 10,
                    "ordering": false,
                    lengthChange: true,
                    aaSorting: [[0, "desc"]],
                    aLengthMenu: [
                        [5, 10, 25, 50, 100, -1],

                        ["5 dòng", "10 dòng", "25 dòng", "50 dòng", "100 dòng", "Tất cả"],
                    ],
                    language: {
                        "processing": "Đang xử lý...",
                        "aria": {
                            "sortAscending": ": Sắp xếp thứ tự tăng dần",
                            "sortDescending": ": Sắp xếp thứ tự giảm dần"
                        },
                        "autoFill": {
                            "cancel": "Hủy",
                            "fill": "Điền tất cả ô với <i>%d<\/i>",
                            "fillHorizontal": "Điền theo hàng ngang",
                            "fillVertical": "Điền theo hàng dọc"
                        },
                        "buttons": {
                            "collection": "Chọn lọc <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
                            "colvis": "Hiển thị theo cột",
                            "colvisRestore": "Khôi phục hiển thị",
                            "copy": "Sao chép",
                            "copyKeys": "Nhấn Ctrl hoặc u2318 + C để sao chép bảng dữ liệu vào clipboard.<br \/><br \/>Để hủy, click vào thông báo này hoặc nhấn ESC",
                            "copySuccess": {
                                "1": "Đã sao chép 1 dòng dữ liệu vào clipboard",
                                "_": "Đã sao chép %d dòng vào clipboard"
                            },
                            "copyTitle": "Sao chép vào clipboard",
                            "pageLength": {
                                "-1": "Xem tất cả các dòng",
                                "_": "Hiển thị %d dòng",
                                "1": "Hiển thị 1 dòng"
                            },
                            "print": "In ấn",
                            "createState": "Tạo trạng thái",
                            "csv": "CSV",
                            "excel": "Excel",
                            "pdf": "PDF",
                            "removeAllStates": "Xóa hết trạng thái",
                            "removeState": "Xóa",
                            "renameState": "Đổi tên",
                            "savedStates": "Trạng thái đã lưu",
                            "stateRestore": "Trạng thái %d",
                            "updateState": "Cập nhật"
                        },
                        "select": {
                            "cells": {
                                "1": "1 ô đang được chọn",
                                "_": "%d ô đang được chọn"
                            },
                            "columns": {
                                "1": "1 cột đang được chọn",
                                "_": "%d cột đang được được chọn"
                            },
                            "rows": {
                                "1": "1 dòng đang được chọn",
                                "_": "%d dòng đang được chọn"
                            }
                        },
                        "searchBuilder": {
                            "title": {
                                "_": "Thiết lập tìm kiếm (%d)",
                                "0": "Thiết lập tìm kiếm"
                            },
                            "button": {
                                "0": "Thiết lập tìm kiếm",
                                "_": "Thiết lập tìm kiếm (%d)"
                            },
                            "value": "Giá trị",
                            "clearAll": "Xóa hết",
                            "condition": "Điều kiện",
                            "conditions": {
                                "date": {
                                    "after": "Sau",
                                    "before": "Trước",
                                    "between": "Nằm giữa",
                                    "empty": "Rỗng",
                                    "equals": "Bằng với",
                                    "not": "Không phải",
                                    "notBetween": "Không nằm giữa",
                                    "notEmpty": "Không rỗng"
                                },
                                "number": {
                                    "between": "Nằm giữa",
                                    "empty": "Rỗng",
                                    "equals": "Bằng với",
                                    "gt": "Lớn hơn",
                                    "gte": "Lớn hơn hoặc bằng",
                                    "lt": "Nhỏ hơn",
                                    "lte": "Nhỏ hơn hoặc bằng",
                                    "not": "Không phải",
                                    "notBetween": "Không nằm giữa",
                                    "notEmpty": "Không rỗng"
                                },
                                "string": {
                                    "contains": "Chứa",
                                    "empty": "Rỗng",
                                    "endsWith": "Kết thúc bằng",
                                    "equals": "Bằng",
                                    "not": "Không phải",
                                    "notEmpty": "Không rỗng",
                                    "startsWith": "Bắt đầu với",
                                    "notContains": "Không chứa",
                                    "notEndsWith": "Không kết thúc với",
                                    "notStartsWith": "Không bắt đầu với"
                                },
                                "array": {
                                    "equals": "Bằng",
                                    "empty": "Trống",
                                    "contains": "Chứa",
                                    "not": "Không",
                                    "notEmpty": "Không được rỗng",
                                    "without": "không chứa"
                                }
                            },
                            "logicAnd": "Và",
                            "logicOr": "Hoặc",
                            "add": "Thêm điều kiện",
                            "data": "Dữ liệu",
                            "deleteTitle": "Xóa quy tắc lọc",
                            "leftTitle": "Giảm thụt lề",
                            "rightTitle": "Tăng thụt lề"
                        },
                        "searchPanes": {
                            "countFiltered": "{shown} ({total})",
                            "emptyPanes": "Không có phần tìm kiếm",
                            "clearMessage": "Xóa hết",
                            "loadMessage": "Đang load phần tìm kiếm",
                            "collapse": {
                                "0": "Phần tìm kiếm",
                                "_": "Phần tìm kiếm (%d)"
                            },
                            "title": "Bộ lọc đang hoạt động - %d",
                            "count": "{total}",
                            "collapseMessage": "Thu gọn tất cả",
                            "showMessage": "Hiện tất cả"
                        },
                        "datetime": {
                            "hours": "Giờ",
                            "minutes": "Phút",
                            "next": "Sau",
                            "previous": "Trước",
                            "seconds": "Giây",
                            "amPm": [
                                "am",
                                "pm"
                            ],
                            "unknown": "-",
                            "weekdays": [
                                "Chủ nhật"
                            ],
                            "months": [
                                "Tháng Một",
                                "Tháng Hai",
                                "Tháng Ba",
                                "Tháng Tư",
                                "Tháng Năm",
                                "Tháng Sáu",
                                "Tháng Bảy",
                                "Tháng Tám",
                                "Tháng Chín",
                                "Tháng Mười",
                                "Tháng Mười Một",
                                "Tháng Mười Hai"
                            ]
                        },
                        "emptyTable": "Không có dữ liệu",
                        "info": "Hiển thị _START_ tới _END_ của _TOTAL_ dữ liệu",
                        "infoEmpty": "Hiển thị 0 tới 0 của 0 dữ liệu",
                        "lengthMenu": "Hiển thị _MENU_ dữ liệu",
                        "loadingRecords": "Đang tải...",
                        "paginate": {
                            "first": "Đầu tiên",
                            "last": "Cuối cùng",
                            "next": "Sau",
                            "previous": "Trước"
                        },
                        "search": "Tìm kiếm:",
                        "zeroRecords": "Không tìm thấy kết quả",
                        "decimal": ",",
                        "editor": {
                            "close": "Đóng",
                            "create": {
                                "button": "Thêm",
                                "submit": "Thêm",
                                "title": "Thêm mục mới"
                            },
                            "edit": {
                                "button": "Sửa",
                                "submit": "Cập nhật",
                                "title": "Sửa mục"
                            },
                            "error": {
                                "system": "Đã xảy ra lỗi hệ thống (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;Thêm thông tin&lt;\/a&gt;)."
                            },
                            "multi": {
                                "info": "Các mục đã chọn chứa các giá trị khác nhau cho đầu vào này. Để chỉnh sửa và đặt tất cả các mục cho đầu vào này thành cùng một giá trị, hãy nhấp hoặc nhấn vào đây, nếu không chúng sẽ giữ lại các giá trị riêng lẻ của chúng.",
                                "noMulti": "Đầu vào này có thể được chỉnh sửa riêng lẻ, nhưng không phải là một phần của một nhóm.",
                                "restore": "Hoàn tác thay đổi",
                                "title": "Nhiều giá trị"
                            },
                            "remove": {
                                "button": "Xóa",
                                "confirm": {
                                    "_": "Bạn có chắc chắn muốn xóa %d hàng không?",
                                    "1": "Bạn có chắc chắn muốn xóa 1 hàng không?"
                                },
                                "submit": "Xóa",
                                "title": "Xóa"
                            }
                        },
                        "infoFiltered": "(được lọc từ _MAX_ dữ liệu)",
                        "searchPlaceholder": "Nhập tìm kiếm...",
                        "stateRestore": {
                            "creationModal": {
                                "button": "Thêm",
                                "columns": {
                                    "search": "Tìm kiếm cột",
                                    "visible": "Khả năng hiển thị cột"
                                },
                                "name": "Tên:",
                                "order": "Sắp xếp",
                                "paging": "Phân trang",
                                "scroller": "Cuộn vị trí",
                                "search": "Tìm kiếm",
                                "searchBuilder": "Trình tạo tìm kiếm",
                                "select": "Chọn",
                                "title": "Thêm trạng thái",
                                "toggleLabel": "Bao gồm:"
                            },
                            "duplicateError": "Trạng thái có tên này đã tồn tại.",
                            "emptyError": "Tên không được để trống.",
                            "emptyStates": "Không có trạng thái đã lưu",
                            "removeConfirm": "Bạn có chắc chắn muốn xóa %s không?",
                            "removeError": "Không xóa được trạng thái.",
                            "removeJoiner": "và",
                            "removeSubmit": "Xóa",
                            "removeTitle": "Xóa trạng thái",
                            "renameButton": "Đổi tên",
                            "renameLabel": "Tên mới cho %s:",
                            "renameTitle": "Đổi tên trạng thái"
                        },
                        "infoThousands": ".",
                        "thousands": "."
                    },
                });
            });
        this.init();
    },
    methods: {
        init() {
            axios.get("https://api.vietqr.io/v2/banks")
                .then((response) => {
                    this.bankAuto = response.data.data;
                    return Promise.resolve();
                })
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
        onFileChange(event) {
            this.imageFile = event.target.files[0];
            this.previewImage = URL.createObjectURL(this.imageFile);
            this.uploadedImage = null;
        },
        onFileChange1(event) {
            this.imageFile1 = event.target.files[0];
            this.previewImage1 = URL.createObjectURL(this.imageFile1);
            this.uploadedImage1 = null;
        },
        async addBank() {
            try {
                if (this.$refs.PrPath.files[0] === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Chọn ảnh mã QR',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                if (this.bankName === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Chọn tên ngân hàng',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                if (this.bankAccount === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Nhập số tài khoản',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                if (this.nameAccount === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Nhập tên chủ tài khoản',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                const formData = new FormData();
                formData.append('BankName', this.bankName);
                formData.append('BankAccount', this.bankAccount);
                formData.append('NameAccount', this.nameAccount);
                formData.append('LogoBank', this.selectedBank);
                formData.append('PrPath', this.$refs.PrPath.files[0]);

                await axios.post('/Administrator/AddBankData', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Đã lưu thành công',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
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
                        window.location.reload();
                    }
                });
            }
        },
        getItemsById(id) {
            axios.get(`/Administrator/getIdBank/${id}`)
                .then((response) => {
                    this.bankName = response.data.bankName;
                    this.bankAccount = response.data.bankAccount;
                    this.id = response.data.id;
                    this.nameAccount = response.data.nameAccount;
                    this.Qr = response.data.qrBank;
                    return Promise.resolve();
                });
        },
        resetData() {
            this.bankName = "";
            this.bankAccount = "";
            this.id = 0;
            this.nameAccount = "";
            this.Qr = "";
            this.$refs.PrPath.files[0] = null;
            this.$refs.PrPath1.files[0] = null;
        },
        async editBank() {
            try {
                if (this.bankName === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Chọn tên ngân hàng',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                if (this.bankAccount === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Nhập số tài khoản',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                if (this.nameAccount === "") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Lỗi',
                        text: 'Nhập tên chủ tài khoản',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
                const formData = new FormData();
                formData.append('BankName', this.bankName);
                formData.append('BankAccount', this.bankAccount);
                formData.append('NameAccount', this.nameAccount);
                formData.append('LogoBank', this.selectedBank);
                formData.append('id', this.id);
                if (this.$refs.PrPath1.files[0] != null) {
                    formData.append('PrPath', this.$refs.PrPath1.files[0]);

                }
                await axios.post(`/Administrator/editBank/${this.id}`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Đã lưu thành công',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
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
                        window.location.reload();

                    }
                });
            }
        },
        getItemsByIdDelete(id) {
            axios.get(`/Administrator/getIdBank/${id}`)
                .then((response) => {
                    this.id = response.data.id;
                    if (this.id != null) {
                        Swal.fire({
                            title: 'Xóa bank',
                            text: 'Bạn có chắc chắn muốn xóa',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Đồng ý',
                            cancelButtonText: 'Không!!!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const formData = new FormData();
                                formData.append('id', this.id);
                                axios.post('/Administrator/deleteBankAdmin', formData, {
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    }
                                }).then(response => {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Thành công',
                                        text: 'Đã thành công',
                                        confirmButtonText: 'OK',
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            window.location.reload();
                                        }
                                    });

                                }).catch(error => {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Lỗi',
                                        text: 'Đã có lỗi xảy ra vui lòng thử lại',
                                        confirmButtonText: 'OK'
                                    });
                                });
                            } else {
                                return;
                            }
                        });
                    }
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi',
                        text: 'Đã có lỗi xảy ra vui lòng thử lại',
                        confirmButtonText: 'OK'
                    });
                })
        },

    },

});