(function(){
  let data = {
    "enable": false
  };

  console.log("111111111111111100", data.enable);
  if(!data.enable){
    console.log("-----------------", "");
    document.querySelector('body').remove();
  }

})()
