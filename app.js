function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}




window.addEventListener('load', async () => {

    
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        
        let nombres = document.getElementById('nombre').value;
        let placa = document.getElementById('placa').value;
        let horometro = document.getElementById('horometro').value;
        let dniOp = document.getElementById('dniOp').value;

        let observaciones = document.getElementById('observaciones').value;
        

        let nombreJefe = document.getElementById('nombreJefe').value;
        let dniJefe = document.getElementById('dniJefe').value;

         // Obtener la opción seleccionada de "Revisión técnica"
         let revisionTecnica = document.querySelector('input[name="revision_tecnica"]:checked').value;
         let revisionTecnicaShort = '';
         switch (revisionTecnica) {
             case 'Bueno':
                 revisionTecnicaShort = 'B';
                 break;
             case 'Malo':
                 revisionTecnicaShort = 'M';
                 break;
             case 'No Aplica':
                 revisionTecnicaShort = 'NA';
                 break;
         }
         
         let estructuraGeneral = document.querySelector('input[name="estructura_general"]:checked').value;
         let estructuraGeneralShort = '';
         switch (estructuraGeneral) {
             case 'Bueno':
                 estructuraGeneralShort = 'B';
                 break;
             case 'Malo':
                 estructuraGeneralShort = 'M';
                 break;
             case 'No Aplica':
                 estructuraGeneralShort = 'NA';
                 break;
         }
         
         let neumaticosTraseros = document.querySelector('input[name="neumaticos_traseros"]:checked').value;
         let neumaticosTraserosShort = '';
         switch (neumaticosTraseros) {
             case 'Bueno':
                 neumaticosTraserosShort = 'B';
                 break;
             case 'Malo':
                 neumaticosTraserosShort = 'M';
                 break;
             case 'No Aplica':
                 neumaticosTraserosShort = 'NA';
                 break;
         }
         
         let neumaticosDelanteros = document.querySelector('input[name="neumaticos_delanteros"]:checked').value;
         let neumaticosDelanterosShort = '';
         switch (neumaticosDelanteros) {
             case 'Bueno':
                 neumaticosDelanterosShort = 'B';
                 break;
             case 'Malo':
                 neumaticosDelanterosShort = 'M';
                 break;
             case 'No Aplica':
                 neumaticosDelanterosShort = 'NA';
                 break;
         }
         
         let cilindroLevante = document.querySelector('input[name="cilindro_levante"]:checked').value;
         let cilindroLevanteShort = '';
         switch (cilindroLevante) {
             case 'Bueno':
                 cilindroLevanteShort = 'B';
                 break;
             case 'Malo':
                 cilindroLevanteShort = 'M';
                 break;
             case 'No Aplica':
                 cilindroLevanteShort = 'NA';
                 break;
         }
         
         let cilindrosArticulacion = document.querySelector('input[name="cilindros_articulacion"]:checked').value;
         let cilindrosArticulacionShort = '';
         switch (cilindrosArticulacion) {
             case 'Bueno':
                 cilindrosArticulacionShort = 'B';
                 break;
             case 'Malo':
                 cilindrosArticulacionShort = 'M';
                 break;
             case 'No Aplica':
                 cilindrosArticulacionShort = 'NA';
                 break;
         }
         
         let palaCarga = document.querySelector('input[name="pala_carga"]:checked').value;
         let palaCargaShort = '';
         switch (palaCarga) {
             case 'Bueno':
                 palaCargaShort = 'B';
                 break;
             case 'Malo':
                 palaCargaShort = 'M';
                 break;
             case 'No Aplica':
                 palaCargaShort = 'NA';
                 break;
         }
         
         let comandos = document.querySelector('input[name="comandos"]:checked').value;
         let comandosShort = '';
         switch (comandos) {
             case 'Bueno':
                 comandosShort = 'B';
                 break;
             case 'Malo':
                 comandosShort = 'M';
                 break;
             case 'No Aplica':
                 comandosShort = 'NA';
                 break;
         }
         
         let pasadoresCilindros = document.querySelector('input[name="pasadores_cilindros"]:checked').value;
         let pasadoresCilindrosShort = '';
         switch (pasadoresCilindros) {
             case 'Bueno':
                 pasadoresCilindrosShort = 'B';
                 break;
             case 'Malo':
                 pasadoresCilindrosShort = 'M';
                 break;
             case 'No Aplica':
                 pasadoresCilindrosShort = 'NA';
                 break;
         }
         
         let flexibles = document.querySelector('input[name="flexibles"]:checked').value;
         let flexiblesShort = '';
         switch (flexibles) {
             case 'Bueno':
                 flexiblesShort = 'B';
                 break;
             case 'Malo':
                 flexiblesShort = 'M';
                 break;
             case 'No Aplica':
                 flexiblesShort = 'NA';
                 break;
         }
         
         // Continúa con el mismo patrón para los demás elementos de la lista:
         
         let canerias = document.querySelector('input[name="canerias"]:checked').value;
         let caneriasShort = '';
         switch (canerias) {
             case 'Bueno':
                 caneriasShort = 'B';
                 break;
             case 'Malo':
                 caneriasShort = 'M';
                 break;
             case 'No Aplica':
                 caneriasShort = 'NA';
                 break;
         }
         
         let frenoEstacionamiento = document.querySelector('input[name="freno_estacionamiento"]:checked').value;
         let frenoEstacionamientoShort = '';
         switch (frenoEstacionamiento) {
             case 'Bueno':
                 frenoEstacionamientoShort = 'B';
                 break;
             case 'Malo':
                 frenoEstacionamientoShort = 'M';
                 break;
             case 'No Aplica':
                 frenoEstacionamientoShort = 'NA';
                 break;
         }
         
         let sistemaFrenos = document.querySelector('input[name="sistema_frenos"]:checked').value;
         let sistemaFrenosShort = '';
         switch (sistemaFrenos) {
             case 'Bueno':
                 sistemaFrenosShort = 'B';
                 break;
             case 'Malo':
                 sistemaFrenosShort = 'M';
                 break;
             case 'No Aplica':
                 sistemaFrenosShort = 'NA';
                 break;
         }
         
         let enfriadorAceite = document.querySelector('input[name="enfriador_aceite"]:checked').value;
         let enfriadorAceiteShort = '';
         switch (enfriadorAceite) {
             case 'Bueno':
                 enfriadorAceiteShort = 'B';
                 break;
             case 'Malo':
                 enfriadorAceiteShort = 'M';
                 break;
             case 'No Aplica':
                 enfriadorAceiteShort = 'NA';
                 break;
         }
         
         let espejos = document.querySelector('input[name="espejos"]:checked').value;
         let espejosShort = '';
         switch (espejos) {
             case 'Bueno':
                 espejosShort = 'B';
                 break;
             case 'Malo':
                 espejosShort = 'M';
                 break;
             case 'No Aplica':
                 espejosShort = 'NA';
                 break;
         }
         
         let cabina = document.querySelector('input[name="cabina"]:checked').value;
         let cabinaShort = '';
         switch (cabina) {
             case 'Bueno':
                 cabinaShort = 'B';
                 break;
             case 'Malo':
                 cabinaShort = 'M';
                 break;
             case 'No Aplica':
                 cabinaShort = 'NA';
                 break;
         }
         
         let alarmaRetroceso = document.querySelector('input[name="alarma_retroceso"]:checked').value;
         let alarmaRetrocesoShort = '';
         switch (alarmaRetroceso) {
             case 'Bueno':
                 alarmaRetrocesoShort = 'B';
                 break;
             case 'Malo':
                 alarmaRetrocesoShort = 'M';
                 break;
             case 'No Aplica':
                 alarmaRetrocesoShort = 'NA';
                 break;
         }
         
         let luces = document.querySelector('input[name="luces"]:checked').value;
         let lucesShort = '';
         switch (luces) {
             case 'Bueno':
                 lucesShort = 'B';
                 break;
             case 'Malo':
                 lucesShort = 'M';
                 break;
             case 'No Aplica':
                 lucesShort = 'NA';
                 break;
         }
         
         let bocina = document.querySelector('input[name="bocina"]:checked').value;
         let bocinaShort = '';
         switch (bocina) {
             case 'Bueno':
                 bocinaShort = 'B';
                 break;
             case 'Malo':
                 bocinaShort = 'M';
                 break;
             case 'No Aplica':
                 bocinaShort = 'NA';
                 break;
         }
         
         let baliza = document.querySelector('input[name="baliza"]:checked').value;
         let balizaShort = '';
         switch (baliza) {
             case 'Bueno':
                 balizaShort = 'B';
                 break;
             case 'Malo':
                 balizaShort = 'M';
                 break;
             case 'No Aplica':
                 balizaShort = 'NA';
                 break;
         }
         
         let bloqueadorSistemaHidraulico = document.querySelector('input[name="bloqueador_sistema_hidraulico"]:checked').value;
         let bloqueadorSistemaHidraulicoShort = '';
         switch (bloqueadorSistemaHidraulico) {
             case 'Bueno':
                 bloqueadorSistemaHidraulicoShort = 'B';
                 break;
             case 'Malo':
                 bloqueadorSistemaHidraulicoShort = 'M';
                 break;
             case 'No Aplica':
                 bloqueadorSistemaHidraulicoShort = 'NA';
                 break;
         }
         
         let motor = document.querySelector('input[name="motor"]:checked').value;
         let motorShort = '';
         switch (motor) {
             case 'Bueno':
                 motorShort = 'B';
                 break;
             case 'Malo':
                 motorShort = 'M';
                 break;
             case 'No Aplica':
                 motorShort = 'NA';
                 break;
         }
         
         let radiador = document.querySelector('input[name="radiador"]:checked').value;
         let radiadorShort = '';
         switch (radiador) {
             case 'Bueno':
                 radiadorShort = 'B';
                 break;
             case 'Malo':
                 radiadorShort = 'M';
                 break;
             case 'No Aplica':
                 radiadorShort = 'NA';
                 break;
         }
         
         let mangueras = document.querySelector('input[name="mangueras"]:checked').value;
         let manguerasShort = '';
         switch (mangueras) {
             case 'Bueno':
                 manguerasShort = 'B';
                 break;
             case 'Malo':
                 manguerasShort = 'M';
                 break;
             case 'No Aplica':
                 manguerasShort = 'NA';
                 break;
         }
         
         let correas = document.querySelector('input[name="correas"]:checked').value;
         let correasShort = '';
         switch (correas) {
             case 'Bueno':
                 correasShort = 'B';
                 break;
             case 'Malo':
                 correasShort = 'M';
                 break;
             case 'No Aplica':
                 correasShort = 'NA';
                 break;
         }
         
         let sistemaElectrico = document.querySelector('input[name="sistema_electrico"]:checked').value;
         let sistemaElectricoShort = '';
         switch (sistemaElectrico) {
             case 'Bueno':
                 sistemaElectricoShort = 'B';
                 break;
             case 'Malo':
                 sistemaElectricoShort = 'M';
                 break;
             case 'No Aplica':
                 sistemaElectricoShort = 'NA';
                 break;
         }
         
         let relojTemperatura = document.querySelector('input[name="reloj_temperatura"]:checked').value;
         let relojTemperaturaShort = '';
         switch (relojTemperatura) {
             case 'Bueno':
                 relojTemperaturaShort = 'B';
                 break;
             case 'Malo':
                 relojTemperaturaShort = 'M';
                 break;
             case 'No Aplica':
                 relojTemperaturaShort = 'NA';
                 break;
         }
         
         let marcadorAceite = document.querySelector('input[name="marcador_aceite"]:checked').value;
         let marcadorAceiteShort = '';
         switch (marcadorAceite) {
             case 'Bueno':
                 marcadorAceiteShort = 'B';
                 break;
             case 'Malo':
                 marcadorAceiteShort = 'M';
                 break;
             case 'No Aplica':
                 marcadorAceiteShort = 'NA';
                 break;
         }
         
         let marcadorPetroleo = document.querySelector('input[name="marcador_petroleo"]:checked').value;
         let marcadorPetroleoShort = '';
         switch (marcadorPetroleo) {
             case 'Bueno':
                 marcadorPetroleoShort = 'B';
                 break;
             case 'Malo':
                 marcadorPetroleoShort = 'M';
                 break;
             case 'No Aplica':
                 marcadorPetroleoShort = 'NA';
                 break;
         }
         
         let cinturonSeguridad = document.querySelector('input[name="cinturon_seguridad"]:checked').value;
         let cinturonSeguridadShort = '';
         switch (cinturonSeguridad) {
             case 'Bueno':
                 cinturonSeguridadShort = 'B';
                 break;
             case 'Malo':
                 cinturonSeguridadShort = 'M';
                 break;
             case 'No Aplica':
                 cinturonSeguridadShort = 'NA';
                 break;
         }
         
         let seguroCilindroLevante = document.querySelector('input[name="seguro_cilindro_levante"]:checked').value;
         let seguroCilindroLevanteShort = '';
         switch (seguroCilindroLevante) {
             case 'Bueno':
                 seguroCilindroLevanteShort = 'B';
                 break;
             case 'Malo':
                 seguroCilindroLevanteShort = 'M';
                 break;
             case 'No Aplica':
                 seguroCilindroLevanteShort = 'NA';
                 break;
         }
         
         let ruedaRepuesto = document.querySelector('input[name="rueda_repuesto"]:checked').value;
         let ruedaRepuestoShort = '';
         switch (ruedaRepuesto) {
             case 'Bueno':
                 ruedaRepuestoShort = 'B';
                 break;
             case 'Malo':
                 ruedaRepuestoShort = 'M';
                 break;
             case 'No Aplica':
                 ruedaRepuestoShort = 'NA';
                 break;
         }
         
         let tuboEscape = document.querySelector('input[name="tubo_escape"]:checked').value;
         let tuboEscapeShort = '';
         switch (tuboEscape) {
             case 'Bueno':
                 tuboEscapeShort = 'B';
                 break;
             case 'Malo':
                 tuboEscapeShort = 'M';
                 break;
             case 'No Aplica':
                 tuboEscapeShort = 'NA';
                 break;
         }
         
         let bateriaTerminales = document.querySelector('input[name="bateria_terminales"]:checked').value;
         let bateriaTerminalesShort = '';
         switch (bateriaTerminales) {
             case 'Bueno':
                 bateriaTerminalesShort = 'B';
                 break;
             case 'Malo':
                 bateriaTerminalesShort = 'M';
                 break;
             case 'No Aplica':
                 bateriaTerminalesShort = 'NA';
                 break;
         }
         
         let asiento = document.querySelector('input[name="asiento"]:checked').value;
         let asientoShort = '';
         switch (asiento) {
             case 'Bueno':
                 asientoShort = 'B';
                 break;
             case 'Malo':
                 asientoShort = 'M';
                 break;
             case 'No Aplica':
                 asientoShort = 'NA';
                 break;
         }
         


         generatePDF(
            nombres, 
            dniOp,
            placa, 
            horometro, 
            observaciones,
            revisionTecnicaShort,
            estructuraGeneralShort,
            neumaticosTraserosShort,
            neumaticosDelanterosShort,
            cilindroLevanteShort,
            cilindrosArticulacionShort,
            palaCargaShort,
            comandosShort,
            pasadoresCilindrosShort,
            flexiblesShort,
            caneriasShort,
            frenoEstacionamientoShort,
            sistemaFrenosShort,
            enfriadorAceiteShort,
            espejosShort,
            cabinaShort,
            alarmaRetrocesoShort,
            lucesShort,
            bocinaShort,
            balizaShort,
            bloqueadorSistemaHidraulicoShort,
            motorShort,
            radiadorShort,
            manguerasShort,
            correasShort,
            sistemaElectricoShort,
            relojTemperaturaShort,
            marcadorAceiteShort,
            marcadorPetroleoShort,
            cinturonSeguridadShort,
            seguroCilindroLevanteShort,
            ruedaRepuestoShort,
            tuboEscapeShort,
            bateriaTerminalesShort,
            asientoShort,

            nombreJefe,
            dniJefe
        );
        
        
    })
});

