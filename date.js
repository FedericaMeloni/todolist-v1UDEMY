//
module.exports.getDate=
function(){
const today = new Date(); //check the documentatio
const  options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-US", options);
return day;
}

module.exports.getDay=
function() {
const today = new Date(); //check the documentatio
const options = {
  weekday: "long",
};

let day = today.toLocaleDateString("en-US", options);
return day;
}
