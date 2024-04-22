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
        case 'category':
          coverted= 'Thể loại'
          break;
        case 'Phu_kien_toc':
          coverted= 'Thể loại'
          break;
      
        case 'Tram_cai':
          coverted= 'Trâm cài'
          break;
      
        case 'Kep':
          coverted= 'Kẹp'
          break;

        case 'Day_cot_toc':
          coverted= 'Dây cột tóc'
          break;

        case 'Cai_toc':
          coverted= 'Cài tóc'
          break;

        case 'Tui_vi':
          coverted= 'Túi ví'
          break;

        case 'Tui_xach':
          coverted= 'Túi xách'
          break;
        case 'Vi':
          coverted= 'Ví'
          break;

        case 'Thiep':
          coverted= 'Thiệp'
          break;

        case 'Op_lung':
          coverted= 'Ốp lưng'
          break;
        case 'Mat_kinh':
          coverted= 'Mắt kính'
          break;

        case 'Day_deo':
          coverted= 'Dây đeo'
          break;

        case 'Mu_non':
          coverted= 'Mũ nón'
          break;

        case 'Khau_trang':
          coverted= 'Khẩu trang'
          break;

        case 'Trang_suc':
          coverted= 'Trang sức'
          break;
        case 'Vong_co':
          coverted= 'Vòng cổ'
          break;

        case 'Vong_tay':
          coverted= 'Vòng tay'
          break;
        case 'Hoa_tai':
          coverted= 'Hoa tai'
          break;

        case 'Nhan':
          coverted= 'Nhẫn'
          break;
      
        case 'Khac':
          coverted= 'Khác'
          break;

        case 'account':
          coverted= 'Tài khoản'
          break;
        
        case 'infomation':
          coverted= 'Thông tin'
          break;

        case 'profile-user':
          coverted= 'Hồ sơ cá nhân'
          break;
        case 'profile-bank-card':
          coverted= 'Tài khoản ngân hàng'
          break;
        case 'profile-shipping-address':
          coverted= 'Địa chỉ giao hàng'
          break;

        case 'profile-change-password':
          coverted= 'Đổi mật khẩu'
          break;

        case 'orders':
          coverted= 'Đơn hàng'
          break;
        case 'favor':
          coverted= 'Sản phẩm yêu thích'
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