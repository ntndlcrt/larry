import {
    differenceInHours,
    differenceInDays,
    differenceInMonths,
    formatDistanceToNow,
} from 'date-fns'
import { fr } from 'date-fns/locale'

export default function formatTimestamp(timestamp) {
    const currentDate = new Date()
    const date = new Date(timestamp)

    const hoursDiff = differenceInHours(currentDate, date)
    if (hoursDiff < 24) {
        return 'Il y a ' + formatDistanceToNow(date, { locale: fr })
    }

    const daysDiff = differenceInDays(currentDate, date, { locale: fr })
    if (daysDiff < 30) {
        return `Il y a ${daysDiff} jour(s)`
    }

    const monthsDiff = differenceInMonths(currentDate, date, { locale: fr })
    return `Il y a ${monthsDiff} mois`
}
