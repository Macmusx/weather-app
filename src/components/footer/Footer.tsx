export default function Footer() {
    return (
        <>
            <div className='w-[100%] text-center fixed bottom-4'>
                <div>Copyright © 2023 Lucian Barcan</div>
                <div className='max-w-[20rem] min-w-[15rem] w-[50%] flex justify-around m-auto mt-2'>
                    <a className='underline text-blue-700' href='https://lucianbarcan.com' target='_blank'
                       rel="noreferrer">Website & Details</a>
                    <a className='underline text-blue-700' href='https://github.com/Macmusx/weather-app' target='_blank'
                       rel="noreferrer">Github</a>
                </div>
            </div>
        </>
    )
}