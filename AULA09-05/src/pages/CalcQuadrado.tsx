import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
} from '@ionic/react';

const CalcQuadrado: React.FC = () => {                              //Logica de Programação 
const [lado, setLado] = useState<string>('');                       //Logica de Programação 
const [resultado, setResultado] = useState<number | null>(null);    //Logica de Programação 
  
const calcularArea = () => {
    const valorLado = parseFloat(lado);
    if (!isNaN(valorLado)) {
      setResultado(valorLado * valorLado);
    } else {
      setResultado(null);
    }
};

//Logica de Programação 


return(
//componente ou css ou html

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cálculo da Área</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonInput
              label="Lado do quadrado (m)"
              type="number"
              placeholder="Digite o lado"
              value={lado}
              onIonChange={(e) => setLado(e.detail.value!)}
            />
            <IonButton expand="block" className="ion-margin-top" onClick={calcularArea}>
              Calcular Área
            </IonButton>

            {resultado !== null && (
              <IonText color="primary">
                <h2>Área: {resultado.toFixed(2)} m²</h2>
              </IonText>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>

)

}
export default CalcQuadrado;
