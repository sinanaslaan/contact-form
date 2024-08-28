const sendMail = () => {

    const form = document.getElementById('form');

    const getDeviceInfo = () => {
        const userAgent = navigator.userAgent;
        
        let deviceBrand = "Bilinmiyor";
    
        if (userAgent.match(/iPhone/i)) {
            deviceBrand = "Apple iPhone";
        } else if (userAgent.match(/iPad/i)) {
            deviceBrand = "Apple iPad";
        } else if (userAgent.match(/Mac/i)) {
            deviceBrand = "Apple Mac";
        } else if (userAgent.match(/Android/i)) {
            if (userAgent.match(/Samsung/i)) {
                deviceBrand = "Samsung";
            } else if (userAgent.match(/Huawei/i)) {
                deviceBrand = "Huawei";
            } else if (userAgent.match(/Xiaomi/i)) {
                deviceBrand = "Xiaomi";
            } else {
                deviceBrand = "Android Cihaz";
            }
        } else if (userAgent.match(/Windows/i)) {
            deviceBrand = "Windows Cihaz";
        } else if (userAgent.match(/Linux/i)) {
            deviceBrand = "Linux Cihaz";
        }
    
        return {
            platform: navigator.platform,   
            screenWidth: window.screen.width,  
            screenHeight: window.screen.height, 
            language: navigator.language,
            deviceBrand: deviceBrand
        }
    }
    
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        const deviceInfo = getDeviceInfo();
    
        Email.send({
            SecureToken : "56c6d3e3-3a77-429d-8751-3b303032e143",
            To : "sinan.aslaan@gmail.com",
            From: "sinan.aslaan@gmail.com",
            Subject : `Yeni Mesaj - ${name}`,
            Body : `<br> Gönderenin Adı Soyadı: ${name} <br> Gönderenin E-posta Adresi: ${email} <br><br> Mesaj: <br><br> ${message} <br><br> 
                    Cihaz Bilgileri: <br>
                    Platform: ${deviceInfo.platform} <br>
                    Ekran Boyutu: ${deviceInfo.screenWidth} x ${deviceInfo.screenHeight} <br>
                    Dil: ${deviceInfo.language} <br>
                    Cihaz Markası: ${deviceInfo.deviceBrand}`
        })
        
        .then(function(response) {
            console.log("Response:", response);
            alert("Mesajınız İletildi! Umarım güzel bir gün geçiriyorsundur :)"); 
        })
    
    
    });
    };
    
    sendMail();