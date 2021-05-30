// Gọi CT với tham số đầu vào 
// Xác nó là chẵn hay lẻ
console.log(process.argv[2]);

so = Number (process.argv[2]);
if (so % 2 == 0) {
    kq = " So chan !";
} else {
    kq = " So le !";
}
console.log(so, kq);