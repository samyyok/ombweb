export default function Home() {
  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  return(
    <div>
    
    <div className="background" >
    <div className="hero_text" >
    <h1 className="h_txt">Vereenvoudig uw </h1>
    <h1 className="h_txt">Welzijnsreis </h1>
    <h1 className="h1_txt"> </h1>
    
    
    <p className="info_txt">"Bij Optimindbody staat uw gezondheid centraal. We geven uw persoonlijke hulp in de gym, </p>
    <p className="info_txt"> ondersteunen uw mentaal en adviseren over uw gezondheid. Zo zorgen we ervoor dat uw uw goed voelt, </p>
    <p className="info_txt"> zowel fysiek als mentaal."</p>
    
    <div className="center">
        <button className="start_btn" onClick={scrollToBottom}>Start nu</button>
    </div>
    
    
    
    
    </div> 
    

    </div>

    <div className="grid-container">
      <div className="grid1-item">
        <div className="numgrid">
        <div className="Services">
          Onze Diensten
        </div>
    
      </div>
      <div className="text"></div>
    </div>
      <div className="grid-item">
        <div className="number-grid">
        <div className="number">01</div>
        <div className="title">Mentaal Gezondheid</div>
      </div>
    <div className="text">Ontdek innerlijke rust en balans met onze ervaren yoga coaches. Van stressverlichting tot het verbeteren van je flexibiliteit, onze op maat gemaakte sessies helpen je om je mentale welzijn te versterken en een diepere verbinding met jezelf te vinden.</div>
      </div>
  <div className="grid-item">
  <div className="number-grid">
    <div className="number">02</div>
    <div className="title">Bloed Test</div>
    </div>
    <div className="text">Leer meer over je lichaam met onze bloedtest voor vitamines en mineralen. Ontdek mogelijke tekorten en krijg persoonlijk advies om je voeding en gezondheid te optimaliseren.</div>
  </div>
  <div className="grid1-item">
  <div className="number-grid">
    <div className="number"></div>
    <div className="title"></div>
    </div>
    <div className="text"></div>
  </div>
  <div className="grid-item">
  <div className="number-grid">
    <div className="number">03</div>
    <div className="title">Gym Abonnement</div>
    </div>
    <div className="text">Bereik je fitnessdoelen met ons tijdelijke gymabonnement. Met state-of-the-art faciliteiten en professionele begeleiding, bieden we alles wat je nodig hebt voor een effectieve en motiverende training.</div>
  </div>
  <div className="grid-item">
  <div className="number-grid">
    <div className="number">04</div>
    <div className="title">Gezondheids Specilisten</div>
    </div>
    <div className="text">Verbeter je mobiliteit en herstel met onze kinesisten. Of je nu herstelt van een blessure of je algehele bewegingsbereik wilt verbeteren, onze deskundige behandelingen en persoonlijke aanpak helpen je om weer in beweging te komen en optimaal te functioneren.</div>
  </div>
  </div>
  <div className="about-div">
      <div className="team-img">
      
      <img className="team" src="images/our team.jpg" alt=""/>
      
      </div>
      <div className="about-div-item">
        <div className="ot"> Onze Team </div>
        <div className="ot1"> Samen opzoek naar Oplossingen</div>

        
      </div>
      
      
      
      
    </div>
    <div className="mission">
        <p className="mission-text">
        

        

        Als student-ondernemers van Sint-Jozefhumaniora biedt ons gepassioneerde team een breed scala aan diensten om mensen te helpen hun fitness- en welzijnsdoelen te bereiken. Met moderne faciliteiten, persoonlijke begeleiding en deskundige adviezen streven we ernaar drempels te verlagen en op maat gemaakte oplossingen te bieden voor individuele uitdagingen, terwijl we voorop blijven lopen in innovatie.

        </p>
        
      </div>
      <p className="mission-text">
        

        



        </p>
        <div className="page-container">
      <div className="title-partners">Onze Partners</div>
      </div>
      <div className="partners-container">
        <div className="partner-logo">
          <a href="https://www.pure-senses.be/">
            <img src="image.jpg" alt="Description of the image" />
          </a>
        </div>
        <div className="partner-logo"></div>
        <div className="partner-logo"></div>
        <div className="partner-logo"></div>
      </div>  
      <div className="end-page">
      <div className="contact-us-div" > 
      <div className="contact-us-text"> 
      Contacteer Ons: 
      </div>
      <div className="ok-div">
      <a href="https://www.instagram.com/optimindbody/" className="social">
      <img className="logos" src="images/insta.jpg" alt=""/>
      </a>
      <a href="https://www.facebook.com/iamdavidgoggins?locale=nl_NL" className="social">
      <img className="logos" src="images/facebook.jpg" alt=""/>
      </a>
      <a href="https://web.whatsapp.com/" className="social">
      <img className="logos" src="images/whatsapp.jpg" alt=""/>
      </a>
      </div>
      </div>
      </div>
      
   

    
    
      
      
      
    </div>
    
     
    
    
  )
}