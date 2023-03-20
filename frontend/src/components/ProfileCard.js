import React from 'react'
import BottomCards from './BottomCards'

const ProfileCard = () => {
    return (
        <div className='h-auto gap-y-8 items-center'>
            <div className="flex justify-center lg:justify-start sm:justify-center h-auto">
                <div className="flex flex-col items-center lg:flex-row md:flex-row sm:flex-col lg:w-full md:w-full sm:w-full shadow-xl p-2 lg:flex-1 md:flex-1 sm:flex h-auto">
                    <div className="rounded-xl p-2 w-auto">
                        <div className="grid grid-cols-1 gap-x-0 lg:grid-cols-12">
                            <div className="col-span-2 lg:col-span-2">
                                <div className="flex items-center justify-center h-14 w-24 lg:h-24 lg:w-24 rounded-3xl p-2">
                                    <div className="relative inline-block w-24 h-24 rounded-full bg-gray-200 text-white flex items-center justify-center">
                                        <i className="fas fa-user-circle text-8xl"></i>
                                        <div className="absolute bottom-0 mb-2 left-1/2 transform -translate-x-1/2 mb-1 bg-transparent rounded-full w-6 h-6 flex items-center justify-center">
                                            <i className="fas fa-video text-blue-500"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-10 lg:col-span-9">
                                <div className="flex flex-col items-center lg:flex-row lg:items-baseline justify-between text-center lg:text-left">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-bold text-sky-500">XYZ User</h2>
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center bg-orange-600 p-2 h-9 w-9 m-1 rounded">
                                                <i className="fas fa-pen text-white"></i>
                                            </div>
                                            <div className="flex items-center justify-center bg-orange-600 p-2 h-9 w-2 rounded">
                                                <i className="fas fa-ellipsis-v text-white"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between lg:justify-end">
                                        <div className="flex items-center rounded-3xl h-6 p-2 mr-2 bg-sky-500">
                                            <i className="fas fa-plus text-white"></i>
                                            <p className="ml-2 font-semibold text-white">Chart</p>
                                        </div>
                                        <div className="flex items-center rounded-3xl h-6 p-2 mr-2 bg-sky-500">
                                            <i className="fas fa-plus text-white"></i>
                                            <p className="ml-2 font-semibold text-white">Enroll</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center lg:text-left flex flex-col lg:flex-row lg:items-center">
                                    <div className="flex items-center lg:mr-6">
                                        <i className="fa fa-mars mr-2" aria-hidden="true"></i>
                                        <p className="font-semibold text-black">Male</p>
                                        <p className="mt-1 ml-2 text-xs text-black font-bold">DOB:</p>
                                        <p className="ml-1">01-Jan-87678</p>
                                        <p className="ml-1">(42 Years)</p>
                                    </div>
                                </div>
                                <div className="mt-2 text-center lg:text-left flex items-center">
                                    <div className="flex items-center">
                                        <i className="fa fa-mars mr-2" aria-hidden="true"></i>
                                        <p className="font-semibold text-black">Ethinicity</p>
                                        <p className="mt-1 ml-2 text-xs text-black font-bold">:</p>
                                        <p className='ml-1'> Caucasian</p>
                                        <p className='ml-1'> (European)</p>
                                    </div>
                                </div>
                                <div className="mt-2 text-center lg:text-left flex items-center">
                                    <div className="flex items-center">
                                        <i className="fa fa-mars mr-2" aria-hidden="true"></i>
                                        <p className="font-semibold text-black">Account</p>
                                        <p className="mt-1 ml-2 text-xs text-black font-bold">#:</p>
                                        <p className='ml-1'>14251586789</p>
                                        <p className="mt-1 ml-2 text-xs text-black font-bold">MRN:-</p>
                                        <p className='ml-1'> (Facility- 35)</p>
                                    </div>
                                </div>

                                <div className='flex flex-1'>
                                    <div className=" p-1 w-auto border border-blue-600">
                                        <div className=" bg-white rounded-lg shadow w-auto">
                                            <div className="bg-blue-500 text-white h-6 px-4">
                                                <h2 className="text-sm font-semibold">SDDH</h2>
                                            </div>
                                            <div className="border-b h-10 px-4 flex gap-2 mt-1 bg-slate-300">
                                                <h3 className="text-sm font-semibold">This Year</h3>
                                                <h3 className="text-sm font-semibold">0.57</h3>
                                            </div>
                                            <div className="border-b h-10 px-4 flex gap-x-2 mt-1 bg-slate-300">
                                                <h3 className="text-sm font-semibold">Last Year</h3>
                                                <h3 className="text-sm font-semibold">0.60</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" p-1 w-auto border border-blue-600">
                                        <div className=" bg-white rounded-lg shadow w-auto">
                                            <div className="bg-blue-500 text-white h-6 px-4">
                                                <h2 className="text-sm font-semibold">SDDH</h2>
                                            </div>
                                            <div className="border-b h-20 px-4 flex gap-2 mt-1 bg-slate-300">
                                                <svg width="100" height="100">
                                                    <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2" />
                                                    <text x="50" y="57" font-size="28" text-anchor="middle">3</text>
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" p-1 w-auto border border-blue-600">
                                        <div className=" bg-white rounded-lg shadow w-auto">
                                            <div className="bg-blue-500 text-white h-6 px-4">
                                                <h2 className="text-sm font-semibold">SDDH</h2>
                                            </div>
                                            <div className="border-b h-10 px-4 flex gap-2 mt-1 bg-slate-300">
                                                <h3 className="text-sm font-semibold">This Year</h3>
                                                <h3 className="text-sm font-semibold">0.57</h3>
                                            </div>
                                            <div className="border-b h-10 px-4 flex gap-x-2 mt-1 bg-slate-300">
                                                <h3 className="text-sm font-semibold">Last Year</h3>
                                                <h3 className="text-sm font-semibold">0.60</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" p-1 w-auto border border-blue-600">
                                        <div className=" bg-white rounded-lg shadow w-auto">
                                            <div className="bg-blue-500 text-white h-6 px-4">
                                                <h2 className="text-sm font-semibold">SDDH</h2>
                                            </div>
                                            <div className="border-b h-10 px-4 flex gap-2 mt-1 bg-slate-300">
                                                <h3 className="text-sm font-semibold">This Year</h3>
                                                <h3 className="text-sm font-semibold">0.57</h3>
                                            </div>
                                            <div className="border-b h-10 px-4 flex gap-x-2 mt-1 bg-slate-300">
                                                <h3 className="text-sm font-semibold">Last Year</h3>
                                                <h3 className="text-sm font-semibold">0.60</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-1'>
                        <div>
                            <div className='rounded-xl p-2 m-2'>
                                <div className='flex flex-row'>
                                    <i class="fas fa-map-marker-alt text-sm mt-1 mr-1"></i>
                                    <p className='text-sm font-medium text-gray-800 leading-7'>No Details Provided</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-sm font-medium text-gray-800 leading-7'>Primary :</p>
                                    <p className='text-sm font-medium text-gray-500 leading-7'>+91 98765434</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-sm font-medium text-gray-800 leading-7'>Emergency : </p>
                                    <p className='text-sm font-medium text-gray-500 leading-7'>+91 9876543456</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-sm font-medium text-gray-800 leading-7'>Policy Number : </p>
                                    <p className='text-sm font-medium text-gray-500 leading-7'>8009879876</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-sm font-medium text-gray-800 leading-7'>Insurer :</p>
                                    <p className='text-sm font-medium text-gray-500 leading-7'>Medicare</p>
                                </div>
                            </div>
                            <div className='rounded-sm p-2 border-2 border-neutral-300'>
                                <ul className="flex flex-wrap list-disc ml-3 text-slate-500">
                                    <li className='text-black flex-auto w-1/3'>Item 1</li>
                                    <li className=' text-black flex-auto w-1/3'>Item 2</li>
                                    <li className='text-black flex-auto w-1/3'>Item 3</li>
                                    <li className='text-black flex-auto w-1/3'>Item 4</li>
                                    <li className='text-black flex-auto w-1/3'>Item 5</li>
                                    <li className='text-black flex-auto w-1/3'>Item 6</li>
                                    <li className='text-black flex-auto w-1/3'>Item 7</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-48 gap-y-10 m-2">
                            <div className="mt-2 bg-white rounded-lg shadow ">
                                <div className="bg-blue-500 text-white h-6 flex flex-row gap-2 px-1 justify-between">
                                    <i class="fa fa-briefcase mt-1" aria-hidden="true"></i>
                                    <h2 className="text-sm font-semibold">Recent Activity</h2>
                                    <i class="fas fa-plus text-white mt-1"></i>
                                </div>
                                <div className="border-b flex flex-col border-blue-500 h-12">
                                    <h3 className="text-sm font-semibold text-gray-500 ml-4">Follow Up</h3>
                                </div>
                            </div>
                            <div className="mt-2 bg-white rounded-lg shadow">
                                <div className="bg-blue-500 text-white h-6 flex flex-row gap-2 px-1 justify-between">
                                    <i class="fa fa-sticky-note mt-1" aria-hidden="true"></i>
                                    <h2 className="text-sm font-semibold">Latest Notes</h2>
                                    <i className="fas fa-plus text-white mt-1"></i>
                                </div>
                                <div className="border-b h-16 flex flex-row justify-between items-center border-blue-500 py-14 px-2 overflow-x-auto w-auto">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    <span className='text-sm'>5. Types of Wellness Exam: IPPE- Welcome to Medicare- Select G042, G4021, G0440, G0505..</span>
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomCards />
        </div>
    )
}

export default ProfileCard
