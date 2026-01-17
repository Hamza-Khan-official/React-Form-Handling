import React from 'react'
import styles from './Input__.module.css'

const Input = ({ label, placeholder, type, ONCHANGE, value }) => {
  return (

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>{label}</label>
          <input onChange={ONCHANGE} type={type} placeholder={placeholder} value={value} />
        </div>

      </form>

  )
}

export default Input
