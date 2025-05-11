import { useEffect, useState } from "react"

export default function ProfilePage() {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [username, setUsername] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [cell, setCell] = useState('')
    const [mail, setMail] = useState('')
    const [loading, setLoading] = useState(false)

    async function FetchUser() {
        setLoading(true); // 🟡 Start loading
      
        try {
          const res = await fetch('https://randomuser.me/api/');
          const data = await res.json();
          const user = data.results[0];
      
          setFirstName(user.name.first);
          setSecondName(user.name.last);
          setAvatar(user.picture.large);
          setUsername(user.login.username);
          setCity(user.location.city);
          setCountry(user.location.country);
          setCell(user.cell);
          setMail(user.email);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false); // ✅ Done loading
        }
      }

    useEffect(() => {
        FetchUser().catch(e => {
            console.log(e)
        });
    }, []);

    return (
        <div className="profile">
            <div className="profile-card">
                <p className={`loading ${loading ? "active" : ""}`}>loading ...</p>
                <img src={avatar} alt="image" />
                <div className="info">
                    <h1><span>{firstName}</span> <span>{secondName}</span></h1>
                    <p>{username}</p>
                    <ul>
                        <li><a href="#"><span>{city}</span>, <span>{country}</span></a></li>
                        <li><a href="#">{cell}</a></li>
                        <li><a href="#">{mail}</a></li>
                    </ul>
                </div>
                <button onClick={FetchUser}>Generate New User</button>
            </div>
        </div>
    )
}