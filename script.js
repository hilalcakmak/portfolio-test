document.addEventListener("DOMContentLoaded", function () {
    function handleSubscription(event) {
        event.preventDefault(); 
        alert("Abone oldunuz! Teşekkür ederiz.");

        // Abone olduktan sonra kutu içeriğini temizle
        subscribeForm.reset();
    }

    var subscribeForm = document.getElementById("subscribeForm");
    subscribeForm.addEventListener("submit", handleSubscription);
});


//ilk sayfa
document.addEventListener("DOMContentLoaded", function () {
    // Get the modals
    var modal = document.getElementById("myModal");
    var spinWheelModal = document.getElementById("spinWheelModal");

    // Display the initial modal when the page is loaded
    modal.style.display = "block";

    // Function to open the spin wheel modal
    window.openSpinWheel = function () {
        modal.style.display = "none";
        spinWheelModal.style.display = "block";
    };

    // Function to close the spin wheel modal
    window.closeSpinWheelModal = function () {
        spinWheelModal.style.display = "none";
    };

    // Close the modals if the user clicks outside of them
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
    // İlk div bloğunu seç
    var firstDiv = document.getElementById('main-col');

    // İkinci ve üçüncü div blokları
    var secondDiv = document.querySelector('.about-box');
    var thirdDiv = document.querySelector('.dark');

    // Tıklama olayını ekle
    firstDiv.addEventListener('click', function () {
        // İkinci ve üçüncü div bloklarını görünür yap
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
  