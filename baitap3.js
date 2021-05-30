
a = Number (process.argv[2]);
b = Number (process.argv[3]);
c = Number (process.argv[4]);
var  x1,x2 ;

if (a==0 && b == 0 && c != 0)
{
	console.log ("phuong trinh vo nghiem");
}
if (a==0 && b == 0 && c == 0)
{
	console.log ("phuong trinh có số vố nghiệm");
}
if (a == 0 && b != 0)
{
	d = -c/b;
	console.log ("phuong trinh có duy nhất 1 nghiệm là " + d);
}
delta = b*b-4*a*c;
if (delta < 0)
{
	console.log ("phuong trinh vo nghiem");
}
else if (delta == 0)
{
	x1 = -b/(2*a);
	console.log ("phuong trinh có 1 nghiem " + x1);
}
else
{
	x1 = (-b-Math.sqrt(delta))/(2*a);
    x2 = (-b+Math.sqrt(delta))/(2*a);

	console.log ("phuong trinh có 2 nghiem ");
	console.log ("x1 = " + x1);
	console.log ("x2 = " + x2);
}