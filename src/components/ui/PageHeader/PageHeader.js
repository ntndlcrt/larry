import Larry from '@/components/ui/Larry'

export default function PageHeader({ svgId, src, title }) {
    return (
        <div className="pt-4 px-2 mb-2 grid grid-cols-5">
            <div className="col-span-3 col-start-2">
                {svgId && <Larry svgId={svgId} />}
            </div>
            <h1 className="text-20 font-medium col-span-5 text-center pb-2 border-b border-gray-200">
                {title}
            </h1>
        </div>
    )
}
