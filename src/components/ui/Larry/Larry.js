import Sonar from './_files/sonar.svg'
import Shopping from './_files/shopping.svg'
import Exchanging from './_files/exchanging.svg'
import Teamwork from './_files/teamwork.svg'

export default function Larry({ svgId }) {
    switch (svgId) {
        case 'sonar':
            return <Sonar />
        case 'shopping':
            return <Shopping />
        case 'exchanging':
            return <Exchanging />
        case 'teamwork':
            return <Teamwork />
        default:
            return ''
    }
}
