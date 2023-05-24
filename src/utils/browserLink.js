import { Browser } from '@capacitor/browser'

export default async function browserLink(url) {
    await Browser.open({ url, windowName: '_system' })
}
