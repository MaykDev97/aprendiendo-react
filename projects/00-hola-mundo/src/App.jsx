import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false,
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false,
    },
]

export function App() {
    const formatUserName = (userName) => `@${userName}`
    const [name, setName] = useState('midudev')

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                name="mayk"
                initialIsFollowing={true}
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName={name}
                name="mayk"
            />

            <button onClick={() => setName('pedromichel')}>
                Cambio nombre
            </button>

            {/* Esto es para usar listas 

           
                {
                    users.map(user => {
                        const { userName, name, isFollowing } = user
                        return (
                            <TwitterFollowCard formatUserName={userName} name={name} initialIsFollowing={isFollowing} />
                        )

                    })
                }
*/}

            


        </section>
    )
}