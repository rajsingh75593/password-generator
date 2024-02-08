import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidemenu() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div class="list-group">
            <Link to="/admin-home" class="list-group-item list-group-item-action active" aria-current="true">Menu</Link>
            <Link to="/admin-maincategory" class="list-group-item list-group-item-action">Maincategory</Link>
            <Link to="/admin-subcategory" class="list-group-item list-group-item-action">Subcategory</Link>
            <Link to="/admin-brand" class="list-group-item list-group-item-action">Brand</Link>
            <Link to="/admin-product" class="list-group-item list-group-item-action">Product</Link>
          </div>
        </div>
      </div>

      
    </>
  )
}
