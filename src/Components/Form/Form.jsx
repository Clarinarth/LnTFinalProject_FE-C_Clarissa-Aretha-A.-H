import { useState , useRef} from "react"
import "./form.css"
import emailjs from 'emailjs-com'

function Form() {
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [phone, setPhone] = useState("");

    const [error, setError] = useState(false);
    const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]?/g;
    const regExNoTelp = /^08\d{0,12}$/;

    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_0rnh78y', 'template_nwgk51l', form.current, 'MSXzhQVtnxLpM_YNL')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });

    //     e.target.reset()
    // };
    
    const handleForm=(e)=>{
        e.preventDefault();
        if(nama.length<3 || regExEmail.test(email) || regExNoTelp.test(phone)){
            setError(true);      
        }
        emailjs.sendForm('service_0rnh78y', 'template_zhy50ym', form.current, 'pWiHc6HFzKklkYKTw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setNama(e.target.value);
    };
    
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    
    return (
        <section>
        <form className="app" onSubmit={handleForm} ref={form} >
            <div className="header">
                <h2>Form Registration</h2>
            </div>
            <div className="card">
                <label htmlFor="email" className="label">
                Email :
                </label>
                <input
                name="email"
                className="input"
                type="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="off"
                required
                />

                {error && !regExEmail.test(email)?
                <p className="message">harus ada karakter ‘@’</p>:""}

                <label htmlFor="nama" className="label">
                Name :
                </label>
                <input
                name="nama"
                className="input"
                type="nama"
                placeholder="name"
                value={nama}
                onChange={handleNameChange}
                autoComplete="off"
                required
                />
                {error && nama.length<3?
                <p className="message">minimal 3 karakter</p>:""}

                <label htmlFor="phone" className="label">
                Phone Number :
                </label>
                <input
                name="phone"
                className="input"
                type="phone"
                placeholder="phone"
                value={phone}
                onChange={handlePhoneChange}
                autoComplete="off"
                required
                />
                {error && !regExNoTelp.test(phone)?
                <p className="message">2 digit pertama harus ‘08’ dan tidak lebih dari 14 digit
                </p>:""}

                
                <label htmlFor="event" className="label">Event to be held : </label>
                <select name="event" className="select" required>
                    <option value="event1" className="option">event 1</option>
                    <option value="event2" className="option">event 2</option>
                    <option value="event3" className="option">event 3</option>
                    <option value="event4" className="option">event 4</option>
                </select>

                <button type='submit' className="btn">Check</button>

        
            </div>
        </form>
        </section>
    );

}

export default Form