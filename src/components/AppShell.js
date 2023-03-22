import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import { Raleway } from 'next/font/google'
import { Preferences } from '@capacitor/preferences'
import { useState, useEffect } from 'react'

import Tabs from '@/components/pages/Tabs'
import Onboarding from '@/components/pages/Onboarding'

const raleway = Raleway({
    weights: [400, 500, 600, 700],
    subsets: ['latin'],
    variable: '--font-raleway',
})

setupIonicReact({})

const checkHasOnboarded = async () => {
    const { value } = await Preferences.get({ key: 'hasOnboarded' })
    return value
}

const AppShell = () => {
    const [hasOnboarded, setHasOnboarded] = useState(false)

    useEffect(() => {
        checkHasOnboarded().then((hasOnboarded) => {
            setHasOnboarded(hasOnboarded)
        })
    }, [])

    // Preferences.clear()

    return (
        <IonApp class={raleway.className}>
            <IonReactRouter>
                <IonRouterOutlet id="main">
                    <Route
                        path="/"
                        render={() =>
                            hasOnboarded ? (
                                <Redirect to="/tabs" />
                            ) : (
                                <Redirect to="/onboarding" />
                            )
                        }
                        exact={true}
                    />
                    <Route
                        path="/onboarding"
                        render={() =>
                            hasOnboarded ? (
                                <Redirect to="/tabs" />
                            ) : (
                                <Onboarding />
                            )
                        }
                        exact={true}
                    />
                    <Route path="/tabs" render={() => <Tabs />} exact={true} />
                    <Route render={() => <Tabs />} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}

export default AppShell
