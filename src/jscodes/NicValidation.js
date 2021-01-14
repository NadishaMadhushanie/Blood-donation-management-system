
const NicValidation = (NICNo) => {

    var dayText;
    if (NICNo.length != 10 && NICNo.length != 12) {
        return false;//if nic number is false
                                                   }
    else if (NICNo.length == 10 && Number.isInteger(NICNo.substr(0, 9)) == true) {
        return false;
                                                                                 }
    else {
        // Year
        if (NICNo.length == 10) {
            dayText = parseInt(NICNo.substr(2, 3));
                                } 
        else {
            dayText = parseInt(NICNo.substr(4, 3));
             }

        // Gender
        if (dayText > 500) {
            dayText = dayText - 500;
                           } 

        // Day Digit Validation
        if (dayText < 1 && dayText > 366) {
            return false;
                                          } 
        else{
            return true;
            }
    }
};



export default NicValidation;