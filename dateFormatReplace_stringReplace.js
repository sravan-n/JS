let date = ['01/01/2001', '02/02/2002', '03/03/2003'];
for (let i=0; i<date.length; i++) {
    date[i] = date[i].replace(/[/]/g,'-');
    console.log(date[i]);
}