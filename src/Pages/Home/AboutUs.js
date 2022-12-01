import React from 'react';
import ills2 from '../../assets/undraw_team_up_re_84ok.svg'

const AboutUs = () => {
    return (
        <div className='text-xl my-20 w-3/4 mx-auto z-10 relative mt-36'>
            <h1 className='font-bold text-4xl tracking-wide my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600'>About Us</h1>
            <div className='z-0 absolute bottom-36 right-10 w-1/5'>
                <div>
                    <img src={ills2} alt="team illustration" className='z-0' />
                </div>
            </div>
            <p>
                Finding a good consultancy firm or visa consultant is hard. But EduPro made that easy.
                You dont to visit all firms or ask anyone one by one about their service and quality, you are finding
                all reviews from valid users in this site very easily. Agency owners can also add their service and invite others
                to give reviews about their service. We are trying to improve regularly. Reach us if you need any help or if you
                have any suggestions for us.
            </p>
        </div>
    );
};

export default AboutUs;