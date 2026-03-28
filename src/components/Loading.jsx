export const Loading = () => {
    return (
        <div
            role="status"
            className="flex min-h-[50vh] flex-col items-center justify-center"
        >
            <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-slate-200 border-t-indigo-600" />
            <span className="mt-3 text-sm text-slate-400">Cargando...</span>
        </div>
    )
}
