// Funcionamiento carrousel inicio
window.onload = () => {
    let imagenes = ["./media/banderausa.jpg","./media/estopa.jpg","./media/italianoraro.jpg","./media/flamenca.jpg"];
    let i = 0;
    setInterval(() => {
        i++;
        if(i >= imagenes.length){
            i = 0;
        }
        $("#imagen-carrousel").fadeOut("slow", function(){
            $(this).attr("src", imagenes[i]);
            $(this).fadeIn("slow")});
            
    }, 5000);
}