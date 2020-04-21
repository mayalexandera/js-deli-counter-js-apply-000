

function takeANumber() {
  var orderNumber = 1;
  console.log(`You are order number ${orderNumber}.`)
  i++;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  let str = "The line is currently: "
  if (line.length === 0) return 'The line is currently empty.'
  
  for(let i = 0; i < line.length; i++)
    str += (`${i+1}. ${line[i]}, `);
    //return str.substring(0, str.length - 2);
    return str;
}
  
