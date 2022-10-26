import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import {
  mailOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoLinkedin,
} from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar color="primary">
          <IonTitle>App Styles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="container">
          <IonGrid>
            <IonRow>
              <IonCol size-xs="12" size-md="4">
                <IonCard>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                </IonCard>
              </IonCol>
              <IonCol size-md="8">
                <div>
                  <h1 className="ion-text-uppercase">Lindy Hoffman</h1>
                  <p>Personal Stylist</p>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>

          <h2 className="ion-text-center">Contact Me</h2>

          <IonList>
            <IonItem>
              <IonIcon color='danger' className="ion-margin-end" icon={mailOutline}></IonIcon>
              <IonLabel>contact@styledbylindy.com</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon color='success' className="ion-margin-end" icon={logoFacebook}></IonIcon>
              <IonLabel>lindy-hoffman</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon color='tertiary' className="ion-margin-end" icon={logoInstagram}></IonIcon>
              <IonLabel>styledbylindy</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon color='secondary' className="ion-margin-end" icon={logoTwitter}></IonIcon>
              <IonLabel>@styledbylindy</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon color='primary' className="ion-margin-end" icon={logoLinkedin}></IonIcon>
              <IonLabel>lindyhoffman23</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
      <IonFooter className="ion-hide-md-up" collapse="fade">
        <IonButton expand="full" color="secondary">
          Schedule a Consultation
        </IonButton>
      </IonFooter>
    </IonPage>
  )
}

export default Home
