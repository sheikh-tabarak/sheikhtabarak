
import React from 'react'
import Card from '../components/card'


// const test =  [{test},{yesy}]

export default function Portfolio() {
  return (

    <>







     <div className="grid-cols-1 sm:grid md:grid-cols-4 px-10 ">


      

      

  <Card/>
  <Card/>
  <Card/>
  <Card/>



  

</div>


<nav aria-label="Page navigation example">
  <ul className="list-style-none flex">
    <li>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#"
      >
        Previous
      </a>
    </li>
    <li>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#"
      >
        1
      </a>
    </li>
    <li aria-current="page">
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#"
      >
        2
      </a>
    </li>
    <li>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#"
      >
        3
      </a>
    </li>
    <li>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#"
      >
        Next
      </a>
    </li>
  </ul>
</nav>

    </>
   

  
  )
}
