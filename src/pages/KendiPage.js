import { useState, useEffect } from "react";
import "../App.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Container, Stack} from "@mui/material";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import {ProductFilterSidebar, ProductSort} from "../sections/@dashboard/products";



import db from "../firebase";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: "%100",
    height: 250,
});

export default function KendiPage() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newPhoto, setNewPhoto] = useState("");
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

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

    return(

        <>
        <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
                Öğrenciden öğrenciye 2. el ürün al
            </Typography>

            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <ProductFilterSidebar
                        openFilter={openFilter}
                        onOpenFilter={handleOpenFilter}
                        onCloseFilter={handleCloseFilter}
                    />
                    <ProductSort />
                </Stack>
            </Stack>
            {users.map((user) => {
                return (
                    <Paper elevation={5}
                        sx={{


                            borderColor: 'grey.500',
                            margin: 'auto',
                            marginBottom: 4 ,
                            width: 250,
                            minHeight: 300,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}
                        >
                            <Grid item>

                                <Img src={user.photo} alt="dsds"  />

                            </Grid>
                            <Grid item xs={12} sm container sx={{  }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>

                                        <Typography sx={{ paddingLeft:2, fontSize:14 }} variant="subtitle2" gutterBottom>
                                             {user.name}
                                        </Typography >
                                        <Typography sx={{ textAlign: 'right', paddingRight:2,fontSize:14, fontWeight: 'bold' }} variant="subtitle2" component="div" >
                                             {user.age}
                                        </Typography>
                                    </Grid>



                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>

                );
            })};
        </Container>
            </>
    )

}

/*
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
*/
