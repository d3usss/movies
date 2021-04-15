import dotenv from "dotenv";

dotenv.config();

const KEY = process.env.REACT_APP_SECRET;

export const api = (title: string) => {
    return `http://www.omdbapi.com/?s=${title}&apikey=${KEY}`
}