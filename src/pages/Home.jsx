import { useEffect, useState } from "react"

export default function Home() {

    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch('https://api.github.com/users/gB4Lt0');
            const data = await response.json();
            setUserData({ name: data.name, photo: data.avatar_url })
        };
        getUserData();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Entered data:', formData);
    };

    return (
        <>
            <div className='flex items-center justify-center  w-full h-full' >
                <nav className='flex bg-orange-200 items-center justify-center p-10 gap-10 w-full h-full'>
                    <div className='flex gap-4'>
                        <img className='h-12 w-12 rounded-full items-center' src={!!userData && userData.photo} alt='Photo' />
                        <span className='text-3xl'>{!!userData && userData.name}</span>
                    </div>
                </nav>
            </div>

            <div className="flex items-center justify-center bg-orange-300 " >
                <form onSubmit={handleFormSubmit} className="flex flex-col w-96 p-8 border-4 border-black rounded-2xl">
                    <label className="mb-5 font-bold">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md border-2"
                        />
                    </label>

                    <label className="mb-4 font-bold">
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md border-2"
                        />
                    </label>

                    <button type="submit" className="p-3 bg-blue-500 text-white rounded-md">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}


