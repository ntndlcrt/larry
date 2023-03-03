import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'

import Home from '@/components/pages/Home'

setupIonicReact({})

const AppShell = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet id="main">
                    <Route path="/" render={() => <Home />} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}

export default AppShell
