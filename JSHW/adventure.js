var flower = 'daisy';
if( flower === 'calla') {
    console.log('you are not a daisy');
}
else if (flower == 'daffodil') {
    console.log('i am not a daisy');
}
else if (flower == 'tulip') {
    console.log('try again');
}
else if (flower == 'daisy') {
    console.log('ding ding you are a daisy');
}
else {
    console.log('wrong season! winter is coming');
}
function Jesus() {
    var Title = Math.floor(Math.random()*4);
    var expression = Math.floor(Math.random()*4);
    var T1 = ['Christ', 'Lord', 'Son of God', 'Almighty One'];
    var E1 = ['Manna', 'Bread of Life', 'Lamb', 'Shephard'];
    var God = T1[Title] + ' ' + E1[expression];
    console.log(God);
}
Jesus();

