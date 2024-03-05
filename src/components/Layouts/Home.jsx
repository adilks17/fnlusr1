import React from 'react'
import './Home.css'
import { Button, Paper } from '@mui/material'
import logo from './heve/pim.png';
const Home = () => {
  return (
    <div>
  
<div class="landing-page">
  
  <div class="content">
    <div class="container">
      <div class="info">
        <h1>Welcome to Beingwell</h1>
        <p>Psychological well being sysytem to acheive mental health Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque quas voluptatem voluptas.</p>
        <a href="#aboutus"> <button>Know more</button></a> 
      </div>
      <div class="image">
        <img src="https://static.vecteezy.com/system/resources/previews/003/689/220/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt=''/>
      </div>
     
    </div>
    
    <div style={{ display: 'flex' }}>
  <div style={{ flex: 1 }}>
    <Paper elevation={3} className='sgb'>
      <h4 className='sgh'>
        Watch feel-good movies</h4>
      <p className='sgc'>In the journey towards self-discovery and emotional well-being, mental health books serve as invaluable guides, offering wisdom, insight, and solace to those navigating the complexities of the mind. These books, written by experts and individuals with lived experiences, illuminate the path to healing and understanding, providing tools and strategies to cultivate resilience and nurture mental wellness. Through their pages, readers embark on a transformative exploration of the human psyche, gaining new perspectives and finding comfort in the shared struggles and triumphs of others. So, pick up a mental health book and embark on a journey of self-discovery, empowerment, and growth. Let its words serve as a beacon of hope, guiding you towards greater self-awareness, acceptance, and ultimately, a brighter tomorrow.</p>
      <a href='/movies'><Button variant="outlined" size="small">Watch</Button></a>
    </Paper>
  </div> 
  <div style={{ flex: 1 }}>
    <Paper elevation={3} className='sgb'>
      <h4 className='sgh'>
        Read mental health Books</h4>
      <p className='sgc'>In a world where stress and challenges can often weigh heavy on our hearts, feel-good movies serve as a beacon of light, illuminating the path to joy and optimism. These cinematic gems offer a much-needed respite, transporting us to enchanting worlds where dreams come true and happiness is within reach. With every heartwarming story and uplifting moment, they remind us of the beauty of human kindness, the strength of the human spirit, and the boundless power of love. So, take a break from the hustle and bustle of everyday life, and let yourself be swept away by the magic of feel-good movies. Allow their warmth to wrap around you like a cozy blanket, filling you with hope, laughter, and a renewed sense of wonder. After all, sometimes all we need is a little dose of cinematic sunshine to brighten our day and remind us that the world is still full of wonder and possibility.</p>
      <a href='/books'><Button variant="outlined" size="small">Suggestion</Button> </a>
    </Paper>
  </div>
</div>
<div class="container">
<div class="image">
        <img src={logo} style={{width:'800px', height: '450px',marginRight: '16px' }} alt=''/>
      </div>
      <div class="info">
        <h1>Connect with Professionals</h1>
        <p>Beingwell Psychological well being sysytem has back supported by various Professionals working in Psychological and wellness sector from diferent places around the world </p>
       <a href='/prof'> <button >Read more</button></a>
      </div>
     
     
    </div>
    <h3 id='aboutus'>About US</h3>
    <p style={{marginLeft:'60px',marginRight:'60px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis aspernatur quasi culpa enim nihil, corporis exercitationem accusamus voluptatibus aliquam fugiat possimus, sapiente repellendus inventore assumenda, optio sed officia! Quo.</p>
  </div>
  
</div>
    </div>
  )
}

export default Home