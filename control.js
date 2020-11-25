let data = {
  "enable": true
};

setTimeout(a=>{
  console.log("-----------------", data);
}, 2000)

if(!data.enable){
  console.log("-----------------", "");
  document.querySelector('body').remove();
}
