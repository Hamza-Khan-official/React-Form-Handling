import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, placeholder, type, ONCHANGE }) => {
  return (

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>{label}</label>
          <input onChange={ONCHANGE} type={type} placeholder={placeholder} />
        </div>

      </form>

  )
}

export default Input
