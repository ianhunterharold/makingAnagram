function makeAnagram(a, b) {
  let countOfAnagram = 0;
  
  let aIntoArray = a.split('');
  let bIntoArray = b.split('');
  
  let sortedA = aIntoArray.sort();
  let sortedB = bIntoArray.sort();

  let totalLength = sortedA.length + sortedB.length;
 
  for (let i = sortedA.length - 1; i >= 0 ; i--){
    for (let j = sortedB.length - 1; j >=0; j--){
      
      if (sortedA[i] === sortedB[j]){
        let removeToPreventDups = sortedA.splice(i,1);
        let removeToPreventDupsB = sortedB.splice(j,1)
         countOfAnagram = countOfAnagram + 2;
      }
    }
  }
  let totalDelete = totalLength - countOfAnagram;
 
  return totalDelete;
}
const st1 = "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn"; //cde
const st2 = "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk"; //abc
makeAnagram(st1,st2);

//bugexikjevtubidpulaelsbcqlupwetzyzdvjphn
// lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk
//

// return number of deletions needed to make a and b anagrams of each other. 

// find common values in both strings 
// push into new string 
// both lengths - count = deletions needed