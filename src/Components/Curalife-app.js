import React from 'react'
import freeshipping from '../Images/freeShipping.png'
import shopifySecure from '../Images/Screen Shot 2022-03-24 at 17.28 2-1.png'
import reviews from '../Images/Screen Shot 2022-03-24 at 17.28 3.png'
import stripe from '../Images/Screen Shot 2022-03-24 at 17.28 4.png'
import sheild from '../Images/1.png'
import threeBoxes from '../Images/2.png'
import star from '../Images/4.png'
import pci from '../Images/5.png'
import shopify from '../Images/6.png'
import star2 from '../Images/3.png'
import paypal from '../Images/PayPal.svg.png'
import visa from '../Images/visa.png'
import mastercard from '../Images/mastercard.png'
import amex from '../Images/amex.png'
import discover from '../Images/discover.png'
import '../Curalife.css'

function CuralifeApp() {
  return (
   <>
   <header className='header-top'>
     <img className='sheild' src={sheild} width="70px"/>
     <span>CERTIFIED 100% SAFE & SECURE CHECKOUT</span>
   </header>

   <header className='header-bottom'>
      <span id="tick-mark"></span>
     <span>100% Guarantee</span>
     <span id="tick-mark"></span>
     <span>100% Secure</span>
     <span id="tick-mark"></span>
     <span>100% Encrypted Checkout</span>
     <span id='questions'>Questions?</span><span className='number'>1-888-286-7307</span>
   </header>

   <div className='sponsore'>
     <img id="sponsore" src={shopifySecure} width="130px" alt='shopify secure'/>
     <img id='sponsore' src={reviews} width="90 px" alt="reviews.io"/>
     <img src={stripe} width="130px" alt="stripe"/>
   </div>
    
     <h1 className='head1'>What we'll ship you today</h1>

     <div className='block1'>
      <div className='image1'>
        <img id="image1" src={freeshipping} alt='free shipping image'/>
      </div>

      <div className='container'>
          <p className='prices'>Subtotal<span> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span>$37.00</p>
          <p className='prices'>Shipping<span> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span>$00.00</p>
          <p style={{color: "#3cbaa9"}} className='prices'>Total<span> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span>$37.00</p>
          <hr/>
          <small>Note: The charge will appear on your card as Curalife </small>
      </div>
      </div>

      <div className='save-money-container'>
        <div className='threeBoxesImage'>
          {/* <img src={threeBoxes} width="250" alt="Three Boxes" /> */}
        </div>
        <div className='inline-text'>
        <h1>Prefer to Save<br/> Time & Money</h1>
        </div>
      </div>

      <div className='form1'>
      <div className='form-left'>
        <h4 id='step1'>Step 1</h4>
        <h2 id='enterBilling'>Enter Billing Info</h2>
        <form id="form-left">
        <br/>
          <label>First Name&nbsp;</label>
          <input id='first_name' name='first_name' type={"text"}/>
          <br/><br/>
          <label>Last Name&nbsp;</label>
          <input id='last_name' name='last_name' type={"text"}/>
          <br/><br/>
          <label>Best Phone&nbsp;</label>
          <input id='best_phone' name='best_phone' type={"text"}/>
          <br/><br/>
          <label>Best Email&nbsp;</label>
          <input id='best_email' name='best_email' type={"text"}/>
          <br/><br/>
          <label>Re-enter Email&nbsp;</label>
          <input id='reenter_email' name='reenter_email' type={"text"}/>
          <br/><br/>
          <label>Address&nbsp;</label>
          <input id='address' name='address' type={"text"}/>
          <br/><br/>
          <label>Address 2&nbsp;</label>
          <input id='address2' name='address2' type={"text"}/>
          <br/><br/>
          <label>City&nbsp;</label>
          <input id='city' name='city' type={"text"}/>
          <br/><br/>
          <label>Zip/Postal&nbsp;</label>
          <input id='zip' name='zip' type={"text"}/>
          <br/><br/>
          <label>Country&nbsp;</label>
          <input id='country' name='country' type={"text"}/>
          <br/><br/>
          <label>State/Province&nbsp;</label>
          <input id='state' name='state' type={"text"}/>
          <br/><br/>
        </form>
        <div className='form-right'>
        <form style={{float: "right"}}>
          <label>First Name</label>
          <input type={"text"}/>
        </form>
        </div>
      </div>
      </div>

      <div className='step4'>

        <hr width={"50%"}/>
        <h5>Step 4</h5>
        <h2>Enter Payment Info</h2>

        <div className='step4-box'>

          <div className='top-row'>
            <div className='pay-with'>
            <input type={"radio"} value={"paypal"} />
            <label for="paypal">Pay With</label>
            </div>
            <div className='paypal'>
            <img src={paypal} alt='' width={"120px"} />
            </div>
          </div>

          <div className='second-row'>
          <div className='pay-with2'>
            <input type={"radio"} value={"cards"} />
            <label for="paypal">Pay With Credit Card</label>
          </div>
            <div className='cards-images'>
              <div className='card'>
              <img src={visa} alt='visa' width={"50px"} />
              </div>
              <div className='card'>
              <img src={mastercard} alt='mastercard' width={"50px"} />
              </div>
              <div className='card'>
              <img src={amex} alt='amex' width={"50px"} />
              </div>
              <div className='card'>
              <img src={discover} alt='discover' width={"50px"} />
              </div>
            </div>
        </div>
        <div className='last-row'>
          <form>
            <div className='input'>
          <label>Name on Card&nbsp;</label>
          <input id='name' name='name' type={"text"}/>
          <div className='input'>
          <label>Card Number&nbsp;</label>
          <input id='name' name='name' type={"text"}/>
          </div>
            </div>
            <div className='input'>
          <label>Name on Card&nbsp;</label>
          <input id='name' name='name' type={"text"}/>
          <label>Name on Card&nbsp;</label>
          <input id='name' name='name' type={"text"}/>
            </div>
          </form>
        </div>
        </div>
      </div>

      <div className='process-order'>
        <div className='text-block'>
            <p>YES! Process<br/>
            My Order</p>
        </div>
        <div className='star-image'>
          <img src={star2} alt='star' width={"140px"} />
        </div>
      </div>

      <div className='footer'>
        <div className='footer-head'>
          <span className='three'>3</span><span className='reasons'>Reasons why your order</span>
          <span className='is'>is</span><span className='safe'>safe and secure</span>
        </div>
      <div className='footer-foot'>
        <div className='risk-free'>
          <img src={star} alt='guarantee' width={"80px"} />
          <p><span className='first-line'>100% Risk Free</span><br/><br/>
          if you're not thrilled with how fantastic<br/>
          you look and feel after tapping into your<br/>
          unique female hormone advantage & or<br/>
          if you aren't satisfied for any reason in<br/>
          the next 90 days, return anytime for a full<br/>
          refund (less S&H)</p>
        </div>
        <div className='protected'>
          <img src={pci} alt='pci' width={"65px"} />
          <p><span className='first-line'>100% Proteced</span><br/><br/>
          Your checkout is protected by industry<br/>
          leading PCI compliant security</p>
        </div>
        <div className='secure'>
          <img src={shopify} alt='shopify' width={"65px"} />
          <p><span className='first-line'>100% Secure</span><br/><br/>
          When you place your order it will be<br/>
          protected by 256-bit encrypted SSL - the<br/>
          same technology that blanks use to<br/>
          protect their online transactions!</p>
        </div>
      </div>
      </div>
   </>
  )
}

export default CuralifeApp