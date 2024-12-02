import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { FaArrowLeft } from 'react-icons/fa'
import { listProductsByCategory } from '../actions/productActions'

const CategoryProducts = ({ match }) => {
  const dispatch = useDispatch()

  const categoryId = match.params.id

  useEffect(() => {
    dispatch(listProductsByCategory(categoryId))
  }, [dispatch, categoryId])

  const productListByCategory = useSelector((state) => state.productListByCategory)
  const { loading, error, products = [] } = productListByCategory

  return (
    <>
      <Meta />
      <Container>
        <Link to="/" className="btn btn-light my-3">
          <FaArrowLeft /> Voltar
        </Link>
        <h1 style={{ paddingTop: 20 }}>Produtos por Categoria</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.length > 0 ? (
                products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))
              ) : (
                <Message variant="info">Nenhum produto encontrado</Message>
              )}
            </Row>
          </>
        )}
      </Container>
    </>
  )
}



export default CategoryProducts
