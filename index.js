
function dwarfRollCall(dwarves) {
    let line = [];
  for (var i = 0; i < dwarves.length; i += 1) {
  let name = dwarves[i];
line.push((i + 1) + ". " + name);
}
let lineNew = line.join(" ");
return lineNew.toString()+ " ";
}

function summonCaptainPlanet(planeteerCalls){
let p1 = planeteerCalls.map(f=>{ return f.toUpperCase(); });
for (var i=p1.length; i--;) {
   p1[i] =p1[i] + "!";
}
return p1
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i += 1) {
  let t = words[i].length;
  if (t>=5){
  return true}else{
    return false
  }
}
}

  function findTheCheese(foods) {
    let cheddar = foods.find(item => item == "cheddar")
    let gouda = foods.find(item => item == "gouda")
    let cam = foods.find(item => item == "camembert")
    if (cheddar) {
        return ("cheddar")
    } else if (gouda) {
        return ("gouda")
      } else if (cam) {
          return ("camembert")
    }
    else {
        return ('no cheese!')
    }
}
