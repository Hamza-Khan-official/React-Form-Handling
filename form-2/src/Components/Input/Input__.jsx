import React from 'react'
import styles from './Input__.module.css'

const Input = ({ label, placeholder, type, ONCHANGE, value }) => {
  return (

    <div className={styles.inputGroup}>
      <label className={styles.labelfordesign}>{label}</label>
      <input onChange={ONCHANGE} type={type} placeholder={placeholder} value={value} />
    </div>


  )
}

export default Input
