function imprimirAlerta(mensaje,tipo){

    const alerta = document.querySelector('.alerta');
    if(!alerta){
        const divMsj = document.createElement('div');
        divMsj.className = 'px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center border alerta';
        divMsj.textContent = mensaje;
        if(tipo === 'error'){
            divMsj.classList.add('bg-red-100','border-red-400','text-red-700');
        }else{
            divMsj.classList.add('bg-green-100','border-green-400','text-green-700');
        }

        formulario.appendChild(divMsj);

        setTimeout(() => {
            divMsj.remove();
        }, 3000);
    }
}






