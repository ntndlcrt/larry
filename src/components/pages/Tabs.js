import { Redirect, Route } from 'react-router-dom'
import {
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
    BsViewList,
    BsCollection,
    BsBoxSeam,
    BsPersonSquare,
} from 'react-icons/bs'

// Feed tabs
import Feed from '@/components/pages/Feed'

// Pages tabs
import PageView from '@/components/pages/PageView'
import PageCreate from '@/components/pages/PageCreate'
import PageEdit from '@/components/pages/PageEdit'

// Collections tabs
import Collections from '@/components/pages/Collections'

// Account tabs
import Account from '@/components/pages/Account'

const Tabs = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/tabs/feed" component={Feed} exact />

                    <Route path="/tabs/pages/:id" component={PageView} />
                    <Route path="/tabs/pages/create" component={PageCreate} />
                    <Route path="/tabs/pages/:id/edit" component={PageEdit} />

                    <Route
                        path="/tabs/collections"
                        component={Collections}
                        exact={true}
                    />

                    <Route
                        path="/tabs/account"
                        render={() => <Account />}
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
                        <BsCollection />
                    </IonTabButton>
                    <IonTabButton tab="pages" href="/tabs/pages">
                        <BsViewList />
                    </IonTabButton>
                    <IonTabButton tab="collections" href="/tabs/collections">
                        <BsBoxSeam />
                    </IonTabButton>
                    <IonTabButton tab="account" href="/tabs/account">
                        <BsPersonSquare />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Tabs
