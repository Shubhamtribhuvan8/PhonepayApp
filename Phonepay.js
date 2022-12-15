
 var obj=JSON.parse(localStorage.getItem("user"))||{};
const payment = document.createElement('button');
payment.innerText = 'Proceed';
// payment.style.marginLeft="42%";
payment.style.width="365px"
payment.style.marginTop="3%";
payment.style.fontSize="25px";
payment.style.backgroundColor="blue";


payment.addEventListener("click",function(){
  event.preventDefault();
  var name=document.getElementById("mobile").value;
  var val = document.getElementById("amount").value;
  obj.name = name;
  obj.val=val;

  localStorage.setItem("user",JSON.stringify(obj));
  console.log(obj);

  if(val==""){
    alert("Fill the amount");
  }
  else{
  payment.addEventListener('click', () => {
  const makePayment = (amount) => {
    return new Promise((resolve, reject) => {
      // simulate payment processing
      setTimeout(() => {
        // simulate payment acceptance or rejection
        const isPaymentSuccessful = true;

        if (isPaymentSuccessful) {
          // show success UI
          console.log(`Payment of ${amount} successful`);
          resolve();
          window.location.href = "succesful.html"
        }
        else {
          // show failure UI
          console.log(`Payment of ${amount} failed`);
          reject();
          window.location.href = "failed.html"
        }
      }, 2500);
    });
  }
  const showProcessingUI = () => {
    var name=document.createElement("h1");
    name.innerHTML="Showing processing UI...";
    document.getElementById("newpayment").append(name);
    console.log('Showing processing UI...');
  };
  
  const showSuccessUI = () => {
    console.log('Showing success UI...');

  };
  
  const showFailureUI = () => {
    console.log('Showing failure UI...');

  };
  showProcessingUI();
  makePayment(100)
    .then(showSuccessUI)
    .catch(showFailureUI);
});
  }
  });

var div = document.createElement("div");
div.append(payment);
document.getElementById("right").append(div);



