import Home from './pages/Home'
import TopNavigation from './components/TopNavigation'
import TopSlider from './components/TopSlider'
import './pages/css/app.css'
import Footer from './components/Footer'
function App() {

  return (
      <div>
          <div className="top-section">
             <TopNavigation/>
            
             <div className="offer-bar bg-danger text-light">
                <p><span className='fs-3'><b>Send Them Off to College in Style! | Save 35% on Sweatshirts & Sleepwear|</b></span> Price as marked | See Details | Shop All Deals</p>
             </div>
             
            {/* Top slider section  */}

            <div className="top-slider w-100">
               <TopSlider img="https://static.cpcache.com/homePage/2023/080423-US/college-hero-US.jpg"/>
            </div>



             <div className="offer-bar py-1 text-center text-dark mt-5">
                <p><span className='fs-1'><>CafePress.® Make it yours.™</></span></p>
             </div>
          </div>
           <div className="Home-section">
              <Home />
           </div>

           <div className="offer-bar py-1 text-center text-dark mt-2">
                <p><span className='fs-2'><>What's New And Trending</></span></p>
             </div>

          {/* Bottom Large Img */}
            
            <div className="bottom-lg-img mt-3">
            <TopSlider img="https://static.cpcache.com/homePage/2022/011917/07_CP_2022_Seller.jpg"/>
            </div>
             


             <div className="offer-bar py-1 text-center text-dark mt-5">
                <p><span className='fs-1'><>Why Cafepress</></span></p>
             </div>

           {/* Dual last Img */}
               
               <div className="dual-last-img">

                  <div className="section-one">
                     <img src="https://static.cpcache.com/homePage/2022/011917/08_CP_2022_Why_CP_Sat_Guarantee.jpg" alt="" />
                     <h1 className='text-center mt-4'>100% Satisfaction Guarantee</h1>
                     <p className='text-center mt-3'>If you have an issue, we'll make it right! Return or exchange your purchase within 30 days - even if its personalized.</p>
                  </div>

                  <div className="section-two">
                     <img src="https://static.cpcache.com/homePage/2022/011917/08_CP_2022_Why_CP_Quick_Turnaround_1.jpg" alt="" />
                     <h1 className='text-center mt-4'>Quick Turnaround</h1>
                     <p className='text-center mt-3'>Our team works hard to get your items created quickly, without cutting corners. After all, we're as excited about your order as you are!</p>
                  </div>
               </div>
             

            
            <div className="offer-bar py-1 text-center text-dark  mt-2">
                <p><span className='fs-1'><>As Seen in</></span></p>
             </div>

             {/* Google map Section is Start here */}
           
            <div classname="google-map">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58319.41555110303!2d90.35801504944479!3d23.99706696029706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1692474700970!5m2!1sen!2sbd"
                  style={{ border: 0 , width: "100%",height: '270px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  />
         </div>

            

             {/* Our Brand name */}
      <div className="brand-name">
         <img src="https://static.cpcache.com/homePage/2022/011917/CP_2022_As_Seen_In-3.png" alt="" />
      </div>

             {/* Footer Wrapper is start Here */}

           <div className="footer-wrapper">
              <Footer />
           </div>
      </div>  
  )
}
export default App
