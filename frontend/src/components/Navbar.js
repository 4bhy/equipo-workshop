import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="flex justify-between px-5 py-1 items-center">
                <div class="pt-2 relative ml-8 text-gray-600">
                    <input class="border-2 rounded-3xl border-gray-300 bg-white h-10 px-5 pr-16 text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="flex items-center">
                    <ul class="flex items-center space-x-6">
                        <li class="font-semibold text-gray-700">
                            <i class="fa fa-bell text-gray-400" aria-hidden="true"></i>
                        </li>
                        <li class="font-semibold text-gray-700"><i class="fa fa-cog text-gray-400" aria-hidden="true"></i></li>
                        <li>
                            <i class="fa fa-sticky-note text-gray-400" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i class="fa fa-bullhorn text-gray-400" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i class="fa fa-user text-gray-400" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar