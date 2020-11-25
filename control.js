let data = {
  "enable": true
};

console.log("-----------------", data);
if(!data.enable){
  console.log("-----------------", "");
  document.querySelector('body').remove();
}
