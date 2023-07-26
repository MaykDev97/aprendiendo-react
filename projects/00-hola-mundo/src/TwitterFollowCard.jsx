import { useState } from "react"

export function TwitterFollowCard({ formatUserName, userName = 'unknown', name,  initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState( initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'button is-Following' : 'button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article>
            <header>
                <img src={` https://unavatar.io/google/${userName}`} alt="El avatar de mi" />
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                   <span className="tw-followCard-text">{text}</span> 
                    <span className="tw-followcard-stopFollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}