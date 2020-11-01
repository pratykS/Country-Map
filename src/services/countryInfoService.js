import axios from "axios";
import { Config } from "../config/dev";


const countryInfoUrl = Config["countryInfo.url"]


export const countryInfo = async(countryCode) => {
    const response = await axios.get(`${countryInfoUrl}/${countryCode}`);

    return response
}