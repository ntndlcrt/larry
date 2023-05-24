import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function FormLoader() {
    return (
        <>
            <Skeleton height={160} className="mb-5" />
            <Skeleton height={80} className="mb-2" />
            <Skeleton height={32} className="mb-2" />
            <Skeleton height={32} className="mb-2" />
            <Skeleton height={32} className="mb-2" />
        </>
    )
}
