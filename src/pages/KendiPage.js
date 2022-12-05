import { useState, useEffect } from "react";
import "../App.css";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

import db from "../firebase";

function KendiPage() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newPhoto, setNewPhoto] = useState("");

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge), photo: newPhoto });
    };

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div className="App">
            <input
                placeholder="Name..."
                onChange={(event) => {
                    setNewName(event.target.value);
                }}
            />
            <input
                type="number"
                placeholder="Price."
                onChange={(event) => {
                    setNewAge(event.target.value);
                }}
            />
            <input
                placeholder="Photo..."
                onChange={(event) => {
                    setNewPhoto(event.target.value);
                }}
            />

            <button onClick={createUser}> Create User</button>
            {users.map((user) => {
                return (
                    <div>
                        {" "}
                        <h1>Product Name: {user.name}</h1>
                        <h1>Price: {user.age}</h1>
                        <img src={user.photo} alt="dsds" className="center"   />
                        <button
                            onClick={() => {
                                updateUser(user.id, user.age);
                            }}
                        >
                            {" "}
                            Increase Age
                        </button>
                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }}
                        >
                            {" "}
                            Delete User
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default KendiPage;
