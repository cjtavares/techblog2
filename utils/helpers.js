module.exports = {
  format_date: (timeStamp) => {
    return `${new Date(timeStamp).getMonth()+1}/${new Date(timeStamp).getDate()}/${new Date(timeStamp).getFullYear()}`;
    }
     
  };