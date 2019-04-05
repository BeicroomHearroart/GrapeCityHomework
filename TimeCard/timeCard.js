function getCal(weekType = 0) {
    const now = new Date();
  
    const today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      date: now.getDate(),
      day: now.getDay(),
    };
  
    let firstDateEveryMonth = new Date(today.year + '/' + today.month);
    let lastDateEveryMonth = new Date(today.year + '/' + (today.month + 1))
    // weekType: 周日为第一天[0]或周一为第一天[1]
    let beforeDays = weekType == 0 ? firstDateEveryMonth.getDay() : firstDateEveryMonth.getDay() - 1;
  
    let beginDate = new Date(Date.parse(firstDateEveryMonth) - beforeDays * 24 * 3600 * 1000);
  
  
  
    console.log(beginDate);
  }
  
  getCal();
  
  function getFirstAndLastEveryMonth(calDate = new Date()){
    
  }