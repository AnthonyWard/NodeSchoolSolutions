var input = process.argv;

var out = 0;

//console.log('array has ' + input.length + ' elements');

for(var i = 2; i < input.length; i++)
{
	out += Number(input[i]);
}

console.log(out);