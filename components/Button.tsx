import React, { ButtonHTMLAttributes } from 'react'

const styles = {
  isBlock: '',
  button:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  outlinedButton:
    'border border-blue-500 hover:border-blue-700 text-blue-400 font-bold py-2 px-4 rounded',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined'
  isBlock?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${props.className} ${
        props.variant === 'outlined' ? styles.outlinedButton : styles.button
      }`}
    >
      {props.children}
    </button>
  )
}

export default Button
