import {Link} from "react-router-dom";
import "./UserManagement.css";

export default function UserManagement(){
    return(
        <div className="userManagementpage">
            <div className="userspage">
                <div>
                 <h2 className="userManagement">User Management</h2>
                 <span>Manage all users who can access the system</span>
                </div>
                <div className="addUserDiv">
                 <Link to="/settings/userManagement/addUser" className="adduserLink">Add User</Link>
                </div>
            </div>
            <div className="tablediv">
                <table className="usersTable">
                <thead className="usersHeading">
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody className="usersBody">
                <tr className="tr">
                    <td>Arjun Sharma</td>
                    <td>arjun.sharma@gmail.com</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>Edit</td>
                </tr>

                <tr className="tr">
                    <td>Priya Sen</td>
                    <td>priya.sen@gmail.com</td>
                    <td>Manager</td>
                    <td>Active</td>
                    <td>Edit</td>
                </tr>

                <tr className="tr">
                    <td>Rahul Das</td>
                    <td>rahul.das@gmail.com</td>
                    <td>Cashier</td>
                    <td>Active</td>
                    <td>Edit</td>
                </tr>

                <tr className="tr">
                    <td>Sneha Roy</td>
                    <td>sneha.roy@gmail.com</td>
                    <td>Cashier</td>
                    <td>Inactive</td>
                    <td>Edit</td>
                </tr>

                <tr className="tr">
                    <td>Aditya Mukherjee</td>
                    <td>aditya.mukherjee@gmail.com</td>
                    <td>Manager</td>
                    <td>Active</td>
                    <td>Edit</td>
                </tr>
                <tr className="tr">
                    <td>Vikash Singh</td>
                    <td>vikash.singh@gmailt.com</td>
                    <td>cashier</td>
                    <td>Active</td>
                    <td>Edit</td>
                </tr>
                <tr className="tr">
                    <td>Sneha Patel</td>
                    <td>patelsneha@desknest.com</td>
                    <td>cashier</td>
                    <td>Active</td>
                    <td>Edit</td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}