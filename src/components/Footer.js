import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

 function Footer() {
  return (
    <footer>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn  btn-floating m-1' href='#!' role='button'>
          <SocialIcon url="https://facebook.com/jaketrent"/>
          </a>

          <a className='btn  btn-floating m-1' href='#!' role='button'>
          <SocialIcon url="https://discord.com/jaketrent"/>
          </a>

          <a className='btn  btn-floating m-1' href='#!' role='button'>
          <SocialIcon url="https://google.com/jaketrent"/>
          </a>
          <a className='btn  btn-floating m-1' href='#!' role='button'>
          <SocialIcon url="https://instagram.com/jaketrent"/>
          </a>

          <a className='btn  btn-floating m-1' href='#!' role='button'>
          <SocialIcon url="https://twitter.com/jaketrent"/>
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        ©2022 Copyright:
        <p>SHOP</p>
      </div>
    </MDBFooter>
    </footer>
  );
}

export default Footer