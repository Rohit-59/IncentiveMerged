
module.exports =  (qualifiedRM, formData,salesExcelDataSheet) => {

 
qualifiedRM.forEach(element => {


element["PerModel Incentive"] = 0;
let userID = element["DSE ID"];
let perModelIncentive = 0;


salesExcelDataSheet.forEach((data) => {
    if (data.hasOwnProperty(userID)) {
        data[userID].forEach((record) => {

            if(formData.PerModelIncentive.hasOwnProperty(record["Model Name"])){

    //    for (const model in formData.PerModelIncentive) {
        //    if (record["Model Name"] == model ) {

            if (record['Extended Warranty'] > 0) {
                perModelIncentive += parseInt(formData.PerModelIncentive[record["Model Name"]].EWIncentive);

            }else{
               perModelIncentive +=  parseInt(formData.PerModelIncentive[record["Model Name"]].normalIncentive);
            }
        // }
    // }
    }



        })
    }
})

      // Find the appropriate incentive based on the exact model of cars sold for modelWise Calculation


// for (const model in formData.PerModelIncentive) {
//     if (element.hasOwnProperty(model) ) {
//         perModelIncentive += element[model] * formData.PerModelIncentive[model];
//     }
// }

element["PerModel Incentive"] = perModelIncentive;
element["Total Incentive"] = parseFloat(element["Total Incentive"]) + parseFloat(element["PerModel Incentive"]);

});

return qualifiedRM;
}









