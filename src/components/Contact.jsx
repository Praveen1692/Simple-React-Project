import React from 'react'

const contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder='abc' />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder='abc@gmail.com' />
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder='Tell us about your Query..' />
          </div>
          <button type="submit">Submit</button>

        </form>
      </main>
     
      </div>
  )
}

export default contact