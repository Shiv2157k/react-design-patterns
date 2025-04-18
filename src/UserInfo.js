// import { useCurrentUser } from "./useCurrentUser";
// import { useUser } from "./useUser";
import axios from "axios";
// import { useResource } from "./useResource";
import { useDataSource } from "./useDataSource";

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
};

const localStorageResource = key => () => {
    return localStorage.getItem(key);
}

export const UserInfo = ({ userId }) => {
    // const user = useResource(`/users/${userId}`);
    const user = useDataSource(serverResource(`/users/${userId}`));
    const message = useDataSource(localStorageResource("message"));
    const { name, age, hairColor, hobbies } = user || {};

    return user ? (
        <>
            <p>{message}</p>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading...</p>;
}