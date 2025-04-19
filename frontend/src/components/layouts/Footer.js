export default function Footer() {
    

window.addEventListener("scroll",function(){
    const scrollup = document.querySelector(".scrollup");
    if(this.scrollY>=80)
    scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll")
})
    return(
        <>
        <section className="footer-section">
        <footer className="top">
          <img src="/images/logo.png" />
          <div className="links">
            <div className="links-list">
              <h2>Get Started</h2>
              <a href="/" >Home</a>
              <a href="/about">About us</a>
              <a href="/projects" >Project</a>
              <a href="/service">Service</a>
              <a href="/contact">contact</a>
            </div>
            <div className="links-list">
              <h2>Contact us</h2>
              <a href="tel:+919944012736"><i className="contact-icon uil uil-phone green"></i> +919944012736</a>
              <a href="https://wa.me/+919944012736"><i className="contact-icon uil uil-whatsapp green" ></i>+919944012736</a>
              <a><i className="contact-icon uil uil-envelope red" ></i>harri.cse@gmail.com</a>
              <a><i className="contact-icon uil uil-location-point white" ></i>thiruvarur,tamil nadu</a>
              {/*<a href="https://www.instagram.com/_md_safie___/"><i className="contact-icon uil uil-instagram red"></i> md_safie___</a>*/}
            </div>
            <div className="links-list socials-column">
              <h2>Social Media</h2>
              <p>
                Follow us on social media to find out the latest updates on our
                progress.
              </p>
              <div className="socials">
                <a className="fa-brands fa-facebook"></a>
                <a className="fa-brands fa-instagram"></a>
                <a className="fa-brands fa-linkedin"></a>
              </div>
            </div>
          </div>
        </footer>
        <footer className="bottom">
          <p className="copyright">&#169; <a className="copyright-name" >Safina Moideen</a> 2023 All rights reserved</p>
          <div className="legal">
            <a> License </a>
            <a> Terms </a>
            <a> Privacy </a>
          </div>
        </footer>
      </section>

      <div className="fixed-whatsapp">
            <a href="https://wa.me/+919944012736" className="fixed-whatsapp-link">
                <svg  width="50" height="50" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M128.00049,24a104.0281,104.0281,0,0,0-91.189,154.041l-8.54687,29.915A15.99944,15.99944,0,0,0,48.044,227.73635l29.916-8.54688A104.00728,104.00728,0,1,0,128.00049,24ZM152.125,192c-.0293.02344-.084,0-.126,0A87.99949,87.99949,0,0,1,64,103.876,36.01385,36.01385,0,0,1,100,68,14.92643,14.92643,0,0,1,112.93066,75.503l11.69092,20.46094a16.01674,16.01674,0,0,1-.17187,16.16992l-7.11084,11.85156a40.03607,40.03607,0,0,0,14.67627,14.67676l11.85107-7.11133a16.01883,16.01883,0,0,1,16.17041-.17285l20.45947,11.69141A14.9238,14.9238,0,0,1,188,156,36.01427,36.01427,0,0,1,152.125,192Z"/>
                      <path d="M136.4502,154.6592a7.99584,7.99584,0,0,1-7.397.43652,56.03179,56.03179,0,0,1-28.14892-28.14843,7.99972,7.99972,0,0,1,.43652-7.39746l9.38867-15.64844L99.36328,84.00979A19.99027,19.99027,0,0,0,80,103.89748,72.00036,72.00036,0,0,0,152,176h.10254a19.99027,19.99027,0,0,0,19.88769-19.36328l-19.8916-11.36621Z"/>
                    </g>
                  </svg>    
            </a>
      </div>
      <div className="scrollup">
        <a href="#home">
            <svg width="40" height="40" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>arrow-up-circle</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" type="MSPage">
        <g id="Icon-Set-Filled" type="MSLayerGroup" transform="translate(-362.000000, -1089.000000)" fill="#000000">
            <path d="M384.535,1105.54 C384.145,1105.93 383.512,1105.93 383.121,1105.54 L379,1101.41 L379,1112 C379,1112.55 378.553,1113 378,1113 C377.447,1113 377,1112.55 377,1112 L377,1101.41 L372.879,1105.54 C372.488,1105.93 371.854,1105.93 371.465,1105.54 C371.074,1105.14 371.074,1104.51 371.465,1104.12 L377.121,1098.46 C377.361,1098.22 377.689,1098.15 378,1098.21 C378.311,1098.15 378.639,1098.22 378.879,1098.46 L384.535,1104.12 C384.926,1104.51 384.926,1105.14 384.535,1105.54 L384.535,1105.54 Z M378,1089 C369.163,1089 362,1096.16 362,1105 C362,1113.84 369.163,1121 378,1121 C386.837,1121 394,1113.84 394,1105 C394,1096.16 386.837,1089 378,1089 L378,1089 Z" id="arrow-up-circle" type="MSShapeGroup">

</path>
        </g>
    </g>
</svg>
        </a>
      </div>
        </>
    )
};
