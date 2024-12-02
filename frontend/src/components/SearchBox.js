import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} style={{ borderRadius: 10, display: 'inline-flex'  }}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='buscando por..'
        className='mr-sm-2 ml-sm-5'
        style={{ borderRadius: `15px` }}
      ></Form.Control>
      <Button style={{ borderRadius: `1px 10px 10px 1px` }} type='submit' variant='outline-success' className='p-2'>
        <i className='fas fa-search'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
