import React from 'react'

const BottomCards = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
                <div className='relative block rounded-sm border-t-4 w-60 border-blue-500 p-4 shadow-xl leading-7'>
                    <p className=''>Primary Physician:</p>
                    <p className='text-sm text-gray-500'>TEST ONLY</p>
                    <p>Primary Location</p>
                    <p className='text-sm text-gray-500'>EBS Demo Facility -35</p>
                    <p>Referred by:</p>
                    <p className='text-sm text-gray-500'>Not Provided</p>
                    <div className='flex flex-row justify-between'>
                        <p>Last Visit</p>
                        <p className='text-sm text-gray-500'>15-Nov 2019</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>No of Visit</p>
                        <p>7</p>
                    </div>
                    <p>(in last 12 months)</p>
                    <div className='flex flex-row justify-between'>
                        <p>No of hospitalizationst</p>
                        <p>0</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='text-red-500 font-bold'>Readmissions :</p>
                        <p>0</p>
                    </div>

                </div>
                <div className='relative block rounded-sm border-t-4 w-60 border-green-500 p-4 shadow-xl leading-7'>
                    <p className=''>Condition:</p>
                    <p className='text-sm text-gray-500'>Heart Failure, Hypertension, Ischemic, Heart Disease</p>
                    <p>Habits</p>
                    <p className='text-sm text-gray-500'>Smoking</p>
                    <p>Vitals</p>
                    <p className='text-sm text-gray-500'>BMI: NA, Systolic/Diastolic, 127/84, Glucose NA, O@ Saturation NA</p>
                    <div className='flex flex-row justify-between'>
                        <p>No of Visit</p>
                        <p>7</p>
                    </div>
                </div>
                <div className='relative block rounded-sm border-t-4 w-60 border-yellow-500 p-4 shadow-xl leading-7'>
                    <p className=''>Allergy:</p>
                    <p className='text-sm text-gray-500'>Env(Fungicide), Food (Egg), Food (Tree Nut)</p>
                    <p>Medication</p>
                    <p className='text-sm text-gray-500'>DIA-EZE</p>
                    <p>Immunization:</p>
                    <p className='text-sm text-gray-500'>1122 (dtp)</p>

                </div>
                <div className='relative block rounded-sm border-t-4 w-60 border-red-500 p-4 shadow-xl leading-7'>
                    <p className=''>Programs:</p>
                    <p className='text-sm text-gray-500'>Remote Monitoring, Diseade Management Program</p>
                    <p>Service Category</p>
                    <p className='text-sm text-gray-500'>High Acuity, Straight, Medicare</p>
                    <p>Measures:</p>
                    <p className='text-sm text-gray-500'>Adult Acess to Preventive/Ambulatory Health Services ALL, Adult BMI Assessment, Controlling High Blood Pressure with 18-59 years of age</p>
                </div>
            </div>
        </div>
    )
}

export default BottomCards