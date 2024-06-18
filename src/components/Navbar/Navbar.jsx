import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navbar/Layout.module.css'

function Navbar() {
  return (
    < >
      <nav className={styles.navbar}>
        <Link className={styles.links} to='/home'>Home</Link>
        <Link className={styles.links}  to='/tracker'>Travel tracker</Link>
        <Link className={styles.links}  to='/contact'>Contact Us</Link>
        <Link className={styles.links}  to='/logout'>Logout</Link>
      </nav>
    </>
  )
}

export default Navbar