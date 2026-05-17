function checkChar(ch) {
   let s = "aeiouAEIOU";
   for(let i=0;i<s.length;i++){
    if(ch==s.charAt(i)){
      return("Vowel");
    }
    }
    if (
      (ch >= 'a' && ch <= 'z') ||
    (ch >= 'A' && ch <= 'Z')
    )
    return("Consonant")
    else
    return("Invalid input");
    
  
  }
   

module.exports = { checkChar };
