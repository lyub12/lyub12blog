import Link from 'next/link'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
        <header className={styles.MainHeader}>
          <h1>lyub12 blogs</h1>
          <div>
            <nav>
              <Link href="/about">about</Link>
              <Link href="/blogs">blogs</Link>
              <Link href="/contact">contact</Link>
            </nav>
            <div>
              <button>login</button>
              <button>register</button>
            </div>
          </div>
        </header>
  )
}

export default Navbar