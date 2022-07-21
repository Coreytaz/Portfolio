var summation = function (num) {
    if(num < 0){
          return 0;
      }
      else if(num === 1){
          return 1;
      }
      return summation(num - 1) + num;
  }