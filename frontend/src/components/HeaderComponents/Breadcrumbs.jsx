import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './breadcrumbs.scss';
import { useLocation } from 'react-router-dom';


function BreadcrumbSection() {
    const location = useLocation()

    const currentPath = location.pathname;
    let currentLink = ''
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {currentLink += `/${crumb}`

      return (
       
          <Breadcrumb.Item href={currentLink}>{crumb}</Breadcrumb.Item>
      )
    })
  return (
    // <div className="breadcrumbs">
    //   {crumbs}
      
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