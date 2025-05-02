const hPosition = document.getElementById("hPos");
const vPosition = document.getElementById("vPos");
const types = document.getElementById("type");
const showMsg = document.getElementById("message");
const durations = document.getElementById("duration");
const showToasts = document.getElementById("toast-container");
const durationLabel = document.getElementById("durationlebel");

durations.addEventListener("input", (e) =>{
durationLabel.innerText = (e.target.value);
})


function showToast(){
const hPos = hPosition.value;
const vPos = vPosition.value;
const Type = types.value;
const message =  showMsg.value || "This is a Toast Message";
const duration = parseInt(durations.value)*1000

const toast = document.createElement('div');
toast.className = `toast ${Type}`;
toast.textContent = message;
 
showToasts.className = `${vPos} ${hPos}`;
showToasts.appendChild(toast);

setTimeout(() =>{
  toast.remove()
},duration);

}

