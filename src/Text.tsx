import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined
}

const Text = React.forwardRef<HTMLElement, TextProps>(function Label(props, ref) {
  const { children, as, className, ...other } = props
  const {
    theme: { text },
  } = useContext(ThemeContext)

  const baseStyle = text.base
  const h1Style = text.h1
  const h2Style = text.h2
  const h3Style = text.h3
  const h4Style = text.h4
  const h5Style = text.h5
  const h6Style = text.h6

  const cls = classNames(
    baseStyle,
    (as === 'h1') && h1Style,
    (as === 'h2') && h2Style,
    (as === 'h3') && h3Style,
    (as === 'h4') && h4Style,
    (as === 'h5') && h5Style,
    (as === 'h6') && h6Style,
    className
  )

  if (as === 'h1') {
    return (
      <h1 className={cls} {...other}>
        {children}
      </h1>
    )
  }

  if (as === 'h2') {
    return (
      <h2 className={cls} {...other}>
        {children}
      </h2>
    )
  }

  if (as === 'h3') {
    return (
      <h3 className={cls} {...other}>
        {children}
      </h3>
    )
  }

  if (as === 'h4') {
    return (
      <h4 className={cls} {...other}>
        {children}
      </h4>
    )
  }

  if (as === 'h5') {
    return (
      <h5 className={cls} {...other}>
        {children}
      </h5>
    )
  }

  if (as === 'h6') {
    return (
      <h6 className={cls} {...other}>
        {children}
      </h6>
    )
  }

  if (as === 'div') {
    return (
      <div className={cls} {...other}>
        {children}
      </div>
    )
  }

  if (as === 'p') {
    return (
      <p className={cls} {...other}>
        {children}
      </p>
    )
  }

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default Text
