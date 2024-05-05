import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {

    return (
        // ALTERNATIVA A USAR <React.Fragment>
        <section className="App">

            <TwitterFollowCard isFollowing userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName="antoniiocg_7">
                Antonio Cañizares Gamarra
            </TwitterFollowCard>

        </section>
        

    )
}