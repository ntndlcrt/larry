import { Redirect, Route } from 'react-router-dom'
import {
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import Feed from '@/components/pages/Feed'
import Collections from '@/components/pages/Collections'

const Tabs = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/tabs/feed" component={Feed} exact />
                    <Route
                        path="/tabs/collections"
                        component={Collections}
                        exact={true}
                    />
                    <Route
                        path="/tabs"
                        render={() => <Redirect to="/tabs/feed" />}
                        exact={true}
                    />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="feed" href="/tabs/feed">
                        <IonLabel>Feed</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="collections" href="/tabs/collections">
                        <IonLabel>Collections</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Tabs
