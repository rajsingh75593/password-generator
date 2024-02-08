import React from 'react'
import Sidemenu from './Sidemenu'

export default function AdminHome() {
    return (
        <>
        <div className='background-img'><span>Admin-Home</span></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidemenu />
                    </div>
                    <div className="col-md-10">
                        <h5 className='admin-heading'>Admin</h5>
                        <div className="admin-detail-table">
                            <div className="admin-img-left">
                                <img src="/assets/img/admin.png" alt="img" />
                            </div>
                            <div className="admin-table-right">
                                <table className='admin-table'>
                                    <tbody className='admin-tbody'>
                                        <tr>
                                            <th>Name</th>
                                            <td>Raj Singh</td>
                                        </tr>
                                        <tr>
                                            <th>UserName</th>
                                            <td>rajsingh@75593</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>rajsingh75593@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>7559311530</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
