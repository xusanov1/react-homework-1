import './Incredible.css';


function Incredible() {
  return (
    <section className='incredible'>
      <div className="container">
        <h1 className="incredible-title">Incredible deals, <br /> right to your inbox!</h1>
        <div className="inputs">
        <input type="text" className='incredible-input' placeholder='Placeholder'/>
        <select className='incredible-select'>
          <option></option>
          <option value="something">something</option>
        </select>
        </div>
        <p className='incredible-p'>By joining you agree to our Terms and Conditions</p>
      </div>
    </section>
      
  )
}

export default Incredible