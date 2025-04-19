import { useDispatch, useSelector } from "react-redux"
import { loadPackage } from "../actions/projectAction"
import { useEffect } from "react"

export default function Service() {
const dispatch = useDispatch()

    const {packages} =useSelector((state)=>state.packageState)

    useEffect(()=>{
        dispatch(loadPackage)
    },[dispatch])
    return(
        <>
        
        <section className="about-home">
            <h2 className="about-home-heading">Turbo House Construction</h2>
            <p className="about-home-para">
                We are a best house construction company in Tamil Nadu, specializing in turbo house construction services. From initial planning and design to final execution and handover, we take care of every aspect of the project. As a turbo house construction company, we handle all the essential aspects of the project, including obtaining necessary permits and approvals, procuring high-quality materials, managing construction schedules, and ensuring adherence to building codes and regulations. Transparency and communication are vital to us throughout the construction process. We provide regular updates to our clients, keeping them informed about the progress of their project.
    
    
            </p>
            <p className="about-home-para">
                Choose Turbo House as your trusted partner for turbo house construction in Tamil Nadu, and let us transform your vision into a beautiful and functional home that you can cherish for years to come.
    
    
            </p>
        </section>

        <section className="package-rate">
            <div className="container">
                <h2>Our package</h2>
                <div className="package-rate-cards">
                    <div href="#" className="pr-card">
                        <div className="icon">
                        <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
	 width="65" height="65" viewBox="0 0 545.062 545.062"
	 space="preserve">
<g>
	<path d="M339.608,478.125h143.438V296.438H62.295v181.688h143.438V334.688v-9.562h133.875V478.125z M186.608,449.438h-9.562H81.42
		v-114.75v-9.562h105.188V449.438z M358.733,334.688v-9.562h105.188v124.312h-9.562h-95.625V334.688z"/>
	<polygon points="339.608,487.688 339.608,545.062 483.046,545.062 492.608,545.062 492.608,487.688 483.046,487.688 	"/>
	<polygon points="52.733,487.688 52.733,545.062 62.295,545.062 205.733,545.062 205.733,487.688 62.295,487.688 	"/>
	<rect x="90.983" y="334.688" width="86.062" height="105.188"/>
	<rect x="368.296" y="334.688" width="86.062" height="105.188"/>
	<polygon points="368.296,143.438 368.296,258.188 358.733,258.188 186.608,258.188 186.608,143.438 61.253,143.438 25.394,286.875 
		52.733,286.875 62.295,286.875 483.046,286.875 492.608,286.875 519.669,286.875 477.089,143.438 	"/>
	<path d="M196.17,133.875v9.562v105.188h162.563V143.438v-9.562v-38.25H196.17V133.875z M224.858,124.312v-9.562h105.188v19.125
		v9.562V229.5h-9.562h-95.625v-86.062v-9.562V124.312z"/>
	<polygon points="368.296,86.062 386.368,86.062 369.155,0 185.747,0 168.535,86.062 186.608,86.062 196.17,86.062 358.733,86.062 	
		"/>
	<polygon points="320.483,143.438 320.483,133.875 320.483,124.312 234.42,124.312 234.42,133.875 234.42,143.438 234.42,219.938 
		320.483,219.938 	"/>
	<polygon points="215.295,478.125 215.295,487.688 215.295,545.062 330.046,545.062 330.046,487.688 330.046,478.125 
		330.046,334.688 215.295,334.688 	"/>
</g>
</svg>
                        </div>
                        <h4> BUDGET </h4>
                        <p><i className="fa fa-inr"></i> {packages && packages.budget } /sq.ft</p>
                    </div>
                    <div href="#" className="pr-card">
                        <div className="icon">
                        <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
	 width="65" height="65" viewBox="0 0 902 902" space="preserve">
<g>
	<g>
		<path d="M10,840.773c-5.523,0-10,4.477-10,10v26.169c0,5.523,4.477,10,10,10h882c5.523,0,10-4.477,10-10v-26.169
			c0-5.523-4.477-10-10-10h-50V486.857c0-5.523,4.477-10,10-10h24c5.523,0,10-4.477,10-10v-32.959c0-4.061-2.455-7.718-6.213-9.255
			l-192.011-78.57c-3.759-1.538-6.214-5.195-6.214-9.255V165.563c0-5.523,4.478-10,10-10h5.946c5.523,0,10-4.477,10-10v-23.48
			c0-4.109-2.514-7.8-6.337-9.305L454.663,15.752c-2.354-0.926-4.971-0.926-7.325,0l-246.509,97.026
			c-3.824,1.505-6.337,5.196-6.337,9.305v23.48c0,5.523,4.477,10,10,10h5.945c5.523,0,10,4.477,10,10v171.255
			c0,4.06-2.455,7.717-6.213,9.255l-192.011,78.57c-3.758,1.538-6.213,5.195-6.213,9.255v32.959c0,5.523,4.477,10,10,10h24
			c5.523,0,10,4.477,10,10v353.916H10z M259.667,757.857c0,5.523-4.477,10-10,10h-82.333c-5.523,0-10-4.477-10-10v-86
			c0-5.523,4.477-10,10-10h82.333c5.523,0,10,4.477,10,10V757.857z M582,840.773H320v-119.41c0-5.522,4.477-10,10-10h242
			c5.523,0,10,4.478,10,10V840.773z M744.667,757.857c0,5.523-4.477,10-10,10h-82.333c-5.523,0-10-4.477-10-10v-86
			c0-5.523,4.477-10,10-10h82.333c5.523,0,10,4.477,10,10V757.857z M781.5,511.857c5.523,0,10,4.477,10,10v86
			c0,5.523-4.477,10-10,10h-176c-5.523,0-10-4.477-10-10v-86c0-5.523,4.477-10,10-10H781.5z M506.497,196.046
			c0-5.523,4.477-10,10-10h81.995c5.522,0,10,4.477,10,10v36.997c0,5.523-4.478,10-10,10h-81.995c-5.523,0-10-4.477-10-10V196.046z
			 M539,511.857c5.523,0,10,4.477,10,10v86c0,5.523-4.477,10-10,10H363c-5.523,0-10-4.477-10-10v-86c0-5.523,4.477-10,10-10H539z
			 M293.508,196.046c0-5.523,4.478-10,10-10h81.995c5.523,0,10,4.477,10,10v36.997c0,5.523-4.477,10-10,10h-81.995
			c-5.522,0-10-4.477-10-10V196.046z M110.5,521.857c0-5.523,4.477-10,10-10h176c5.523,0,10,4.477,10,10v86c0,5.523-4.477,10-10,10
			h-176c-5.523,0-10-4.477-10-10V521.857z"/>
	</g>
</g>
</svg>
                        </div>
                        <h4>STANDARD</h4>
                        <p><i className="fa fa-inr"></i> {packages && packages.standard }/sq.ft</p>
                    </div>
                    <div href="#" className="pr-card">
                        <div className="icon">
                        <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
	 width="65" height="65" viewBox="0 0 972 972" space="preserve">
<g>
	<g>
		<path d="M962,865.407h-18.818V367.273c0-4.509-3.018-8.46-7.366-9.647L499.854,238.654c-4.35-1.187-7.366-5.138-7.366-9.647
			v-94.34c0-45.001-103.796-81.481-231.834-81.481S28.819,89.667,28.819,134.667v730.741H10c-5.523,0-10,4.478-10,10v33.405
			c0,5.523,4.477,10,10,10h952c5.523,0,10-4.477,10-10v-33.406C972,869.885,967.523,865.407,962,865.407z M108.107,749.948
			c0,4.487-2.995,8.405-7.312,9.63c-13.93,3.956-26.65,8.417-37.932,13.305c-6.626,2.87-14.025-1.932-14.025-9.152v-44.043
			c0-3.858,2.228-7.35,5.701-9.031c11.791-5.707,25.455-10.903,40.673-15.481c6.42-1.932,12.895,2.873,12.895,9.577V749.948z
			 M108.107,643.069c0,4.487-2.995,8.405-7.312,9.631c-13.93,3.956-26.65,8.417-37.932,13.305
			c-6.626,2.87-14.025-1.932-14.025-9.152v-44.042c0-3.858,2.228-7.35,5.701-9.031c11.791-5.707,25.455-10.903,40.673-15.481
			c6.42-1.932,12.895,2.873,12.895,9.576V643.069z M108.107,536.191c0,4.487-2.996,8.405-7.312,9.63
			c-13.93,3.956-26.65,8.417-37.932,13.305c-6.626,2.869-14.025-1.932-14.025-9.152v-44.042c0-3.858,2.228-7.351,5.701-9.031
			c11.791-5.707,25.455-10.904,40.673-15.481c6.42-1.932,12.895,2.871,12.895,9.576V536.191z M108.107,429.312
			c0,4.487-2.996,8.405-7.312,9.631c-13.93,3.956-26.65,8.417-37.932,13.304c-6.626,2.87-14.025-1.931-14.025-9.151v-44.043
			c0-3.858,2.228-7.351,5.701-9.031c11.791-5.707,25.455-10.904,40.673-15.482c6.42-1.931,12.895,2.873,12.895,9.577V429.312z
			 M108.107,322.435c0,4.487-2.995,8.405-7.312,9.631c-13.93,3.956-26.65,8.416-37.932,13.304
			c-6.626,2.87-14.025-1.931-14.025-9.152v-44.042c0-3.858,2.228-7.35,5.701-9.031c11.791-5.707,25.455-10.904,40.673-15.482
			c6.42-1.931,12.895,2.873,12.895,9.577V322.435z M108.107,215.556c0,4.487-2.996,8.405-7.312,9.63
			c-13.93,3.956-26.65,8.417-37.932,13.304c-6.626,2.87-14.025-1.931-14.025-9.152v-44.043c0-3.858,2.228-7.35,5.701-9.031
			c11.791-5.707,25.455-10.904,40.673-15.482c6.42-1.931,12.895,2.873,12.895,9.577V215.556z M248.021,730.091
			c0,5.405-4.302,9.823-9.705,9.988c-33.308,1.019-64.777,4.289-93.168,9.378c-6.139,1.102-11.778-3.6-11.778-9.837v-45.705
			c0-4.803,3.41-8.944,8.132-9.825c29.165-5.439,61.698-8.944,96.215-10.027c5.638-0.177,10.305,4.361,10.305,10.001
			L248.021,730.091L248.021,730.091z M248.021,623.213c0,5.405-4.302,9.823-9.705,9.988c-33.307,1.019-64.777,4.289-93.168,9.379
			c-6.139,1.102-11.778-3.6-11.778-9.837v-45.706c0-4.803,3.41-8.944,8.132-9.825c29.165-5.44,61.698-8.944,96.215-10.027
			c5.638-0.177,10.305,4.361,10.305,10.001L248.021,623.213L248.021,623.213z M248.021,516.333c0,5.406-4.302,9.824-9.705,9.989
			c-33.308,1.018-64.777,4.288-93.168,9.378c-6.139,1.102-11.778-3.6-11.778-9.837v-45.706c0-4.803,3.41-8.944,8.132-9.826
			c29.165-5.438,61.698-8.942,96.215-10.026c5.638-0.177,10.305,4.36,10.305,10.001L248.021,516.333L248.021,516.333z
			 M248.021,409.455c0,5.406-4.302,9.824-9.705,9.989c-33.308,1.019-64.777,4.289-93.168,9.378
			c-6.139,1.102-11.778-3.6-11.778-9.837v-45.706c0-4.803,3.41-8.944,8.132-9.826c29.165-5.438,61.698-8.944,96.215-10.027
			c5.637-0.177,10.305,4.361,10.305,10.001L248.021,409.455L248.021,409.455z M248.021,302.577c0,5.406-4.302,9.824-9.705,9.989
			c-33.308,1.018-64.777,4.289-93.168,9.378c-6.139,1.1-11.778-3.6-11.778-9.837v-45.705c0-4.803,3.41-8.945,8.132-9.826
			c29.165-5.44,61.698-8.944,96.215-10.027c5.638-0.177,10.305,4.361,10.305,10.001L248.021,302.577L248.021,302.577z
			 M248.021,195.698c0,5.406-4.302,9.824-9.705,9.989c-33.308,1.017-64.777,4.288-93.168,9.378
			c-6.139,1.101-11.778-3.6-11.778-9.837v-45.705c0-4.803,3.41-8.945,8.132-9.826c29.165-5.439,61.698-8.943,96.215-10.027
			c5.638-0.177,10.305,4.361,10.305,10.001L248.021,195.698L248.021,195.698z M413.197,170.36c0-6.705,6.474-11.509,12.895-9.577
			c15.218,4.578,28.882,9.775,40.673,15.482c3.474,1.681,5.701,5.172,5.701,9.031v44.042c0,7.221-7.398,12.022-14.024,9.152
			c-11.282-4.888-24.002-9.349-37.933-13.304c-4.315-1.226-7.312-5.144-7.312-9.63V170.36L413.197,170.36z M387.935,739.621
			c0,6.237-5.639,10.938-11.777,9.837c-28.392-5.09-59.861-8.36-93.168-9.378c-5.403-0.165-9.705-4.583-9.705-9.988v-46.026
			c0-5.641,4.667-10.178,10.305-10.001c34.518,1.083,67.05,4.587,96.215,10.027c4.723,0.881,8.132,5.021,8.132,9.825
			L387.935,739.621L387.935,739.621z M387.935,632.743c0,6.237-5.639,10.938-11.777,9.837c-28.393-5.09-59.861-8.36-93.168-9.379
			c-5.403-0.165-9.705-4.583-9.705-9.989v-46.025c0-5.641,4.667-10.178,10.305-10.001c34.518,1.083,67.05,4.587,96.215,10.026
			c4.723,0.882,8.132,5.022,8.132,9.826L387.935,632.743L387.935,632.743z M387.935,525.864c0,6.237-5.639,10.938-11.777,9.837
			c-28.393-5.09-59.861-8.36-93.168-9.378c-5.403-0.165-9.705-4.583-9.705-9.988v-46.026c0-5.642,4.667-10.178,10.305-10.001
			c34.518,1.083,67.05,4.587,96.215,10.027c4.723,0.881,8.132,5.021,8.132,9.825L387.935,525.864L387.935,525.864z M387.935,418.985
			c0,6.237-5.639,10.938-11.777,9.837c-28.392-5.09-59.861-8.36-93.168-9.378c-5.403-0.165-9.705-4.583-9.705-9.989V363.43
			c0-5.641,4.667-10.178,10.305-10.001c34.518,1.083,67.05,4.588,96.215,10.026c4.723,0.882,8.132,5.022,8.132,9.826
			L387.935,418.985L387.935,418.985z M387.935,312.107c0,6.237-5.639,10.937-11.777,9.837c-28.392-5.09-59.861-8.361-93.168-9.378
			c-5.403-0.165-9.705-4.583-9.705-9.989v-46.026c0-5.64,4.667-10.178,10.305-10.001c34.518,1.083,67.05,4.587,96.215,10.027
			c4.723,0.881,8.132,5.022,8.132,9.826L387.935,312.107L387.935,312.107z M387.935,205.229c0,6.237-5.639,10.938-11.777,9.837
			c-28.392-5.09-59.861-8.361-93.168-9.378c-5.403-0.165-9.705-4.583-9.705-9.989v-46.026c0-5.641,4.667-10.178,10.305-10.001
			c34.518,1.083,67.05,4.587,96.215,10.027c4.723,0.881,8.132,5.022,8.132,9.826L387.935,205.229L387.935,205.229z M413.197,322.435
			v-45.195c0-6.705,6.474-11.509,12.895-9.577c15.218,4.578,28.882,9.775,40.673,15.482c3.474,1.681,5.701,5.172,5.701,9.031v44.042
			c0,7.221-7.398,12.022-14.024,9.152c-11.282-4.888-24.002-9.348-37.933-13.304C416.192,330.839,413.197,326.92,413.197,322.435z
			 M737.141,865.407h-154v-92.291c0-5.522,4.478-10,10-10h134c5.523,0,10,4.478,10,10V865.407z M895.185,689.928
			c0,5.522-4.477,10-10,10H456.707c-5.523,0-10-4.478-10-10V651.35c0-5.523,4.477-10,10-10h428.478c5.523,0,10,4.477,10,10V689.928z
			 M895.185,590.933c0,5.522-4.477,10-10,10H456.707c-5.523,0-10-4.478-10-10v-38.579c0-5.523,4.477-10,10-10h428.478
			c5.523,0,10,4.477,10,10V590.933z M895.185,491.938c0,5.523-4.477,10-10,10H456.707c-5.523,0-10-4.477-10-10v-38.579
			c0-5.522,4.477-10,10-10h428.478c5.523,0,10,4.478,10,10V491.938z"/>
	</g>
</g>
</svg>
                        </div>
                        <h4>PREMIUM</h4>
                        <p><i className="fa fa-inr"></i> {packages && packages.premium }/sq.ft</p>
                    </div>
                    <div href="#" className="pr-card">
                        <div className="icon">
                        <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
	 width="65" height="65" viewBox="0 0 516.375 516.375"
	 space="preserve">
<g>
	<path d="M0,325.125h19.125h191.25v-28.688v-9.562v-86.062v-9.562v-28.688V153V86.062H0V325.125z M19.125,114.75H191.25v66.938
		H19.125V114.75z M19.125,191.25H191.25v66.938H19.125V191.25z"/>
	<polygon points="28.688,430.312 143.438,430.312 143.438,372.938 143.438,363.375 191.25,363.375 191.25,430.312 210.375,430.312 
		210.375,334.688 28.688,334.688 	"/>
	<polygon points="430.312,191.25 430.312,162.562 219.938,162.562 219.938,191.25 411.188,191.25 	"/>
	<path d="M401.625,277.312v-38.25h-38.25v-28.688h38.25v-9.562H219.938v86.062h181.688V277.312z M363.375,248.625h28.688v9.562
		h-28.688V248.625z M363.375,277.312v-9.562h28.688v9.562H363.375z"/>
	<polygon points="401.625,296.438 219.938,296.438 219.938,325.125 219.938,334.688 219.938,430.312 248.625,430.312 
		248.625,392.062 248.625,382.5 248.625,363.375 248.625,353.812 248.625,334.688 248.625,325.125 487.688,325.125 487.688,353.812 
		487.688,363.375 487.688,382.5 487.688,392.062 487.688,430.312 516.375,430.312 516.375,296.438 411.188,296.438 	"/>
	<rect x="258.188" y="392.062" width="219.938" height="38.25"/>
	<rect x="258.188" y="334.688" width="219.938" height="19.125"/>
	<rect x="258.188" y="363.375" width="219.938" height="19.125"/>
	<rect x="153" y="372.938" width="28.688" height="57.375"/>
</g>
</svg>
                        </div>
                        <h4>LUXURY</h4>
                        <p><i className="fa fa-inr"></i> {packages && packages.luxury }/sq.ft</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="consult">
            <div className="consult-content">
                    <h2 className="consult-heading">Contact Us For Your Free Consultation.</h2>
                    <a href="tel:+919944012736"><button className="consult-button">Call Now</button> </a>
            </div>
        </section>



        <section className="services-home">
            <h2>We Provide Comprehensive Services From Designing To Construction    </h2>
            <div className="services">
            <div className="services-img">
                <img src="/images/architecture-planning.jpg" alt=""/>
            </div>
            <div className="services-content">
                <h1>
                    Architecture & Planning
                </h1>
                <p>
                    At Turbo House, we specialize in offering unparalleled Architecture & Planning services that encompass innovation, precision, and a deep understanding of design aesthetics. With a commitment to turning your vision into reality, we create spaces that seamlessly blend functionality, beauty, and sustainability.
                </p>
                <ul>
                    <li>Architectural Design</li>
                    <li>Structural Design</li>
                    <li>Interior Design</li>
                    <li>Exterior Design</li>
                </ul>
            </div>
        </div>

        <div className="services">
            <div className="services-img">
                <img src="/images/renovation-remodelling.jpg" alt=""/>
            </div>
            <div className="services-content">
                <h1>
                    Renovation & Remodeling
                </h1>
                <p>
                    Revitalize your spaces with Divine House’s Renovation & Remodeling services. Our expertise breathes new life into existing structures, reimagining them to meet contemporary aesthetics and functionality. With a keen eye for transformation, we meticulously plan and execute renovations, preserving the essence while infusing modern elements. From updating interiors to redefining exteriors, we seamlessly blend the old and new. As “Divine House,” we take pride in our ability to turn vision into reality, enriching homes and spaces with renewed vibrance. Turbo us to revive your spaces, creating a harmonious blend of past and present.
                </p>
                <ul>
                    <li>
                        Floor Addition
                        </li>
                    <li>
                        Bedroom Renovation
                        </li>
                    <li>
                        Living Room Renovation
                    </li>
                    <li>
                        Kitchen Renovation
                        </li>
                </ul>
            </div>
        </div>

        <div className="services">
            <div className="services-img">
                <img src="/images/homeinteriordesign.jpg" alt=""/>
            </div>
            <div className="services-content">
                <h1>
                    Home Interior Designs
                </h1>
                <p>
                    At Turbo House, we are experts in residential interior design and decor, crafting spaces that mirror clients’ personalities and aspirations, leaving a distinct mark. With budget-friendly solutions and innovative ideas, we excel in designing Flats, Villas, Bungalows, and Independent Residential Properties across Bangalore, Hosur & Chennai. This speaks to our versatility and skill in design and execution, making us a top choice for turning dreams into reality.

                </p>
                <ul>
                    <li>
                        Modular Kitchen
                        </li>
                    <li>
                        Dining Room
                        </li>
                    <li>
                        Bedroom
                    </li>
                    <li>
                        Living Room
                        </li>
                </ul>
            </div>
        </div>

        <div className="services">
            <div className="services-img">
                <img src="/images/electricwork.jpg" alt=""/>
            </div>
            <div className="services-content">
                <h1>
                    Electrical Work
                </h1>
                <p>
                Electrical work in building construction refers to the installation, maintenance, and repair of electrical systems and equipment within a structure. It involves various tasks, such as providing temporary power supply during construction, installing fixed wiring, circuit breakers, electrical switchboards, and overhead lines. Electrical work is essential for powering lighting systems, appliances, and other electrical devices in residential, commercial, and industrial buildings.
                </p>
                <ul>
                    <li>Permanent wiring</li>
                    <li>Overhead wiring</li>
                    <li>Temporary wiring</li>

                </ul>
            </div>
        </div>
        </section>
        </>
    )
};
