<<<<<<< HEAD
function telephoneCheck(str) {
    if (str.match(/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g)) {
        return true;
    }
    return false
  }
console.log(telephoneCheck("1 555-555-5555"));
=======
function telephoneCheck(str) {
    if (str.match(/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g)) {
        return true;
    }
    return false
  }
console.log(telephoneCheck("1 555-555-5555"));
>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
