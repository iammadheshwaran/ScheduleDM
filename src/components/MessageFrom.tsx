import { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Button } from './ui/button'

const MessageFrom = () => {

    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");

    const handleSend = () => {

        setIsSending(true)
        const id = setTimeout(() => {
            setSentMessage(message);~
            setMessage("");
            setIsSending(false);

        }, delay * 1000)

        setTimerId(id)

    }

    const handleCancel = () => {
        if (timerId) clearTimeout(timerId);
        setIsSending(false);
    }


    return (
        <div className='max-w-md mx-auto mt-15 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
            <h2 className='text-center text-5xl font-bebas font-bold text-gray-800 mb-5 font-bebas'>DM Delay SENDER</h2>

            <Textarea className='font-normal'
                placeholder='Type your message..'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <Input
                type='number'
                placeholder='Delay in seconds'
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                disabled={isSending}
            />

            {!isSending ? (<Button className='w-full bg-indigo-600 hover:not-focus:bg-indigo-800 ' onClick={handleSend}>Send </Button>) : (<Button className='w-full' variant="destructive" onClick={handleCancel}>Cancel Sending</Button>)
            }


            {sentMessage && (<div className='bg-green-200 border rounded p-3 text-green-900'> <p className='font-semibold'> Message sent:</p>
                <p className='font-bold'> {sentMessage}</p></div>)
            }

        </div>
    )
}

export default MessageFrom