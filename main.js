function formulario (){

    const form = document.querySelector('.c-form');
    const resultado =document.querySelector('.c-resultado')

    const pessoa= []

    function pegaFormulario (envio){
        envio.preventDefault();
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso=  document.querySelector('.peso');
        const altura =document.querySelector('.altura');
      
        const imc = peso.value / (altura.value * altura.value);            

        pessoa.push({    //VAI ARMAZENAR OS VALORES DENTRO DA VARIAVELPESSOA 
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: parseFloat(peso.value),
            altura:parseFloat(altura.value),
            imc: parseFloat(imc)
        });

        resultado.innerHTML += `<p> Nome completo: ${nome.value} ${sobrenome.value}</p>`+ `<p>Peso:${peso.value}(Kg)</p> ` + `<p>Altura: ${altura.value}(m)</p>` + `<p>Seu IMC :${imc.toFixed(2)}`
       


    }

form.addEventListener('submit', pegaFormulario);
}
formulario();