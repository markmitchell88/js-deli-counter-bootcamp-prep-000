function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
  return `There is nobody waiting to be served!`
}
else if (line.length > 0){
  line.slice(1)
  return `Currently serving ${name}.`
}
}
