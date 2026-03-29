import PropTypes from 'prop-types'
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react'

const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
}

const FloatingBar = ({
    answeredCount,
    totalCount,
    allAnswered,
    checked,
    onCheck,
    timer,
    timerMinutes,
}) => {
    const progressPercent =
        totalCount > 0 ? (answeredCount / totalCount) * 100 : 0

    return (
        <div className="no-print fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pb-safe sm:bottom-5 sm:left-1/2 sm:right-auto sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:px-0 sm:pb-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur-xl">
                <div className="h-1 bg-slate-100">
                    <div
                        className={`h-full transition-all duration-500 ease-out ${checked ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                        style={{
                            width: `${checked ? 100 : progressPercent}%`,
                        }}
                    />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                    {/* Left: ring + count + timer in one row */}
                    <div className="flex items-center gap-3">
                        {/* Progress ring */}
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                            <svg
                                className="h-11 w-11 -rotate-90"
                                viewBox="0 0 36 36"
                            >
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="text-slate-100"
                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray={`${progressPercent * 0.9425} 94.25`}
                                    className={`transition-all duration-500 ease-out ${
                                        checked
                                            ? 'text-emerald-500'
                                            : 'text-indigo-500'
                                    }`}
                                />
                            </svg>
                            <span className="absolute text-[11px] font-bold text-slate-700">
                                {Math.round(progressPercent)}%
                            </span>
                        </div>

                        {/* Count */}
                        <p className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                            {checked
                                ? 'Test completado'
                                : `${answeredCount} de ${totalCount}`}
                        </p>

                        {/* Timer */}
                        <div
                            className={`flex items-center gap-1.5 transition-opacity ${timerMinutes ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                        >
                            <span className="hidden h-4 w-px bg-slate-200 min-[400px]:block" />
                            <span
                                className={`font-mono text-xs font-bold tabular-nums ${
                                    timer.isExpired
                                        ? 'text-red-500'
                                        : timer.timeLeft <= 60
                                          ? 'text-amber-500'
                                          : 'text-slate-400'
                                }`}
                                aria-live="polite"
                            >
                                {timer.isExpired
                                    ? 'Fin'
                                    : formatTime(
                                          timerMinutes ? timer.timeLeft : 0
                                      )}
                            </span>
                            {!timer.isRunning && !timer.isExpired && (
                                <button
                                    type="button"
                                    onClick={timer.start}
                                    className="rounded-md p-1.5 text-slate-400 active:bg-slate-100 hover:text-indigo-600"
                                    aria-label="Iniciar"
                                    tabIndex={timerMinutes ? 0 : -1}
                                >
                                    <Play className="h-3.5 w-3.5" />
                                </button>
                            )}
                            {timer.isRunning && (
                                <button
                                    type="button"
                                    onClick={timer.pause}
                                    className="rounded-md p-1.5 text-slate-400 active:bg-slate-100 hover:text-indigo-600"
                                    aria-label="Pausar"
                                >
                                    <Pause className="h-3.5 w-3.5" />
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => timer.reset(timerMinutes)}
                                className="rounded-md p-1.5 text-slate-400 active:bg-slate-100 hover:text-indigo-600"
                                aria-label="Reiniciar"
                                tabIndex={timerMinutes ? 0 : -1}
                            >
                                <RotateCcw className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* Right: verify */}
                    {!checked && (
                        <button
                            type="button"
                            onClick={onCheck}
                            disabled={!allAnswered}
                            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all ${
                                allAnswered
                                    ? 'bg-indigo-600 shadow-md shadow-indigo-200 hover:bg-indigo-500 active:scale-[0.97]'
                                    : 'cursor-not-allowed bg-slate-300'
                            }`}
                            aria-label="Verificar respuestas"
                        >
                            <CheckCircle className="h-4 w-4" />
                            <span className="hidden min-[400px]:inline">
                                Verificar
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

FloatingBar.propTypes = {
    answeredCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    allAnswered: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
    timer: PropTypes.shape({
        timeLeft: PropTypes.number.isRequired,
        isRunning: PropTypes.bool.isRequired,
        isExpired: PropTypes.bool.isRequired,
        start: PropTypes.func.isRequired,
        pause: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }).isRequired,
    timerMinutes: PropTypes.number.isRequired,
}

export default FloatingBar
