import React from 'react';
import NewsItems from 'components/News/NewsItems';
import { Container } from 'react-bootstrap';
import "./News.scss";

function News() {
    return (
        <div>
          
        <h1 class="news__title display-large">TUẦN VỪA QUA</h1>

      <div class="news__slider">
        <div class="news__slider-wrapper">
          <img loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Image 1" class="news__slider-img"/>
          <img loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Image 2" class="news__slider-img"/>
          <img loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Image 3" class="news__slider-img"/>
          <img loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Image 1" class="news__slider-img"/>
        </div>
      </div>
      <Container class="news">
       
          <h1 class="news__title display-large">BÀI VIẾT</h1>
          <div class="news__content row">
          <NewsItems></NewsItems>
          </div>
        
        <div class="mt-12" id="nav-page"></div>

     
     </Container>

      <div class="news__banner">
        <img class="news__banner-small" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Tin Tức"/>
      </div>
      </div>
    );
};

export default News;