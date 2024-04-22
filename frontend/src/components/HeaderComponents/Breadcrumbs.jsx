import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './breadcrumbs.scss';
import { useLocation } from 'react-router-dom';


function BreadcrumbSection() {
    const location = useLocation()

    const currentPath = location.pathname;
    let currentLink = ''

    const changePath = (path) =>{
      let coverted = '';
      switch (path) {
        case 'log_in':
          coverted= 'Đăng nhập'
          break;
        case 'register':
          coverted= 'Đăng ký'
          break;
        case 'products':
          coverted= 'Sản phẩm'
          break;
        case 'news':
          coverted= 'Tin tức'
          break;
        case 'cart':
          coverted= 'Giỏ hàng'
          break;
        case 'about_us':
          coverted= 'Về chúng tôi'
          break;
        case 'guideline':
          coverted= 'Hướng dẫn'
          break;
        case 'policy':
          coverted= 'Chính sách'
          break;
      
        default:
          coverted = path
          break;
      }

      return coverted;

    }
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {currentLink += `/${crumb}`

      return (
       
          <Breadcrumb.Item href={currentLink}>{changePath(crumb)}</Breadcrumb.Item>
      )
    })

    
  return (
      
    // </div>
    <section className='breadcrumbs_section' style={{display: currentPath === '/'? 'none' : null }} >
        <Breadcrumb>
            <Breadcrumb.Item href='/'>Trang chủ</Breadcrumb.Item>
            {crumbs}
        </Breadcrumb>
    </section>
  );
}

export default BreadcrumbSection;