let sinhViens = [
    { ten: "Ngọc Anh", tuoi: 18 },
    { ten: "Tiểu Bảo", tuoi: 20 },
    { ten: "Hàn Lập", tuoi: 27 },
    { ten: "Thu Hương", tuoi: 18 },
    { ten: "Vũ Hà", tuoi: 22 }
];
let sinhVienCungs = sinhViens.filter(function(e) {
    return e.ten === "Ngọc Anh";
});
console.log(sinhVienCungs);