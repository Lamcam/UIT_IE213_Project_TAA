import Button from 'components/Common/Button1';
import ProductItem from 'components/Products/ProductItem';
import ProductMenu from 'components/Products/ProductMenu';
import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { BsCheck2 } from 'react-icons/bs';
// import 'style/components/button.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'style/pages/Products/ProductStyle.scss';
import ProductFilter from 'components/Products/ProductFilter';
function Products() {
  // const handleCategoryClick = (category, subCategory) => {
  //   // Thực hiện xử lý với thông tin sản phẩm đã click
  //   console.log(`Sản phẩm đã click: ${category} - ${subCategory}`);
  // };
  // const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/products');
  //     setData(response.data);
  //     setFilteredData(response.data); // Khởi tạo filteredData ban đầu là data từ API
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const navigate = useNavigate()
  const handleCategoryClick = (category, subCategory) => {
    // Thực hiện xử lý với thông tin sản phẩm đã click
    console.log(`Sản phẩm đã click: ${category} - ${subCategory}`);
    // Chuyển hướng đến route tương ứng với category và subcategory (nếu có)
    if (subCategory) {
      navigate(`/products/${category}/${subCategory}`);
    } else {
      navigate(`/products/${category}`);
    }
  };

  const { cate_type_name, cate_name } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [cate_type_name, cate_name]);

  const fetchData = async () => {
    try {
      let url = 'http://localhost:8000/products';
      if (cate_type_name) {
        console.log(cate_type_name)
        url += `/${cate_type_name}`;
        if (cate_name) {
          console.log(cate_name)
          url += `/${cate_name}`;
        }
      }
      const response = await axios.get(url);
      setData(response.data);
      setFilteredData(response.data); // Khởi tạo filteredData ban đầu là data từ API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const applyFilter = ({ sortBy, filterBy }) => {
    let updatedData = [...data];

    // Xử lý sắp xếp theo giá
    if (sortBy === '1') {
      if (filterBy && filterBy.includes('Bán chạy nhất')) { updatedData.sort((a, b) => b.prod_num_sold - a.prod_num_sold); }
      if (filterBy && filterBy.includes('Giảm giá')) {
        updatedData = updatedData.filter(item => parseFloat(item.prod_discount.$numberDecimal) > 0);
        console.log("trong if truoc sort1")
        console.log(updatedData)

      }
      console.log("ngoai if truoc sort1")
      console.log(updatedData)
      updatedData.sort((a, b) => {
        const priceA = parseFloat(a.prod_cost.$numberDecimal) - parseFloat(a.prod_discount.$numberDecimal) * parseFloat(a.prod_cost.$numberDecimal);
        const priceB = parseFloat(b.prod_cost.$numberDecimal) - parseFloat(b.prod_discount.$numberDecimal) * parseFloat(b.prod_cost.$numberDecimal);
        return priceA - priceB;
      });
      console.log("sau sort1")
      console.log(updatedData)
    } else if (sortBy === '2') {
      if (filterBy && filterBy.includes('Bán chạy nhất')) { updatedData.sort((a, b) => b.prod_num_sold - a.prod_num_sold); }
      if (filterBy && filterBy.includes('Giảm giá')) {
        updatedData = updatedData.filter(item => parseFloat(item.prod_discount.$numberDecimal) > 0);
        console.log("trong if truoc sort2")
        console.log(updatedData)
      }

      console.log("ngoai if truoc sort2")
      console.log(updatedData)
      updatedData.sort((a, b) => {
        const priceA = parseFloat(a.prod_cost.$numberDecimal) - parseFloat(a.prod_discount.$numberDecimal) * parseFloat(a.prod_cost.$numberDecimal);
        const priceB = parseFloat(b.prod_cost.$numberDecimal) - parseFloat(b.prod_discount.$numberDecimal) * parseFloat(b.prod_cost.$numberDecimal);
        return priceB - priceA;
      });
      console.log("sau sort12")
      console.log(updatedData)
    }

    // Xử lý bộ lọc theo sản phẩm bán chạy nhất
    if (filterBy && filterBy.includes('Bán chạy nhất')) {
      updatedData.sort((a, b) => b.prod_num_sold - a.prod_num_sold);
      if (sortBy === '1') {
        updatedData.sort((a, b) => {
          const priceA = parseFloat(a.prod_cost.$numberDecimal) - parseFloat(a.prod_discount.$numberDecimal) * parseFloat(a.prod_cost.$numberDecimal);
          const priceB = parseFloat(b.prod_cost.$numberDecimal) - parseFloat(b.prod_discount.$numberDecimal) * parseFloat(b.prod_cost.$numberDecimal);
          return priceA - priceB;
        });
      } else if (sortBy === '2') {
        updatedData.sort((a, b) => {
          const priceA = parseFloat(a.prod_cost.$numberDecimal) - parseFloat(a.prod_discount.$numberDecimal) * parseFloat(a.prod_cost.$numberDecimal);
          const priceB = parseFloat(b.prod_cost.$numberDecimal) - parseFloat(b.prod_discount.$numberDecimal) * parseFloat(b.prod_cost.$numberDecimal);
          return priceB - priceA;
        });
      }

      console.log(updatedData)
    }

    // Xử lý bộ lọc theo giảm giá
    if (filterBy && filterBy.includes('Giảm giá')) {
      updatedData = updatedData.filter(item => parseFloat(item.prod_discount.$numberDecimal) > 0);
      console.log("hellsso")
      if (sortBy === '1') {
        updatedData.sort((a, b) => {
          const priceA = parseFloat(a.prod_cost.$numberDecimal) - parseFloat(a.prod_discount.$numberDecimal) * parseFloat(a.prod_cost.$numberDecimal);
          const priceB = parseFloat(b.prod_cost.$numberDecimal) - parseFloat(b.prod_discount.$numberDecimal) * parseFloat(b.prod_cost.$numberDecimal);
          return priceA - priceB;
        });
      } else if (sortBy === '2') {
        updatedData.sort((a, b) => {
          const priceA = parseFloat(a.prod_cost.$numberDecimal) - parseFloat(a.prod_discount.$numberDecimal) * parseFloat(a.prod_cost.$numberDecimal);
          const priceB = parseFloat(b.prod_cost.$numberDecimal) - parseFloat(b.prod_discount.$numberDecimal) * parseFloat(b.prod_cost.$numberDecimal);
          return priceB - priceA;
        });
      }
    }

    setFilteredData(updatedData);

  };


  return (
    <Container className="product" fluid>
      <ProductFilter applyFilter={applyFilter} />
      <Row className="product__content">
        <Col xxl={3} xl={3} lg={3} md={4} sm={4}>
          <ProductMenu onCategoryClick={handleCategoryClick} />
        </Col>
        <Col xxl={9} xl={9} lg={9} md={8} sm={8} className="product__list">
          <Row className="row-cols-1 row-cols-md-3 g-3">
            {filteredData.map((product) => (
              <Col key={product._id} xxl={filteredData.length <= 2 ? 6 : 3} xl={filteredData.length <= 2 ? 6 : 4} lg={filteredData.length <= 2 ? 6 : 4} md={6} sm={6}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Products;