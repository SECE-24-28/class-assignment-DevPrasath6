import { useEffect, useState } from 'react'
import './App.css'
import axiosInstance from './api.jsx';

function App() {

    const [users, setUsers] = useState([]);

    const[formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const getAllUsers = async () => {
        try {
            const response = await axiosInstance.get('/');
            setUsers(response.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await axiosInstance.delete(`/${id}`);
            console.log(response.data.message);
            if(!response.data.isError){
                getAllUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const addUser = async () => {
        try {
            const response = await axiosInstance.post('/add-employee', formData);
            console.log(response.data.message);
            if(!response.data.isError){
                getAllUsers();
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <>
        <h1>User List</h1>

        <form>
            <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}/>

            <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}/>
            <button type="submit" onClick={addUser}>Add User</button>
        </form>

        {users.map((user,ind)=>{
            return (<li>{user.name}<button onClick={() => deleteUser(user._id)}>🗑️</button></li>)
        })}
        </>
    );
}

export default App
