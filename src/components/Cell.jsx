import classnames from 'classnames'

const Cell = ({ value, highlight }) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !highlight,
      'border-black dark:border-slate-100': value && !highlight,
      'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        highlight === 'not-found',
      'correct shadowed bg-green-500 text-white border-green-500':
        highlight === 'correct',
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        highlight === 'wrong-position',
    }
  )
  return (
    <div className={classes}>
      <div className="letter-container">{value}</div>
    </div>
  )
}

export default Cell
