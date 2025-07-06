import React from 'react';
import styles from './Certifications.module.css';
import { useEnhancements } from "../../hooks/useEnhancements";
import { useNavigate } from "react-router-dom";

function Certifications() {
    useEnhancements();
    const navigate = useNavigate();

    const imagePaths = [
        "alura/cursoStoredProceduresSQLAlura.png",
        "alura/cursoIntroduccionOCIAlura.png",
        "alura/cursoIntroduccionSQLAlura.png",
        "alura/cursoUXInteligenciaArtificalAlura.png",
        "alura/cursoPythonEstructurasFuncionesExcepcionesAlura.png",
        "alura/cursoPythonPrimerosPasosAlura.png",
        "alura/cursoLandingPageIAAlura.png",
        "alura/certificadoFinalizacionProgramaONE.png",
        "alura/certificadoFormacionInteligenciaArtificalAlura.png",
        "alura/certificadoFormacionJavaSpringAlura.png",
        "alura/certificadoFormacionJavaSpringBootAlura.png",
        "alura/certificadoFormacionJavaPOOAlura.png",
        "alura/certificadoFormacionAprenderPOOJavaAlura.png",
        "alura/certificadoFormacionLogicaJavaScriptAlura.png",
        "alura/certificadoFormacionPrincipianteProgramacionG7ONEAlura.png",
        "alura/cursoSpringAIAlura.png",
        "alura/cursoProductividadChatGPTAlura.png",
        "alura/cursoBuenasPracticasSpringSecurityAlura.png",
        "alura/cursoCrearApiSpringJavaAlura.png",
        "alura/cursoConsumirAPIsAlura.png",
        "alura/cursoSpringPersistenciaDatosAlura.png",
        "alura/cursoIntroduccionSpringBootProgramacionFuncionalAlura.png",
        "alura/cursoHTMLCSS2Alura.png",
        "alura/cursoHTMLCSS1Alura.png",
        "alura/cursoHTMLAlura.png",
        "alura/cursoLogicaProgramacion2Alura.png",
        "alura/cursoLogicaProgramacion1Alura.png",
        "alura/cursoGitHubAlura.png",
        "alura/cursoChatGPTAlura.png",
        "alura/cursoMetodologiaAgileAlura.png",
        "alura/cursoEmprendimientoNegociosAlura.png",
        "alura/insigniaForoHubChallenge.png",
        "alura/insigniaLiterAluraChallenge.png",
        "alura/inisigniaChallengeConversorMonedaAlura.png",
        "alura/insigniaPrincipianteProgramacionAlura.png",
        "platzi/cursoOratoriaPlatzi.png",
        "platzi/cursoSpringSecurityPlatzi.png",
        "platzi/cursoAlgebraPlatzi.png",
        "platzi/cursoFuncionesMatematicasPlatzi.png",
        "platzi/cursoPreparacionEntrevistasTecnicasPlatzi.png",
        "platzi/cursoFundamentosMatematicasPlatzi.png",
        "platzi/cursoPracticoAlgoritmosPlatzi.png",
        "platzi/cursoComplejidadAlgoritmicaPlatzi.png",
        "platzi/cursoIntroduccionAlgoritmosOrdenamientoPlatzi.png",
        "platzi/certificadoRutaBackendJavaPlatzi.png",
        "platzi/cursoIntroduccionDevOpsPlatzi.png",
        "platzi/certificadoRutaDesarrolloBackendJavaPlatzi.png",
        "platzi/cursoSpringDataJPAPlatzi.png",
        "platzi/cursoDespliegueAppsPlatzi.png",
        "platzi/cursoProgramacionFuncionalJavaPlatzi.png",
        "platzi/cursoAvanzadoJavaPlatzi.png",
        "platzi/cursoIntroduccionAWSPlatzi.png",
        "platzi/ceritificadorRutaFundamentosProgramacionPlatzi.png",
        "platzi/cursoExpresionesRegularesPlatzi.png",
        "platzi/cursoPatronesDisenoPlatzi.png",
        "platzi/cursoTestingJavaPlatzi.png",
        "platzi/cursoEstrategiasAprenderInglesPlatzi.png",
        "platzi/cursoInglesA1Platzi.png",
        "platzi/cursoJavaSpringPlatzi.png",
        "platzi/cursoJavaSQLPlatzi.png",
        "platzi/cursoPersistenciaDatosPlatzi.png",
        "platzi/cursoPOOJavaPlatzi.png",
        "platzi/cursoIntroduccionJavaPlatzi.png",
        "platzi/cursoFundamentosBasesDatosPlatzi.png",
        "platzi/cursoIntroduccionBackendPlatzi.png",
        "platzi/cursoIntroduccionAdministracionServidoresPlatzi.png",
        "platzi/cursoIntroduccionRedesPlatzi.png",
        "platzi/cursoTerminalPlatzi.png",
        "platzi/cursoPythonComprenhensionsPlatzi.png",
        "platzi/cursoPythonPlatzi.jpeg",
        "platzi/cursoFundamentosPythonPlatzi.png",
        "platzi/cursoEntornoDesarrolloLinuxPlatzi.png",
        "platzi/cursoEntornoDesarrolloWindowsPlatzi.png",
        "platzi/carreraPreWorkPlatzi.png",
        "platzi/cursoFundamentosIngenieriaSoftwarePlatzi.png",
        "platzi/cursoProgramacionBasicaPlatzi.png",
        "platzi/cursoIntroduccionWebHistoriaInternetPlatzi.png",
        "platzi/cursoHistoriaProgramacionPlatzi.png",
        "platzi/cursoPensamientoLogico3Platzi.png",
        "platzi/cursoPensamientoLogico2Platzi.png",
        "platzi/cursoPensamientoLogico1Platzi.png",
        "coursera/cursoLinuxSQLCoursera.png",
        "coursera/cursoPOOJavaCoursera.png",
        "coursera/cursoGoogleDataAnalyticsCoursera.png",
        "coursera/cursoResolverProblemasCoursera.png",
        "coursera/insigniaDigitalSenatecCoursera.png"
    ];

    return (
        <main className={styles.main}>
            <div className={styles.certifications}>
                <div className={styles.institutionCertifications}>
                    {imagePaths.map((path, index) => (
                        <img
                            key={index}
                            className={`${styles.certificationImage} fullscreenImage`}
                            src={`/images/certifications/${path}`}
                            alt={`Certificación ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Certifications;
