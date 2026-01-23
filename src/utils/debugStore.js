"use client";
import { useSelector } from "react-redux";

export function DebugStore() {
    const store = useSelector((state) => state);

    console.log("REDUX STORE:", store);

    return null;
}