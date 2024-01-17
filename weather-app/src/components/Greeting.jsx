import React from 'react'

export default function Greeting() {

    let time = new Date().getHours();
    let saluto =''

    if(time > 0 && time < 12) {
        saluto = 'Good Morning!'
    } else if (time > 12 && time < 18) {
        saluto = 'Good Afternoon!'
    } else {
        saluto = 'Good Evening!'
    }
  return (
    <h2 className='my-5'>{saluto} Find out here if you really need an umbrella</h2>
  )
}
