import classnames from 'classnames'

const Key = ({ children, value, onClick, width = 40, highlight }) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      // 'transition ease-in-out': isRevealing,
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400':
        !highlight,
      'bg-slate-400 dark:bg-slate-800 text-white': highlight === 'not-found',
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
        highlight === 'correct',
      'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white':
        highlight === 'wrong-position',
    }
  )

  const handleClick = e => {
    onClick(value)
    e.currentTarget.blur()
  }

  const styles = {
    width: `${width}px`,
    height: '58px',
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}

export default Key
