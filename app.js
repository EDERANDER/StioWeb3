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


         //lo que falta completar

        // Obtener la opción seleccionada de "Extintor 8kg minimo"
        let extintor = document.querySelector('input[name="extintor"]:checked').value;
        let extintorShort = '';
        switch (extintor) {
            case 'Bueno':
                extintorShort = 'B';
                break;
            case 'Malo':
                extintorShort = 'M';
                break;
            case 'No Aplica':
                extintorShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Juego de llaves"
        let juegoLlaves = document.querySelector('input[name="juego_llaves"]:checked').value;
        let juegoLlavesShort = '';
        switch (juegoLlaves) {
            case 'Bueno':
                juegoLlavesShort = 'B';
                break;
            case 'Malo':
                juegoLlavesShort = 'M';
                break;
            case 'No Aplica':
                juegoLlavesShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Faja remolcadora"
        let fajaRemolcadora = document.querySelector('input[name="faja_remolcadora"]:checked').value;
        let fajaRemolcadoraShort = '';
        switch (fajaRemolcadora) {
            case 'Bueno':
                fajaRemolcadoraShort = 'B';
                break;
            case 'Malo':
                fajaRemolcadoraShort = 'M';
                break;
            case 'No Aplica':
                fajaRemolcadoraShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Circulina"
        let circulina = document.querySelector('input[name="circulina"]:checked').value;
        let circulinaShort = '';
        switch (circulina) {
            case 'Bueno':
                circulinaShort = 'B';
                break;
            case 'Malo':
                circulinaShort = 'M';
                break;
            case 'No Aplica':
                circulinaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Triángulo de Seguridad"
        let trianguloSeguridad = document.querySelector('input[name="triangulo_seguridad"]:checked').value;
        let trianguloSeguridadShort = '';
        switch (trianguloSeguridad) {
            case 'Bueno':
                trianguloSeguridadShort = 'B';
                break;
            case 'Malo':
                trianguloSeguridadShort = 'M';
                break;
            case 'No Aplica':
                trianguloSeguridadShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Cinta reflectiva"
        let cintaReflectiva = document.querySelector('input[name="cinta_reflectiva"]:checked').value;
        let cintaReflectivaShort = '';
        switch (cintaReflectiva) {
            case 'Bueno':
                cintaReflectivaShort = 'B';
                break;
            case 'Malo':
                cintaReflectivaShort = 'M';
                break;
            case 'No Aplica':
                cintaReflectivaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Pico"
        let pico = document.querySelector('input[name="pico"]:checked').value;
        let picoShort = '';
        switch (pico) {
            case 'Bueno':
                picoShort = 'B';
                break;
            case 'Malo':
                picoShort = 'M';
                break;
            case 'No Aplica':
                picoShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Lampa"
        let lampa = document.querySelector('input[name="lampa"]:checked').value;
        let lampaShort = '';
        switch (lampa) {
            case 'Bueno':
                lampaShort = 'B';
                break;
            case 'Malo':
                lampaShort = 'M';
                break;
            case 'No Aplica':
                lampaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Cuñas"
        let cuñas = document.querySelector('input[name="cuñas"]:checked').value;
        let cuñasShort = '';
        switch (cuñas) {
            case 'Bueno':
                cuñasShort = 'B';
                break;
            case 'Malo':
                cuñasShort = 'M';
                break;
            case 'No Aplica':
                cuñasShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Radio Portátil"
        let radioPortatil = document.querySelector('input[name="radio_portatil"]:checked').value;
        let radioPortatilShort = '';
        switch (radioPortatil) {
            case 'Bueno':
                radioPortatilShort = 'B';
                break;
            case 'Malo':
                radioPortatilShort = 'M';
                break;
            case 'No Aplica':
                radioPortatilShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Kit antiderrame"
        let kitAntiderrame = document.querySelector('input[name="kit_antiderrame"]:checked').value;
        let kitAntiderrameShort = '';
        switch (kitAntiderrame) {
            case 'Bueno':
                kitAntiderrameShort = 'B';
                break;
            case 'Malo':
                kitAntiderrameShort = 'M';
                break;
            case 'No Aplica':
                kitAntiderrameShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Cono de seguridad"
        let conoSeguridad = document.querySelector('input[name="cono_seguridad"]:checked').value;
        let conoSeguridadShort = '';
        switch (conoSeguridad) {
            case 'Bueno':
                conoSeguridadShort = 'B';
                break;
            case 'Malo':
                conoSeguridadShort = 'M';
                break;
            case 'No Aplica':
                conoSeguridadShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Botiquín de primeros auxilios"
        let botiquin = document.querySelector('input[name="botiquin"]:checked').value;
        let botiquinShort = '';
        switch (botiquin) {
            case 'Bueno':
                botiquinShort = 'B';
                break;
            case 'Malo':
                botiquinShort = 'M';
                break;
            case 'No Aplica':
                botiquinShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "Gata Hidráulica"
        let gataHidraulica = document.querySelector('input[name="gata_hidraulica"]:checked').value;
        let gataHidraulicaShort = '';
        switch (gataHidraulica) {
            case 'Bueno':
                gataHidraulicaShort = 'B';
                break;
            case 'Malo':
                gataHidraulicaShort = 'M';
                break;
            case 'No Aplica':
                gataHidraulicaShort = 'NA';
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

            extintorShort, 
            juegoLlavesShort, 
            fajaRemolcadoraShort, 
            circulinaShort, 
            trianguloSeguridadShort, 
            cintaReflectivaShort, 
            picoShort, 
            lampaShort, 
            cuñasShort, 
            radioPortatilShort, 
            kitAntiderrameShort, 
            conoSeguridadShort, 
            botiquinShort, 
            gataHidraulicaShort,



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

    extintor, 
    juegoLlaves, 
    fajaRemolcadora, 
    circulina, 
    trianguloSeguridad, 
    cintaReflectiva, 
    pico, 
    lampa, 
    cuñas, 
    radioPortatil, 
    kitAntiderrame, 
    conoSeguridad,
    botiquin, 
    gataHidraulica,


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
        pdf.text('B', 238, 289);
    } else if (cilindrosArticulacion === 'M') {
        pdf.text('M', 254, 289);
    } else if (cilindrosArticulacion === 'NA') {
        pdf.text('A', 271, 289);
    }

    // Pala de Carga
    if (palaCarga === 'B') {
        pdf.text('B', 238, 303.5);
    } else if (palaCarga === 'M') {
        pdf.text('M', 254, 303.5);
    } else if (palaCarga === 'NA') {
        pdf.text('A', 271, 303.5);
    }

    // Comandos
    if (comandos === 'B') {
        pdf.text('B', 238, 319);
    } else if (comandos === 'M') {
        pdf.text('M', 254, 319);
    } else if (comandos === 'NA') {
        pdf.text('A', 271, 319);
    }

    // Pasadores de Cilindros
    if (pasadoresCilindros === 'B') {
        pdf.text('B', 238, 334);
    } else if (pasadoresCilindros === 'M') {
        pdf.text('M', 254, 334);
    } else if (pasadoresCilindros === 'NA') {
        pdf.text('A', 271, 334);
    }

    // Flexibles
    if (flexibles === 'B') {
        pdf.text('B', 238, 347.5);
    } else if (flexibles === 'M') {
        pdf.text('M', 254, 347.5);
    } else if (flexibles === 'NA') {
        pdf.text('A', 271, 347.5);
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
        pdf.text('B', 238, 462);
    } else if (luces === 'M') {
        pdf.text('M', 254, 462);
    } else if (luces === 'NA') {
        pdf.text('A', 271, 462);
    }

    // Bocina
    if (bocina === 'B') {
        pdf.text('B', 238, 476);
    } else if (bocina === 'M') {
        pdf.text('M', 254, 476);
    } else if (bocina === 'NA') {
        pdf.text('A', 271, 476);
    }

    // Baliza
    if (baliza === 'B') {
        pdf.text('B', 238, 491);
    } else if (baliza === 'M') {
        pdf.text('M', 254, 491);
    } else if (baliza === 'NA') {
        pdf.text('A', 271, 491);
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
        pdf.text('B', 238, 521);
    } else if (motor === 'M') {
        pdf.text('M', 254, 521);
    } else if (motor === 'NA') {
        pdf.text('A', 271, 521);
    }

    // Radiador
    if (radiador === 'B') {
        pdf.text('B', 238, 535);
    } else if (radiador === 'M') {
        pdf.text('M', 254, 535);
    } else if (radiador === 'NA') {
        pdf.text('A', 271, 535);
    }

    // Mangueras
    if (mangueras === 'B') {
        pdf.text('B', 238, 549);
    } else if (mangueras === 'M') {
        pdf.text('M', 254, 549);
    } else if (mangueras === 'NA') {
        pdf.text('A', 271, 549);
    }

    // Correas
    if (correas === 'B') {
        pdf.text('B', 238, 563);
    } else if (correas === 'M') {
        pdf.text('M', 254, 563);
    } else if (correas === 'NA') {
        pdf.text('A', 271, 563);
    }

    // Sistema Eléctrico
    if (sistemaElectrico === 'B') {
        pdf.text('B', 238, 577);
    } else if (sistemaElectrico === 'M') {
        pdf.text('M', 254, 577);
    } else if (sistemaElectrico === 'NA') {
        pdf.text('A', 271, 577);
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
        pdf.text('B', 475, 318);
    } else if (asiento === 'M') {
        pdf.text('M', 493, 318);
    } else if (asiento === 'NA') {
        pdf.text('A', 513, 318);
    }


    //completar
    // Extintor 8kg minimo
    if (extintor === 'B') {
        pdf.text('B', 475, 349);
    } else if (extintor === 'M') {
        pdf.text('M', 493, 349);
    } else if (extintor === 'NA') {
        pdf.text('A', 513, 349);
    }

    // Juego de llaves
    if (juegoLlaves === 'B') {
        pdf.text('B', 475, 364);
    } else if (juegoLlaves === 'M') {
        pdf.text('M', 493, 364);
    } else if (juegoLlaves === 'NA') {
        pdf.text('A', 513, 364);
    }

    // Faja remolcadora
    if (fajaRemolcadora === 'B') {
        pdf.text('B', 475, 378);
    } else if (fajaRemolcadora === 'M') {
        pdf.text('M', 493, 378);
    } else if (fajaRemolcadora === 'NA') {
        pdf.text('A', 513, 378);
    }

    // Circulina
    if (circulina === 'B') {
        pdf.text('B', 475, 393);
    } else if (circulina === 'M') {
        pdf.text('M', 493, 393);
    } else if (circulina === 'NA') {
        pdf.text('A', 513, 393);
    }

    // Triángulo de Seguridad
    if (trianguloSeguridad === 'B') {
        pdf.text('B', 475, 407);
    } else if (trianguloSeguridad === 'M') {
        pdf.text('M', 493, 407);
    } else if (trianguloSeguridad === 'NA') {
        pdf.text('A', 513, 407);
    }

    // Cinta reflectiva
    if (cintaReflectiva === 'B') {
        pdf.text('B', 475, 422);
    } else if (cintaReflectiva === 'M') {
        pdf.text('M', 493, 422);
    } else if (cintaReflectiva === 'NA') {
        pdf.text('A', 513, 422);
    }

    // Pico
    if (pico === 'B') {
        pdf.text('B', 475, 436);
    } else if (pico === 'M') {
        pdf.text('M', 493, 436);
    } else if (pico === 'NA') {
        pdf.text('A', 513, 436);
    }

    // Lampa
    if (lampa === 'B') {
        pdf.text('B', 475, 450);
    } else if (lampa === 'M') {
        pdf.text('M', 493, 450);
    } else if (lampa === 'NA') {
        pdf.text('A', 513, 450);
    }

    // Cuñas
    if (cuñas === 'B') {
        pdf.text('B', 475, 465);
    } else if (cuñas === 'M') {
        pdf.text('M', 493, 465);
    } else if (cuñas === 'NA') {
        pdf.text('A', 513, 465);
    }

    // Radio Portátil
    if (radioPortatil === 'B') {
        pdf.text('B', 475, 479);
    } else if (radioPortatil === 'M') {
        pdf.text('M', 493, 479);
    } else if (radioPortatil === 'NA') {
        pdf.text('A', 513, 479);
    }

    // Kit antiderrame
    if (kitAntiderrame === 'B') {
        pdf.text('B', 475, 494);
    } else if (kitAntiderrame === 'M') {
        pdf.text('M', 493, 494);
    } else if (kitAntiderrame === 'NA') {
        pdf.text('A', 513, 494);
    }

    // Cono de seguridad
    if (conoSeguridad === 'B') {
        pdf.text('B', 475, 508);
    } else if (conoSeguridad === 'M') {
        pdf.text('M', 493, 508);
    } else if (conoSeguridad === 'NA') {
        pdf.text('A', 513, 508);
    }

    // Botiquín de primeros auxilios
    if (botiquin === 'B') {
        pdf.text('B', 475, 523);
    } else if (botiquin === 'M') {
        pdf.text('M', 493, 523);
    } else if (botiquin === 'NA') {
        pdf.text('A', 513, 523);
    }

    // Gata Hidráulica
    if (gataHidraulica === 'B') {
        pdf.text('B', 475, 538);
    } else if (gataHidraulica === 'M') {
        pdf.text('M', 493, 538);
    } else if (gataHidraulica === 'NA') {
        pdf.text('A', 513, 538);
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
