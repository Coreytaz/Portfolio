function highAndLow(numbers){
    return max = Math.max.apply(null, numbers.split(" ")) + " " + Math.min.apply(null, numbers.split(" "));
  }