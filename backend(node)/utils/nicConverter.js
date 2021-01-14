const { compareSync } = require("bcrypt");

//nic number should pass as a string
const nicConverter = (nicNumber) => {


    var NICNo = nicNumber;
    var dayText = 0;
    var year = "";
    var month = "";
    var day = "";
    var gender = "";

    if (NICNo.length != 10 && NICNo.length != 12) {
        return console.log('Error!!! from nicConverter');
    } else if (NICNo.length == 10 && (NICNo.substr(0, 9)).isInteger) {
        return console.log('Errorasfalsbn');
    }
    else {
        // Year
        if (NICNo.length == 10) {
            year = "19" + NICNo.substr(0, 2);
            dayText = parseInt(NICNo.substr(2, 3));
        } else {
            year = NICNo.substr(0, 4);
            dayText = parseInt(NICNo.substr(4, 3));
        }

        // Gender
        if (dayText > 500) {
            gender = "Female";
            dayText = dayText - 500;
        } else {
            gender = "Male";
        }

        // Day Digit Validation
        if (dayText < 1 && dayText > 366) {
            return console.log('Error');
        } else {

            //Month
            if (dayText > 335) {
                day = dayText - 335;
                month = "12";
            }
            else if (dayText > 305) {
                day = dayText - 305;
                month = "11";
            }
            else if (dayText > 274) {
                day = dayText - 274;
                month = "10";
            }
            else if (dayText > 244) {
                day = dayText - 244;
                month = "9";
            }
            else if (dayText > 213) {
                day = dayText - 213;
                month = "8";
            }
            else if (dayText > 182) {
                day = dayText - 182;
                month = "7";
            }
            else if (dayText > 152) {
                day = dayText - 152;
                month = "6";
            }
            else if (dayText > 121) {
                day = dayText - 121;
                month = "5";
            }
            else if (dayText > 91) {
                day = dayText - 91;
                month = "4";
            }
            else if (dayText > 60) {
                day = dayText - 60;
                month = "3";
            }
            else if (dayText < 32) {
                month = "1";
                day = dayText;
            }
            else if (dayText > 31) {
                day = dayText - 31;
                month = "2";
            }

            function calculate_age(dob) { //age calculator
                var diff_ms = Date.now() - dob.getTime();
                var age_dt = new Date(diff_ms); 
              
                return Math.abs(age_dt.getUTCFullYear() - 1970);
            }

            const age = calculate_age(new Date(parseInt(year),parseInt(month),parseInt(day)));

            const AgeGender = {//create an object
                age : age,
                gender : gender
            };

           return AgeGender;//return the object
           
        }
    }

}


module.exports = {nicConverter};