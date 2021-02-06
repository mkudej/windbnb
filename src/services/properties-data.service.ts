import axios from "axios"
import { Property } from "../interfaces/Property";

export const fetchProperties = async () => {
    const {data} = await axios.get<Property[]>("https://run.mocky.io/v3/90eee7e8-0b5e-4d22-9c9f-a222bea653cc");
    return data;
}