import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer class="bg-[#35297B]">
    <div class="w-full">

    <div class="px-4 py-6 md:flex md:items-center md:justify-between">
        <span class="text-sm text-white dark:text-gray-300 sm:text-center">© 2023 <Link target="_blank" to="https://www.linkedin.com/in/tasneem-alluhimi-a45541215/">Tasneem Alluhimi</Link>. All Rights Reserved.
        </span>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer