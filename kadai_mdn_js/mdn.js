const today = () => {

var today1 = new Date ();

const year = today1.getFullYear();
const month = today1.getMonth()+1;
const day = today1.getDate();

  console.log(year + '年' + month + '月' + day + '日');
}

today();
