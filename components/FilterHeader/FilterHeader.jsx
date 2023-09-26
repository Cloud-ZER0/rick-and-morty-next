import React from 'react'
import styles from './FilterHeader.module.css'
import Link from 'next/link'


export default function FilterHeader() {
  return (
    <>
        <h1>Filter by:</h1>
        <div className={styles.wrapper}>
            <ul className={styles.list_of_sort}>
                <li>
                    <button>name</button>
                </li>
                <li className={styles.btns}>
                    <Link href={'/characters/?status=alive'}>alive</Link>
                    <Link href={'#'}>dead</Link>
                    <Link href={'#'}    >unknow</Link>
                </li>
                <li>
                    <button>species</button>
                </li>
                <li>
                    <button>type</button>
                </li>
                <li>
                    <button>gender</button>
                </li>   
            </ul>
        </div>
    </>
  )
}
