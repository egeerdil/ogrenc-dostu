import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import {useEffect, useState} from "react";
import './deneme.css';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import db from "../firebase";

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));


// ----------------------------------------------------------------------
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card__img" alt="tear"/>
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
                <h3 className="card__price">{props.price}</h3>
                <button className="card__btn">Add to Cart</button>
            </div>
        </div>
    );
}
export default function Deneme() {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <>
            <div className="wrapper">
                {users.map((user) => {
                    return (

                <Card
                    img= {user.photo}
                    title= {user.name}
                    description={user.age}
                    price={user.age}
                />

                    );})}
            </div>


        </>
    );
}
