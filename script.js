function hisobla(nomi,narxi){
    const nechta = + prompt(nomi+" dan nechta zakaz qilmoqchisiz!!")
    const jovob=confirm(nechta + "ta " +nomi +"jami narxi : " +nechta*narxi+ " som boladi \n zakaz qilasizmi" );
    if(jovob==true){
        alert("Zakaz qabul qilindi")
    }else{
        alert("Zakaz bekor qilindi")
    }
}