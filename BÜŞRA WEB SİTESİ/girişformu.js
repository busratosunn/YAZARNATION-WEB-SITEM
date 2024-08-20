var kullanici = [{kullaniciAdi:"ead", parola:"ead1"}];
var x;

function kontrolEt(){
    ad = document.getElementById("kullaniciAdi").value;
    sifre = document.getElementById("parola").value;

    for(x of kullanici){
        if((x.kullaniciAdi == ad) && (x.parola == sifre)){
            return true;
        }
        else{
            return false;
        }
}
    }

    function girisOnayi(){
        kontrolEt();
        if (kontrolEt()){
            window.open("index.html","_self");
        }
        else{
            alert("Hatalı Kullanıcı Adı veya Parola. Yeniden deneyiniz...")
        }
    }