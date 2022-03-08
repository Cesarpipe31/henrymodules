ar controlAcces = function(queue, event){
  
    let arr=[];
    let access =[];
    while(queue.size()){
      let subject= queue.dequeue();
      if(
        subject.age>=18 &&
        subject.ticket.event=== event &&
        !acc.includes(subject.ticket.number)
        ){
          access.push(subject.ticket.number)
        arr.push(subject.fullname)
      }
    }
    return arr
  }
  
  
  function efectoEspejo(str){
  
  const reverse = new Stack()
  
  let temp = '';
  
  for (let i = 0; i < str.length; i++) {
      if(str[i] === ' ') {
          while(reverse.size() > 0){
             temp += reverse.pop(); 
          }
          temp += str[i]
      }  else {
          reverse.push(str[i])
      }
  }
  
  while(reverse.size() > 0) temp += reverse.pop(); 
  return temp
  
  }