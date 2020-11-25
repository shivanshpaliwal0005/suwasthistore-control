let data = {
  "enable": true
};

setTimeout(()=>{
  alert("111111111111111100");
  console.log("-----------------", data);
}, 2000)

if(!data.enable){
  console.log("-----------------", "");
  document.querySelector('body').remove();
}
