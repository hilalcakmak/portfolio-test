document.addEventListener("DOMContentLoaded", function () {
    function handleSubscription(event) {
        event.preventDefault(); 
        alert("Abone oldunuz! Teşekkür ederiz.");
        subscribeForm.reset();
    }

    var subscribeForm = document.getElementById("subscribeForm");
    subscribeForm.addEventListener("submit", handleSubscription);
});


//ilk sayfa
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var spinWheelModal = document.getElementById("spinWheelModal");

    modal.style.display = "block";

    window.openSpinWheel = function () {
        modal.style.display = "none";
        spinWheelModal.style.display = "block";
    };

    window.closeSpinWheelModal = function () {
        spinWheelModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == spinWheelModal) {
            spinWheelModal.style.display = "none";
        }
    };
});

//hediye çarkı
function closeSpinWheelModal() {
    document.getElementById('spinWheelModal').style.display = 'none';
}

function spinWheel() {
    const spinWheel = document.getElementById('spinWheel');
    const degrees = Math.floor(Math.random() * 360) + 360 * 5; 
    spinWheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        alert("Tebrikler! Özel teklifinizi kazandınız!");
        closeSpinWheelModal();
    }, 3000); 
}

//hakkımda
document.addEventListener('DOMContentLoaded', function () {
    var firstDiv = document.getElementById('main-col');

    var secondDiv = document.querySelector('.about-box');
    var thirdDiv = document.querySelector('.dark');

    firstDiv.addEventListener('click', function () {
        secondDiv.classList.toggle('hidden');
        thirdDiv.classList.toggle('hidden');
    });
});

//blog
function showCategories() {
    document.getElementById("blogCategories").style.display = "block";
}

function hideCategories() {
    document.getElementById("blogCategories").style.display = "none";
}

//hizmetler
function teklifModalGoster() {
    document.getElementById('teklifModal').style.display = 'block';
  }
  
  function teklifModalGizle() {
    document.getElementById('teklifModal').style.display = 'none';
  }
  
  function teklifGonder() {
    const teklifTextarea = document.getElementById('teklifTextarea');
    const teklif = teklifTextarea.value;

    alert('Teklifiniz gönderildi: ' + teklif);

    teklifTextarea.value = '';

    teklifModalGizle();
  }
  