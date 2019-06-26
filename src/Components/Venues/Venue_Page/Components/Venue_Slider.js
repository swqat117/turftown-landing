import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../../../Assets/Images/img1.png'
import img2 from '../../../../Assets/Images/img2.png'
import img3 from '../../../../Assets/Images/img3.png'
import slidearrow from '../../../../Assets/Images/sliderarrow.png'
import '../../../style.css'

const s = {

    style1: {
        backgroundColor: '#0745ba', 
        paddingTop: 50, 
        paddingBottom: 50, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'center', 
        alignItems:'center'
    },

    style2: {
        fontSize: 20, 
        fontWeight: 700, 
        paddingBottom: 30
    },

    style3: {
        backgroundColor: '#0745ba', 
        color: 'black',
        width: '93%', 
        textAlign: 'center'
    }
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,    
      adaptiveHeight: true,
      nextArrow: <button type="button" class="slick-next">Next</button>,
      prevArrow: <button type="button" class="slick-prev"></button>,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          } 
      },    
      {
        breakpoint: 769,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        } 
    }

    ]
    };
    return (
        <div style={ s.style1 } >
            <div style={ s.style2 }>UPCOMING EVENTS</div>

            <div style={ s.style3 } >
                <Slider {...settings}>
                    <div className="newslider" >
                        <img src= { img1 } width="382px" height="275px" />
                    </div>
                    <div className="newslider">
                        <img src= { img2 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img3 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img1 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img2 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img3 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img1 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img2 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img3 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img1 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img2 } width="382px" height="275px"  />
                    </div>
                    <div className="newslider">
                        <img src= { img3 } width="382px" height="275px"  />
                    </div>
                </Slider>
            </div>
      </div>
    );
  }
}