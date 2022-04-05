import React from 'react';
export default function Footer(){
    let day=new Date();
    let year=day.getFullYear();
    return <footer><p>Copyright &#169; {year}</p></footer>;
}