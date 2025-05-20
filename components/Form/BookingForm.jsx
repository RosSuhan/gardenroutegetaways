'use client';
import Styles from './forms.module.css'
import { useState } from 'react'

export default function BookingForm({homeName}){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
        message: '',
    });

    const [status, setStatus] = useState('')

    const today = new Date().toISOString().split("T")[0];
    
    const getMinCheckoutDate = (checkInDate) => {
        if (!checkInDate) return "";
    
        const inDate = new Date(checkInDate);
        const minOutDate = new Date(inDate);
        minOutDate.setDate(inDate.getDate() + 1);
    
        return minOutDate.toISOString().split("T")[0]; // returns "YYYY-MM-DD"
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inDate = new Date(formData.checkInDate)
        const outDate = new Date(formData.checkOutDate)

        if (outDate <= inDate){
            setStatus("Error: 'Date Out' must be after 'Date In'.");
            return;
        }

        setStatus("Sending...")

        const res = await fetch('https://formspree.io/f/mzzrwzbw', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ ...formData, homeName}),
        });

        if(res.ok) {
            setStatus({
                name: '',
                email: '',
                phone: '',
                checkInDate: '',
                checkOutDate: '',
                message: ''
            });
        } else {
            setStatus('Failed to send. Please try again later.')
        }
    };

    return (
        <>
        <form 
            className={Styles.formSection}
            onSubmit={handleSubmit}
        >
            <input type="hidden" value={formData.homeName} />

            <h2
                className={Styles.bookingFormHeading}
            >
                Please fill out this form to request availability of {homeName}.
            </h2>

            <div
                className={Styles.datesRow}
            >
                <fieldset
                    className={Styles.fieldset}
                >
                    <label 
                        htmlFor="checkInDate"
                        className={Styles.label}
                    >
                        Check In:
                    </label>
                    <input 
                        type="date" 
                        name="checkInDate" 
                        id="checkInDate" 
                        className={Styles.dateFormInput}
                        onChange={handleChange}
                        value={formData.checkInDate}
                        min={today}
                    />
                </fieldset>

                <fieldset
                    className={Styles.fieldset}
                >
                    <label 
                        htmlFor="checkOutDate"
                        className={Styles.label}
                    >
                        Check Out:
                    </label>
                    <input 
                        type="date" 
                        name="checkOutDate" 
                        id="checkOutDate" 
                        className={Styles.dateFormInput}
                        onChange={handleChange}
                        value={formData.checkOutDate}
                        min={getMinCheckoutDate(formData.checkInDate)}
                    />
                </fieldset>
            </div>

            <input 
                type="text" 
                name="name" 
                placeholder='Your Name'
                required
                value={formData.name}
                onChange={handleChange}
                className={Styles.formInput}
            />

            <input 
                type="email" 
                name="email" 
                placeholder='Your Email'
                required
                value={formData.email}
                onChange={handleChange}
                className={Styles.formInput}
            />

            <input 
                type="tel" 
                name="phone" 
                placeholder='Your Phone Number'
                required
                value={formData.phone}
                onChange={handleChange}
                className={Styles.formInput}
            />

            <textarea 
                name="message" 
                placeholder='Message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={Styles.formInput}
            />

            <input 
                type="submit" 
                value="Send Booking Request"
                className={Styles.submitBtn} 
            />
            <p>{status}</p>
        </form>
        </>
    )
}

