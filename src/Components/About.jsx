import React from 'react'
import me from './dummy.jpg'
import './About.css'

export default function About() {
  return (
    <div id="about" style={{minHeight:"100vh",backgroundColor:"black",color:"white"}}>
      <div className='container2'>
        <div className='content2'>
          <h1>About</h1>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente velit mollitia officia, ipsam magni, consequuntur molestias consequatur error repellat natus id quia explicabo quidem aperiam, tempora nobis recusandae? Deserunt vel delectus, ipsa, aperiam reprehenderit totam vitae enim eos labore, dolorum ea earum! Debitis nulla pariatur expedita cupiditate nihil accusamus autem eos facere saepe, cum molestiae non! Omnis quaerat libero nam reiciendis nesciunt reprehenderit, voluptas mollitia. </p>
            <p>Voluptatem eveniet velit quisquam sequi, ipsa cupiditate enim minus sed voluptatibus voluptas. Maiores neque officiis commodi! Quod earum omnis perferendis repudiandae eum tenetur culpa similique eaque id, delectus accusantium. Inventore reiciendis voluptates doloribus aliquid?</p>
            <a href="https://github.com/Chdh11/Portfolio/raw/main/Chhavi_Dhankhar_Resume.pdf" download="Chhavi_Dhankhar_Resume.pdf"><button><span>Download Resume</span></button></a>
        </div>
        <div className='pic2'>
          <img src={me}/>
        </div>
      </div>
    </div>
  )
}
