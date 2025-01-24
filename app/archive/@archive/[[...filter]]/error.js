"use client";
export default function FilterError({ error }) {
    return <div>
        <h2>An error occured!</h2>
        <p>{error.message}</p>
    </div>
}