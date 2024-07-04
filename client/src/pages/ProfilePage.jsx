
import React from 'react'
import WeeklyUpdatesContainer from '../components/WeeklyUpdatesContainer'
import Header from '../components/Header'

function ProfilePage() {
  return (
    <div className=' relative w-screen h-[500px] '>
        <img 
            className=' object-fill'
            src= "/backgroundPro.svg"
            alt='background Image' 
        />
        {/* Header */}
        <div className=' absolute top-0 left-[25%] sm:left-0'>
            <Header bgColor=" " textColor="white" />
        </div>
        {/* Profile Header */}
        <div className=' absolute top-[100px] left-[15%] w-[70%] sm:left-0 flex justify-evenly items-center rounded-3xl h-auto sm:w-full bg-stone-100'>
            <div className='w-[200px] bg-cornflowerblue-500 my-16 h-[200px] flex flex-col justify-start items-center rounded-full sm:w-[100px] sm:h-[100px] sm:rounded-[100px] overflow-hidden md:w-[150px] md:h-[150px] md:rounded-[150px]'>
                {/* <img className=' w-full h-full object-fill' src={proImg} alt='Profile Image'/> */}
                <p className='pt-5 md:pt-0 text-13xl md:text-5xl text-white sm:text-lg'>RM</p>
                <button className=' cursor-pointer bg-cornflowerblue-100 text-sm text-stone-200'>Add Profile Photo</button>
            </div>
            <div className=' mx-10 flex flex-col gap-0'>
                <p className='  font-sans font-bold text-19xl text-stone-900'>
                    Rahul Mourya
                </p>
                <p className=' text-sm font-light text-stone-600'>mouryarahul543@gmail.com</p>
            </div>
        </div>


        {/* Profile Edit Container */}
        <div className='absolute top-[450px] sm:top-[375px] sm:gap-1 md:gap-4 left-[15%] w-[70%] sm:left-0 pl-10 rounded-3xl h-auto sm:w-full bg-stone-100'>
            <div className=' flex justify-around gap-96 md:gap-72 sm:gap-10'>
                <p className='  text-3xl font-sans text-stone-700 font-semibold text-start'>Personal Information</p>
                <button className=' bg-stone-100 text-3xl text-cornflowerblue-300 cursor-pointer text-end'>
                    Edit
                </button>
            </div>
            
            <table className='w-full table-fixed'>
              <tbody>
              <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2 w-1/3'>Mobile Number</td>
                <td className='text-lg text-stone-500 py-2'>+91-7262022151</td>
             </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif sm:hidden py-2'>Email Address</td>
                <td className='text-lg text-stone-500 sm:hidden py-2'>mouryarahul543@gmail.com</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>First Name</td>
                <td className='text-lg text-stone-500 py-2'>Rahul</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>Last Name</td>
                <td className='text-lg text-stone-500 py-2'>Mourya</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>Gender</td>
                <td className='text-lg text-stone-500 py-2'>-</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>Date of Birth</td>
                <td className='text-lg text-stone-500 py-2'>-</td>
            </tr>
           </tbody>
           </table>
        </div>


        {/* Booking History */}
        <div className=' absolute top-[820px] sm:top-[770px] sm:gap-1 md:gap-4 left-[15%] w-[70%] sm:left-0 pl-10 rounded-3xl h-auto sm:w-full bg-stone-100'>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            
        </div>

        {/* Footer */}
        <div className=' absolute top-[1100px]'>
        <WeeklyUpdatesContainer
            imageDimensions="/subscribe-section-background@2x.png"
            imageId="/logo.svg"
            thumbnailDimensions="/social-icons.svg"
        />
        </div>
    </div> 
  )
}

export default ProfilePage