import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import { Raleway } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import Tabs from '@/components/pages/Tabs'
import Onboarding from '@/components/pages/Onboarding'
import Login from '@/components/pages/Login'

const raleway = Raleway({
    weights: [400, 500, 600, 700],
    subsets: ['latin'],
    variable: '--font-raleway',
})

setupIonicReact({})

const AppShell = () => {
    const [hasOnboarded, setHasOnboarded] = useState()
    const user = useUser()
    const supabase = useSupabaseClient()

    const checkHasOnboarded = async () => {
        if (user) {
            let { data, error } = await supabase
                .from('profiles')
                .select('has_onboarded')
                .eq('id', user.id)

            if (error) {
                return false
            } else {
                return data[0].has_onboarded
            }
        }

        return false
    }

    useEffect(() => {
        checkHasOnboarded().then((hasOnboarded) => {
            setHasOnboarded(hasOnboarded === true)
        })
    }, [])

    return (
        <IonApp class={raleway.className}>
            <IonReactRouter>
                <IonRouterOutlet id="main">
                    <Route
                        path="/"
                        render={() =>
                            user ? (
                                hasOnboarded ? (
                                    <Redirect to="/tabs" />
                                ) : (
                                    <Redirect to="/onboarding" />
                                )
                            ) : (
                                <Redirect to="/login" />
                            )
                        }
                        exact={true}
                    />
                    <Route
                        path="/onboarding"
                        render={() =>
                            user ? (
                                hasOnboarded ? (
                                    <Redirect to="/tabs" />
                                ) : (
                                    <Onboarding />
                                )
                            ) : (
                                <Redirect to="/login" />
                            )
                        }
                        exact={true}
                    />
                    <Route
                        path="/tabs"
                        render={() =>
                            user ? <Tabs /> : <Redirect to="/login" />
                        }
                        exact={true}
                    />
                    <Route
                        path="/login"
                        render={() => <Login />}
                        exact={true}
                    />
                    <Route
                        render={() =>
                            user ? <Tabs /> : <Redirect to="/login" />
                        }
                    />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}

export default AppShell