async function generatePDF(
    nombres, 
    dniOp,
    placa, 
    horometro, 
    observaciones,
    revisionTecnica,
    estructuraGeneral,
    neumaticosTraseros,
    neumaticosDelanteros,
    cilindroLevante,
    cilindrosArticulacion,
    palaCarga,
    comandos,
    pasadoresCilindros,
    flexibles,
    canerias,
    frenoEstacionamiento,
    sistemaFrenos,
    enfriadorAceite,
    espejos,
    cabina,
    alarmaRetroceso,
    luces,
    bocina,
    baliza,
    bloqueadorSistemaHidraulico,
    motor,
    radiador,
    mangueras,
    correas,
    sistemaElectrico,
    relojTemperatura,
    marcadorAceite,
    marcadorPetroleo,
    cinturonSeguridad,
    seguroCilindroLevante,
    ruedaRepuesto,
    tuboEscape,
    bateriaTerminales,
    asiento,
    nombreJefe,
    dniJefe
) {
    // Cargar la imagen JPG
    const image = await loadImage("formulario.jpg");
        
    // Crear una nueva instancia de jsPDF
    const pdf = new jsPDF('p', 'pt', 'letter');

    // Agregar la imagen JPG al PDF
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);


    // Obtener la fecha actual
    const date = new Date();
    // Formatear la fecha
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son de 0 a 11, por lo que sumamos 1
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    pdf.text(formattedDate, 200, 160); 

    
    //para la hora
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    // Mostrar la hora en el PDF
    pdf.text(formattedTime, 350, 160); 
    

    //posicion
    pdf.setFontSize(10);
    pdf.text(nombres, 160, 127);
    pdf.text(placa, 160, 144);
    pdf.text(horometro, 375, 144);
    pdf.text(observaciones,50, 620);

    




    //main

    if (revisionTecnica === 'B') {
        pdf.text('B', 238, 205);  // posición ajustada para "Bueno"
    } else if (revisionTecnica === 'M') {
        pdf.text('M', 254, 205);  // posición ajustada para "Malo"
    } else if (revisionTecnica === 'NA') {
        pdf.text('A', 271, 205);  // posición ajustada para "No Aplica"
    }

    if (estructuraGeneral === 'B') {
        pdf.text('B', 238, 234);  // posición ajustada para "Bueno"
    } else if (estructuraGeneral === 'M') {
        pdf.text('M', 254, 234);  // posición ajustada para "Malo"
    } else if (estructuraGeneral === 'NA') {
        pdf.text('A', 271, 234);  // posición ajustada para "No Aplica"
    }

    //Pregunta 3
    if (neumaticosTraseros === 'B') {
        pdf.text('B', 238, 247);  // posición ajustada para "Bueno"
    } else if (neumaticosTraseros === 'M') {
        pdf.text('M', 254, 247);  // posición ajustada para "Malo"
    } else if (neumaticosTraseros === 'NA') {
        pdf.text('A', 271, 247);  // posición ajustada para "No Aplica"
    }

    // Pregunta 4
    if (neumaticosDelanteros === 'B') {
        pdf.text('B', 238, 260);  // posición ajustada para "Bueno"
    } else if (neumaticosDelanteros === 'M') {
        pdf.text('M', 254, 260);  // posición ajustada para "Malo"
    } else if (neumaticosDelanteros === 'NA') {
        pdf.text('A', 271, 260);  // posición ajustada para "No Aplica"
    }

        // Cilindro de Levante
    if (cilindroLevante === 'B') {
        pdf.text('B', 238, 273);  // posición ajustada para "Bueno"
    } else if (cilindroLevante === 'M') {
        pdf.text('M', 254, 273);  // posición ajustada para "Malo"
    } else if (cilindroLevante === 'NA') {
        pdf.text('A', 271, 273);  // posición ajustada para "No Aplica"
    }

    // Cilindros de Articulación
    if (cilindrosArticulacion === 'B') {
        pdf.text('B', 238, 287.5);
    } else if (cilindrosArticulacion === 'M') {
        pdf.text('M', 254, 287.5);
    } else if (cilindrosArticulacion === 'NA') {
        pdf.text('A', 271, 287.5);
    }

    // Pala de Carga
    if (palaCarga === 'B') {
        pdf.text('B', 238, 302.5);
    } else if (palaCarga === 'M') {
        pdf.text('M', 254, 302.5);
    } else if (palaCarga === 'NA') {
        pdf.text('A', 271, 302.5);
    }

    // Comandos
    if (comandos === 'B') {
        pdf.text('B', 238, 316);
    } else if (comandos === 'M') {
        pdf.text('M', 254, 316);
    } else if (comandos === 'NA') {
        pdf.text('A', 271, 316);
    }

    // Pasadores de Cilindros
    if (pasadoresCilindros === 'B') {
        pdf.text('B', 238, 331);
    } else if (pasadoresCilindros === 'M') {
        pdf.text('M', 254, 331);
    } else if (pasadoresCilindros === 'NA') {
        pdf.text('A', 271, 331);
    }

    // Flexibles
    if (flexibles === 'B') {
        pdf.text('B', 238, 345);
    } else if (flexibles === 'M') {
        pdf.text('M', 254, 345);
    } else if (flexibles === 'NA') {
        pdf.text('A', 271, 345);
    }

    // Cañerías
    if (canerias === 'B') {
        pdf.text('B', 238, 360);
    } else if (canerias === 'M') {
        pdf.text('M', 254, 360);
    } else if (canerias === 'NA') {
        pdf.text('A', 271, 360);
    }

    // Freno de Estacionamiento....
    if (frenoEstacionamiento === 'B') {
        pdf.text('B', 238, 374);
    } else if (frenoEstacionamiento === 'M') {
        pdf.text('M', 254, 374);
    } else if (frenoEstacionamiento === 'NA') {
        pdf.text('A', 271, 374);
    }



    // Sistema de Frenos
    if (sistemaFrenos === 'B') {
        pdf.text('B', 238, 389);
    } else if (sistemaFrenos === 'M') {
        pdf.text('M', 254, 389);
    } else if (sistemaFrenos === 'NA') {
        pdf.text('A', 271, 389);
    }

    // Enfriador de Aceite
    if (enfriadorAceite === 'B') {
        pdf.text('B', 238, 403);
    } else if (enfriadorAceite === 'M') {
        pdf.text('M', 254, 403);
    } else if (enfriadorAceite === 'NA') {
        pdf.text('A', 271, 403);
    }

    // Espejos
    if (espejos === 'B') {
        pdf.text('B', 238, 418);
    } else if (espejos === 'M') {
        pdf.text('M', 254, 418);
    } else if (espejos === 'NA') {
        pdf.text('A', 271, 418);
    }

    // Cabina
    if (cabina === 'B') {
        pdf.text('B', 238, 431.5);
    } else if (cabina === 'M') {
        pdf.text('M', 254, 431.5);
    } else if (cabina === 'NA') {
        pdf.text('A', 271, 431.5);
    }

    // Alarma de Retroceso
    if (alarmaRetroceso === 'B') {
        pdf.text('B', 238, 444.5);
    } else if (alarmaRetroceso === 'M') {
        pdf.text('M', 254, 445.5);
    } else if (alarmaRetroceso === 'NA') {
        pdf.text('A', 271, 444.5);
    }

    // Luces
    if (luces === 'B') {
        pdf.text('B', 238, 459);
    } else if (luces === 'M') {
        pdf.text('M', 254, 459);
    } else if (luces === 'NA') {
        pdf.text('A', 271, 459);
    }

    // Bocina
    if (bocina === 'B') {
        pdf.text('B', 238, 474);
    } else if (bocina === 'M') {
        pdf.text('M', 254, 474);
    } else if (bocina === 'NA') {
        pdf.text('A', 271, 474);
    }

    // Baliza
    if (baliza === 'B') {
        pdf.text('B', 238, 489.2);
    } else if (baliza === 'M') {
        pdf.text('M', 254, 489.2);
    } else if (baliza === 'NA') {
        pdf.text('A', 271, 489.2);
    }

    // Bloqueador de Sistema Hidráulico
    if (bloqueadorSistemaHidraulico === 'B') {
        pdf.text('B', 238, 504);
    } else if (bloqueadorSistemaHidraulico === 'M') {
        pdf.text('M', 254, 504);
    } else if (bloqueadorSistemaHidraulico === 'NA') {
        pdf.text('A', 271, 504);
    }

    // Motor
    if (motor === 'B') {
        pdf.text('B', 238, 519);
    } else if (motor === 'M') {
        pdf.text('M', 254, 519);
    } else if (motor === 'NA') {
        pdf.text('A', 271, 519);
    }

    // Radiador
    if (radiador === 'B') {
        pdf.text('B', 238, 533);
    } else if (radiador === 'M') {
        pdf.text('M', 254, 533);
    } else if (radiador === 'NA') {
        pdf.text('A', 271, 533);
    }

    // Mangueras
    if (mangueras === 'B') {
        pdf.text('B', 238, 547.2);
    } else if (mangueras === 'M') {
        pdf.text('M', 254, 547.2);
    } else if (mangueras === 'NA') {
        pdf.text('A', 271, 547.2);
    }

    // Correas
    if (correas === 'B') {
        pdf.text('B', 238, 561.4);
    } else if (correas === 'M') {
        pdf.text('M', 254, 561.4);
    } else if (correas === 'NA') {
        pdf.text('A', 271, 561.4);
    }

    // Sistema Eléctrico
    if (sistemaElectrico === 'B') {
        pdf.text('B', 238, 575.3);
    } else if (sistemaElectrico === 'M') {
        pdf.text('M', 254, 575.3);
    } else if (sistemaElectrico === 'NA') {
        pdf.text('A', 271, 575.3);
    }

