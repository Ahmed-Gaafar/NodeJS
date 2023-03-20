
var Add = function(A , B)
{
if (isNaN(A) || isNaN(B)) {
        throw new Error('Invalid input');
        }
        return A + B;
}

var Sub = function(A , B)
{
if (isNaN(A) || isNaN(B)) {
        throw new Error('Invalid input');
        }
        return A - B;
}

var Multi = function(A , B)
{
if (isNaN(A) || isNaN(B)) {
        throw new Error('Invalid input');
        }
        return A * B;
}

module.exports = 
{
    Add : Add,
    Sub : Sub,
    Multi : Multi
}