function monkeyCount(n) {
    for (i = 0, arr = []; i < n; arr.push(++i));
    
    return(arr);
  }

  monkeyCount(5)