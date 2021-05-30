
a = Number (process.argv[2]);
b = Number (process.argv[3]);
c = Number (process.argv[4]);

if (a + b > c && a + c > b && b + c > a)
{
    if ( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
    {
        kq = " Đây là tam giác vuông";
    }
    else if (a==b && b==c)
    {
        kq = " Đây là tam giác đều ";
    }
    else if (a==b || a==c || b==c)
    {
        kq = " Đây là tam giác cân";
    }
    else if (a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b)
    {
        kq = " Đây là tam giác tù";
    }
    else
    {
        kq = " đây là tam giác nhọn";
    }
}
else
{
    kq = " a, b,c không là cạnh của tam giác";
}
console.log(kq);
