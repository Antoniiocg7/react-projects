import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {

    const users = [
        {
            userName: "antoniiocg_7",
            name: "Antonio Cañizares",
            isFollowing: false
        },

        {
            userName: "reactjs",
            name: "React",
            isFollowing: true
        },

        {
            userName: "java",
            name: "Java",
            isFollowing: false
        },

        {
            userName: "flutteriodaily",
            name: "Flutter",
            isFollowing: true
        }
    ]

    return (
        // ALTERNATIVA A USAR <React.Fragment>
        <section className="App">

            { /* Declarar estado como initialIsFollowing para no llamarlo igual que el estado en el useState */ }
            {
                users.map( ({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
        

    )
}