//de aqui se va arriba
    // Reloj de Temperatura
    if (relojTemperatura === 'B') {
        pdf.text('B', 475, 205);
    } else if (relojTemperatura === 'M') {
        pdf.text('M', 493, 205);
    } else if (relojTemperatura === 'NA') {
        pdf.text('A', 513, 205);
    }

    // Marcador de Aceite
    if (marcadorAceite === 'B') {
        pdf.text('B', 475, 219.5);
    } else if (marcadorAceite === 'M') {
        pdf.text('M', 493, 219.5);
    } else if (marcadorAceite === 'NA') {
        pdf.text('A', 513, 219.5);
    }

    // Marcador de Petróleo
    if (marcadorPetroleo === 'B') {
        pdf.text('B', 475, 234);
    } else if (marcadorPetroleo === 'M') {
        pdf.text('M', 493, 234);
    } else if (marcadorPetroleo === 'NA') {
        pdf.text('A', 513, 234);
    }

    // Cinturón de Seguridad
    if (cinturonSeguridad === 'B') {
        pdf.text('B', 475, 247);
    } else if (cinturonSeguridad === 'M') {
        pdf.text('M', 493, 247);
    } else if (cinturonSeguridad === 'NA') {
        pdf.text('A', 513, 247);
    }

    // Seguro de Cilindro de Levante
    if (seguroCilindroLevante === 'B') {
        pdf.text('B', 475, 260);
    } else if (seguroCilindroLevante === 'M') {
        pdf.text('M', 493, 260);
    } else if (seguroCilindroLevante === 'NA') {
        pdf.text('A', 513, 260);
    }

    // Rueda de Repuesto
    if (ruedaRepuesto === 'B') {
        pdf.text('B', 475, 273);
    } else if (ruedaRepuesto === 'M') {
        pdf.text('M', 493, 273);
    } else if (ruedaRepuesto === 'NA') {
        pdf.text('A', 513, 273);
    }

    // Tubo de Escape
    if (tuboEscape === 'B') {
        pdf.text('B', 475, 287.5);
    } else if (tuboEscape === 'M') {
        pdf.text('M', 493, 287.5);
    } else if (tuboEscape === 'NA') {
        pdf.text('A', 513, 287.5);
    }

    // Batería y Terminales
    if (bateriaTerminales === 'B') {
        pdf.text('B', 475, 302.5);
    } else if (bateriaTerminales === 'M') {
        pdf.text('M', 493, 302.5);
    } else if (bateriaTerminales === 'NA') {
        pdf.text('A', 513, 302.5);
    }

    // Asiento
    if (asiento === 'B') {
        pdf.text('B', 475, 316);
    } else if (asiento === 'M') {
        pdf.text('M', 493, 316);
    } else if (asiento === 'NA') {
        pdf.text('A', 513, 316);
    }


    pdf.setFont("times", "italic"); // Cambia el tipo de fuente a Times y estilo a cursiva (italic)
    pdf.text(nombres, 50, 657);
    pdf.text('DNI ' + dniOp, 50, 665);
    pdf.text(formattedDate, 50, 673);


    pdf.setFont("times", "italic"); // Cambia el tipo de fuente a Times y estilo a cursiva (italic)
    pdf.text(nombreJefe, 287, 657);
    pdf.text('DNI ' + dniJefe, 287, 665);
    pdf.text(formattedDate, 287, 673);


    //main end

    pdf.setFillColor(0,0,0);
    pdf.save(`CF-${nombres}-${formattedDate}.pdf`);

    location.reload(); // Actualiza la página después de generar el PDF
}
