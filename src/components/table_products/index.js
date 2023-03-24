import React from "react";
import './styles.css'

const TableProducts = () => {
    return (
        <div className="form_products">
            <table className="form_products_items">
                
                    <td>
                        <th>ID</th>
                        <tr>0</tr>
                        <tr>1</tr>
                        <tr>2</tr>
                    </td>
                    <td>
                        <th>Category</th>
                        <tr>PC</tr>
                        <tr>Clothes</tr>
                        <tr>Plumbing</tr>
                    </td>
                    <td>
                        <th>Name</th>
                        <tr>Lenovo Y50-70</tr>
                        <tr>Nike M Nk Df Acd21</tr>
                        <tr>CERSANIT MITO 17</tr>
                    </td>
                    <td>
                        <th>Quantity</th>
                        <tr>5</tr>
                        <tr>22</tr>
                        <tr>1337</tr>
                    </td>
                    <td>
                        <th>Price (₴)</th>
                        <tr>25,000.00</tr>
                        <tr>4,000.00</tr>
                        <tr>5,000.00</tr>
                    </td>
                    <td>
                        <th>Status</th>
                        <tr>Del</tr>
                        <tr>Del</tr>
                        <tr>Del</tr>
                    </td>
                
            </table>
        </div>

    )
}

export default TableProducts;