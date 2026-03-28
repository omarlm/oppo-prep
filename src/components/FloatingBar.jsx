import PropTypes from 'prop-types'
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react'

const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
}

const ProgressRing = ({ percent, checked, size = 44 }) => {
    const viewBox = 36
    const r = 15
    const circumference = 2 * Math.PI * r

    return (
        <div
            className="relative flex shrink-0 items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg
                className="-rotate-90"
                style={{ width: size, height: size }}
                viewBox={`0 0 ${viewBox} ${viewBox}`}
            >
                <circle
                    cx="18"
                    cy="18"
                    r={r}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-slate-100"
                />
                <circle
                    cx="18"
                    cy="18"
                    r={r}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={`${(percent / 100) * circumference} ${circumference}`}
                    className={`transition-all duration-500 ease-out ${
                        checked ? 'text-emerald-500' : 'text-indigo-500'
                    }`}
                />
            </svg>
            <span className="absolute text-[11px] font-bold text-slate-700">
                {Math.round(percent)}%
            </span>
        </div>
    )
}

ProgressRing.propTypes = {
    percent: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
    size: PropTypes.number,
}

const TimerControls = ({ timer, timerMinutes }) => {
    if (!timerMinutes) return null

    return (
        <div className="flex items-center gap-2">
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
                    ? 'Tiempo agotado'
                    : formatTime(timer.timeLeft)}
            </span>
            <div className="flex items-center">
                {!timer.isRunning && !timer.isExpired && (
                    <button
                        type="button"
                        onClick={timer.start}
                        className="rounded-md p-1.5 text-slate-400 active:bg-slate-100 hover:text-indigo-600"
                        aria-label="Iniciar"
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
                >
                    <RotateCcw className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    )
}

TimerControls.propTypes = {
    timer: PropTypes.object.isRequired,
    timerMinutes: PropTypes.number.isRequired,
}

const VerifyButton = ({ allAnswered, checked, onCheck, compact }) => {
    if (checked) return null

    return (
        <button
            type="button"
            onClick={onCheck}
            disabled={!allAnswered}
            className={`flex shrink-0 items-center justify-center gap-1.5 rounded-xl text-sm font-semibold text-white transition-all ${
                allAnswered
                    ? 'bg-indigo-600 shadow-md shadow-indigo-200 hover:bg-indigo-500 active:scale-[0.97]'
                    : 'cursor-not-allowed bg-slate-300'
            } ${compact ? 'w-full px-3 py-2.5' : 'px-4 py-3'}`}
            aria-label="Verificar respuestas"
        >
            <CheckCircle className="h-4 w-4" />
            {compact ? (
                <span>Verificar</span>
            ) : (
                <span className="hidden min-[400px]:inline">Verificar</span>
            )}
        </button>
    )
}

VerifyButton.propTypes = {
    allAnswered: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
    compact: PropTypes.bool,
}

/* ── Bottom layout ── */
const BottomBar = (props) => {
    const { answeredCount, totalCount, checked, timer, timerMinutes } = props
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
                <div className="flex items-center gap-3 px-4 py-3">
                    <ProgressRing percent={progressPercent} checked={checked} />
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-800">
                            {checked
                                ? 'Test completado'
                                : `${answeredCount} de ${totalCount}`}
                        </p>
                        {!checked && (
                            <TimerControls
                                timer={timer}
                                timerMinutes={timerMinutes}
                            />
                        )}
                    </div>
                    <VerifyButton {...props} />
                </div>
            </div>
        </div>
    )
}

/* ── Right sidebar layout ── */
const RightBar = (props) => {
    const { answeredCount, totalCount, checked, timer, timerMinutes } = props
    const progressPercent =
        totalCount > 0 ? (answeredCount / totalCount) * 100 : 0

    return (
        <div className="no-print fixed right-5 top-1/2 z-40 w-48 -translate-y-1/2">
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur-xl">
                <div className="flex flex-col items-center gap-3 px-4 py-5">
                    <ProgressRing
                        percent={progressPercent}
                        checked={checked}
                        size={64}
                    />
                    <p className="text-sm font-semibold text-slate-800">
                        {checked
                            ? 'Test completado'
                            : `${answeredCount} de ${totalCount}`}
                    </p>
                    {!checked && (
                        <TimerControls
                            timer={timer}
                            timerMinutes={timerMinutes}
                        />
                    )}
                    <VerifyButton {...props} compact />
                </div>
            </div>
        </div>
    )
}

const FloatingBar = ({ position = 'bottom', ...props }) => {
    return position === 'right' ? (
        <RightBar {...props} />
    ) : (
        <BottomBar {...props} />
    )
}

FloatingBar.propTypes = {
    position: PropTypes.oneOf(['bottom', 'right']),
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
