function openModal(){
  document.getElementById("whatsappModal").style.display="flex";
}

function closeModal(){
  document.getElementById("whatsappModal").style.display="none";
}

function copyID(){
  navigator.clipboard.writeText("86170482");
  alert("ID copiado correctamente");
}

const phone=document.getElementById("phone");
const select=document.getElementById("countryCode");

select.addEventListener("change",function(){
  const length=this.options[this.selectedIndex].dataset.length;
  phone.maxLength=length;
});