import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!formData.name) validationErrors.name = 'El nombre es obligatorio';
        if (!formData.email) validationErrors.email = 'El correo es obligatorio';
        if (!formData.message) validationErrors.message = 'El mensaje es obligatorio';
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert('Formulario enviado');
            setFormData({ name: '', email: '', message: '' }); // Limpiar campos del formulario
        }
    };

    return (
        <section id="contact" className="p-10 flex-grow flex justify-center items-center">
            <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-black text-center">Contacto</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-black">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded text-black bg-white"
                        />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border p-2 rounded text-black bg-white"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-black">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border p-2 rounded text-black bg-white"
                        ></textarea>
                        {errors.message && <span className="text-red-500">{errors.message}</span>}
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
